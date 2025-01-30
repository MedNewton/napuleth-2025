import { Box, Stack } from "@mui/material";

import HeroSection from "@sections/Hero";
import FeaturedEvent from "@sections/FeaturedEvent";
import AttractSpeakers from "@sections/SpeakersAttraction";
import TopSponsors2024 from "@sections/TopSponsors2024";
import Stats2024 from "@sections/Stats2024";
import TopSpeakers2024 from "@sections/TopSpeakers2024";
import Sponsors from "@sections/Sponsors";
import Partners from "@sections/Partners";
import Footer from "@sections/Footer";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} sx={{
      overflowX: 'hidden'
    }}>
      <Stack width={'100%'} spacing={{ xs: 4, lg: 2 }} padding={{ xs: 1, sm: 2.5 }}>
        <Stack width={'100%'} spacing={{ xs: 4, lg: 2 }}>
          <HeroSection />
          <FeaturedEvent />
        </Stack>
        <Stack width={'100%'} spacing={{ xs: 4, lg: 4 }}>
          <AttractSpeakers />
          <TopSponsors2024 />
          <Stats2024 />
          <TopSpeakers2024 />
          <Sponsors />
          <Partners />
          <Footer />
        </Stack>
      </Stack>
    </Box>
  );
}
