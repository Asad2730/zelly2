import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
import { archiveShop, getAllArchivedShops, fromArchiveAvailable } from "../../controller/archiveShopsController";

const router = AsyncRouter();

router.put('/add', withAuth, archiveShop);
router.get('/getAllArchiveShops', withAuth, getAllArchivedShops);
router.put('/setArchiveToAvailable', withAuth, fromArchiveAvailable);

export default router;