import { Container } from 'inversify'
import "reflect-metadata";

import { TYPES } from '@my-account/core/lib/ioc'

import UserLocalWebRepository from '@my-account/core/lib/data/repositories/local/user_local_web_repository'
import UserRemoteRepository from '@my-account/core/lib/data/repositories/remote/user_remote_repository'

import { UserLoggedUseCase } from '@my-account/core'

export default class IoC {
    static container;

    static init() {
        this.container = new Container();

        this.registerRepositories()
        this.registerUseCase()
    }

    static registerRepositories() {
        this.container.bind(TYPES.IUserLocalRepository).to(UserLocalWebRepository);
        this.container.bind(TYPES.IUserRemoteRepository).to(UserRemoteRepository);
    }

    static registerUseCase() {
        this.container.bind(TYPES.UserLoggedUseCase).to(UserLoggedUseCase);
    }
}