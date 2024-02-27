
let budgetInput = document.getElementById("budget-input");
let setBudgetBtn = document.getElementById("set-input");
let setDisplay = document.getElementById("set-display");
let remDisplay = document.getElementById("rem-display");

setBudgetBtn.addEventListener("click", () => {

    if (setDisplay.innerHTML = budgetInput.value <= 0) {

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


