import { Router } from 'express';
import { getNinja, postNinja, putNinja, deleteNinja } from "./controller/ninjs.controller"

const router = Router();

router.get('/',getNinja)

router.post('/add',postNinja)

router.delete('/delete/:id',deleteNinja)

router.put('/add/:id',putNinja)


export default router;