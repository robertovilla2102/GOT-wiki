import styled from 'styled-components';

export const Container = styled.div`
  background: #141414;
  height: 65px;
  margin: 0;
  padding: 0 6% 0 0;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 7px 21px -4px rgba(0, 0, 0, 0.75);
`;

export const Logo = styled.img`
  width: 95px;
  position: absolute;
  left: 18px;
  top: 10px;
`;

export const Text = styled.a`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0 24px 0 24px;
  font-size: 20px;

  background: -webkit-gradient(linear, left top, right top, from(#f5f2f0), color-stop(50%, #f5f2f0), color-stop(50%, gray));
  background: linear-gradient(to right, #f5f2f0, #f5f2f0 50%, gray 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  -webkit-transition: background-position 275ms ease;
  transition: background-position 275ms ease;
  text-decoration: none;

  &:hover {
    background-position: 0 100%;
  }
`;
