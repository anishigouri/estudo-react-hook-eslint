import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  width: max-content;
  padding: 7px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  color: #fff;

  :hover {
    background-color: ${(props) => props.theme.colors.secondary}
  }

  span {
    margin-left: 5px;
  }
`;
