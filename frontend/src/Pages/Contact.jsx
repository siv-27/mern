import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,       
      [name]: value     
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    console.log(formData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Message:
          <textarea
            name="message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <br /><br />

        <button type="submit">Send</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Live Preview:</h3>
        <p><b>Name:</b> {formData.name}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Message:</b> {formData.message}</p>
      </div>
    </div>
  );
}

export default Contact;
