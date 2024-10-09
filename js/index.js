
document.getElementById('calculate').addEventListener('click', function () {

    const incomeAmount = parseFloat(document.getElementById('income').value);
    const softwareAmount = parseFloat(document.getElementById('software').value);
    const courseAmonut = parseFloat(document.getElementById('courses').value);
    const internetAmount = parseFloat(document.getElementById('internet').value);

    const totalExpense = internetAmount + softwareAmount + courseAmonut;
    const Balance = incomeAmount - totalExpense;

    const totalExpenseElement = document.getElementById('total-expenses').innerText = totalExpense.toFixed(2);
    const BalanceElement = document.getElementById('balance').innerText = Balance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');

    //history
    const historyItem = document.createElement("div");
    historyItem.className = 
    "bg-white p-3 rounded-md border-l-2 border-indigo-600";

    historyItem.innerHTML = `
    
    `
})

document.getElementById('calculate-savings').addEventListener('click', function () {
    const savingPercentage = document.getElementById('savings').value;

    const incomeAmount = parseFloat(document.getElementById('income').value);
    const softwareAmount = parseFloat(document.getElementById('software').value);
    const courseAmonut = parseFloat(document.getElementById('courses').value);
    const internetAmount = parseFloat(document.getElementById('internet').value);

    const totalExpense = internetAmount + softwareAmount + courseAmonut;
    const Balance = incomeAmount - totalExpense;
    const savingAmount = (savingPercentage * Balance) / 100;

    const remainingAmount = Balance - savingAmount;

    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingAmount.toFixed(2);

})

//History Part

const historytab = document.getElementById('history-tab');
const assistanttab = document.getElementById('assistant-tab');

historytab.addEventListener('click', function () {
    historytab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historytab.classList.remove("text-gray-600");
    assistanttab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistanttab.classList.add("text-gray-600");
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('expense-form').classList.add('hidden');
});

assistanttab.addEventListener('click', function () {
    assistanttab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )

    historytab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');

});