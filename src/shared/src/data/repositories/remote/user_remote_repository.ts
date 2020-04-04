import { injectable } from '../../../ioc'

import IUserRemoteRepository from '../../../domain/repositories/user_remote_repository';
import { LoginParams } from '../../../domain/use-cases/user_login_usecase';
import User from '../../../domain/entities/user';

@injectable()
export default class UserRemoteRepository implements IUserRemoteRepository {
    login(input: LoginParams): Promise<User> {
        let user = new User(1, 'Rodrigo From Remote', 'asd@asd.com')

        if (input.username == 'admin' && input.password == '1234')
            return Promise.resolve(user);

        return null
    }
}