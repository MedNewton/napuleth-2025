import { Stack, Typography } from "@mui/material"
import theme from "@theme/theme";
import vid from '@assets/vid.webp'
import Link from "next/link";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const NewStatSection = () => {
    return (
        <Stack width={'100%'} gap={2} position={'relative'}>
            <Stack>
                <Typography variant="h4">You Missed Us Last Year</Typography>
                <Typography variant="h6" color={theme.palette.text.secondary}>This time, don’t just watch — build, learn, and connect. 2024 recap👇</Typography>
            </Stack>
            <Stack width={'100%'} gap={2} position={'relative'} direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} justifyContent={'center'} sx={{
                backgroundColor: theme.palette.ne_darkblue.main,
                borderRadius: 8,
                padding: 2,
            }}>
                <Stack flexGrow={1} minHeight={{ xs: "25vh", lg: "100%" }} width={{ xs: '100%', lg: '50%' }} alignItems={'center'} justifyContent={'center'} borderRadius={6} sx={{
                    backgroundImage: `url('${vid.src}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)', // Darken the image with a semi-transparent black
                        pointerEvents: 'none', // Prevent overlay from interfering with interactions
                    },
                }}>
                    <Link
                        href="https://x.com/napuleth/status/1852008850938880080?s=52"
                        target="_blank"
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none'
                        }}
                    >
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{
                            scale: '2.5'
                        }}>
                            <PlayCircleOutlineIcon color="info" fontSize="large" />
                            <Typography variant="caption" fontWeight={600} color={theme.palette.background.default} position={'relative'} zIndex={5}>2024 Aftermovie</Typography>
                        </Stack>
                    </Link>
                </Stack>
                <Stack flexGrow={1} width={{ xs: '100%', lg: '50%' }} height={'100%'} justifyContent={{ xs: "start", lg: "space-between" }} gap={2}>
                    <Stack width="100%" sx={{
                        backgroundColor: theme.palette.ne_gold.main,
                        borderRadius: 6,
                        padding: 2,
                    }}>
                        <Typography variant="h4" fontWeight={600}>30+ Sponsors</Typography>
                        <Typography variant="h6" fontWeight={500}>From different sectors participated in making NapulETH 2024 a great event.</Typography>
                    </Stack>
                    <Stack width="100%" sx={{
                        backgroundColor: theme.palette.ne_lightblue.main,
                        borderRadius: 6,
                        padding: 2,
                    }}>
                        <Typography variant="h4" fontWeight={600}>60+ Partners</Typography>
                        <Typography variant="h6" fontWeight={500}>From and outside Italy did their best to make NapulETH 2024 better.</Typography>
                    </Stack>
                    <Stack width="100%" sx={{
                        backgroundColor: theme.palette.ne_rose.main,
                        borderRadius: 6,
                        padding: 2,
                    }}>
                        <Typography variant="h4" fontWeight={600}>900+ Attendees</Typography>
                        <Typography variant="h6" fontWeight={500}>Who visited and loved NapulETH2024 ❤️❤️</Typography>
                    </Stack>
                    <Stack width="100%" sx={{
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 6,
                        padding: 2,
                    }}>
                        <Typography variant="h4" fontWeight={600}>80+ Speakers</Typography>
                        <Typography variant="h6" fontWeight={500}>From different backgrounds, industries and countries, enriched NapulETH.</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NewStatSection;