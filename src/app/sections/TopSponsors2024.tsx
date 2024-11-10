'use client'

import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";
import { TopSponsorsList, type Sponsor } from "@data/TopSponsors";
import Marquee from "react-fast-marquee";
import logo from '@assets/logo.webp'

const TopSponsors2024 = () => {

    const colors = ["#EDD4FE", "#FDC1FF", "#AEE8FE", "#F7E78E", "#BCFBC2", "#6FBDE2"];

    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} gap={{ xs: 2, lg: 1.5 }}>
            <Stack width={{ xs: '100%', lg: '40%' }} justifyContent={'space-between'} paddingBottom={2} gap={{ xs: 2, lg: 0 }}>
                <Stack display={{ xs: 'none', lg: 'flex' }} gap={1}>
                    <Image src={logo} alt="" height={60} width={34}></Image>
                    <Typography variant="h4">Top Sponsors</Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
                </Stack>
                <Stack display={{ xs: 'flex', lg: 'none' }}>
                    <Typography variant="h4">Top Sponsors</Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography variant="h6">NapulETH 2024 was sponsored by leading blockchain and crypto companies, contributing to the event{"'"}s success through resources and networking opportunities.</Typography>
                </Stack>
            </Stack>

            <Stack width={{ xs: '100%', lg: '60%' }} height={{xs: 'auto', lg: '60vh'}} position={'relative'} overflow={'hidden'}>
                <Stack display={{ xs: 'none', lg: 'flex' }} height={'100%'} width={'1vw'} position={'absolute'} left={0} top={0} zIndex={2} sx={{
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '5px 0px 50px 50px rgba(255,255,255,1)'
                }}></Stack>
                <Stack height={{xs: '14vh', lg: '20vh'}}>
                    <Marquee
                        direction="left"
                        style={{
                            height: '100%',
                        }}
                    >
                        {
                            TopSponsorsList.map((item: Sponsor, key) => {
                                return (
                                    <Stack alignItems={'center'} justifyContent={'center'} padding={3} marginX={{xs: 0.5, lg: 1}} width={{xs: 200, lg: 250}} height={{xs: '10vh', lg: '18vh'}} borderRadius={'10rem'} key={key} sx={{
                                        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                    }}>
                                        <Stack width={'80%'} height={'80%'} sx={{
                                            backgroundImage: `url('${item.logo}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: item.percentage
                                        }}></Stack>
                                    </Stack>
                                )
                            })
                        }
                    </Marquee>
                </Stack>
                <Stack height={{xs: '14vh', lg: '20vh'}}>
                    <Marquee
                        direction="right"
                        style={{
                            height: '100%',
                        }}
                    >
                        {
                            TopSponsorsList.map((item: Sponsor, key) => {
                                return (
                                    <Stack alignItems={'center'} justifyContent={'center'} padding={3} marginX={{xs: 0.5, lg: 1}} width={{xs: 200, lg: 250}} height={{xs: '10vh', lg: '18vh'}} borderRadius={'10rem'} key={key} sx={{
                                        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                    }}>
                                        <Stack width={'80%'} height={'80%'} sx={{
                                            backgroundImage: `url('${item.logo}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: item.percentage
                                        }}></Stack>
                                    </Stack>
                                )
                            })
                        }
                    </Marquee>
                </Stack>
                <Stack height={{xs: '14vh', lg: '20vh'}}>
                    <Marquee
                        direction="left"
                        style={{
                            height: '100%',
                        }}
                    >
                        {
                            TopSponsorsList.map((item: Sponsor, key) => {
                                return (
                                    <Stack alignItems={'center'} justifyContent={'center'} padding={3} marginX={{xs: 0.5, lg: 1}} width={{xs: 200, lg: 250}} height={{xs: '10vh', lg: '18vh'}} borderRadius={'10rem'} key={key} sx={{
                                        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                    }}>
                                        <Stack width={'80%'} height={'80%'} sx={{
                                            backgroundImage: `url('${item.logo}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: item.percentage
                                        }}></Stack>
                                    </Stack>
                                )
                            })
                        }
                    </Marquee>
                </Stack>
                <Stack display={{ xs: 'none', lg: 'flex' }} height={'100%'} width={'1vw'} position={'absolute'} right={0} top={0} zIndex={2} sx={{
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '-5px 0px 50px 50px rgba(255,255,255,1)'
                }}></Stack>
            </Stack>
        </Stack>
    )
}

export default TopSponsors2024