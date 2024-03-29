import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="service shadow">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;