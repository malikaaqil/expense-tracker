let budgetInput = document.getElementById("budget-input");
let setBudgetBtn = document.getElementById("set-input");
let setDisplay = document.getElementById("set-display");

setBudgetBtn.addEventListener("click", () => {
    // console.log(budgetInput.value);
    setDisplay.innerHTML = "$: " + budgetInput.value
    budgetInput.value = ""
})
