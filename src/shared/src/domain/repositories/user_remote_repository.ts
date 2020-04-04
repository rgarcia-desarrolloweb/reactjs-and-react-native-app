import { LoginParams } from "../use-cases/user_login_usecase";
import User from "../entities/user";

export default interface IUserRemoteRepository {
    login(input: LoginParams): Promise<User>
}