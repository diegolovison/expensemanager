package com.github.diegolovison.expensemanager

class Account {

    String name
    BigDecimal balance = new BigDecimal("0")

    static constraints = {
        name(blank:false,maxSize:60)
    }

    def deposit(BigDecimal amount) {
        balance = balance.add(amount)
    }

    def withdraw(BigDecimal amount) {
        balance = balance.subtract(amount)
    }
}
