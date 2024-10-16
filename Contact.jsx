import React, { useState } from 'react';
import "./contact.css";
import Footer from '../../components/footer/Footer';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      surname,
      email,
      text: message,
    };

    try {
      const response = await axios.post('http://localhost:8081/contacts', contactData);
      console.log('Contact form submitted:', response.data);
      setSuccess(true);
      setName('');
      setSurname('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setError(true);
    }
  };

  return (
    <div>
      <div className="contact">
        <h1>Contact</h1>
        {success && <p>Contact form submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Surname:</label>
            <input type="text" value={surname} onChange={handleSurnameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Message:</label>
            <textarea value={message} onChange={handleMessageChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
