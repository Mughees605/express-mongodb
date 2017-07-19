import { Router } from 'express';
import { getNinja, postNinja } from "./controller/ninjs.controller"

const router = Router();

router.get('/',getNinja)

router.post('/add',postNinja)


export default router;