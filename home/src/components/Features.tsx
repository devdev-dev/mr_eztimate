import { Flex, Heading, Icon, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FiTool, FiTrello, FiTrendingUp } from 'react-icons/fi';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={4}>
        <Text
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}
        >
          Agile 💕 Remote
        </Text>
        <Heading>Remote Agile but Great</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
          Eztimate enables your team to estimate your stories and issues together remotely.
        </Text>
        <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
          <Feature
            icon={<Icon as={FiTrello} color={'yellow.500'} w={5} h={5} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'Manage your teams'}
          />
          <Feature
            icon={<Icon as={FiTrendingUp} color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'Estimate effectively with Scrum Poker'}
          />
          <Feature
            icon={<Icon as={FiTool} color={'purple.500'} w={5} h={5} />}
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'Fit it to your own needs'}
          />
        </Stack>
      </Stack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={'https://unsplash.com/photos/5QgIuuBxKwM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZGV2fHwwfHx8fDE2Mzg3NDE3NTQ&force=true&w=640'}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  );
}