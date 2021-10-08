import axios from "axios";
import { Auth } from "../types/Auth";

/**
 * Contains logic to manage user authentication and simulate a
 * fake back-end session behavior.
 */
class FakeAuth {

    /** Base URL for fake users database API. */
    private static dbUrl = "https://my-json-server.typicode.com/braiandev/users-db";

    /**
     * Checks if an user exist in the database, return it's data if it exist or false if don't.
     */
    private static async userExist(username:string):Promise<boolean|Auth.User> {

        const res = await axios.get(`${this.dbUrl}/users?username=${username}`);

        if ((res.data as Auth.User[]).length > 0) return res.data[0];

        return false;


    }

    /**
     * Compare the user password input with the password stored in the database, return a boolean result.
     */
    private static comparePassword(input:string, password:string):boolean {

        if (input === password) return true;

        return false;

    }

    /**
     * Save the session data in local storage to simulate a real session.
     */
    private static saveSession() {

        localStorage.setItem("auth", "true");

    }

    /**
     * Change the session data value stored in local storage to simulate a session clear.
     */
    private static destrySession() {

        localStorage.setItem("auth", "false");
        
    }

    /**
     * Core logic for log in behavior, return true if user is authenticated or a message if something fails.
     */
    public static async LogIn(username:string, password:string) {

        const user = await this.userExist(username);

        if (user) {
            
            if (this.comparePassword(password, (user as Auth.User).password)) {

                this.saveSession();
                return true;

            } else {
                return "Wrong username or password.";
            }

        } else {
            return "The user is not registered yet.";
        }

    }

    /**
     * Core function to manage the log out logic
     */
    public static logOut() {

        this.destrySession();

    }

}

export default FakeAuth;