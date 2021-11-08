import { Router } from 'express'
import * as kpopgroupsCtrl from '../controllers/kpopgroups.js'
const router = Router()

/* GET users listing. */
router.get('/kpopgroups', kpopgroupsCtrl.index)
router.get('/kpopgroups/:id', kpopgroupsCtrl.show)
router.post('/kpopgroups', kpopgroupsCtrl.create)
router.put('/kpopgroups/:id', kpopgroupsCtrl.update)
router.delete('/kpopgroups/:id', kpopgroupsCtrl.delete)


export {
  router
}
