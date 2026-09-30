import pool from '../config/db.js';

//Rerieve
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};