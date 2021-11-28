import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: black;
  display: center;
`;

const SignUpButton = styled.button`
  color: black;
  background: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 5px;
  align-items: right;
  justify-content: center;
  width: 72px;
  height: 30px;
  border: none;
  margin-top: 20px;
`;

const LoginScreen = () => (
  <Box color="black">
    <SignUpButton>회원가입</SignUpButton>
  </Box>
);

export default LoginScreen;