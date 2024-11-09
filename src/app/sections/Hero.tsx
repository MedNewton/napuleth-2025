import { Stack } from "@mui/material";
import HeroScene from "@components/HeroScene";
import Navbar from "@components/Navbar";
import theme from "@theme/theme";

const HeroSection = () => {
    return(
        <Stack width={'100%'} height={{xs: '89vh', lg: '95vh'}} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_lightblue.main
        }}>
            <HeroScene />
            <Navbar />
        </Stack>
    )
}

export default HeroSection;