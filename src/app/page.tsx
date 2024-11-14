import { Box, Stack } from "@mui/material";

import HeroSection from "@sections/Hero";
import AttractSpeakers from "@sections/SpeakersAttraction";
import TopSponsors2024 from "@sections/TopSponsors2024";
import Stats2024 from "@sections/Stats2024";
import TopSpeakers2024 from "@sections/TopSpeakers2024";
import Partners from "@sections/Partners";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} sx={{
      overflowX: 'hidden'
    }}>
        <Stack width={'100%'} spacing={{xs: 4, lg: 6}} padding={{ xs: 1, sm: 1, md: 2.5 }}>
          <HeroSection />
          <AttractSpeakers />
          <TopSponsors2024 />
          <Stats2024 />
          <TopSpeakers2024 />
          <Partners />
        </Stack>
    </Box>
  );
}
