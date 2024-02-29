import {pool} from '../db.js'

// getAllEmployees
export const getEmployees = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.send(rows);
    console.log(rows);
    
    
};
// getEmployeeById
export const getEmployeeById = async(req,res) => {
    const {id} = req.params;
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
    if (rows.length > 0) {
        res.send(rows[0]);
        console.log(rows[0]);
        
    } else {
        res.status(404).send('Employee not found');
    }
};
// createEmployee
export const createEmployee = async (req, res) => {
    try {
        console.log(req.body);
        const {name, department_id, salary} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO employee (name, department_id, salary) VALUES (?, ?, ?)',
            [name, department_id, salary]
        );
        res.send({
            id: rows.insertId,
            name,
            department_id,
            salary
        });
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error trying to create a new employee.');
    }
};
// updateEmployee
export const updateEmployee = async (req, res) => {
    try {
        const {id, name, department_id, salary} = req.body;
        const [rows] = await pool.query(
            'UPDATE employee SET name = ?, department_id = ?, salary = ? WHERE id = ?',
            [name, department_id, salary, id]
        );
        if (rows.affectedRows === 0) {
            res.status(404).send({message: 'No employee found with this id'});
        } else {
            res.send({
                id,
                name,
                department_id,
                salary
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Server error'});
    }
};
// deleteEmployee
export const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(
            'DELETE FROM employee WHERE id = ?',
            [id]
        );
        if (result.affectedRows === 0) {
            res.status(404).send({message: 'No employee found with this id'});
        } else {
            res.send({
                message: `Employee with id ${id} deleted`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Server error'});
    }
};





