import User from "../entities/user";

export default interface IUserLocalRepository {
    getUserLogged(): Promise<User>
}