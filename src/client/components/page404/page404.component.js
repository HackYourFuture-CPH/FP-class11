import React from 'react';
import './page404.style.css';
import image from '../../assets/images/plants.jpg';

export default function Page404() {
  return (
    <div className="block-404">
      <div className="text-404">
        <h1>Ooops!.. </h1>
        <h2>We can&apos;t seem to find the page you&apos;re looking for.</h2>
        <p>Error code: 404</p>
        <p>Try to reach out using the menu on the left.</p>
      </div>
      <div className="img-404">
        <div className="img-mask">
          <img src={image} alt="Seasony Page Not Found" />
        </div>
      </div>
    </div>
  );
}
