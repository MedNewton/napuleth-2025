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
                <Stack width={'100%'} borderRadius={'1.8rem'} padding={2} sx={{
                    background: {xs: 'rgba(255, 255, 255, 0)', lg: 'rgba(255, 255, 255, 1)'},
                    boxShadow: {xs: '', lg: '0 4px 30px rgba(0, 0, 0, 0.1)'},
                    backdropFilter: {xs: 'blur(0px)', lg: 'blur(1px)'},
                }}>
                    <Typography  variant="h3" sx={{
                        textShadow: {xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}`},
                        color: {xs: theme.palette.background.default, lg: theme.palette.text.primary}
                    }}>NapulETH</Typography>
                    <Typography display={{xs: 'none', lg: 'block'}} variant="h5" fontWeight={600} sx={{
                        textShadow: {xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}`},
                        color: {xs: theme.palette.background.default, lg: theme.palette.text.primary}
                    }}><span style={{color: theme.palette.ne_darkblue.main}}>15 - 18</span> September, 2025</Typography>
                    <Typography display={{xs: 'block', lg: 'none'}} variant="h5" fontWeight={600} sx={{
                        textShadow: {xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}`},
                        color: {xs: theme.palette.background.default, lg: theme.palette.text.primary}
                    }}><span style={{color: theme.palette.ne_gold.main}}>15 - 18</span> September, 2025</Typography>
                    <Typography variant="h6" sx={{
                        textShadow: {xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}`},
                        color: {xs: theme.palette.background.default, lg: theme.palette.text.primary}
                    }}>Naples, Italy</Typography>
                </Stack>

            </Stack>

        </Stack>
    )
}

export default HeroSection;