Ext.define('ExpenseManager.view.category.List', {
    extend: 'Ext.Container',

    xtype: 'categoryList',

    config: {

        height: '500px',

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
                height: '500px', 
                id: 'categoryList'  
            }
        ]
    }
});
