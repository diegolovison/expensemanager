eventCreateWarStart = { warName, stagingDir ->

    compileSenchaApp()
}

void compileSenchaApp() {

    def ant = new AntBuilder()

/*
    ant.exec(
        dir: 'web-app',
        executable:'sencha'
    ) {
        arg(value:'app')
        arg(value:'build')
        arg(value:'testing')
    }
*/
}