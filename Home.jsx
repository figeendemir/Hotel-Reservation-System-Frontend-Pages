import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Privileges from "../../components/privileges/Privileges";
import Rooms from "../../components/rooms/Rooms";
import "./home.css";

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div>
            <Header />
            <div className="homeContainer">
                <div className="Paragraph">
                    <h2 className="ParagraphHeading">The Meeting Point of Luxury and Comfort</h2>
                    <p className="ParagraphDescription">
                        Located on the Turkish Riviera, among the unique beauties of Bodrum, 
                        ReservEase Bodrum has an inspiring location to explore Turkey.
                        We offer accommodation options with special furniture, comfortable 
                        beds and modern amenities in our sea view rooms. You can have delicious moments 
                        and pleasant times in our Sapphire A la Carte & Fine Dining Restaurant and Lounge & Pool bars.
                        While you cool off in our pool, you can work out in our modern gym or relax in our 
                        ultra-luxurious spa. ReservEase Bodrum is waiting for you for an unforgettable holiday experience.  
                    </p>

                    <p className="ParagraphEmphasis">
                        Discover why <a href="#" className="ParagraphLink">ReservEase Hotel</a> is the premier destination for discerning travelers.
                    </p>
                </div>
                <h1 className="homeTitle">Our Rooms</h1>
                <div className="HomeRooms">
                    <Rooms page="/standardRoom" 
                    src="hotel_photo2/Standard/standard_room2.png"
                    title="Standard Room"
                    property="123 Property"
                    />
                    <Rooms page="/deluxeRoom" 
                    src="hotel_photo2/deluxeSea/deluxe_sea_view_2.png"
                    title="Deluxe Sea Suit"
                    property="123 Property"
                    />
                    <Rooms page="/honeymoonSuit" 
                    src="hotel_photo2/honeymoon/honeymoon_suit.png"
                    title="Honeymoon Suit"
                    property="123 Property"
                    />
                </div>
                <div className="HomeRooms">
                    <Rooms page="/panoromaSuit" 
                    src="hotel_photo2/panaromic/panaromic_suit.png"
                    title="Panoroma Suit"
                    property="123 Property"
                    />
                    <Rooms page="/kingRoom" 
                    src="hotel_photo2/king/king_suit.png"
                    title="King Room"
                    property="123 Property"/>
                    <Rooms page="/familyRoom" 
                    src="hotel_photo2/family/family_suit.png"
                    title="Family Room"
                    property="123 Property"
                    />
                </div>
                
                <h1 className="homeTitle">Discover Our Privileges</h1>
                <div className="homeP">
                    <Privileges/>
                </div>
            </div>
            <Footer /> 
        </div>
    ); 
};

export default Home;
