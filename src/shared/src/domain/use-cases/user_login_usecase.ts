import { TYPES, injectable, inject } from '../../ioc'

import { IUseCase } from "./base_usecase"
import IUserRemoteRepository from "../repositories/user_remote_repository"
import User from "../entities/user"

@injectable()
export default class LoginUseCase implements IUseCase<LoginParams, User> {
    private readonly userRemoteRepository: IUserRemoteRepository

    constructor(
        @inject(TYPES.IUserRemoteRepository)
        userRemoteRepository: IUserRemoteRepository
    ) {
        this.userRemoteRepository = userRemoteRepository
    }

    async execute(input: LoginParams): Promise<User> {
        let user = await this.userRemoteRepository.login(input);

        if (user != null && user.isAuthorized())
            return user

        return null
    }
}

export class LoginParams {
    readonly username: string
    readonly password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
}