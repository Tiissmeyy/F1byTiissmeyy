import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import monImage from '/src/assets/images/formula1bg.png'; // importez votre image

function Loader() {
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      navigate('/app/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='loader-container'>
      {showImage && <img src={monImage} alt="Ma super image" />}
    </div>
  );
}

export default Loader;