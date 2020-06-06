import Leaf
import Vapor

import LeafErrorMiddleware

/// Called before your application initializes.
public func configure(_ config: inout Config, _ env: inout Environment, _ services: inout Services) throws {
    // Register providers first
    try services.register(LeafProvider())

    // Register routes to the router
    let router = EngineRouter.default()
    try routes(router)
    services.register(router, as: Router.self)
    
    // Use Leaf for rendering views
    config.prefer(LeafRenderer.self, for: ViewRenderer.self)
    
    services.register { worker in
        return try LeafErrorMiddleware(environment: worker.environment)
    }

    // Register middleware
    var middlewares = MiddlewareConfig() // Create _empty_ middleware config
    middlewares.use(LeafErrorMiddleware.self)
    middlewares.use(FileMiddleware.self) // Serves files from `Public/` directory
    services.register(middlewares)
}
