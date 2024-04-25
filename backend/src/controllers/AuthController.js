import AuthService from "../services/AuthService";
import TokenAuthenticator from '../helper/TokentAuthenticator';
import Response from "../helper/Response";

class AuthController {
    static async signup(req, res) {
        try {
            const newUser = await AuthService.userSignup(req);
            newUser.password = "";
            const { password, ...data } = newUser.toJSON();
            const token = TokenAuthenticator.tokenGenerator(data);
            data.token = token;
            Response.successMessage(
                res,
                "Account created successfully! Continue to next steps",
                { token }
            );
        } catch (error) {
            Response.errorMessage(res, "Error occurred while signing up", error); 
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await AuthService.userLogin(email, password);

            if (!user) {
                return Response.errorMessage(res, "Invalid email or password", 401);
            }

            const { password: _, ...userData } = user.toJSON();
            const token = TokenAuthenticator.tokenGenerator(userData);
            
            Response.successMessage(res, "Login successful", { token });
        } catch (error) {
            Response.errorMessage(res, "Error occurred while logging in", error); 
        }
    }
}

export default AuthController;
