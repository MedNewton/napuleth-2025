'use client';

import { Stack, Typography, Button, Link, keyframes } from "@mui/material";
import theme from "@theme/theme";

import EastIcon from '@mui/icons-material/East';

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
        <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} borderRadius={"1.8rem"} paddingY={2} paddingX={3} sx={{
            backgroundColor: theme.palette.ne_rose.main
        }}>
            <Stack gap={0.5}>
                <Typography variant="h4">NapulETH Open Village 2025</Typography>
                <Typography variant="subtitle1" width={{ xs: '100%', lg: '70%' }}>NapulETH 2025, held at Villa Doria D{"'"}Angri in Naples, blends innovation, culture, and networking. Featuring a Hackathon at Museo Filangieri, it aims to attract 1,500+ attendees, 100+ sponsors, and establish Naples as a global tech hub.</Typography>
            </Stack>
            <Link href="https://app.moongate.id/e/napul-eth-open-village-2025" target="_blank" underline="none">
                <Button sx={{
                    backgroundColor: 'transparent',
                    border: '2px dashed',
                    boxShadow: 'none',
                    marginRight: 2,
                    paddingRight: 2,
                    whiteSpace: 'nowrap'
                }}>
                    <Typography variant="h6" paddingX={1} paddingTop={0.3}>Get your ticket</Typography>
                    <EastIcon fontSize="medium" sx={{
                        animation: `${moveLeftRight} 1s infinite alternate`
                    }} />
                </Button>
            </Link>
        </Stack>
    )
}

export default FeaturedEvent;

