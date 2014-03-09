package com.github.diegolovison.expensemanager.domain

import grails.test.mixin.TestFor
import spock.lang.Specification

import com.github.diegolovison.expensemanager.Account

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Account)
class AccountSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "test deposit"() {

        def account = new Account()

        when:
        account.deposit(new BigDecimal("100"))

        then:
        new BigDecimal("100") == account.balance
    }

    void "test withdraw"() {

        def account = new Account()

        when:
        account.withdraw(new BigDecimal("100"))

        then:
        new BigDecimal("-100") == account.balance
    }
}
