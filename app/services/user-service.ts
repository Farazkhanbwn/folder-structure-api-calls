import HttpClient from "./http-clients";

// enum User {
//   GET_USER = "/users",
// }

class UserService extends HttpClient {
  static async getAllUsers() {
    const response = await this.get("");
    return response;
  }
}

export default UserService;
