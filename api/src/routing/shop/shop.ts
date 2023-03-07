import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
import { createShop, updateShop, delShop, getShops, getShopByID } from "../../controller/shopController";

const router = AsyncRouter();

router.get('/getShops', getShops)
router.post('/create', withAuth, createShop);
router.put('/update/:id', updateShop);
router.get('/getShopByID/:id', getShopByID)
router.delete('/delete', withAuth, delShop);

export default router;