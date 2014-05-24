function t(key) {
    return i18n.translate(key);
}

function url(url) {
	return window.location.pathname + url;
}

function showFailure(operation) {

    var message = 'Try again later.';
    var errors = [];

    if (operation.getResponse() != null) {
        errors = JSON.parse(operation.getResponse().responseText).errors;
    }

    if (errors.length > 0) {
        message = errors[0].message;
    }

    Ext.Msg.alert('Error', message, Ext.emptyFn);
}