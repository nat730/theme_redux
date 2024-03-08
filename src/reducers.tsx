export interface RootState {
  theme: string;
}

const initialState: RootState = {
  theme: 'light'
};

const rootReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

export default rootReducer;
