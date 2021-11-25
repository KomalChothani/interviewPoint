import { GET_ALL_SUBJECT_LIST, GET_INTERVIEW_DATA_BY_TOPIC_NAME } from "../constants/actionConstants"

const getAllSubjectList = () => {
    return {
        type: GET_ALL_SUBJECT_LIST,
    }
}

const getInterviewDataByTopicName = (topicName) => {
    return {
        type: GET_INTERVIEW_DATA_BY_TOPIC_NAME,
        payload: topicName,
    }
}

export {
    getAllSubjectList,
    getInterviewDataByTopicName,
}
