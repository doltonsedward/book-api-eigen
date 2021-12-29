export interface IDatabaseConfigAttribute {
    username?: string
    password?: string
    database?: string
    host?: string
    port?: string
    dialect?: string
    urlDatabase?: string
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttribute
    test: IDatabaseConfigAttribute
    production: IDatabaseConfigAttribute
}