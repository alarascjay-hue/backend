import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBook);
bookRoutes.post('/', bookController.createBook);
bookRoutes.post('/create', bookController.createBook);
bookRoutes.put('/edit/:id', bookController.editBook);
bookRoutes.delete('/delete/:id', bookController.deleteBook);

export default bookRoutes;
