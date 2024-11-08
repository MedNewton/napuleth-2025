import { Stack, Typography, Button } from "@mui/material"
import theme from "@theme/theme";
import Image from "next/image";

import logo from '@assets/logo.webp'

const Navbar = () => {
    return(
        <Stack width={'70%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={2} borderRadius={'50rem'} marginX={'auto'} marginTop={3} sx={{
            backgroundColor: theme.palette.background.default,
            transform: 'translateX(0%)'
        }}>
            <Stack direction={'row'} alignItems={'end'} gap={1}>
                <Image src={logo} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" height={34} width={22}></Image>
                <Typography variant="h5" fontWeight={600}>NapulETH</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'end'} justifyContent={'center'} gap={3}>
                <Typography variant="h6" >Home</Typography>
                <Typography variant="h6">Agenda</Typography>
                <Typography variant="h6">About</Typography>
                <Typography variant="h6">Events</Typography>
            </Stack>
            <Button variant="outlined">
                Join Us
            </Button>
        </Stack>
    )
}

export default Navbar;