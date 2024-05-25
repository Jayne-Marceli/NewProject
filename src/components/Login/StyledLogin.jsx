import { useState } from 'react';
import styled from 'styled-components';

const StyledLoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

function LoginContainer() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    // Aqui você pode adicionar a lógica para autenticar o usuário
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="username"
          placeholder="Nome de usuário"
          value={loginData.username}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Senha"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </LoginContainer>
  );
}

export default StyledLoginContainer

