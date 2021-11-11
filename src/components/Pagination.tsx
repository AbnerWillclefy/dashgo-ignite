import { Stack, Button, Box } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacin='2'>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          colorScheme='pink'
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >1</Button>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          bg='gray.700'
          disabled
          _hover={{
            bg: 'gray.500'
          }}
        >2</Button>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          bg='gray.700'
          disabled
          _hover={{
            bg: 'gray.500'
          }}
        >3</Button>
        <Button
          size='sm'
          fontSize='xs'
          w='4'
          bg='gray.700'
          disabled
          _hover={{
            bg: 'gray.500'
          }}
        >4</Button>
      </Stack>
    </Stack>
  )
}