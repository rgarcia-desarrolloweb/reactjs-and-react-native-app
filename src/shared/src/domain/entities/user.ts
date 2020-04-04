export default class User {
    readonly id: number
    readonly name: string
    readonly email: string

    constructor(id: number, name: string, email: string) {
        this.id = id
        this.name = name
        this.email = email
    }

    public isAuthorized(): boolean {
        // TO DO: any business logic
        return true
    }
}