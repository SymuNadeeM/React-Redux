import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstant";

const initialCounter = { count: 10 };

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 5,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;