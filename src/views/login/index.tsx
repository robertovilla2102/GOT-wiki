import React, { useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';

const Login: FunctionComponent = () => {
  useEffect(() => {
    console.log('home');
  }, []);

  return <Container>hola estoy en el login</Container>;
};

export default Login;

const Container = styled.div`
  height: 100%;
`;
