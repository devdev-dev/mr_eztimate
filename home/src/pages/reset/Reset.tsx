import { Box, Button, Flex, FormControl, Heading, Input, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

type ForgotPasswordFormInputs = {
  email: string;
};

export default function Reset(): JSX.Element {
  return (
    <Flex align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Reset your password</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            You&apos;ll get an email with a reset link
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <Input placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} type="email" />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Request Reset
              </Button>
            </Stack>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already have your password?&nbsp;
              <NextLink href="/login" passHref>
                <Link color={'blue.400'}>Login</Link>
              </NextLink>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}