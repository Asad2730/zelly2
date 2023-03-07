import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
import { archiveProduct, getAllArchivedProducts, fromArchiveAvailable } from "../../controller/archiveProductsController";

const router = AsyncRouter();

router.put('/add', withAuth, archiveProduct);
router.get('/getAllArchiveProducts', withAuth, getAllArchivedProducts);
router.put('/setArchiveToAvailable', withAuth, fromArchiveAvailable);

export default router;