import { useState } from 'react'
import { LoginContainer, FormContainer, Button,StyledInput, SyledUser,StyledFootter } from './StyledLogin' // Importa os estilos de StyledLogin
import Userimage from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebaseConfig'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }

  return (
    <LoginContainer> {/* Usa o container estilizado de StyledLogin */}
      <FormContainer onSubmit={handleSignIn}> {/* Usa o formcontainer estilizado de StyledLogin */}
      <SyledUser>
      <img className='user' src={Userimage} alt="Usuario"/>
      </SyledUser>
        <section>
          <StyledInput
            placeholder='Email' 
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>
        <section> 
          <StyledInput
           placeholder='Password'
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </section>
        <Button type="submit" onClick={handleSignIn} >Entrar</Button> {/* Usa o botão estilizado de StyledLogin */}
        <StyledFootter>
          <p>Você não tem uma conta?</p>
          <Link to="/Cadastro">Crie a sua conta aqui</Link>
        </StyledFootter>
          
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
