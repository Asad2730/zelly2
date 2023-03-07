import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
const router = AsyncRouter();

router.get('/getCart', withAuth)
router.post('/createCart', withAuth);
router.put('/updateCart', withAuth);
router.delete('/deleteCart', withAuth);

export default router;