import { Stack } from "@mui/material";
import theme from "@theme/theme";

import Navbar from "@components/Navbar";

const HeroSection = () => {
    return(
        <Stack bgcolor={theme.palette.ne_lightblue.main} width={'100%'} height={'100vh'} padding={0} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'}>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.4rem',
                position: 'absolute',
            }}>
            </Stack>
            <Navbar />
        </Stack>
    )
}

export default HeroSection;