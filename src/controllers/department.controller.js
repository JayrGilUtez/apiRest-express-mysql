import {pool} from '../db.js'

// getAllDepartments
export const getDepartments = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM department');
    res.send(rows);
    
};
// getDepartmentById
export const getDepartmentById = async(req,res) => {
    const {id} = req.params;
    const [rows] = await pool.query('SELECT * FROM department WHERE id = ?', [id]);
    if (rows.length > 0) {
        res.send(rows[0]);
    } else {
        res.status(404).send('Department not found');
    }
};
// createDepartment
export const createDepartment = async (req, res) => {
    try {
        console.log(req.body);
        const {name} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO department (name) VALUES (?)',
            [name]
        );
        res.send({
            id: rows.insertId,
            name
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error trying to create a new department.');
    }
};

// updateDepartment
export const updateDepartment = async (req, res) => {
    try {
        const {id, name} = req.body;
        const [rows] = await pool.query(
            'UPDATE department SET name = ? WHERE id = ?',
            [name, id]
        );
        if (rows.affectedRows === 0) {
            res.status(404).send({message: 'No department found with this id'});
        } else {
            res.send({
                id,
                name
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Server error'});
    }
};

// deleteDepartment
export const deleteDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query('DELETE FROM department WHERE id = ?', [id]);
        if (rows.affectedRows === 0) {
            res.status(404).send({message: 'No department found with this id'});
        } else {
            res.send({message: 'Department deleted successfully'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Server error'});
    }
};

