package com.github.diegolovison.expensemanager.service

import spock.lang.*

import com.github.diegolovison.expensemanager.Account
import com.github.diegolovison.expensemanager.Transaction

import com.github.diegolovison.expensemanager.TransactionService

class TransactionServiceSpec extends Specification {

    def transactionService

    void "when saving the transaction with a positive amount the account balance is increased"() {

        def account = new Account(name: 'test').save(flush:true)
        def transaction = new Transaction(account: account, 
                                          amount: new BigDecimal("100"), 
                                          operation: Transaction.Operation.EARNING)

        when:
        transactionService.save(transaction)

        then:
        new BigDecimal("100") == account.balance
    }

    void "when saving the transaction with a negative amount then account balance is decreased"() {

        def account = new Account(name: 'test').save(flush:true)
        def transaction = new Transaction(account: account, 
                                          amount: new BigDecimal("100"), 
                                          operation: Transaction.Operation.SPENDING)

        when:
        transactionService.save(transaction)

        then:
        new BigDecimal("-100") == account.balance
    }
}
