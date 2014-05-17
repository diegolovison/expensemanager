package com.github.diegolovison.expensemanager

import grails.rest.RestfulController

import com.github.diegolovison.expensemanager.Category

class CategoryController extends RestfulController {

    static responseFormats = ['json', 'xml']

    CategoryController() {
        super(Category)
    }
}