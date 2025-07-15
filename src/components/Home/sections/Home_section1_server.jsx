
import React from 'react';
import axios from "axios";
import Home_section1 from "./Home_section1"; 

// API base URL to environment variable 
const API_BASE_URL = process.env.API_BASE_URL;

const Home_section1_server = async () => {
    // Apne data fetching logic ko yahan likhe
    // Yah data `Home_section1` ko props ke roop mein pass kiya jayega
    let cardData = [];
    let error = null;

    try {
        // Fetch data directly on the server
       const res = await axios.get(`${API_BASE_URL}/data/healthCards.json`);
        cardData = res.data;
        //console.log("Data fetched on server."); // Debug comment
    
    } catch (e) {
        console.error("Error fetching data:", e);
        error = "Failed to load data.";
    }

    return (
        // Pass the fetched data and error as props to the Client Component
        <Home_section1 cardData={cardData} error={error} />
    );
};

export default Home_section1_server;