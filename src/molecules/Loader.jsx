import React, { useState, useEffect } from 'react';
import '../styles/Loader.css'; // You can style the loader as per your requirement

const Loader = ({ message, duration }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration * 1000); // Convert seconds to milliseconds

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`loader ${loading ? 'loading' : 'hidden'}`}>
      {loading && (
        <div>
          <div className="spinner" />
          <p>{message}</p>
        </div>
      )}
      {!loading && <p>Loader complete! Page is now open.</p>}
    </div>
  );
};

export default Loader;
