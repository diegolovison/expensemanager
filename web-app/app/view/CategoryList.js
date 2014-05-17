Ext.define('ExpenseManager.view.CategoryList', {
    extend: 'Ext.dataview.List',
    xtype: 'categoryList',

    config: {

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
            }
        ]
    }
});
