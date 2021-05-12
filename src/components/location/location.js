import React from 'react';
import '../location/location.css'


function Location() {
    return (
        <div  className='location'>
            <div className='location-info'>
                <h1 className='location-title'>LOCATION</h1>
                <p className='location-p'>12 Upper St. Martin’s Lane WC2H 9FB, London</p>
            </div>
            <img className='pin' src='location-icon.svg' alt='location icon'/>
            <img className='scale-btns' src='scale-btns.png' alt='scale controler'/>
        </div>
    )
}

export default Location;