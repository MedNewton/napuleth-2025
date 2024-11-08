import { Stack } from "@mui/material";
import theme from "@theme/theme";
import HeroScene from "@components/HeroScene";
import Navbar from "@components/Navbar";

const HeroSection = () => {
    return(
        <Stack width={'100%'} height={'95vh'} padding={0} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'}>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.4rem',
                position: 'absolute',
            }}>
            </Stack>
            <HeroScene />
            <Navbar />
        </Stack>
    )
}

export default HeroSection;