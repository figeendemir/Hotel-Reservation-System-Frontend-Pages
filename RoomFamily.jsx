import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RoomPage from '../../components/roomPages/RoomPage'

const RoomFamily = () => {

  return (
    <div>
      <Header type="list" />
      <RoomPage
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/family/family_suit.png"
            img2="hotel_photo2/family/family_suit2.png"
            roomType= "Family Room"
            roomDesc= "Maximum of 6 Guests, Well-prepared with caring and passion for our guests that are staying at our hotel as a family which all their possible needs will be covered with high quality and safe conditions."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
      <Footer/>
    </div>
  )
}

export default RoomFamily