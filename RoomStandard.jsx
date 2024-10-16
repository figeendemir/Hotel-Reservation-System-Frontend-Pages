import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RoomPage from "../../components/roomPages/RoomPage";

const RoomStandard = () => {
    return(

        <div>
            <Header type="list"/>
            <RoomPage 
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/Standard/standard_room2.png"
            img2= "hotel_photo2/Standard/standart_room.png"
            roomType= "Standard Room"
            roomDesc= "Maximum of 3 Guests, Welcoming our guests that who would like to enjoy the facilities of the hotel and have a remarkable holiday."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
            <Footer/>
        </div>
    )
}

export default RoomStandard