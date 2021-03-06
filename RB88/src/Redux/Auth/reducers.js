const INITIAL_STATE = {
  startingUp: '',
  isFirstTime: '',
  username: '',
  password: '',
  successMessage: '',
  errorMessage: '',
};

const setStartUp = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    startingUp: action.startingUp,
  };
};

const setLoginAttempt = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true,
    errorMessage: ''
  };
};

const setLoginSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: false
  };
};

const setLoginFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false,
    errorMessage: action.errorMessage
  };
};

const setRegisterAttempt = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true,
  };
};

const setRegisterSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: false
  };
};

const setRegisterFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false,
    errorMessage: action.errorMessage
  };
};

export default{
  INITIAL_STATE,

  setStartUp,

  setLoginAttempt,
  setLoginSuccess,
  setLoginFailure,

  setRegisterAttempt,
  setRegisterSuccess,
  setRegisterFailure,
};
