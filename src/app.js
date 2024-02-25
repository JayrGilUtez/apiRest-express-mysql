import express from 'express'
// imoportamos las rutas
import employeesRoutes from './routes/employees.routes.js'
import departmentRoutes from './routes/department.routes.js'

const app = express();

app.use(express.json());
app.use(employeesRoutes);
app.use(departmentRoutes);

export default app;