Ext.define('ExpenseManager.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'ExpenseManager.view.Category',
        'ExpenseManager.view.CategoryList'
    ],
    
    config: {

        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            {
                title: t('category.list'),
                iconCls: 'organize',
                items: {
                    xtype: 'categoryList'    
                }
            },
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
