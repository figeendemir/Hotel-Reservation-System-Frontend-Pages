import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RoomPage from '../../components/roomPages/RoomPage'

const RoomHoneymoon = () => {
  return (
    <div>
      <Header type="list"/>
      <RoomPage
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/honeymoon/honeymoon_suit.png"
            img2=""
            roomType= "Honeymoon Suit"
            roomDesc= "Maximum of 2 Guests, Prepared specially for our guests that are willing to enjoy the facilities and luxurious environment of our hotel during their honeymoon."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
      <Footer/>
    </div>
  )
}

export default RoomHoneymoon