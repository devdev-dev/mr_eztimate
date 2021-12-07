import { Button, Checkbox, FormControl, FormLabel, Input, Stack, Tooltip, useDisclosure } from '@chakra-ui/react';

export default function SignUp() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
            <FormLabel>Email address</FormLabel>
            <Checkbox onChange={onToggle}>
              <Tooltip label="You can set a password in your user preferences" openDelay={300}>
                Use Password
              </Tooltip>
            </Checkbox>
          </Stack>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" display={isOpen ? 'block' : 'none'}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}