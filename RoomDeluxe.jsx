import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RoomPage from "../../components/roomPages/RoomPage";



const DRoom = () => {
    return(
        <div>
            <Header type="list" />
            <RoomPage
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/deluxeSea/deluxe_sea_view_2.png"
            img2="hotel_photo2/deluxeSea/deluxe_sea_view_suit.png"
            roomType= "Deluxe Sea Suit"
            roomDesc= "Maximum of 3 Guests, Our guests will enjoy the stunning view of the Eagean Sea as well as the high comfort of their room during their stay."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
            <Footer/>
        </div>
    )
}

export default DRoom