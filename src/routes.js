import { Router } from 'express';
import Ninja from './controller/ninjs.controller'
import { postNinja, putNinja, deleteNinja } from "./controller/ninjs.controller"

const router = Router();

router.get('/',Ninja.get);

router.post('/add',Ninja.post);

router.delete('/delete/:id',Ninja.delete);

router.put('/add/:id',Ninja.put);


export default router;