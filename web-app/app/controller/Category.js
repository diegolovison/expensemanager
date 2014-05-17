Ext.define('ExpenseManager.controller.Category', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            saveCategoryBtn: '#saveCategoryBtn',
            addCategoryBtn: '#addCategoryBtn',
            categoryForm: '#categoryForm',
            categoryEdit: '#categoryEdit',
            category: '#category'
        },
        control: {
            saveCategoryBtn: {
                tap: 'saveCategory'
            },
            addCategoryBtn: {
                tap: 'addCategory'
            }
        }
    },

    saveCategory: function() {

        var values = this.getCategoryForm().getValues();

        var category = Ext.create('ExpenseManager.model.Category', values);

        var categoryStore = Ext.getStore('categoryStore');
        categoryStore.add(category);
    },

    addCategory: function() {
    
        this.getCategory().push({xtype: 'categoryEdit'})
    }
});