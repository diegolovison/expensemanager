Ext.define('ExpenseManager.store.Category', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    config: {

        storeId: 'categoryStore',
        model: 'ExpenseManager.model.Category',
        appendId: false,
        autoLoad: true     
    }
});