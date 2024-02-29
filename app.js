
let budgetInput = document.getElementById("budget-input");
let setBudgetBtn = document.getElementById("set-input");
let setDisplay = document.getElementById("set-display");
let remDisplay = document.getElementById("rem-display");

setBudgetBtn.addEventListener("click", () => {

    if (setDisplay.innerHTML = budgetInput.value <= 0) {

        // custom alert from sweetalert2 library

        Swal.fire({
            icon: "error",
            title: "Your budget must be greater than zero."
        });
        setDisplay.innerHTML = 0

    } else {
        setDisplay.innerHTML = budgetInput.value
        remDisplay.innerHTML = budgetInput.value
        budgetInput.value = ""
    }

})


let expDescription = document.getElementById("exp-description");
let expense = document.getElementById("expense");
let date = document.getElementById("date");
let addExpBtn = document.getElementById("add-expense");

let tableList = document.getElementById("table-list");

addExpBtn.addEventListener("click", () => {

    // console.log(expDescription.value);
    // console.log(expense.value);
    // console.log(date.value);


    tableList.appendChild = `<tr class="append-table"> <td>${expDescription.value}</td> <td>${expense.value}</td> <td>${date.value}</td> </tr>`


    // console.log(appendTable);



    remDisplay.innerHTML = +remDisplay.innerHTML - expense.value
    expense.value = ""





})

