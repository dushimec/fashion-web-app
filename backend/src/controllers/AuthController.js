import AuthService from "../services/AuthService";
import TokenAuthenticator from '../helper/TokentAuthenticator';
import Response from "../helper/Response";

class AuthController {
    static async signup(req, res) {
        try {
            const newUser = await AuthService.userSignup(req);
            newUser.password = "";
            const { password, ...data } = newUser.toJSON();
           
            Response.successMessage(
                res,
                "Account created successfully! Continue to next steps",
                { data }
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
            const token = TokenAuthenticator.tokenGenerator({
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            });
            
            TokenAuthenticator.setTokenInHeaders(res, token);
            
            Response.successMessage(res, "Login successful", { userData,token }); 
        } catch (error) {
            Response.errorMessage(res, "Error occurred while logging in", error); 
        }
    }
}

export default AuthController;
