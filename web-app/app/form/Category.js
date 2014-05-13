Ext.define('ExpenseManager.form.Category', {
    extend: 'Ext.Container',
    xtype: 'categoryForm',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {

        items: [{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: t('Name')
                },
                {
                    xtype: 'selectfield',
                    name: 'parent',
                    label: t('Parent')
                }
            ]
        }]
    }
});