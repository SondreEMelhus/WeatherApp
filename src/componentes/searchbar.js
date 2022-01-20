import React, { useState } from "react";
import '../App.css';

export function Searchbar(props) {

  const [input, setInput] = useState('');


  //Method used to handle change in the input field of the searchbar
  const handleChange = (event) => {
    let inputValue = event.target.value;

    props.setText(inputValue);
    props.setErrorMessage('');

    setInput(inputValue);
  };


  //Method used to handle keypresses in correlation with the searchbar
  const handleKeyDown = (event) => {

    if (event.keyCode === 40) {
      console.log(`Adding location ${input}`)
      props.setText(input);
      props.handleSubmit();
      setInput('');
    }
  };


  return (
    <div className="searchbar">
      <input
        type="text"
        className='input'
        placeholder="Search..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input type='submit' hidden='true'/>
    </div>
  );
}