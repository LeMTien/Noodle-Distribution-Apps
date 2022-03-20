export const SET_ALL = 'SET_ALL';
export const SET_HOVER1 = 'SET_HOVER1';
export const SET_HOVER2 = 'SET_HOVER2';
export const SET_HOVER3 = 'SET_HOVER3';
export const SET_SLM = 'SET_SLM';


export const setAllNoodles = data => {
  
  console.log('action 10', data)
  return {
    type: SET_ALL,
    payload: data,
  }
  
};

export const setNoodles1 = data => {
  

  return {
    type: SET_HOVER1,
    payload: data,
  }
  
};

export const setNoodles2 = data =>  {
 
  return{
    type: SET_HOVER2,
    payload: data,
  }
};

export const setNoodles3 = data => {
  
  return{
    type: SET_HOVER3,
    payload: data,
  }
};
