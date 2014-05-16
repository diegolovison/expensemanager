Ext.define('ExpenseManager.form.Category', {
    extend : 'Ext.form.Panel',

    xtype: 'categoryForm',
    id: 'categoryForm',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {

        height: '120px',

        items: [{

            xtype: 'fieldset',
            items: [
                {
                    xtype: 'selectfield',
                    name: 'parent',
                    label: t('parent')
                },
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: t('name')
                }
            ]
        }]
    }
});