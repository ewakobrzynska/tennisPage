import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../styles/style.css';
import './../../styles/client.css';
import './../../styles/login.css';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ clientNumber: '', name: '', email: '', phone: '' });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients', error);
      }
    };
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/clients', newClient);
      setClients(prevClients => [...prevClients, response.data]);
      setNewClient({ clientNumber: '', name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding client', error);
    }
  };

  return (
    <div className="clients-container">
      <h2>Manage Clients</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="clientNumber" 
          placeholder="Client Number" 
          value={newClient.clientNumber} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={newClient.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={newClient.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          value={newClient.phone} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Add Client</button>
      </form>
      <h3>Client List</h3>
      <ul>
        {clients.map(client => (
          <li key={client.clientNumber}>
            {client.clientNumber} - {client.name} - {client.email} - {client.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
