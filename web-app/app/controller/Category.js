Ext.define('ExpenseManager.controller.Category', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            saveCategoryBtn: '#saveCategoryBtn',
            categoryForm: '#categoryForm'
        },
        control: {
            saveCategoryBtn: {
                tap: "saveCategory"
            }
        }
    },

    saveCategory: function() {

        var values = this.getCategoryForm().getValues();

        var category = Ext.create('ExpenseManager.model.Category', values);

        var categoryStore = Ext.getStore('categoryStore');
        categoryStore.add(category);
    }
});