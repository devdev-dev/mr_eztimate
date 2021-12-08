import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import { ApiError } from '@supabase/gotrue-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';
import { OAuth } from './OAuth';

enum SignInState {
  NONE,
  LOADING,
  CHECKMAIL,
  ERROR
}

export default function SignIn() {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const [signInState, setSignInState] = useState<SignInState>(SignInState.NONE);
  const [error, setError] = useState<ApiError | null>(null);
  const { isOpen: isPassword, onToggle: onTogglePassword } = useDisclosure();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    setSignInState(SignInState.LOADING);
    supabase.auth.signIn({ email, password: isPassword ? password : undefined }).then(({ error }) => {
      console.log(error);
      if (error) {
        setSignInState(SignInState.ERROR);
        setError(error);
      } else {
        if (isPassword) router.push('/eztimate');
        else setSignInState(SignInState.CHECKMAIL);
      }
    });
  };

  const showForm = (!error && SignInState.NONE === signInState) || SignInState.LOADING === signInState;

  return (
    <>
      {SignInState.ERROR === signInState && (
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            An error occured!
          </AlertTitle>
          <AlertDescription maxWidth="sm">Darn... Something went wrong. Please try again.</AlertDescription>
          <Button
            mt="4"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
            onClick={() => router.reload()}
          >
            Reload
          </Button>
        </Alert>
      )}
      {SignInState.CHECKMAIL === signInState && (
        <Alert status="info" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Check your mailbox!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            We sent a magic to: {email}. Follow the instructions to complete signing in!
            <br />
            <br /> You can close this tab now.
          </AlertDescription>
        </Alert>
      )}
      {showForm && (
        <>
          <Stack align={'center'} mt="4" mb="8">
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Stack spacing={8} mx={'auto'} maxW={'lg'}>
            <Stack spacing={4}>
              <FormControl id="email">
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <FormLabel>Email address</FormLabel>
                  <Checkbox onChange={onTogglePassword}>
                    <Tooltip label="You can set a password in your user preferences" openDelay={300}>
                      Use Password
                    </Tooltip>
                  </Checkbox>
                </Stack>
                <Input type="email" onChange={event => setEmail(event.currentTarget.value)} />
              </FormControl>
              {isPassword && (
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" onChange={event => setPassword(event.currentTarget.value)} />
                </FormControl>
              )}
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                type="submit"
                onClick={handleSignIn}
                isLoading={SignInState.LOADING === signInState}
              >
                Sign in
              </Button>
            </Stack>
            <OAuth />
          </Stack>
        </>
      )}
    </>
  );
}