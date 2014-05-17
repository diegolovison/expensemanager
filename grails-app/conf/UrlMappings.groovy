class UrlMappings {

	static mappings = {

		"/categories"(resources:'category')

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "500"(view:'/error')
	}
}
