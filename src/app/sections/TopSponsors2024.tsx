'use client'

import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";
import { TopSponsorsList } from "@data/TopSponsors";
import Marquee from "react-fast-marquee";
import logo from '@assets/logo.webp'



interface Sponsor {
    name: string;
    logo: string;
    link: string;
}

const TopSponsors2024 = () => {

    const colors = ["#EDD4FE", "#FDC1FF", "#AEE8FE", "#F7E78E", "#BCFBC2", "#6FBDE2"];

    return (
        <Stack width={'100%'} direction={'row'} alignItems={'stretch'} gap={1.5}>
            <Stack width={'40%'} justifyContent={'space-between'} paddingBottom={2}>
                <Stack gap={1}>
                    <Image src={logo} alt="" height={60} width={34}></Image>
                    <Typography variant="h4">Top Sponsors</Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography variant="h6">NapulETH 2024 was sponsored by leading blockchain and crypto companies, contributing to the event{"'"}s success through resources and networking opportunities.</Typography>
                </Stack>
            </Stack>

            <Stack width={'60%'} height={'60vh'} position={'relative'} overflow={'hidden'}>
                <Stack height={'100%'} width={'1vw'} position={'absolute'} left={0} top={0} zIndex={2} sx={{
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '5px 0px 50px 50px rgba(255,255,255,1)'
                }}></Stack>
                <Marquee
                    direction="left"
                    style={{
                        height: '20vh',
                    }}
                >
                    {
                        TopSponsorsList.map((item: Sponsor, key) => {
                            return (
                                <Stack padding={3} marginX={1} width={250} height={'18vh'} borderRadius={'10rem'} key={key} sx={{
                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                }}>

                                </Stack>
                            )
                        })
                    }
                </Marquee>
                <Marquee
                    direction="right"
                    style={{
                        height: '20vh'
                    }}
                >
                    {
                        TopSponsorsList.map((item: Sponsor, key) => {
                            return (
                                <Stack padding={3} marginX={1} width={250} height={'18vh'} borderRadius={'10rem'} key={key} sx={{
                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                }}>

                                </Stack>
                            )
                        })
                    }
                </Marquee>
                <Marquee
                    direction="left"
                    style={{
                        height: '20vh'
                    }}
                >
                    {
                        TopSponsorsList.map((item: Sponsor, key) => {
                            return (
                                <Stack padding={3} marginX={1} width={250} height={'18vh'} borderRadius={'10rem'} key={key} sx={{
                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                                }}>

                                </Stack>
                            )
                        })
                    }
                </Marquee>
                <Stack height={'100%'} width={'1vw'} position={'absolute'} right={0} top={0} zIndex={2} sx={{
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '-5px 0px 50px 50px rgba(255,255,255,1)'
                }}></Stack>
            </Stack>
        </Stack>
    )
}

export default TopSponsors2024