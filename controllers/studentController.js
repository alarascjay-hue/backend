import * as studentService from "../services/studentService.js";

export const fetchAllStudent = async (req, res) =>{
    const students = await studentService.fetchAllStudent();
    res.status(200).json(students);
}
