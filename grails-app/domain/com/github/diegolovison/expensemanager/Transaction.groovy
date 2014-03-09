package com.github.diegolovison.expensemanager

class Transaction {

    enum Operation {
        EARNING, SPENDING;
    }

    BigDecimal amount
    Operation operation

    static belongsTo = [ account: Account ]

    static constraints = {
        amount (blank: false, min: new BigDecimal("0"))
        operation (blank: false)
        account (blank: false)
    }
}
