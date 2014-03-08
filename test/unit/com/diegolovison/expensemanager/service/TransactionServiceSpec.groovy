package com.diegolovison.expensemanager

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(TransactionService)
@Mock([Transaction,Account])
class TransactionServiceSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "when saving the transaction with a positive amount the account balance is updated"() {

      when:
        service.save(transactionInstance)

      then:
        accountInstance.balance = new BigDecimal("100.0")

      where:
        accountInstance = new Account()
        transactionInstance = new Transaction(account: accountInstance, amount: new BigDecimal("100.0"))

    }

    void "when saving the transaction with a negative amount the account balance is updated"() {

      when:
        service.save(transactionInstance)

      then:
        accountInstance.balance = new BigDecimal("-100.0")

      where:
        accountInstance = new Account()
        transactionInstance = new Transaction(account: accountInstance, amount: new BigDecimal("-100.0"))

    }
}
