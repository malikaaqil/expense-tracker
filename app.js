
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

let expList = document.getElementById("expense-list");

addExpBtn.addEventListener("click", () => {

    if(remDisplay.innerHTML <= 0){

        Swal.fire({
            icon: "warning",
            title: "Your set budget exceeds the limit. Please set the budget."
        });

    }else{

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Expense Added",
            showConfirmButton: false,
            timer: 2500
          });


 remDisplay.innerHTML = remDisplay.innerHTML - expense.value

    let tableRow = document.createElement("tr")
    tableRow.setAttribute("class", "append-table")

    let tableData1 = document.createElement("td")
    let tableData2 = document.createElement("td")
    let tableData3 = document.createElement("td")

    let tableData1Text = document.createTextNode(expDescription.value)
    tableData1.appendChild(tableData1Text)

    let tableData2Text = document.createTextNode("$ " + expense.value)
    tableData2.appendChild(tableData2Text)

    let tableData3Text = document.createTextNode(date.value)
    tableData3.appendChild(tableData3Text)

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)

    expList.appendChild(tableRow)

    expDescription.value = ""
    expense.value = ""
    date.value = ""



    }

   
})

