import { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //getItem by passing in key you want retrieved
        const item = window.localStorage.getItem(key);
        //JSON.parse converts string back to an object
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => { 
        //setItem takes 1) string of key 2) string you want to save
        //localStorage only saves strings - must stringify vaue
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value);
    }
    return [storedValue, setValue];
}


//Local storage is ability to store strings that persist across user sessions
//object stored in browser when you are on the specific domain
// local storage persists between sessions
//cookies deals with servers
//local storage deals with browser
//localStorage only saves strings