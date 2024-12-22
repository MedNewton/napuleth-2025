import { Box, Stack, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";

import soli from '@assets/soli.webp'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Agenda = () => {
  return (
    <Box width={'100vw'} height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2} sx={{
      overflow: 'hidden'
    }}>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} gap={1}>
        <Stack sx={{
          animation: 'float 3s ease-in-out infinite', // Apply the animation
          '@keyframes float': {
            '0%': {
              transform: 'translateY(0)', // Starting position
            },
            '50%': {
              transform: 'translateY(-10px)', // Move the image up
            },
            '100%': {
              transform: 'translateY(0)', // Move the image back down
            },
          },
        }}>
          <Image src={soli} alt="soli coming soon napuleth biggest web3 event southern italy 2025" height={300} width={300} ></Image>
        </Stack>
        <Typography width={'100%'} textAlign={'center'} variant="h4">Coming Soon...</Typography>
        <Typography width={'100%'} textAlign={'center'} variant="h6">Our event agenda will be available very soon.</Typography>
      </Stack>
      <Link href="/" underline="none">
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} paddingY={2} paddingX={3} borderRadius={'10rem'} gap={1} sx={{
          backgroundColor: theme.palette.ne_rose.main
        }}>
          <KeyboardBackspaceIcon fontSize="large" />
          <Typography width={'100%'} textAlign={'center'} variant="h5">Back to Homepage</Typography>
        </Stack>
      </Link>

    </Box>
  );
}

export default Agenda;
