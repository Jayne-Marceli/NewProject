import styled from 'styled-components';

export const LoginContainer = styled.div`
   width: 100vw;
  height: 100vh;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(156,205,68,1) 0%, rgba(109,195,99,1) 35%, rgba(23,175,158,1) 100%);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);

`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  background-color: #4A6D44;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const StyledFootter = styled.p`
margin-bottom: 20px;
color: #FFFFFF;
display: flex;
align-items: center;
flex-direction: column;

`;

export const SyledUser = styled.div`
  background-color:#4A6D44;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
      max-width: 150px;
  }


`

