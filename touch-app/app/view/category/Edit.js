Ext.define('ExpenseManager.view.category.Edit', {
    extend: 'Ext.Container',

    xtype: 'editCategory',

    requires: [
        'ExpenseManager.form.Category'
    ],

    config: {

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
                    }
                ]
            },
            {
                xtype: 'categoryForm',
                height: '500px'
            }
        ]
    }
});
