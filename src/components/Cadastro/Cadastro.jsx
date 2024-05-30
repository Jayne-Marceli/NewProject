import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CadastroContainer,DivTermo,FormContainer, StyledInput,StyledButton, StyledTitle} from './StyledCadastro' // Importa os estilos de StyledLogin

function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    navigate('/login')
  }

  return (
    <CadastroContainer> {/* Usa o container estilizado de StyledLogin */}
      <FormContainer onSubmit={handleSubmit}> {/* Usa o formcontainer estilizado de StyledLogin */}
      < StyledTitle>Cadastre-se Aqui</ StyledTitle>
        <div>
          <StyledInput
            placeholder='Nome Completo'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <StyledInput
          placeholder='Telefone'
            type="tel"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <StyledInput
          placeholder='Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <StyledInput
          placeholder='Data de Nascimento'
            type="date"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <StyledInput
            placeholder='Senha'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
          placeholder='Confirmar Senha'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <StyledButton type="submit">Cadastre-se</StyledButton>
        <DivTermo>
Ao clicar em Cadastre-se, você concorda com nossos Termos, 
Política de Privacidade e Política de Cookies. Você poderá receber notificações 
por SMS e cancelar isso quando quiser.</DivTermo>
      </FormContainer>
    </CadastroContainer>
  )
}

export default Cadastro

