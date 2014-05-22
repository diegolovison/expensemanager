Ext.define('ExpenseManager.model.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ],

        belongsTo: 'ExpenseManager.model.Category',

        proxy: {
            type: 'rest',
            url: url('categories'),
            listeners: {
                exception: function (me, response, operation, opt) {
                    operation.setResponse(response);
                } 
            }
        }
    }
});