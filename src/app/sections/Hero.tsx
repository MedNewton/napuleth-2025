import { Button, Chip, Divider, Link, Stack, Typography } from "@mui/material";
import HeroScene from "@components/HeroScene";
import Navbar from "@components/Navbar";
import theme from "@theme/theme";
import { grey } from "@mui/material/colors";


const HeroSection = () => {
    return (
        <Stack width={'100%'} height={{ xs: '89vh', lg: '95vh' }} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'} sx={{
            backgroundColor: theme.palette.ne_lightblue.main
        }}>
            <HeroScene />
            <Navbar isHome={true} />
            <Stack width={{ xs: '100%', lg: 'fit-content' }} alignItems={'center'} padding={2} position={'absolute'} bottom={0}>
                <Stack width={'100%'} borderRadius={'1.8rem'} padding={2} sx={{
                    background: { xs: 'rgba(255, 255, 255, 0)', lg: 'rgba(255, 255, 255, 1)' },
                    boxShadow: { xs: '', lg: '0 4px 30px rgba(0, 0, 0, 0.1)' },
                    backdropFilter: { xs: 'blur(0px)', lg: 'blur(1px)' },
                }}>
                    <Typography variant="h3" sx={{
                        textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                        color: { xs: theme.palette.background.default, lg: theme.palette.text.primary }
                    }}>NapulETH</Typography>
                    <Typography display={{ xs: 'none', lg: 'block' }} variant="h5" fontWeight={600} sx={{
                        textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                        color: { xs: theme.palette.background.default, lg: theme.palette.text.primary }
                    }}><span style={{ color: theme.palette.ne_darkblue.main }}>17 - 19</span> July, 2025</Typography>
                    <Typography display={{ xs: 'block', lg: 'none' }} variant="h5" fontWeight={600} sx={{
                        textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                        color: { xs: theme.palette.background.default, lg: theme.palette.text.primary }
                    }}><span style={{ color: theme.palette.ne_gold.main }}>17 - 19</span> July, 2025</Typography>
                    <Typography variant="h6" sx={{
                        textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                        color: { xs: theme.palette.background.default, lg: theme.palette.text.primary }
                    }}>Naples, Italy</Typography>
                    <Stack display={{ xs: 'flex', lg: 'none' }} direction={'column'} alignItems={'center'} width={'100%'} gap={1} marginTop={2}>
                        <Link display={{ xs: 'flex', lg: 'none' }} target="_blank" href="https://app.moongate.id/e/napul-eth-open-village-2025" underline="none">
                            <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                                backgroundColor: '#E59EF9'
                            }}>
                                <Typography variant='h5' lineHeight={1} color='white' sx={{
                                    textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                                }}>🎟️ Buy your ticket now 🎟️</Typography>
                            </Stack>
                        </Link>
                        <Link display={{ xs: 'flex', lg: 'none' }} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfLiajPY5oAQ_LNl_dQBEae6eX8fDEvytGztq1fx4jLC57Sww/viewform" underline="none">
                            <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                                backgroundColor: '#E59EF9'
                            }}>
                                <Typography variant="h5" lineHeight={1} color='white' sx={{
                                    textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                                }}>
                                    <span style={{ display: 'inline-block' }}>📣</span>
                                    &nbsp;Apply as a volunteer&nbsp;
                                    <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>📣</span>
                                </Typography>
                            </Stack>
                        </Link>
                        <Link display={{ xs: 'flex', lg: 'none' }} target="_blank" href="/speaker-application" underline="none">
                            <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                                backgroundColor: '#E59EF9'
                            }}>
                                <Typography variant="h5" lineHeight={1} color='white' sx={{
                                    textShadow: { xs: `0px 1px 5px ${theme.palette.text.primary}`, lg: `0px 1px 1px ${theme.palette.text.primary}` },
                                }}>
                                    <span style={{ display: 'inline-block' }}>📣</span>
                                    &nbsp;Apply as a speaker&nbsp;
                                    <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>📣</span>
                                </Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>

            </Stack>
            <Stack display={{ xs: 'none', lg: 'flex' }} width={{ xs: '100%', lg: 'fit-content' }} alignItems={'center'} padding={1} position={'absolute'} bottom={0} right={0}>
                <Stack width={'100%'} alignItems={'center'} borderRadius={'1.8rem'} padding={1} gap={1} sx={{
                    background: { xs: 'rgba(255, 255, 255, 0)', lg: 'rgba(255, 255, 255, 1)' },
                    boxShadow: { xs: '', lg: '0 4px 30px rgba(0, 0, 0, 0.1)' },
                    backdropFilter: { xs: 'blur(0px)', lg: 'blur(1px)' },
                }}>
                    <Link display={{ xs: 'none', lg: 'flex' }} target="_blank" href="https://app.moongate.id/e/napul-eth-open-village-2025" underline="none">
                        <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                            backgroundColor: '#E59EF9'
                        }}>
                            <Typography variant='h5' lineHeight={1}>🎟️ Buy your ticket now 🎟️</Typography>
                        </Stack>
                    </Link>
                    <Divider
                        textAlign="center"
                        sx={{
                            width: '90%',
                            mx: 'auto',
                            '&::before, &::after': {
                                borderColor: grey[400],  // Change line color
                                borderWidth: 2,  // Change line thickness
                            },
                        }}
                    >
                        <Typography variant="caption" color={grey[400]}>
                            &#9679;&nbsp;&#9679;&nbsp;&#9679;
                        </Typography>
                    </Divider>
                    <Link display={{ xs: 'none', lg: 'flex' }} target="_blank" href="/speaker-application" underline="none">
                        <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                            backgroundColor: '#E59EF9'
                        }}>
                            <Typography variant="h5" lineHeight={1}>
                                <span style={{ display: 'inline-block' }}>📣</span>
                                &nbsp;Apply as a speaker&nbsp;
                                <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>📣</span>
                            </Typography>
                        </Stack>

                    </Link>
                    <Link display={{ xs: 'none', lg: 'flex' }} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfLiajPY5oAQ_LNl_dQBEae6eX8fDEvytGztq1fx4jLC57Sww/viewform" underline="none">
                        <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                            backgroundColor: '#E59EF9'
                        }}>
                            <Typography variant="h5" lineHeight={1}>
                                <span style={{ display: 'inline-block' }}>📣</span>
                                &nbsp;Apply as a volunteer&nbsp;
                                <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>📣</span>
                            </Typography>
                        </Stack>

                    </Link>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default HeroSection;