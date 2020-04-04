import "reflect-metadata";

import { Container } from "inversify";

import { TYPES } from 'shared/lib/ioc'

import IUserLocalRepository from 'shared/lib/domain/repositories/user_local_repository'
import UserLocalWebRepository from 'shared/lib/data/repositories/local/user_local_mobile_repository'

import IUserRemoteRepository from 'shared/lib/domain/repositories/user_remote_repository'
import UserRemoteRepository from 'shared/lib/data/repositories/remote/user_remote_repository'

import { UserLoggedUseCase } from 'shared'

export default class IoC {
    public static container: Container

    public static init(): void {
        this.container = new Container()

        this.registerRepositories()
        this.registerUseCase()
    }

    private static registerRepositories(): void {
        this.container.bind<IUserLocalRepository>(TYPES.IUserLocalRepository).to(UserLocalWebRepository);
        this.container.bind<IUserRemoteRepository>(TYPES.IUserRemoteRepository).to(UserRemoteRepository);
    }

    private static registerUseCase(): void {
        this.container.bind(TYPES.UserLoggedUseCase).to(UserLoggedUseCase);
    }
}
