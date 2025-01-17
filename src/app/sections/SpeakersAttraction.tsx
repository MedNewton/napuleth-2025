import { Stack, Typography, Button } from "@mui/material"
import theme from "@theme/theme"
import Link from '@mui/material/Link';
import Marquee from "react-fast-marquee";

import bg from "@assets/img1.webp"

import CallMadeIcon from '@mui/icons-material/CallMade';
import TrackPill from "@components/trackPill";

const AttractSpeakers = () => {
    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={1.5}>
            <Stack width={{ xs: '100%', lg: '60%' }} gap={1.5}>
                <Typography display={{ xs: 'none', lg: 'block' }} variant="h3" width={'90%'}>
                    Bringing New Faces To The Fascinating World Of <span style={{
                        padding: '0.6rem',
                        borderRadius: '5rem',
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>Ethereum</span>
                </Typography>
                <Typography display={{ xs: 'block', lg: 'none' }} variant="h4" fontSize={'2.5rem'} width={'92%'}>
                    Bringing New Faces To The Fascinating World Of <span style={{
                        padding: '0.6rem',
                        borderRadius: '5rem',
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>Ethereum</span>
                </Typography>
                <Stack width={'100%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} gap={{ xs: 4, lg: 0 }} sx={{
                    backgroundImage: `url('${bg.src}')`,
                    backgroundPosition: 'center',
                    backgroundSize: '130%',
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: { xs: 'auto', lg: 16 / 9 }
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <Link href="/coming_soon" underline="none">
                            <Button sx={{
                                backgroundColor: theme.palette.background.default,
                                paddingRight: 2,
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: "black",
                                    color: theme.palette.background.default
                                }
                            }}>
                                <Typography variant="h6" paddingX={1} paddingY={0.5} lineHeight={1}>Become a Sponsor</Typography>
                            </Button>
                        </Link>
                    </Stack>
                    <Stack width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'start'}>
                        <Stack width={{ xs: '100%', lg: '80%' }} gap={1} sx={{
                            backgroundColor: theme.palette.background.default,
                            padding: 2,
                            borderRadius: '1.2rem',
                        }}>
                            <Typography variant="h4" lineHeight={1.2}>Become a sponsor of the biggest Web3 event in southern Italy: NapulETH 2025 </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={{ xs: '100%', lg: '40%' }} gap={1.5}>
                <Stack width={'100%'} height={'50%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} sx={{
                    backgroundColor: theme.palette.ne_lightblue.main
                }}>
                    <Stack gap={{ xs: 2, sm: 5, lg: 1 }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography variant="h4">Pitch Deck</Typography>
                            <Link underline="hover" href="https://online.fliphtml5.com/ogjyx/lysx/" target="_blank" rel="noopener">
                                <Button sx={{
                                    backgroundColor: theme.palette.background.default,
                                    paddingRight: 2,
                                    whiteSpace: 'nowrap',
                                    borderRadius: '50%',
                                    aspectRatio: 1,
                                    padding: 0,
                                    '&:hover': {
                                        backgroundColor: "black",
                                        color: theme.palette.background.default
                                    }
                                }}>
                                    <CallMadeIcon fontSize="large" />
                                </Button>
                            </Link>
                        </Stack>
                        <Typography variant="h6" width={{ xs: '100%', lg: '60%' }}>Get to know all the necessary info about NapulETH 2025 : Tracks, Goals, and much more ...</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'fit-content'}>
                        <Typography variant="h5" whiteSpace={'nowrap'}>
                            <Link underline="always" href="https://docsend.com/view/t82k4qh9djnp3jmz" target="_blank" rel="noopener" sx={{
                                textDecorationColor: theme.palette.text.primary,
                                textUnderlineOffset: 2
                            }}>Read</Link>
                            &nbsp;or&nbsp;
                            <Link underline="always" href="/napuleth_2025_pitch_deck.pdf" target="_blank" rel="noopener" sx={{
                                textDecorationColor: theme.palette.text.primary,
                                textUnderlineOffset: 2
                            }}>Download</Link>
                            &nbsp;the pitch deck
                        </Typography>
                    </Stack>
                </Stack>
                <Stack width={'100%'} height={{ xs: '100%', lg: '50%' }} borderRadius={'1.8rem'} padding={{ xs: 2, lg: 2 }} position={'relative'} justifyContent={{ xs: 'end', lg: 'start' }} sx={{
                    backgroundColor: theme.palette.ne_green.main,
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'start'}>
                        <Typography variant="h4">NapulETH Event Tracks</Typography>

                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} position={'relative'} zIndex={2} width={{ xs: '100%', lg: '80%' }}>
                        <Typography variant="h6">Come share your ideas with the community on more than 30 different tracks: from DeFi to NFTs, from AI to Web3, from Gaming to Metaverse, from DA to DAOs, and much more!</Typography>
                    </Stack>
                    <Stack height={'fit-content'} paddingBottom={1} marginTop={4} direction={'column'} gap={1} alignItems={'center'} justifyContent={'end'} paddingTop={{ xs: 3, lg: 0 }}>
                        <Stack width={'100%'} justifyContent={'center'} height={'100%'}>
                            <Marquee direction="right" loop={0}
                                style={{
                                    height: '100%',
                                }}
                        >
                            <TrackPill track="DeFi" color={theme.palette.ne_gold.main} />
                            <TrackPill track="NFTs" color={theme.palette.ne_gray.main} />
                            <TrackPill track="AI" color={theme.palette.ne_darkblue.main} />
                            <TrackPill track="Education" color={theme.palette.ne_lightblue.main} />
                            <TrackPill track="Digital Identity" color={theme.palette.ne_purple.main} />
                            <TrackPill track="Gaming Theory" color={theme.palette.ne_rose.main} />
                            <TrackPill track="Art" color={theme.palette.ne_gold.main} />
                            <TrackPill track="Bitcoin" color={theme.palette.warning.main} />
                            <TrackPill track="Community" color={theme.palette.ne_darkblue.main} />
                            <TrackPill track="Quantum" color={theme.palette.ne_lightblue.main} />
                            <TrackPill track="Security" color={theme.palette.ne_purple.main} />
                            <TrackPill track="Scaling" color={theme.palette.ne_rose.main} />
                            <TrackPill track="Staking" color={theme.palette.ne_purple.main} />
                            <TrackPill track="UX" color={theme.palette.ne_darkblue.main} />
                            <TrackPill track="Auditing" color={theme.palette.ne_lightblue.main} />
                            <TrackPill track="Marketing" color={theme.palette.ne_rose.main} />
                            <TrackPill track="Privacy" color={theme.palette.ne_purple.main} />
                            <TrackPill track="SocialFi" color={theme.palette.ne_darkblue.main} />
                            <TrackPill track="Zk proofs" color={theme.palette.ne_lightblue.main} />
                            
                        </Marquee>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AttractSpeakers