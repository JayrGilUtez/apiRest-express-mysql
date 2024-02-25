import {Router} from 'express'
import * as departmentController from '../controllers/department.controller.js'

const router =  Router();

router.get('/getDepartments',departmentController.getDepartments);

router.get('/getDepartmentById/:id',departmentController.getDepartmentById);

router.post('/createDepartment',departmentController.createDepartment);

router.put('/updateDepartment',departmentController.updateDepartment);

router.delete('/deleteDepartment/:id',departmentController.deleteDepartment);

export default router;
