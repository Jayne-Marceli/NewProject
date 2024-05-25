import { useState } from 'react'
import { LoginContainer, FormContainer, Container, Button } from './StyledLogin' // Importa os estilos de StyledLogin

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }

  return (
    <LoginContainer> {/* Usa o container estilizado de StyledLogin */}
      <h2>Login</h2>
      <FormContainer onSubmit={handleSubmit}> {/* Usa o formcontainer estilizado de StyledLogin */}
        <Container>
          <label>Nome de usuário:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </Container>
        <Container> {/* Corrige a abertura da tag div */}
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </Container>
        <Button type="submit">Entrar</Button> {/* Usa o botão estilizado de StyledLogin */}
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
