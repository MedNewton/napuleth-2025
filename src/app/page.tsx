import { Box, Stack } from "@mui/material";

import HeroSection from "@sections/Hero";
import FeaturedEvent from "@sections/FeaturedEvent";
import Bento from "@sections/Bento";
import Speakers from "@sections/Speakers";
import Sponsors from "@sections/Sponsors";
import Partners from "@sections/Partners";
import MediaPartners from "@sections/MediaPartners";
import ETHFamily from "@sections/ETHFamily";
import Footer from "@sections/Footer";
import Map from "@sections/Map";
import NewStatSection from "@sections/NewStatSection";
import Tracks from "@sections/Tracks";
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
          <Stack gap={{ xs: 2, lg: 0 }}>
            <Bento />
          </Stack>
          <Tracks />
          <NewStatSection />
          <Speakers />
          <Sponsors />
          <Partners />
          <MediaPartners />
          <ETHFamily />
          <Map />
          <Footer />
        </Stack>
      </Stack>
    </Box>
  );
}
