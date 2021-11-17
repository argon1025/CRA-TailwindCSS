import { store } from "./store";

const reducer = (state = store, action) => {
  console.log(`[EVENT] ${state} / ${action}`);

  // 액션 처리
  switch (action.type) {
    case "TEST_REQUEST":
      return { ...state, TEST_VAL: "hello!" };
    default:
      return state;
  }
};
export default reducer;
