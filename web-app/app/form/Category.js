Ext.define('ExpenseManager.form.Category', {
    extend : 'Ext.form.Panel',

    xtype: 'categoryForm',
    id: 'categoryForm',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {

        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'selectfield',
                        name: 'parent',
                        store: 'categoryStore',
                        displayField: 'name',
                        autoSelect: false,
                        label: t('parent')
                    },
                    {
                        xtype: 'textfield',
                        name : 'name',
                        label: t('name')
                    }
                ]
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