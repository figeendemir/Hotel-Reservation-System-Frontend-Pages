import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Rezervation from '../../components/rezervation/Rezervation';

function RezervationPage() {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate('/bookingPage');
    };

    return (
        <div>
            <Header type="list"/>
            <Rezervation onBook={handleBooking}/>
        </div>
    );
}

export default RezervationPage;