import React, { FunctionComponent } from 'react';
import { Container, Text, Logo } from './styles';

//* assets
import logo from '../../assets/logo.png';

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Text>Houses</Text>
      <Text>Chapters</Text>
      <Text>Kingdoms</Text>
    </Container>
  );
};

export default Header;
