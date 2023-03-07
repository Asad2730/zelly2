import { AsyncRouter } from "express-async-router";
import userRoutes from './user/userRoutes';
import shopRoutes from './shop/shop';
import mallRoutes from './mall/mall';
import productRoutes from './product/product';
import cartRoutes from './cart/index';
import archiveShopsRoutes from "./archiveShop/index";
import archiveProductsRoutes from "./archiveProduct/index";

const router = AsyncRouter();

router.use('/user', userRoutes);
router.use('/shop', shopRoutes);
router.use('/mall', mallRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/archiveShop', archiveShopsRoutes);
router.use('/archiveProduct', archiveProductsRoutes);

export default router;