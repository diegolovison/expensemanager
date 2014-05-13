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

    i18n.getUrl = function(locale) {
        var userLocale = i18n.getLocale(locale);
        if (userLocale == null) {
            document.write("<script src='i18n/messages.js' type='text/javascript'><\/script>");    
        } else {
            document.write("<script src='i18n/messages_"+userLocale+"' type='text/javascript'><\/script>");    
        }
    };

    return i18n;
})();

console.log(i18n.getLocale(window.navigator.language));


/**

// check browser language against available locale files
    for (var i=0; i<i18n.locales.length; i++) {
        if (i18n.browserLang === i18n.locales[i]) {
            i18n.locale = i18n.browserLang;
            break;
        }
    };

    if (i18n.locale == null) {
        document.write("<script src='i18n/messages.js' id='i18n' type='text/javascript'><\/script>");    
    } else {
        document.write("<script src='i18n/messages_"+i18nSrc+"' id='i18n' type='text/javascript'><\/script>");    
    }
    

    function t(key) {
        var value = i18n.messages[key];
        if (value === undefined) {
            return key;
        }
        return value;
    }

    console.log("less is more!");
 
    // criando o objeto (vazio) box
    var box = {};
 
    // adicionando a propriedade queue (fila)
    box.queue = [];
 
    // adicionando o métodos addItem (adicionar item)
    box.addItem = function(car) {
        return box.queue.push(car);
    };
 
    // adicionando o métodos getQueue (recuperar fila)
    box.getQueue = function() {
        return box.queue.join(" - ");
    };
 
    return box;
    */