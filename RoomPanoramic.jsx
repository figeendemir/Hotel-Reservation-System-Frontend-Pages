import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RoomPage from '../../components/roomPages/RoomPage'

const RoomPanoramic = () => {
  return (
    <div>
      <Header type="list"/>
      <RoomPage 
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/panaromic/panaromic_suit.png"
            img2=""
            roomType= "Panorama Suit"
            roomDesc= "Maximum of 3 Guests, Our guests will enjoy the delighted view of the garden and Yalıkavak during their stay."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
      <Footer/>
    </div>
  )
}

export default RoomPanoramic