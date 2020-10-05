import React, { VFC } from 'react';
import { Container, Text, Logo } from './styles';

//* assets
import logo from '../../assets/logo.png';

const Header: VFC = () => {
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
