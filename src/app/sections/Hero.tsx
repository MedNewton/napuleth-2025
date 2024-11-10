import { Stack, Typography } from "@mui/material";
import HeroScene from "@components/HeroScene";
import Navbar from "@components/Navbar";
import theme from "@theme/theme";

const HeroSection = () => {
    return (
        <Stack width={'100%'} height={{ xs: '89vh', lg: '95vh' }} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_lightblue.main
        }}>
            <HeroScene />
            <Navbar />
            <Stack width={{xs: '100%', lg: 'fit-content'}} alignItems={'center'} padding={2} position={'absolute'} bottom={0}>
                <Stack width={'100%'} borderRadius={'1.8rem'} padding={2} gap={0.5} sx={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                }}>
                    <Typography variant="h4">The Biggest Web3 Event In Southern Italy</Typography>
                    <Typography variant="h5" fontWeight={600}>15 - 18 September, 2025</Typography>
                    <Typography variant="h6">Naples, Italy</Typography>
                </Stack>

            </Stack>

        </Stack>
    )
}

export default HeroSection;