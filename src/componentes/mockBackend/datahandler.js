import React, { useState, useEffect } from 'react';
import { locations } from './dataLatLon';

function Datahandler() {

    //TODO: Implement a solution that uses dataLatLon for a given location to queri the API
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/comments`);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch({url});
            const loadedData = await response.json();
            setData(loadedData);
            console.log('Data has been fetched')
        };
        fetchData();
    }, [url]);

    



    return (
        <div>
        </div>
    )
}