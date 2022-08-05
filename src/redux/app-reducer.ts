const SET_MODE = "SET_MODE";

let initialState = {
  mode: "light",
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

type SetCityActionType = {
  type: typeof SET_MODE;
  mode: string;
};

export const setMode = (mode: string): SetCityActionType => ({
  type: SET_MODE,
  mode,
});

export const toggleMode = (mode: string) => (dispatch: any) => {
  localStorage.setItem("mode", mode);
  dispatch(setMode(mode));
  let themeMode = localStorage.getItem("mode");
  if (themeMode === "dark") {
    document
      .querySelector('meta[name="theme-color"]')!
      .setAttribute("content", "#51557E");
  } else if (themeMode === "light") {
    document
      .querySelector('meta[name="theme-color"]')!
      .setAttribute("content", "#F7ECDE");
  }
};

export const initializeMode = () => (dispatch: any) => {
  const mode = localStorage.getItem("mode");
  dispatch(setMode(mode || "light"));
};

export default appReducer;
