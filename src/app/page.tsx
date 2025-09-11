import { Box, Stack } from "@mui/material";

import HeroSection from "@sections/Hero";
import Footer from "@sections/Footer";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} sx={{
      overflowX: 'hidden'
    }}>
      <Stack width={'100%'} spacing={{ xs: 4, lg: 2 }} padding={{ xs: 1, sm: 2.5 }}>
        <Stack width={'100%'} spacing={{ xs: 4, lg: 2 }}>
          <HeroSection />
        </Stack>
        <Stack width={'100%'} spacing={{ xs: 4, lg: 4 }}>
          <Footer />
        </Stack>
      </Stack>
    </Box>
  );
}
