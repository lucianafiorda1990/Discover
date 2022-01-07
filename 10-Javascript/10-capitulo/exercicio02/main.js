let family = {
    incomes: [1500, 2300],
    expenses: [1000, 90, 180, 30, 500, 600, 700, 130, 60, 50, 40, 1000]
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let balanceText = 'negativo'
    if (total >= 0) {
        balanceText = 'positivo'
    }
    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()