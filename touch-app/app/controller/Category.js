Ext.define('ExpenseManager.controller.Category', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            saveCategoryBtn: '#saveCategoryBtn',
            addCategoryBtn: '#addCategoryBtn',
            backCategoryBtn: '#backCategoryBtn',
            removeCategoryBtn: '#removeCategoryBtn',
            categoryList: '#categoryList',
            
            categoryForm: 'categoryForm',
            editCategory: 'editCategory',
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
            },
            categoryList: {
                select: 'onSelectCategory'
            },
            removeCategoryBtn: {
                tap: 'onRemoveCategory'
            }
        }
    },

    onSaveCategory: function() {

        var me = this;

        var values = me.getCategoryForm().getValues();

        var category = Ext.create('ExpenseManager.model.Category', values);

        var categoryStore = Ext.getStore('categoryStore');
        
        category.save({
            success: function(record, operation) {
                categoryStore.load();
                me.onBackCategory();
            },
            failure: function(record, operation) {
                showFailure(operation);
            }
        });
    },

    onAddCategory: function() {

        this.resetCategoryForm();      

        var editCategory = this.getEditCategory();  

        this.getRemoveCategoryBtn().hide();

        this.getCategory().push(editCategory);
    },

    onBackCategory: function() {

        this.getCategoryList().deselectAll();

        this.getCategory().pop();
    },

    onSelectCategory: function(view, record) {

        var me = this;

        var editCategory = me.getEditCategory();

        this.getRemoveCategoryBtn().show();

        me.resetCategoryForm();

        var Category = Ext.ModelMgr.getModel('ExpenseManager.model.Category');

        // TODO - improve this method to remove the second call to get the category parent
        Category.load(record.getId(), {

            success: function(category) {

                var parentId = category.get('parent') != null ? category.get('parent').id : null;

                if (parentId != null) {

                    Category.load(parentId, {

                        success: function(parent) {

                            category.set('parent', parent);

                            me.getCategoryForm().setRecord(category);
                            me.getCategory().push(editCategory);
                        }
                    });

                } else {

                    me.getCategoryForm().setRecord(category);
                    me.getCategory().push(editCategory);
                }

                
            },
            failure: function(record, operation) {
                showFailure(operation);
            }
        });
    },

    onRemoveCategory: function() {

        var me = this;

        var category = this.getCategoryForm().getRecord();

        category.erase({
            success: function() {

                var categoryStore = Ext.getStore('categoryStore');
                categoryStore.remove(category)

                me.onBackCategory();
                
            },
            failure: function(record, operation) {
                showFailure(operation);
            }
        });
    },

    resetCategoryForm: function() {

        if (this.getCategoryForm() != undefined) {
            this.getCategoryForm().reset();
            this.getCategoryForm().setValues({
                parent: null
            });
        }
    },

    getEditCategory: function() {

        if (!this.editCategory) {
            this.editCategory = Ext.create('ExpenseManager.view.category.Edit');
        }

        return this.editCategory;
    }
});