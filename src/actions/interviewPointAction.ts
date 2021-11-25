import { GET_ALL_SUBJECT_LIST } from "../constants/actionConstants"

const getAllSubjectList = () => {
    return {
        type: GET_ALL_SUBJECT_LIST,
    }
}

export {
    getAllSubjectList,
}