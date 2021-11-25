import { GET_ALL_SUBJECT_LIST } from "../constants/actionConstants";
import { interviewPointMockData } from "../helper/interviewPointMockData";

const initialState = [];

const getTopicListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBJECT_LIST: {
            return [...state, ...Object.keys(interviewPointMockData)];
        }
        default: {
            return state;
        }
    }
}

export default getTopicListReducer;