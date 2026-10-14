import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    const students = await studentModel.fetch();
    return students;
}