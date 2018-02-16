import React from 'react';

export const filterUndefinedNotes = notes => 
    notes.filter(note => note !== undefined);


export const firstLetterToUppercase = words => 
    words.map(word => word.charAt(0).toUpperCase() + word.slice(1));


export const makeOptions = options => {
    const optionList = options.map((option, index) => {
        return (
                <option key={index} value={option}>{option}</option>
            );
    })
    return optionList;
}


export const makeTime = (time) => {
    console.log('time coming in:', time)
    const inputDigits = time.split('');
    const filteredDigits = inputDigits.filter(digit => parseInt(digit, 10) >= 0);
    let adjuster;
    let hours;
    let minutes;
    if(time.includes('pm'))
     {
        adjuster = 12;
    }else{
        adjuster = 0;
    }

    if(filteredDigits.length < 3){
        hours = parseInt(filteredDigits.join(''), 10) + adjuster; 
        minutes = '00';
    } 

    if (filteredDigits.length === 3){
        hours = parseInt(filteredDigits[0], 10) + adjuster;
        minutes = parseInt(filteredDigits.slice(-2).join(''), 10);
    }

    if(filteredDigits.length === 4){
        hours = parseInt(filteredDigits.slice(0, 2).join(''), 10) + adjuster; 
        minutes = parseInt(filteredDigits.slice(-2).join(''), 10);
    }

    if (hours === 12) {
        hours = '00';
    }else if (hours === 24) {
        hours = '12'
    }
    if (minutes.length === 1){
        minutes = `0${minutes}`
    }  
    const filteredTime =  `${hours}:${minutes}`;
    console.log('filteredTime:', filteredTime)
    return filteredTime;
}