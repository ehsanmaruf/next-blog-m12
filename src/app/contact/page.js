"use client"
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks "${name}" for contacting with us!`);
    setName("");
    setEmail("");
    setWebsite("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br/>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br/>
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        id="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
      />
      <br/>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact