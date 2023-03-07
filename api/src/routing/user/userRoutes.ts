import { AsyncRouter } from "express-async-router";
import { newUserSignup } from "../../controller/newUserSignUpController";
import { Login, Login2 } from "../../controller/userLoginController";

const router = AsyncRouter();

router.post('/signUp', newUserSignup);
//router.post('/login', Login);
router.post('/login', Login2);

export default router;