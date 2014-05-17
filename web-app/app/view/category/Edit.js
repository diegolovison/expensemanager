Ext.define('ExpenseManager.view.category.Edit', {
    extend: 'Ext.Container',

    xtype: 'categoryEdit',
    id: 'categoryEdit',

    requires: [
        'ExpenseManager.form.Category'
    ],

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: t('category')
            },
            {
                xtype: 'categoryForm',
                height: '500px'
            }
        ]
    }
});
