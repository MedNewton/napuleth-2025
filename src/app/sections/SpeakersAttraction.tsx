import { Stack, Typography } from "@mui/material"
import theme from "@theme/theme"
import Marquee from "react-fast-marquee";
import TrackPill from "@components/trackPill";

const AttractSpeakers = () => {
    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'}>
            <Stack width={{ xs: '100%', lg: '100%' }} gap={1.5}>
                <Stack width={'100%'} height={{ xs: '100%', lg: '100%' }} borderRadius={'1.8rem'} padding={{ xs: 2, lg: 2 }} position={'relative'} justifyContent={{ xs: 'end', lg: 'start' }} sx={{
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