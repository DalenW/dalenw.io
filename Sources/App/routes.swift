import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    //Home page
    router.get { req in
        return try req.view().render("home", ["title": "Home"])
    }
    
    //Projects page
    router.get("projects") { req in
        return try req.view().render("projects", ["title": "Projects"])
    }
    
    // Says hello
    router.get("hello", String.parameter) { req -> Future<View> in
        return try req.view().render("hello", [
            "name": req.parameters.next(String.self)
        ])
    }
    
    //Simply Mac page
    router.get("simplymac") { req in
        return try req.view().render("simplymac/operations", ["title": "Simply Mac Operations"])
    }
}
