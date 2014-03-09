package com.github.diegolovison.expensemanager

class Category {

    String name

    static belongsTo = [ parent: Category ]

    static constraints = {
        name(blank:false,maxSize:60)
    }
}
