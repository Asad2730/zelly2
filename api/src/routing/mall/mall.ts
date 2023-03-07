import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
import { getMall, createMall, mallUpdate, delMall } from '../../controller/mallController';

const router = AsyncRouter();

router.get('/getMall', withAuth, getMall)
router.post('/createMall', withAuth, createMall);
router.put('/updateMall', withAuth, mallUpdate);
router.delete('/deleteMall', withAuth, delMall);

export default router;