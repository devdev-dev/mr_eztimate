import { Button, Checkbox, FormControl, FormLabel, Input, Stack, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isOpen: isPassword, onToggle: onTogglePassword } = useDisclosure();

  const handleSignIn = async () => {
    setLoading(true);
    if (isPassword) {
      supabase.auth
        .signIn({ email, password })
        .then(supabase => {
          console.log('Password');
          console.log(supabase);
        })
        .finally(() => setLoading(false));
    } else {
      supabase.auth
        .signIn({ email })
        .then(supabase => {
          console.log(supabase);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
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
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
            type="submit"
            onClick={handleSignIn}
            isLoading={loading}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}