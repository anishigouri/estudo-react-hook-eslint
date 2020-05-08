import React, { useEffect, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import ContainerForm from '../../components/ContainerForm/ContainerForm';
import Input from '../../components/Input/Input';
import userModel from '../../models/userModel';
import { getUserAction } from '../../redux/reducer/userReducer';
import { onChangeValue } from '../../utils/util';
import { Container } from './UserForm.styles';

function UserForm() {
  const [user, setUser] = useState(userModel);
  const dispatch = useDispatch();

  const userReducer = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const onChange = (name, value) => {
    setUser(onChangeValue(user, name, value));
  };

  const onSave = () => {
    console.log(user);
  };

  return (
    <Container>
      <ContainerForm>
        <Input {...user.name} onChange={onChange} />
        <Button type="primary" onClick={onSave} text="Salvar" icon={<FiSave />} />
      </ContainerForm>
    </Container>
  );
}

export default UserForm;
