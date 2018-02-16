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
    const inputDigits = time.split('');
    const filteredDigits = inputDigits.filter(digit => parseInt(digit, 10) >= 0);
    // const filteredTime = switch(filteredDigits.length)
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
        hours = parseInt(filteredDigits.join('')) + adjuster; 
        minutes = 0;
    } 

    if (filteredDigits.length === 3){
        hours = parseInt(filteredDigits[0]) + adjuster;
        minutes = parseInt(filteredDigits.slice(-2).join(''));
    }

    if(filteredDigits.length === 4){
        hours = parseInt(filteredDigits.slice(0, 2).join('')) + adjuster; 
        minutes = parseInt(filteredDigits.slice(-2).join(''));
    }

    if (hours === 12) {
        hours = 0;
    }else if (hours === 24) {
        hours = 12
    }
    
    console.log('hours:', hours, 'minutes:', minutes);
    console.log('filteredDigits', filteredDigits, filteredDigits.slice(-2));
    console.log('inputDigits', inputDigits);
    console.log('adjuster:', adjuster);
    // if(timeArray.find('am'))
    // let normalizedTime = timeArray[0];
    // let adjuster;
    // if (timeArray[1] && timeArray[1] === 'pm'){
    //     adjuster = 12;
    // }
    // else { 
    //     adjuster = 0;
    // }
    // console.log ('timeArray:', timeArray, 'adjuster:', adjuster);

}