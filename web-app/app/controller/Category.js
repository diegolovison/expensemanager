Ext.define('ExpenseManager.controller.Category', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            saveCategoryBtn: '#saveCategoryBtn',
            addCategoryBtn: '#addCategoryBtn',
            backCategoryBtn: '#backCategoryBtn',
            
            categoryForm: 'categoryForm',
            editCategory: 'editCategory',
            listCategory: 'listCategory',
            category: 'category'
        },
        control: {
            saveCategoryBtn: {
                tap: 'onSaveCategory'
            },
            addCategoryBtn: {
                tap: 'onAddCategory'
            },
            backCategoryBtn: {
                tap: 'onBackCategory'
            }
        }
    },

    onSaveCategory: function() {

        var values = this.getCategoryForm().getValues();

        var category = Ext.create('ExpenseManager.model.Category', values);

        var categoryStore = Ext.getStore('categoryStore');
        
        category.save({
            failure: function(record, operation) {
                //var errors = Ext.decode(operation.getResponse().responseText).errors;
                var errors = JSON.parse(operation.getResponse().responseText).errors;
                Ext.Msg.alert('Title', errors[0].message, Ext.emptyFn);
            },
            success: function(record, operation) {
                categoryStore.add(category);
                this.getCategory().pop();
            }
        });
    },

    onAddCategory: function() {

        if (this.getCategoryForm() != undefined) {
            this.getCategoryForm().reset();
        }

        if (!this.editCategory) {
            this.editCategory = Ext.create('ExpenseManager.view.category.Edit');
        }
    
        this.getCategory().push(this.editCategory);
    },

    onBackCategory: function() {

        this.getCategory().pop();
    }
});