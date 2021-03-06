import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText, Title, LinkPassworkd} from './styles';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);


  function handleLogin(){
    signIn(email, password);
  }

 return (
  <Background>
  <Container>
    <Logo source={require('../../assets/Logo.png')}/>
    <Title>Login</Title>
    <AreaInput>
      <Input
      placeholder="Email"
      autoCorrect={false}
      autoCapitalize="none"
      value={email}
      onChangeText={ (text) => setEmail(text) }
      />
    </AreaInput>

    <AreaInput>
      <Input
      placeholder="Senha"
      autoCorrect={false}
      autoCapitalize="none"
      value={password}
      onChangeText={ (text) => setPassword(text) }
      secureTextEntry={true}
      />
    
    </AreaInput>

  <SubmitButton>
    <SubmitText onPress={handleLogin}>Acessar</SubmitText>
  </SubmitButton>

  <Link>
    <LinkText>Lembrar-me</LinkText>
    <LinkPassworkd onPress={()=> navigation.navigate('SignUp')}>Esqueceu sua senha?</LinkPassworkd>
  </Link>

  </Container>
</Background>
  );
}