export const required = value => 
    value ? undefined : 'Required Field';

export const notEmpty = value => 
    value.trim() !== '' ? undefined : 'Cannot be Empty';

//export const isTrimmed = value => value.trim() !== value ? 'Cannot start or end with a whitespace' : undefined;
    

