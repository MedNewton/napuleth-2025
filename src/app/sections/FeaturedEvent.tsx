'use client';

import { Stack, Typography, Button, Link, keyframes } from "@mui/material";
import theme from "@theme/theme";

import EastIcon from '@mui/icons-material/East';

import tickets from '@assets/tickets.webp'

const moveLeftRight = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(6px); }
`;

const blinkBorder = keyframes`
    0% { border-color: ${theme.palette.text.disabled}; }
    100% { border-color: ${theme.palette.text.primary}; }
`;

const FeaturedEvent = () => {
    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'space-between'} borderRadius={"1.8rem"} paddingY={2} paddingX={3} gap={2} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_rose.main
        }}>
            <Stack gap={2}>
                <Stack gap={0.5}>
                    <Typography variant="h4">NapulETH Open Village 2025</Typography>
                    <Typography variant="h6" width={{ xs: '100%', lg: '60%' }}>
                    Celebrating the fusion of culture and frontier tech. From blockchain to quantum computing and AI, it’s where tradition meets transformation. With a conference, startup challenge, and hackathon, NapulETH turns Naples into a gateway for global innovation.
                        <br /><br />
                        Address Villa Doria D&apos;Angri: <Link href="https://maps.app.goo.gl/ZMYSmeLXCZmt11Vc7" target="_blank" underline={'hover'} sx={{ fontStyle: 'italic', textDecoration: 'underline' }}>Via San Francesco Petrarca, 80, 80123 Napoli NA, Italia</Link>
                    </Typography>
                </Stack>
                <Link href="https://app.moongate.id/e/napul-eth-open-village-2025" target="_blank" underline="none" width={'fit-content'}>
                    <Button sx={{
                        backgroundColor: theme.palette.background.default,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Buy The Ticket</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
            </Stack>
            <Stack display={{ xs: 'none', lg: 'block' }} position={'absolute'} top={0} right={0} width={'30%'} height={'100%'} sx={{
                backgroundImage: `url(${tickets.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

            </Stack>
        </Stack>
    )
}

export default FeaturedEvent;

