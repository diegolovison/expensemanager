Ext.define('ExpenseManager.form.Category', {
    extend : 'Ext.form.Panel',

    xtype: 'categoryForm',

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
                        xtype: 'hiddenfield',
                        name: 'id'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'parent',
                        store: 'categoryStore',
                        displayField: 'name',
                        autoSelect: false,
                        label: t('parent'),
                        valueField: 'id'
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