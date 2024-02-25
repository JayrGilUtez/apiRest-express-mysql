import {Router} from 'express'
import {getEmployees,createEmployee,updateEmployee,deleteEmployee, getEmployeeById} from '../controllers/employees.controller.js'


const router =  Router();

router.get('/getEmployees',getEmployees);

router.get('/getEmployeeById/:id',getEmployeeById);

router.post('/createEmployee',createEmployee);

router.put('/updateEmployee',updateEmployee);

router.delete('/deleteEmployee/:id',deleteEmployee);

export default router;
