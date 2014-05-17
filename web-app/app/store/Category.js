Ext.define('ExpenseManager.store.Category', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    config: {

        storeId: 'categoryStore',
        model: 'ExpenseManager.model.Category',
        autoSync: true,
        appendId: false,
        autoLoad: true,

        proxy: {
            type: 'rest',
            url: url('categories')
        }
    }
});