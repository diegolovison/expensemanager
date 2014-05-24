Ext.define('ExpenseManager.component.Msg', {
    extend: 'Ext.MessageBox',

    showError: function(response) {

        var me = this;

        var errors = JSON.parse(response.responseText).errors;

        var message = '';
        if (errors.length > 0) {
            message = errors[0];
        } else {
            message = 'please reload the page';
        }

        me.alert('Helllo World', message, Ext.emptyFn);
    }


});