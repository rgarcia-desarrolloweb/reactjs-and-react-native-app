import { injectable, inject } from "inversify";

const TYPES = {
    IUserLocalRepository: Symbol.for("IUserLocalRepository"),
    IUserRemoteRepository: Symbol.for("IUserRemoteRepository"),
    UserLoggedUseCase: Symbol.for("UserLoggedUseCase"),
    UserLoginUseCase: Symbol.for("UserLoginUseCase"),
};

export { injectable, inject, TYPES }