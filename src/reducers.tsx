const initialState = {
    theme: 'light'
  };
  
  const rootReducer = (state = initialState, action: { type: any; }) => {
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