import { TYPES, injectable, inject } from '../../ioc'

import { IUseCaseEmpty } from './base_usecase'
import IUserLocalRepository from '../repositories/user_local_repository'
import User from './../entities/user'

@injectable()
export default class UserLoggedUseCase implements IUseCaseEmpty<User> {
    private readonly userLocalRepository: IUserLocalRepository

    constructor(
        @inject(TYPES.IUserLocalRepository)
        userLocalRepository: IUserLocalRepository
    ) {
        this.userLocalRepository = userLocalRepository
    }

    async execute(): Promise<User> {
        let user = await this.userLocalRepository.getUserLogged();

        if (user != null && user.isAuthorized())
            return user

        return null
    }
}