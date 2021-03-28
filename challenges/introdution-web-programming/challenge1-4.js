//Intro
    const accountHolder = {
        name: 'Mariana',
        transactions: [],
        balance: 0
    };

//Add transactions
    function createTransaction(typeTransaction, valueTransaction) {
        if (typeTransaction == 'credit') {
            accountHolder.balance += valueTransaction;
            accountHolder.transactions.push({type: typeTransaction, value: valueTransaction});
        } else if (typeTransaction == 'debit') {
            if (accountHolder.balance >= valueTransaction) {
                accountHolder.balance -= valueTransaction;
                accountHolder.transactions.push({type: typeTransaction, value: valueTransaction});
            } else {
                console.log(`balance unavailable!`);
            }
        }
        
    }

//Reports
    function getHigherTransactionByType(typeTransaction) {
        let higherTransaction = 0;
        
        for (let i = 0; i < accountHolder.transactions.length; i++) {
            if (accountHolder.transactions[i].type == typeTransaction && accountHolder.transactions[i].value > higherTransaction) {
                higherTransaction = accountHolder.transactions[i].value;
            }
        }
        
        return ({type: typeTransaction, value: higherTransaction});
    }

    function getAverageTransactionValue(transactions) {
        let amount = 0;
        
        for (let i = 0; i < transactions.length; i++) {
            amount += transactions[i].value;            
        }
        
        return (amount / transactions.length);
    }

    function getTransactionCount(transactions) {
        let creditCount = 0;
        let debitCount = 0;

        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].type == 'credit') {
                creditCount += 1;
            } else if (transactions[i].type == 'debit') {
                debitCount += 1;
            }
        }
        return ({'credit': creditCount, 'debit': debitCount})
    }

//Examples
    createTransaction('credit', 50);
    createTransaction('credit', 120);
    createTransaction('debit', 80);
    createTransaction('debit', 30);
    console.log(accountHolder.balance);
    console.log(getHigherTransactionByType('credit'));
    console.log(getHigherTransactionByType('debit'));
    console.log(getAverageTransactionValue(accountHolder.transactions));
    console.log(getTransactionCount(accountHolder.transactions));