import "./list.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [roomtype, setRoomType] = useState(location.state.roomtype || "");
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [adults, setAdults] = useState(location.state.options.adult || 1);
  const [children, setChildren] = useState(location.state.options.children || 0);
  const [rooms, setRooms] = useState(location.state.options.room || 1);

  const dayDifference = differenceInDays(date[0].endDate, date[0].startDate);
  const startDate = date[0].startDate;
  const endDate = date[0].endDate;

  const roomData = [
    { roomtype: "Standard Room", image: "hotel_photo2/Standard/standard_room2.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi!", property: "To make the most out of Bodrum!", roomInfo: "Free Breakfast and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "8.9", price: 100, priceInfo: "Includes taxes and fees." },
    { roomtype: "King Room", image: "hotel_photo2/king/king_suit.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi and Free Tour Guide!", property: "To feel like a king and a queen!", roomInfo: "Full Course Meal with Bar and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "9.2", price: 350, priceInfo: "Includes taxes and fees." },
    { roomtype: "Deluxe Sea Suit", image: "hotel_photo2/deluxeSea/deluxe_sea_view_2.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi and Free Tour Guide!", property: "A place opening to the sea of Bodrum!", roomInfo: "Full Course Meal with Bar and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "9.2", price: 320, priceInfo: "Includes taxes and fees." },
    { roomtype: "Family Room", image: "hotel_photo2/family/family_suit.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi", property: "Best option to enjoy your vacation with your family!", roomInfo: "Breakfast and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "9.3", price: 220, priceInfo: "Includes taxes and fees." },
    { roomtype: "Honeymoon Suit", image: "hotel_photo2/honeymoon/honeymoon_suit.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi and Free Tour Guide!", property: "To have a lovely vacation!", roomInfo: "Full Course Meal with Bar and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "8.8", price: 280, priceInfo: "Includes taxes and fees." },
    { roomtype: "Panorama Suit", image: "hotel_photo2/panaromic/panaromic_suit.png", info: "500m Away from Bodrum Center!", info2: "Free Airport Taxi and Free Tour Guide!", property: "A place to feel like home!", roomInfo: "Full Course Meal with Bar and Activities", cancellation: "Free Cancellation", info3: "You can cancel later, so lock in this great price today!", ratingInfo: "Excellent", rating: "9.4", price: 330, priceInfo: "Includes taxes and fees." },
  ];

  const handleSearch = () => {
    return roomData.filter((room) => {
      const matchesRoomType = room.roomtype.toLowerCase().includes(searchInput.toLowerCase());
      const matchesMinPrice = minPrice === "" || parseFloat(room.price) >= parseFloat(minPrice);
      const matchesMaxPrice = maxPrice === "" || parseFloat(room.price) <= parseFloat(maxPrice);
      return matchesRoomType && matchesMinPrice && matchesMaxPrice;
    });
  };

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Room Type</label>
              <input
                placeholder="Enter room type"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{format(startDate, "MM/dd/yyyy")} to {format(endDate, "MM/dd/yyyy")}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min Price <small>per night</small></span>
                  <input type="text" className="lsOptionInput" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max Price <small>per night</small></span>
                  <input type="text" className="lsOptionInput" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" value={adults} onChange={(e) => setAdults(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" value={children} onChange={(e) => setChildren(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" value={rooms} onChange={(e) => setRooms(e.target.value)} />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {handleSearch().map((room) => (
              <SearchItem
                key={room.roomtype}
                roomtype={room.roomtype}
                image={room.image}
                info={room.info}
                info2={room.info2}
                property={room.property}
                roomInfo={room.roomInfo}
                cancellation={room.cancellation}
                info3={room.info3}
                ratingInfo={room.ratingInfo}
                rating={room.rating}
                price={room.price}
                priceInfo={room.priceInfo}
                dayDifference={dayDifference}
                startDate={startDate}
                endDate={endDate}
                date={date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
