import { initialState } from "./CounterState";
import { INCREMENT, DECREMENT, RESET } from "./CounterTypes";

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count === 0 ? 0 : state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default CounterReducer;
