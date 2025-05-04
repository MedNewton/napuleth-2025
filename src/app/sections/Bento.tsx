import { Button, Stack, Typography, Link } from "@mui/material"
import CustomCard from "@components/CustomCard"
import theme from "@theme/theme"
import Image from "next/image"

import coin from '@assets/coin.png'
import triangle from '@assets/triangle.png'
import thrilld from '@assets/thrilld.png'
import grains from '@assets/grains.webp'
import mesh2 from '@assets/mesh2.png'


const BentoSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} paddingTop={{ xs: 0, lg: 2 }} paddingBottom={{ xs: 0, lg: 2 }} paddingX={0}>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={2}>
                <Stack width={{ xs: '100%', lg: '50%' }}>
                    <CustomCard
                        className="grain-background"
                        gradient={`linear-gradient(180deg, rgba(237,212,254,1) 0%, rgba(237,212,254,0.5) 100%)`}
                        shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                        padding={0}
                        border={`none`}>
                        <Stack height={{ xs: 'fit-content', lg: '100%' }} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'start'} position={'relative'} zIndex={3} gap={{ xs: 4, lg: 2 }}>
                            <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                <Typography variant="h4" sx={{
                                    width: '75%'
                                }}>Apply for NapulETH 2025 Hackathon</Typography>
                                <Typography display={{ xs: 'none', lg: 'block' }} variant="h6" sx={{
                                    width: '95%',
                                    fontWeight: 400
                                }}>
                                    Participate in the 48H hackathon of NapulETH 2025, with an attractive prize pool and numerous bounties !<br />
                                    TAIKAI is a hackathon platform that connects companies with talented developers to create solutions. We offer innovators a fun and exciting way to learn new skills, build cool projects, and earn rewards.<br />
                                </Typography>
                                <Typography variant="h6" display={{ xs: 'block', lg: 'none' }} sx={{
                                    width: '95%',
                                    fontWeight: 400
                                }}>
                                    Participate in the 48H hackathon of NapulETH 2025, with an attractive prize pool and numerous bounties !<br />
                                    TAIKAI is a web3-based open innovation and hackathon platform that enables organizations to host challenges, competitions, and hackathons to crowdsource solutions from developers, designers, and entrepreneurs.<br />
                                </Typography>
                            </Stack>
                            <Link href="https://chain.link/cross-chain" underline="none" target="_blank">
                                <Button variant='outlined' sx={{
                                    background: theme.palette.info.main,
                                    fontWeight: 700,
                                    position: 'relative',
                                    zIndex: 2,
                                    '&:hover': {
                                        backgroundColor: "black",
                                        color: theme.palette.background.default
                                    }
                                }}>
                                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                                        Apply Now On TAIKAI
                                    </Typography>
                                </Button>
                            </Link>
                            <Stack display={{ xs: 'none', lg: 'block' }}>
                                <Image src={triangle} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '25rem',
                                    width: 'auto',
                                    bottom: '-8rem',
                                    right: '-7rem',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    zIndex: 1
                                }} />
                            </Stack><Stack display={{ xs: 'block', lg: 'none' }}>
                                <Image src={triangle} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '15rem',
                                    width: 'auto',
                                    bottom: '-5rem',
                                    right: '-4.5rem',
                                    zIndex: 1
                                }} />
                            </Stack>
                        </Stack>
                    </CustomCard>

                </Stack>
                <Stack width={{ xs: '100%', lg: '50%' }} direction={'column'} gap={2}>
                    <Stack width={'100%'} height={'50%'}>
                        <CustomCard
                            gradient={`linear-gradient(180deg, #AEE8FE 0%, #CEF1FF 100%)`}
                            shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                            padding={0}
                            border={`none`}>
                            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h4" sx={{
                                        width: '75%'
                                    }}>Napuleth x Federico II</Typography>
                                    <Typography variant="h6" fontWeight={400} width={{ xs: '90%', lg: '80%' }}>
                                        Napuleth joined the University of Naples Federico II for Blockchain Day, highlighting our shared focus on innovation and real-world blockchain impact.
                                    </Typography>
                                </Stack>
                                <Link href="https://arbitrum.io/" underline="none" target="_blank">
                                    <Button variant='outlined' sx={{
                                        background: theme.palette.background.default,
                                        fontWeight: 700,
                                        position: 'relative',
                                        zIndex: 2,
                                        '&:hover': {
                                            backgroundColor: "black",
                                            color: theme.palette.background.default
                                        }
                                    }}>
                                        <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                                            Find Out More
                                        </Typography>
                                    </Button>
                                </Link>
                                <Image src={coin} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '12rem',
                                    width: 'auto',
                                    bottom: '-3rem',
                                    right: '-3rem',
                                    zIndex: 1
                                }} />
                            </Stack>
                        </CustomCard>
                    </Stack>
                    <Stack width={'100%'} height={'50%'}>
                        <CustomCard
                            gradient={`url('${mesh2.src}') repeat-y bottom/cover`}
                            shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                            padding={0}
                            border={`none`}>
                            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h4" sx={{
                                        width: '100%'
                                    }}>Leveraging Thrilld Labs</Typography>
                                    <Typography variant="h6" fontWeight={400} width={{ xs: '90%', lg: '95%' }}>
                                        NapulETH is now using Thrilld Labs as its official networking app!<br />
                                        Thrilld is a fair app that lets Web3 professionals find each other to talk business in a streamlined manner, online or at industry events.
                                    </Typography>
                                </Stack>
                                <Link href="https://thirdweb.com/" underline="none" target="_blank">
                                    <Button variant='outlined' sx={{
                                        background: theme.palette.info.main,
                                        fontWeight: 700,
                                        position: 'relative',
                                        zIndex: 2,
                                        '&:hover': {
                                            backgroundColor: "black",
                                            color: theme.palette.background.default
                                        }
                                    }}>
                                        <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                                            Download Thrilld
                                        </Typography>
                                    </Button>
                                </Link>
                                <Image src={thrilld} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '12rem',
                                    width: 'auto',
                                    bottom: '-5rem',
                                    right: '-4rem',
                                    zIndex: 1,
                                    opacity: 0.8
                                }} />
                            </Stack>
                        </CustomCard>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BentoSection