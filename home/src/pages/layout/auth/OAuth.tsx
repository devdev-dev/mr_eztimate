import { Box, Button, Divider, Flex, FlexProps, SimpleGrid, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export const OAuth = () => (
  <>
    <DividerWithText mt="6">or continue with</DividerWithText>
    <SimpleGrid columns={2} spacing="4">
      <Button color="currentColor" variant="outline">
        <VisuallyHidden>Login with Google</VisuallyHidden>
        <FaGoogle />
      </Button>
      <Button color="currentColor" variant="outline">
        <VisuallyHidden>Login with Github</VisuallyHidden>
        <FaGithub />
      </Button>
    </SimpleGrid>
  </>
);

const DividerWithText = (props: FlexProps) => {
  const { children, ...flexProps } = props;
  return (
    <Flex align="center" color="gray.300" {...flexProps}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text as="span" px="3" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium">
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  );
};