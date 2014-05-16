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
                title: t('category')
            },
            {
                xtype: 'categoryForm'
            },
            {
                xtype: 'button',
                text: t('save'),
                id: 'saveCategoryBtn',
                ui: 'confirm'
            }
        ]
    }
});
