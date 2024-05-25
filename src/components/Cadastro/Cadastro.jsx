import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CadastroContainer,FormContainer } from './StyledCadastro' // Importa os estilos de StyledLogin

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
      <h2>Cadastro</h2>
      <FormContainer onSubmit={handleSubmit}> {/* Usa o formcontainer estilizado de StyledLogin */}
        <div>
          <label>Nome de usuário:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Vamos testar</button>
      </FormContainer>
    </CadastroContainer>
  )
}

export default Cadastro

