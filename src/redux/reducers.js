const defaultState = {
    
      nd1: true,
      nd2: true,
      nd3: true,
  };
  
  const noodleReducers = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_ALL':
        return  {
            ...state,
            ...action.payload,
          };
      case 'SET_HOVER1':
        return  {
          
            ...state,
            nd1: action.payload,
          };
      case 'SET_HOVER2':
        return  {
            ...state,
            nd2: action.payload,
          };
      case 'SET_HOVER3':
        return {
            ...state,
            nd3: action.payload,
          };
        
      default:
        
        return state;
        
    }
    
  };
  export default noodleReducers;
  