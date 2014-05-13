Ext.define('ExpenseManager.view.Category', {
    extend: 'Ext.Container',
    xtype: 'category',

    requires: [
        'ExpenseManager.form.Category'
    ],

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: t('Category')
            },
            {
                xtype: 'categoryForm'
            }
        ]
    }
});
