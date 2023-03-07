import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
// import { getMall, createMall , mallUpdate , delMall } from '../../controller/mallController';
import { createCart, getCartlist, delCart, updateCart,createTemp } from "../../controller/cartController";

const router = AsyncRouter();

router.get('/getCartList', withAuth, getCartlist)
router.post('/createCart', withAuth, createCart);
router.put('/updateCart', withAuth, updateCart);
router.delete('/deleteCart', withAuth, delCart);
router.post('/addTemp',createCart)

export default router;