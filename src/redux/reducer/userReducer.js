import callApi from '../../services/gitHubAPI';

const initialState = {
  data: {},
};

const types = {
  get: 'GET_USER',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.get:
      return { ...state, data: action.payload };
    default:
      return initialState;
  }
}

export const getUserAction = () => async (dispatch) => {
  try {
    const res = await callApi('users/anishigouri');
    dispatch({
      type: types.get,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
