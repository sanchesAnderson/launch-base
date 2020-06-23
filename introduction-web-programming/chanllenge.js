
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0.0
}

function createTransaction(type, value) {
    
    user.transactions.push({
        type: type, 
        value: value 
    })
    updateBalance(type, value)
}

function updateBalance(type, value) {

    if(type == 'credit') {
        user.balance += value
    } else if(type == 'debit') {
        user.balance -= value
    }
}


//Reports
function getHigherTransactionByType(transactionType) {
    let maxValue = 0.0
    let maxTransaction = []

    for(let transaction of user.transactions) {

        if(transaction.type == transactionType) {

            if(maxValue < transaction.value) {

                maxValue = transaction.value
                maxTransaction = transaction
            }
        }
    }

    console.log(maxTransaction)
}

function getAverageTransactionValue() {
    let sum = 0

    for(transation of user.transactions) {
        sum += transation.value
    }

    console.log(sum / user.transactions.length)
}

function getTransactionsCount() {
    let creditCount = 0
    let debitCount = 0

    for(transation of user.transactions) {
        if(transation.type == 'credit') {
            creditCount += 1
        } else if (transation.type == 'debit') {
            debitCount += 1
        }
    }

    console.log({'credit': creditCount, 'debit': debitCount})
}

createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

console.log(user.balance)

getHigherTransactionByType('credit')

getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()