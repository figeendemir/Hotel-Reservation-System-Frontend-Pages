import React from "react";
import Footer from "../../components/footer/Footer";
import "./hotel.css";

const Hotel = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div>
            <div className="hotel-container">
                <h1>Hotel Page</h1>
                {/* Add your Hotel page content here */}
            </div>
            <Footer />
        </div>
    );
};

export default Hotel;
