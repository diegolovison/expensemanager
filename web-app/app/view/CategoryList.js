Ext.define('ExpenseManager.view.CategoryList', {
    extend: 'Ext.dataview.List',
    xtype: 'categoryList',

    config: {

        height: '500px',

        itemTpl: '{title}',
        data: [
            {
            title: 'Item 1'
            }, {
                title: 'Item 2'
            }, {
                title: 'Item 3'
            }, {
                title: 'Item 4'
            }
        ] 
 
    }
});
