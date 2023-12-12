console.log( "HELLO FROM CLIENT.JS");

// Create an Array to store the data

// Create an array to keep track of 
let totalArray=[]; // this array will story the total
let totalSum=0; // this number is the totalyArray added together

// Submit Button
function submitButton(){
    console.log("IN submitButton Function");
    //let i=0;
    //Define input fields
   
    let firstNameInput = document.getElementById("firstNameInput").value;
    let lastNameInput = document.getElementById("lastNameInput").value;
    let idInput = document.getElementById("idInput").value;
    let titleInput = document.getElementById("titleInput").value;
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;

    // target the location we want
    let tableElement=document.getElementById("table");
    //Change the element
    tableElement.innerHTML += `
        <tr>
            <td data-testid="firstNameInput">${firstNameInput}</td>
            <td data-testid="lastNameInput">${lastNameInput}</td>
            <td data-testid="idInput">${idInput}</td>
            <td data-testid="titleInput">${titleInput}</td>
            <td data-testid="annualSalaryInput">$${annualSalaryInput}</td>
            <!--<td id=deleteButton onclick="delete(event)">DELETE</td>-->
        </tr>
    `

    // Pushes the annual salary into an array
    totalArray.push(parseInt(annualSalaryInput)); 
        // The integer keeps putting it as a string. 
        // I cannot add the numbers later.
    console.log("Annual Salary: ", totalArray);
    
    // Sum up the data in the totalArray
    totalSum=sumOfArray(totalArray);
    console.log("SUM OF ARRAY ", totalArray);

    form.reset(); // resets the form 
}

// Function to find the sum of all integers in the totalArray
function sumOfArray(anArray){
    let result=0;
    i=0;

    for(i=0; i<anArray.length; i++){
        console.log("in sumOfArray for-loop");
        result += anArray[i];
    }

    // for(let number of anArray){
    //     totalSum += number;
    // }
    
    return result;
}

function monthlyTotal(){
    console.log( "IN monthlyTotal FUNCTION")
    // target the area
    let monthlyTotalElement = document.getElementById("monthlyTotal");
    // console.log(monthlyTotalElement); // It selects the right one
    // swap the things in the document
    //monthlyTotalElement.innerHTML += `Annual Salary: ${}`
};
