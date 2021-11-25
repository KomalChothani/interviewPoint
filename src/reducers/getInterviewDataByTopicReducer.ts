import { GET_ALL_SUBJECT_LIST } from "../constants/actionConstants";
import { interviewPointMockData } from "../helper/interviewPointMockData";

const initialState = interviewPointMockData;


const getInterviewDataByTopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBJECT_LIST: {
            return Object.keys(state);
        }
        default: {
            return state;
        }
    }
}

export default getInterviewDataByTopicReducer;
