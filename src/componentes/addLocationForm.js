//Koden er basert på: https://blog.logrocket.com/build-react-autocomplete-component/

import React, { useState } from 'react';
import '../App.css';

import { database } from './mockBackend/database';
import { Searchbar } from './searchbar.js';


export function AddLocationForm (props) {

    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [id, setId] = useState(0);

    const data = database;

    const presentInDatabase = (locationName) => {
        const present = data.find(location => location.name === locationName)
        return present;
    }

    //Method used to generate a new id
    const generateId = () => {
        setId((prev) => prev + 1)
    }


    const handleSubmit = (event) => {
        
        if(text.length > 0) {
            if (presentInDatabase(text)) {
                if (!props.checkIfPresent(text)) {
                    const locationToAdd = data.find(locations => locations.name === text)

                    const location = {
                        id: id,
                        name: text,
                        date: locationToAdd.date,
                        weather: locationToAdd.weather,
                        temp: locationToAdd.temp,
                        wind: locationToAdd.wind
                    }

                    generateId();
                    props.addLocation(location);
                    setText('');
                } else {
                    setText('');
                    setErrorMessage('This location has already been added. Please try another location.')
                }
            } else {
                setText('');
                setErrorMessage('The provided dataset does not contain this location. Please try another location.')
            }

        } else {
            setText('');
            setErrorMessage('Please enter a valid location name.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='inputClass'>
            <p type='text'>Enter the name of location to see its weather forecast.</p>
            <p type='text' style={{paddingBottom: 10}}>The current implementation is case-sensitive. Press down arrow to submit the name.</p>
            <Searchbar  handleSubmit={handleSubmit} 
                        setText={setText} 
                        setErrorMessage={setErrorMessage}/>
            <p type='text' className='errorMessage'>{errorMessage}</p>
        </form>
    )
}