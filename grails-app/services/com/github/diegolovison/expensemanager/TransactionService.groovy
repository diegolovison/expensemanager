package com.github.diegolovison.expensemanager

import grails.transaction.Transactional

import com.github.diegolovison.expensemanager.Transaction

@Transactional
class TransactionService {

    def accountService

    def save(Transaction transaction) {

        transaction.save()

        def account = Account.lock(transaction.account.id)

        accountService.update(account, transaction)
    }
}
