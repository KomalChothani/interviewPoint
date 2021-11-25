import { combineReducers, createStore } from "redux";
import getInterviewDataByTopicReducer from "./getInterviewDataByTopicReducer";
import getTopicListReducer from "./getTopicListReducer";

const rootReducer = combineReducers({
  topicData: getInterviewDataByTopicReducer,
  topicList: getTopicListReducer,
});

export const store = createStore(rootReducer);
