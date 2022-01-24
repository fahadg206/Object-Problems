
// Create an array of people objects with first name, last name, and age, 
// then write a JavaScript function that takes in an array and console logs the first and last names of all the people.


let arrayOfPeople = [
    
    {firstname: 'Fahad', lastname: 'Guled', age: 23},       // first element of array
    {firstname: 'Jon', lastname: 'Doe', age: 41},          // second element of array
    {firstname: 'Mary', lastname: 'Jane', age: 27}       // third element of array

];

function peopleFunc(arr) {

    for(let i=0; i < arr.length; i++) {

        let fullName = arr[i].firstname + ' ' + arr[i].lastname

        console.log(fullName);
 
    }

    
}

peopleFunc(arrayOfPeople);


