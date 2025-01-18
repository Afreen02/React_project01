import React from 'react'
import { useState } from 'react';
const Form = () => {
    const [nameValue, setNameValue] = useState('');
    const  handleChangename = (event) => {
        setNameValue(event.target.value);
    };
    const [lastnameValue, setLastnameValue] = useState('');
    const  handleChangelastname = (event) => {
        setLastnameValue(event.target.value);
    };
    const  [inputValue, setInputValue] =  useState('');

    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const [selectedOption, setSelectedOption] = useState("option1");

    const  handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleChangecheck = (event) => {
      setIsChecked(event.target.checked);
    };

  return (
    <>
    <h2>Registration Form</h2>
    <form>
    <label>First Name:
    <input  type="text"  value={nameValue} onChange={handleChangename} />
    </label><br/><br/>
    <label>Last Name:
    <input  type="text"  value={lastnameValue} onChange={handleChangelastname} />
    </label><br/><br/>
    <label>City:
    <input  type="text"  value={inputValue} onChange={handleChange} />
    </label><br/><br/>
    <label>
            Select State:
            <select  value={selectedOption} onChange={handleDropdownChange}>
                <option  value="option1">Rajasthan</option>
                <option  value="option2">Himachal Pradesh</option>
                <option  value="option3">Punjab</option>
            </select>
    </label><br/><br/>
    <label htmlFor="color">
        <input type="checkbox" name="color" checked={isChecked} onChange={handleChangecheck}/>
        I confirm it submit the form
    </label>
    </form>
    </>
  )
}

export default Form