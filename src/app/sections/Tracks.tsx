'use client'

import { Stack, Typography, Chip, Link } from "@mui/material"
import Grid from "@mui/material/Grid2"
import theme from "@theme/theme";
import { tags } from "@data/Agenda";
import { keyframes } from "@mui/system";

const Tracks = () => {
    const colors = [theme.palette.ne_gold.main, theme.palette.ne_lightblue.main, theme.palette.ne_rose.main, theme.palette.ne_darkblue.main, theme.palette.ne_green.main, theme.palette.ne_purple.main]

    // Function to generate random color keyframes for each chip
    const generatePulseAnimation = (baseColor: string) => {
        // Get 2 random colors different from the base color
        const otherColors = colors.filter(c => c !== baseColor);
        const randomColor1 = otherColors[Math.floor(Math.random() * otherColors.length)];
        const randomColor2 = otherColors[Math.floor(Math.random() * otherColors.length)];

        return keyframes`
            0% {
                background-color: ${baseColor};
                transform: scale(1);
            }
            33% {
                background-color: ${randomColor1};
                transform: scale(1.05);
            }
            66% {
                background-color: ${randomColor2};
                transform: scale(1.03);
            }
            100% {
                background-color: ${baseColor};
                transform: scale(1);
            }
        `;
    }

    return (
        <Stack width={'100%'} gap={2} position={'relative'}>

            <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} justifyContent={'space-between'}>
                <Stack width={{ xs: '100%', lg: '50%' }} alignItems={'start'} justifyContent={'space-between'} flexGrow={1} paddingBottom={2.5} gap={{ xs: 2, lg: 0 }}>
                    <Stack>
                        <Typography variant="h4">Themes & Topics</Typography>
                        <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2025</Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight={400}>NapulETH events explore the intersection of blockchain innovation, local culture, and contemporary art. They bring together developers, artists, and thinkers to reimagine the future of decentralization through hands-on workshops, exhibitions, and community discussions. Key themes include the democratization of technology, the transformation of value in the digital age, and the social impact of Web3. By grounding global ideas in the unique cultural context of Naples, NapulETH fosters a space where tradition and innovation merge to spark new forms of collaboration and expression.</Typography>
                    <Link href="/agenda" target="_blank" underline="none" rel="noopener" sx={{
                        display: { xs: 'none', lg: 'flex' },
                        marginTop: 2
                    }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{
                            width: 'fit-content',
                            backgroundColor: theme.palette.ne_darkblue.main,
                            paddingX: 3,
                            paddingTop: 2,
                            paddingBottom: 1.5,
                            borderRadius: 20
                        }}>
                            <Typography variant="h5" fontWeight={600}>See Our Agenda</Typography>
                        </Stack>
                    </Link>
                </Stack>
                <Stack width={{ xs: '100%', lg: '50%' }} flexGrow={1} gap={{ xs: 1.5, lg: 2 }} direction={{ xs: 'row', lg: 'row' }} flexWrap={'wrap'} alignItems={'start'} justifyContent={{ xs: 'center', lg: 'start' }} sx={{ padding: { xs: 0, lg: 2 } }}>
                    {tags.map((tag, index) => {
                        const baseColor = colors[index % colors.length];
                        const pulseAnimation = generatePulseAnimation(baseColor!);
                        const delay = `${Math.random() * 2}s`;
                        const duration = `${3 + Math.random() * 2}s`; // 3-5 seconds duration

                        return (
                            <Chip
                                size="medium"
                                key={index}
                                label={tag}
                                sx={{
                                    width: 'fit-content',
                                    background: baseColor,
                                    color: "#000000",
                                    fontWeight: 600,
                                    animation: `${pulseAnimation} ${duration} ease-in-out infinite`,
                                    animationDelay: delay,
                                    '& .MuiChip-label': {
                                        color: '#000000 !important',
                                    },
                                    '&:hover': {
                                        animationPlayState: 'paused',
                                        background: baseColor,
                                        transform: 'scale(1)'
                                    }
                                }}
                            />
                        )
                    })}
                </Stack>
                <Link href="/agenda" target="_blank" underline="none" rel="noopener" sx={{
                    display: { xs: 'flex', lg: 'none' },
                    marginX: 'auto',
                    marginTop: 4
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{
                        width: 'fit-content',
                        backgroundColor: theme.palette.ne_darkblue.main,
                        paddingX: 3,
                        paddingTop: 2,
                        paddingBottom: 1.5,
                        borderRadius: 20
                    }}>
                        <Typography variant="h5" fontWeight={600}>See Our Agenda</Typography>
                    </Stack>
                </Link>

            </Stack>

        </Stack>
    )
}

export default Tracks;