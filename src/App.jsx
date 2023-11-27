import { useState } from 'react'
import { AddButton, Container, Button_C, Button_AS } from './style';
 
function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMensagem('Por favor, insira um e-mail válido.');
      return;
    }

    const senhaRegex = /^[0-9]+$/;
    if (!senhaRegex.test(senha)) {
      setMensagem('A senha deve conter apenas números.');
      return;
    }

    // Lógica de login aqui...

    // Se o login for bem-sucedido, limpe a mensagem
    setMensagem('');
  };

  const handleCadastro = () => {
    if (email.trim() === '' || senha.trim() === '') {
      setMensagem('Preencha todos os campos antes de cadastrar.');
      return;
    }

    // Lógica de cadastro aqui...

    // Se o cadastro for bem-sucedido, limpe a mensagem
    setMensagem('');
  };

  
     
  return (
    <Container>
      <h2>Clinica Odonto</h2>
      <form>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

     

        <div>
          <AddButton type="button" onClick={handleLogin}>
            Login
          </AddButton>
         
        </div>

        <div>
          <Button_AS>
             Alterar Senha
          </Button_AS>
          <Button_C type="button" onClick={handleCadastro}>
            Cadastro
          </Button_C>
        </div>
 
        {mensagem && <span style={{ color: 'red' }}>{mensagem}</span>}

     

        
      </form>

     
    </Container>

 

      

  )
}

export default App 