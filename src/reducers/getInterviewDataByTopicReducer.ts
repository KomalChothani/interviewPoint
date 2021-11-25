import { GET_INTERVIEW_DATA_BY_TOPIC_NAME } from "../constants/actionConstants";
import { interviewPointMockData } from "../helper/interviewPointMockData";

const initialState = Object.values(interviewPointMockData)[0];


const getInterviewDataByTopicReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_INTERVIEW_DATA_BY_TOPIC_NAME: {
            const data = interviewPointMockData[payload];
            console.log(data);
            return data;
        }
        default: {
            return state;
        }
    }
}

export default getInterviewDataByTopicReducer;
