
import com.github.diegolovison.expensemanager.Category

class BootStrap {

    def init = { servletContext ->

    	new Category(name: "test1").save()
    	new Category(name: "test2").save()
    }
    def destroy = {
    }
}
