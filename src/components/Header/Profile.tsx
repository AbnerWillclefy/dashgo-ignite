import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Abner Willclefy</Text>
          <Text color='gray.300' fontSize='small'>abnerwill.monteiro@gmail.com</Text>
        </Box>
      ) }

      <Avatar size='md' name='Abner Willclefy' src='https://github.com/AbnerWillclefy.png'/>
    </Flex>
  )
}