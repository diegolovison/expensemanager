Ext.define('ExpenseManager.view.category.List', {
    extend: 'Ext.Container',

    xtype: 'categoryList',

    config: {

        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: t('category.list'),
                items: [
                    {
                        xtype: 'spacer'
                    }, 
                    {
                        xtype: 'button',
                        text: t('new'),
                        ui: 'action',
                        id: 'addCategoryBtn'
                    }
                ]
            },
            {
                xtype: 'list',
                itemTpl: '{name}',
                store: 'categoryStore',
                id: 'categoryList'  
            }
        ]
    }
});
