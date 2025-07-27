'use client';

import { Stack, Typography, Button, Link, keyframes } from "@mui/material";
import theme from "@theme/theme";

import EastIcon from '@mui/icons-material/East';

import post from '@assets/post.webp'

const moveLeftRight = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(6px); }
`;

const FeaturedEvent = () => {
    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'space-between'} borderRadius={"1.8rem"} paddingY={2} paddingX={3} gap={2} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_rose.main
        }}>
            <Stack gap={2}>
                <Stack gap={0.5}>
                    <Typography variant="h4">NapulETH 2025 : A Huge Success!</Typography>
                    <Typography variant="h6" width={{ xs: '100%', lg: '60%' }}>
                        NapulETH 2025 was a great event! Hundreds of people came together to celebrate the fusion of culture and frontier tech. From blockchain to quantum computing and AI, it’s where tradition meets transformation. With a conference, startup challenge, and hackathon, NapulETH turns Naples into a gateway for global innovation.
                    </Typography>
                    <Typography variant="h6" width={{ xs: '100%', lg: '60%' }}>
                        You can check the pictures of the event day by day:
                    </Typography>
                </Stack>
                <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={{xs: 'center', lg: 'center'}} justifyContent={{xs: 'center', lg: 'flex-start'}} gap={2}>
                <Link href="https://drive.google.com/drive/u/0/folders/1CL_EEgvWaixT-nPE5slpNP07j9ZW0H8F" target="_blank" underline="none" width={{xs:'100%', lg:'fit-content'}}>
                    <Button sx={{
                        backgroundColor: theme.palette.background.default,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Day 1 pictures</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
                <Link href="https://drive.google.com/drive/u/0/folders/14thQn4ND6pNphaKO0i11616wX5QRtIJV" target="_blank" underline="none" width={{xs:'100%', lg:'fit-content'}}>
                    <Button sx={{
                        backgroundColor: theme.palette.background.default,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Day 2 pictures</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
                <Link href="https://drive.google.com/drive/u/0/folders/1G_InIwtEXF11e995HvfcRExxUrv4Lb1Z" target="_blank" underline="none" width={{xs:'100%', lg:'fit-content'}}>
                    <Button sx={{
                        backgroundColor: theme.palette.background.default,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Day 3 pictures</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
                </Stack>
            </Stack>
            <Stack display={{ xs: 'none', lg: 'block' }} position={'absolute'} top={0} right={0} width={'35%'} height={'100%'} sx={{
                backgroundImage: `url(${post.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

            </Stack>
        </Stack>
    )
}

export default FeaturedEvent;

