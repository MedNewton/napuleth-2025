import { Button, Stack, Typography, Link } from "@mui/material"
import CustomCard from "@components/CustomCard"
import theme from "@theme/theme"
import Image from "next/image"

import coin from '@assets/coin.webp'
import triangle from '@assets/triangle.webp'
import thrilld from '@assets/thrilld.webp'
import grains from '@assets/grains.webp'
import mesh2 from '@assets/mesh2.webp'
import urbe from '@assets/URBE.webp'
import vision from '@assets/tyrian.webp'


const BentoSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} paddingTop={{ xs: 0, lg: 2 }} paddingBottom={{ xs: 0, lg: 2 }} paddingX={0} marginTop={-2}>
           <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={2} marginY={2}>
                <Stack width={{ xs: '100%', lg: '100%' }}>
                    <CustomCard
                        className="grain-background"
                        gradient={`linear-gradient(180deg, rgba(174, 232, 254,1) 0%, rgba(174, 232, 254,0.5) 100%)`}
                        shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                        padding={0}
                        border={`none`}>
                        <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                            <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h4" sx={{
                                        width: '75%'
                                    }}>Apply for NapulETH 2025 Hackathon</Typography>
                                    <Typography variant="h6" sx={{
                                        width: { xs: '100%', lg: '60%' },
                                        fontWeight: 400
                                    }}>
                                        Participate in the 48H hackathon of NapulETH 2025, with an attractive prize pool and numerous bounties !<br />
                                        TAIKAI is a hackathon platform that connects companies with talented developers to create solutions. We offer innovators a fun and exciting way to learn new skills, build cool projects, and earn rewards.<br />
                                    </Typography>

                                </Stack>
                            </Stack>
                            <Link href="https://form.jotform.com/250915505161350" underline="none" target="_blank">
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
                                        Apply Now On TAIKAI
                                    </Typography>
                                </Button>
                            </Link>
                            <Stack display={{ xs: 'none', lg: 'block' }}>
                                <Image src={triangle} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '30rem',
                                    width: 'auto',
                                    top: '50%',
                                    transform: 'translateY(-48%)',
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
                                    bottom: '-6rem',
                                    right: '-4.5rem',
                                    zIndex: 1
                                }} />
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
            </Stack>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={2}>
                <Stack width={{ xs: '100%', lg: '50%' }}>
                    <CustomCard
                        gradient={`linear-gradient(180deg, #F9D4FA 0%, #ecbbed 100%)`}
                        shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                        padding={0}
                        border={`none`}>
                        <Stack height={{ xs: 'fit-content', lg: '100%' }} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'start'} position={'relative'} zIndex={3} gap={{ xs: 4, lg: 2 }}>
                            <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                <Typography variant="h4" sx={{
                                    width: '75%'
                                }}>Napuleth Visions</Typography>
                                <Typography variant="h6" fontWeight={400} width={{ xs: '95%', lg: '90%' }}>
                                    The exhibition Napuleth visions, through key concepts such as hybridization, concrescence and crystallization, explores how the process of “dematerialization” of value relates to the production of meaning in art, showing how the aesthetic and economic dimensions are constantly evolving, shaped by a network of interconnected actors.
                                </Typography>
                            </Stack>
                            <Link href="https://napuleth-visions.vercel.app/" underline="none" target="_blank">
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
                                        More about the exhibition
                                    </Typography>
                                </Button>
                            </Link>
                            <Stack display={{ xs: 'none', lg: 'block' }}>
                                <Image src={vision} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '25rem',
                                    width: 'auto',
                                    bottom: '-7rem',
                                    right: '-7rem',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    zIndex: 1
                                }} />
                            </Stack><Stack display={{ xs: 'block', lg: 'none' }}>
                                <Image src={vision} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
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
                            gradient={`radial-gradient(112% 150% at 0% 100%, rgb(204, 43, 94) 0%, rgb(117, 58, 136) 100%)`}
                            shadow="0px 1px 3px rgba(0, 0, 0, 0.35)"
                            padding={0}
                            border={`none`}>
                            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h4" sx={{
                                        width: '75%'
                                    }}>URBETH campus</Typography>
                                    <Typography variant="h6" fontWeight={400} width={{ xs: '85%', lg: '80%' }}>
                                        Urbe Campus – NapulETH edition is a 5-day bootcamp by urbe.eth, aimed at beginner developers looking to get started in Web3. It covers the basics of Solidity, Hardhat, and frontend interactions.
                                    </Typography>
                                </Stack>
                                <Link href="https://lu.ma/uf32lfsw" underline="none" target="_blank">
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
                                            More about the campus
                                        </Typography>
                                    </Button>
                                </Link>
                                <Image src={urbe} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '15rem',
                                    width: 'auto',
                                    bottom: '-5rem',
                                    right: '-5rem',
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
                                    <Typography variant="h6" fontWeight={400} width={{ xs: '90%', lg: '95%' }} sx={{display: {xs: 'none', lg: 'block'}}}>
                                        NapulETH is now using Thrilld Labs as its official networking app!<br />
                                        Thrilld is a fair app that lets Web3 professionals find each other to talk business in a streamlined manner, online or at industry events.
                                    </Typography>
                                    <Typography variant="h6" fontWeight={400} width={{ xs: '90%', lg: '95%' }} sx={{display: {xs: 'block', lg: 'none'}}}>
                                        NapulETH is now using Thrilld Labs as its official networking app!
                                    </Typography>
                                </Stack>
                                <Link href="https://www.thrilldlabs.io/" underline="none" target="_blank">
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