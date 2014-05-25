var i18n = (function() {
    
    var i18n = {};
    i18n.locales = ['pt-BR']; // available locale files

    i18n.getLocale = function(locale) {

        for (var i=0; i<i18n.locales.length; i++) {
            if (locale === i18n.locales[i]) {
                return locale;
            }
        }
    };

    i18n.loadMessages = function(locale) {
        var userLocale = i18n.getLocale(locale);
        if (userLocale == null) {
            document.write("<script src='resources/i18n/messages.js' type='text/javascript'><\/script>");    
        } else {
            document.write("<script src='resources/i18n/messages_"+userLocale+".js' type='text/javascript'><\/script>");    
        }
    };

    i18n.translate = function(key) {
        var value = i18n.messages[key];
        if (value === undefined) {
            return key;
        }
        return value;
    };

    return i18n;
})();

i18n.loadMessages(i18n.getLocale(window.navigator.language));