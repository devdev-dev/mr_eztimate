import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    supabase.auth
      .signUp({ email })
      .then(supabase => console.log(supabase))
      .finally(() => setLoading(false));
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={event => setEmail(event.currentTarget.value)} />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
            type="submit"
            onClick={handleSignUp}
            isLoading={loading}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}