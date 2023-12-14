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
            <!--<td id=deleteButton onclick="deleteButton(event)">DELETE</td>-->
        </tr>
    `

    // Pushes the annual salary into an array
    totalArray.push(parseInt(annualSalaryInput)); 
        // The integer keeps putting it as a string. 
        // I cannot add the numbers later.
    console.log("Annual Salary: ", totalArray);
    
    // Sum up the data in the totalArray
    totalSum=sumOfArray(totalArray);
    console.log("SUM OF ARRAY ", totalSum);

    // Divide annual salary by 12 to get total monthly pay
    monthlyTotal();
    
    form.reset(); // resets the form 
}



// ================ SIDE QUESTS ================

// Function to find the sum of all integers in the totalArray
function sumOfArray(anArray){
    let result=0;
    i=0;
    // console.log(anArray);
    for(i=0; i<anArray.length; i++){
        console.log("in sumOfArray for-loop");
        console.log(result);
        result += anArray[i];
    }
    //console.log(result);
    return result;
}

// function to get the monthly total and add to the DOM
function monthlyTotal(){
    console.log( "IN monthlyTotal FUNCTION")
    // target the area
    let monthlyTotalElement = document.getElementById("monthlyTotal");
    // console.log(monthlyTotalElement); // It selects the right one
    // get the yearly total and divide by 12 to get the monthly
    roundedMonthlyTotalPay = Math.floor(totalSum / 12);
    console.log("Rounded Monthly Total Pay:", roundedMonthlyTotalPay);
    // swap the things in the document
    if(roundedMonthlyTotalPay < 20000){
        monthlyTotalElement.innerHTML = `Total Monthly: ${roundedMonthlyTotalPay}`;
    } else{
        monthlyTotalElement.innerHTML =
        `<p id="monthlyTotal" class="exeeded20000">Total Monthly: ${roundedMonthlyTotalPay}</p>`
    }
};

function deleteButton(){
    console.log("in deleteButton(event)");
    tableElement.innerHTML
}

