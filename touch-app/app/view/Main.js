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
                title: t('category'),
                iconCls: 'organize',
                layout: 'fit',
                items: {
                    xtype: 'category'    
                }
            }
            
        ]
    }
});
