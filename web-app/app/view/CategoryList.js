Ext.define('ExpenseManager.view.CategoryList', {
    extend: 'Ext.dataview.List',
    xtype: 'categoryList',

    config: {

        height: '500px',

        xtype: 'list',
        itemTpl: '{name}',
        store: 'categoryStore'
    }
});
