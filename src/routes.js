import { Router } from 'express';
import { Ninja } from './controller/ninjs.controller'
import { postNinja, putNinja, deleteNinja } from "./controller/ninjs.controller"

const router = Router();

router.get('/',Ninja.getNinja);

router.post('/add',Ninja.postNinja);

router.delete('/delete/:id',Ninja.deleteNinja);

router.put('/add/:id',Ninja.putNinja);


export default router;