package com.github.diegolovison.expensemanager

import grails.transaction.Transactional

@Transactional
class AccountService {

    def update(Account account, Transaction transaction) {

        if (transaction.operation == Transaction.Operation.EARNING) {
            account.deposit(transaction.amount)
        } else if (transaction.operation == Transaction.Operation.SPENDING) {
            account.withdraw(transaction.amount)
        }

        account.save()
    }
}
