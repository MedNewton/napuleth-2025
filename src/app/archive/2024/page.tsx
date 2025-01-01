import { Box, Stack, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";

import soli from '@assets/soli.webp'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function Archive2024() {
  return (
    <Box width={'100vw'} height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2} sx={{
      overflow: 'hidden'
    }}>
      <iframe src="https://napuleth.github.io/" width="100%" height="100%"></iframe>

    </Box>
  );
}
