Ext.define('ExpenseManager.view.Main', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'ExpenseManager.view.Category'
    ],
    
    config: {

        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            {
                title: t('category'),
                iconCls: 'organize',
                items: {
                    xtype: 'category'    
                }
            }
            
        ]
    }
});
