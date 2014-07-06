Ext.define('ExpenseManager.view.Category', {
    extend: 'Ext.navigation.View',
    
    xtype: 'category',
    
    requires: [
        'ExpenseManager.view.category.List',
        'ExpenseManager.view.category.Edit'
    ],

    config: {

        height: '500px',
        navigationBar: false,
        autoDestroy: false,

        items: [
            {
                xtype: 'categoryList',
            }
        ]
    }
});
