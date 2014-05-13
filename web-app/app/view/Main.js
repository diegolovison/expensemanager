Ext.define('ExpenseManager.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'ExpenseManager.view.Category'
    ],
    
    config: {

        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Category',
                iconCls: 'organize',
                items: {
                    xtype: 'category'    
                }
            }
        ]
    }
});
