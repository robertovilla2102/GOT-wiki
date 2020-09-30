import React, { useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {
  name: string; //* parametro obligatorio
  edad?: number; //* parametro opcional
};

const Home: FunctionComponent<Props> = ({ name, edad }) => {
  useEffect(() => {
    console.log('home');
  }, []);

  return (
    <Container>
      <p>{name}</p>
      <p>{edad}</p>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
`;
