import { useEffect, useState } from 'react';
import { CadastroContainer, DivTermo, FormContainer, StyledInput, StyledButton, StyledTitle } from './StyledCadastro'; // Importa os estilos de StyledLogin
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firebaseApp } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    telefone: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: ''
  });

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, 'users');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    try {
      await createUserWithEmailAndPassword(formData.email, formData.password);
      await addDoc(usersCollectionRef, {
        username: formData.username,
        telefone: formData.telefone,
        email: formData.email,
        date: formData.date,
      });
      navigate('/Login'); // Redireciona para a página de login após o cadastro bem-sucedido
    } catch (error) {
      console.error('Erro ao criar o usuário: ', error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <CadastroContainer> {/* Usa o container estilizado de StyledLogin */}
      <FormContainer onSubmit={handleSubmit}> {/* Usa o formcontainer estilizado de StyledLogin */}
        <StyledTitle>Cadastre-se Aqui</StyledTitle>
        <div>
          <StyledInput
            placeholder='Nome Completo'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
            placeholder='Telefone'
            type='tel'
            name='telefone'
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
            placeholder='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
            placeholder='Data de Nascimento'
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
            placeholder='Senha'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledInput
            placeholder='Confirmar Senha'
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <StyledButton type='submit'>Cadastre-se</StyledButton>
        <DivTermo>
          Ao clicar em Cadastre-se, você concorda com nossos Termos, 
          Política de Privacidade e Política de Cookies. Você poderá receber notificações 
          por SMS e cancelar isso quando quiser.
        </DivTermo>
      </FormContainer>
    </CadastroContainer>
  );
}

export default Cadastro;

