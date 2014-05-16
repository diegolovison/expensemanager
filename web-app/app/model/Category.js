Ext.define('ExpenseManager.model.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ],

        belongsTo: 'ExpenseManager.model.Category'
    }
});