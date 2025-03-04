import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";

import logo from '@assets/logo.webp'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';



const Footer = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={{ xs: 'end', lg: 'start' }} paddingX={{ xs: 2, lg: 8 }} paddingBottom={{ xs: 4, lg: 3 }} paddingTop={{ xs: 4, lg: 4 }} borderRadius={8} gap={{ xs: 3, lg: 8 }} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_lightblue.main,
        }}>
            <Stack width={'100%'} direction={{ xs: 'column', sm: 'row' }} alignItems={'start'} justifyContent={{ xs: 'start', lg: 'space-between' }} position={'relative'} zIndex={10} gap={{ xs: 3, lg: 0 }}>
                <Stack width={{ xs: '100%', sm: '40%', md: '60%' }} gap={3}>
                    <Stack direction={'row'} alignItems={'end'} gap={1}>
                        <Image src={logo} alt="NapulETH logo" height={40} width={25} />
                        <Typography variant="h5" lineHeight={1}>NapulETH</Typography>
                    </Stack>
                    <Typography variant="body1" width={{ xs: '100%', sm: '80%', md: '50%' }}>The Biggest Blockchain Event in Southern Italy, an international Web3 showcase, connects global innovators to explore Defi potential and the future of digital economy.</Typography>
                </Stack>
                <Stack width={{ xs: '100%', sm: '30%', md: '20%' }} gap={3}>
                    <Typography variant="h5">About NapulETH</Typography>
                    <Stack gap={2}>
                        <Link href="/meetups" underline="none" color={theme.palette.text.primary}>
                            <Typography variant="body1">Meetups</Typography>
                        </Link>
                        <Link href="/side-events" underline="none" color={theme.palette.text.primary}>
                            <Typography variant="body1">Side Events</Typography>
                        </Link>
                        <Link href="/agenda" underline="none" color={theme.palette.text.primary}>
                            <Typography variant="body1">Agenda</Typography>
                        </Link>
                        <Link href="/team" underline="none" color={theme.palette.text.primary}>
                            <Typography variant="body1">Team</Typography>
                        </Link>
                    </Stack>
                </Stack>
                <Stack width={{ xs: '100%', sm: '30%', md: '20%' }} gap={3}>
                    <Typography variant="h5">Stay in touch</Typography>
                    <Stack gap={2}>
                        <Link href="https://x.com/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <XIcon color="info" sx={{ filter: 'brightness(0)' }} />
                                <Typography variant="body1">@NapulETH</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://www.instagram.com/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <InstagramIcon color="info" sx={{ filter: 'brightness(0)' }} />
                                <Typography variant="body1">@napulETH</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://www.linkedin.com/company/napul-eth/?originalSubdomain=it" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <LinkedInIcon color="info" sx={{ filter: 'brightness(0)' }} />
                                <Typography variant="body1">Napul.ETH</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://t.me/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <TelegramIcon color="info" sx={{ filter: 'brightness(0)' }} />
                                <Typography variant="body1">Join Our Community</Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack display={{ xs: 'none', lg: 'flex' }} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} gap={{ xs: 1, lg: 2 }} position={'relative'} zIndex={10}>
                <Typography variant="caption" sx={{ fontWeight: 700 }}>© All rights reserved - NapulETH 2025</Typography>
            </Stack>
        </Stack>
    )
}

export default Footer;
