import callApi from '../../services/gitHubAPI';

const initialState = [];

const types = {
  get: 'GET_USER',
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case types.get:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
}

export const getUserAction = () => async (dispatch) => {
  try {
    const res = await callApi();
    dispatch({
      type: types.get,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
