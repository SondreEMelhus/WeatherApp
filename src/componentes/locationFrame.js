import React, { useState } from 'react';
import '../App.css';

//TODO: Implement a narrow view and a wide view of the frame. 
//Narrow view shows the current forecat, wide view shows the forecast over the next few days
export function LocationFrame(props) {

    const [toggle, setToggle] = useState('weatherComp-collapsed');
    const [toggleClose, setToggleClose] = useState('weatherComp-collapsed-closeBtn');

    const {location, removeLocation} = props;

    const handleClick = (event) => {
        event.preventDefault();
        if (toggle === 'weatherComp-collapsed') {
            setToggle('weatherComp-expanded');
            setToggleClose('weatherComp-expanded-closeBtn');
        } else {
            setToggle('weatherComp-collapsed');
            setToggleClose('weatherComp-collapsed-closeBtn');
        }
    }

    const handleRemoveClick = (event) => {
        removeLocation(location.name);
    }


    return (
        
        <div onClick={handleClick} id={location.id} className={toggle}>
            <button onClick={handleRemoveClick} className={toggleClose}>X</button>
            <h3>{location.name}</h3>
            <img src={require(`./resources/WeatherIcons/${location.weather}.svg`)} alt='Weather icon' className='App-icons'/>
            <table style={{margin: 'auto', paddingBottom: 25}}>
                <th style={{paddingRight: 20}}>{location.temp} &deg;</th>
                <th style={{paddingLeft: 0}}>{location.wind} m/s</th>
            </table>
        </div>
    )
}