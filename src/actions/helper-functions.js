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