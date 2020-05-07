import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../../redux/reducer/userReducer';
// import { Container } from './styles';

function UserForm() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return <div>{ user.data && user.data.login}</div>;
}

export default UserForm;
