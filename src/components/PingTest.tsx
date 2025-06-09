import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PingTest: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    axios
      .get('https://bpm-api-cipn.onrender.com/ping')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ping:', error);
        setMessage('Error connecting to API');
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">API Ping Test</h2>
      <p className="mt-2 text-blue-600">{message}</p>
    </div>
  );
};

export default PingTest;
