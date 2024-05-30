import { useState } from 'react'
import { LoginContainer, FormContainer, Button,StyledInput, SyledUser  } from './StyledLogin' // Importa os estilos de StyledLogin
import Userimage from '../../assets/user.png'

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
      <FormContainer onSubmit={handleSubmit}> {/* Usa o formcontainer estilizado de StyledLogin */}
      <SyledUser>
      <img className='user' src={Userimage} alt="Usuario"/>
      </SyledUser>
        <section>
          <StyledInput
            placeholder='Userlogin'
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </section>
        <section> {/* Corrige a abertura da tag div */}
          <StyledInput
           placeholder='Password'
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </section>
        <Button type="submit">Entrar</Button> {/* Usa o botão estilizado de StyledLogin */}
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
