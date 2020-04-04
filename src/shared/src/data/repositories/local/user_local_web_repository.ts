import { injectable } from '../../../ioc'

import UserLocalRepository from "./../../../domain/repositories/user_local_repository"
import User from "../../../domain/entities/user";

@injectable()
export default class UserLocalWebRepository implements UserLocalRepository {
    getUserLogged(): Promise<User> {
        let user = new User(1, 'Rodrigo From Web', 'asd@asd.com')

        // TO DO: return user from web local storage
        return Promise.resolve(user)
    }
}