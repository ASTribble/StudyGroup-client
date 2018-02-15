

export const filterUndefinedNotes = notes => 
    notes.filter(note => note !== undefined);


export const firstLetterToUppercase = words => 
    words.map(word => word.charAt(0).toUpperCase() + word.slice(1));