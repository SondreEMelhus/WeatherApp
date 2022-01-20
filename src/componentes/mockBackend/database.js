//Method used to check if a location name has already been added to the list of locations
export const presentInDatabase = (data, locationName) => {
    data.find(location => location.name === locationName)
}

//Static database used to test app functionality
export const database = [{
    name: 'Paradis',
    date: '07.01',
    weather: 'sun',
    temp: '13',
    wind: '3'
},
{
    name: 'Sandsli',
    date: '07.01',
    weather: 'rainMid',
    temp: '8',
    wind: '3'
},
{
    name: 'Fyllingsdalen',
    date: '07.01',
    weather: 'rainLow',
    temp: '12',
    wind: '4'
},
{
    name: 'Sotra',
    date: '07.01',
    weather: 'cloudHeavy',
    temp: '10',
    wind: '2'
},
{
    name: 'Åsane',
    date: '07.01',
    weather: 'sun',
    temp: '15',
    wind: '3'
},
{   
    name: 'Voss',
    date: '07.01',
    weather: 'rainLow',
    temp: '7',
    wind: '2'
},
{
    name: 'Os',
    date: '07.01',
    weather: 'rainLow',
    temp: '6',
    wind: '3'
}
]