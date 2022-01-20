import React, {useState} from 'react';
import weatherLogo from './resources/WeatherIcons/logo.png';
import '../App.css';

//Import components
import { AddLocationForm } from './addLocationForm';
import { LocationFrame } from './locationFrame';

export function LocationManager() {

    const [locations, setLocations] = useState([]);


    //Method used to change the state of locations and add a new location to the array
    const addLocation = (newLocation) => {
        setLocations((locations) => [newLocation, ...locations]);
    };


    //Method used to change the state of locations and remove a given location from the array based on id
    const removeLocation = (locationNameToRemove) => {
        const newListOfLoactions = locations.filter(location => location.name !== locationNameToRemove);
        setLocations(newListOfLoactions);
    };


    //Method used to check if a location name has already been added to the list of locations
    const checkIfPresent = (locationName) => {
        const present = locations.find(location => location.name === locationName)
        return present;
    }

    return (
        <div>
            <div>
                <img src={weatherLogo} alt="logo" className='logo' />
                <br/>
                <h1 className='title'>Forecaster</h1>
                <br/>
            </div>
            <div style={{paddingBottom: 50}}>
                <AddLocationForm    addLocation={addLocation} 
                                    checkIfPresent={checkIfPresent} />
                {locations.map((location) => {
                    return (
                        <LocationFrame  key={location.name}
                                        location={location}
                                        removeLocation={removeLocation}
                                    />
                    )
                })}
            </div>
        </div>
    )
};