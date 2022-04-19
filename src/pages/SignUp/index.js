import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Title, Link, LinkText} from '../SignIn/styles';

export default function SignIn() {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome);
  }
 
 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
         <Logo source={require('../../assets/Logo.png')}/>
           <Title style={{marginTop: 200, fontSize: 38}}>Recuperar senha</Title>
         
        <AreaInput>
          <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

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
          />
        </AreaInput>

      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Recuperar</SubmitText>
      </SubmitButton>

      <Link>
    <LinkText onPress={()=> navigation.navigate('SignIn')}>Já sei minha senha, entrar com minha conta</LinkText>
  </Link>

      </Container>
   </Background>
  );
}