import "./card.css"
import React, { useState } from 'react';

function CardRegitionForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [formData, setFormData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      name,
      email,
      username,
      password,
      desc
    };

    setFormData([...formData, newFormData]);
    localStorage.setItem('formData', JSON.stringify([...formData, newFormData]));

    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setDesc('');
  };

  return (
    <div className="registration-form">
      <h2>Create an account</h2>
      <p className="tittlee">Kindly fill the following details to create your account.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <textarea
          placeholder="Your Biography"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit" className="btnSave" onChange={handleSubmit}>
          CREATE ACCOUNT
        </button>
      </form>
      <p className="last">You will receive an email after setting up your account</p>
    </div>
  );
}

export default CardRegitionForm;
