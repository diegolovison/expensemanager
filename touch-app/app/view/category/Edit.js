Ext.define('ExpenseManager.view.category.Edit', {
    extend: 'Ext.Container',

    xtype: 'editCategory',

    requires: [
        'ExpenseManager.form.Category'
    ],

    config: {

        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: t('category'),
                items: [
                    {
                        xtype: 'button',
                        text: t('back'),
                        ui: 'back',
                        id: 'backCategoryBtn'
                    },
                    { 
                        xtype: 'spacer' 
                    },
                    {
                        xtype: 'button',
                        text: t('save'),
                        id: 'saveCategoryBtn',
                        ui: 'confirm'
                    }
                ]
            },
            {
                xtype: 'categoryForm',
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'light',
                items: [
                    { 
                        xtype: 'spacer' 
                    },
                    {
                        xtype: 'button',
                        text: t('remove'),
                        id: 'removeCategoryBtn',
                        ui: 'decline',
                        iconCls: 'delete'
                    }
                ]
            },
        ]
    }
});
