'use client'
import { Stack, Typography, Button, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ArrowProps } from 'react-multi-carousel/lib/types';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { type Partner, PartnersList } from "@data/Partners";

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
    myOwnStuff: string;
}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} left={0} marginX={{ xs: 0.5, lg: 5 }} sx={{
            scale: { xs: '0.6', lg: '1' },
            top: '20%',
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowBackIosIcon fontSize="medium" sx={{
                    marginLeft: 1
                }} />
            </Button>
        </Stack>
    );
};

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} right={0} marginX={{ xs: 0.5, lg: 5 }} sx={{
            scale: { xs: '0.6', lg: '1' },
            top: '20%',
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowForwardIosIcon fontSize="medium" />
            </Button>
        </Stack>
    );
};


const Partners = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">Our Partners</Typography>
            <Stack width={'100%'} display={{ xs: 'flex', lg: 'none' }}>
                <Carousel
                    responsive={responsive}
                    autoPlay
                    customLeftArrow={<CustomLeftArrow myOwnStuff={""} />}
                    customRightArrow={<CustomRightArrow myOwnStuff={""} />}
                >
                    {
                        PartnersList.map((partner: Partner, key) => {
                            return (
                                <Stack key={key} alignItems={'center'} gap={2} marginX={{ xs: 1, lg: 0 }} paddingX={{ xs: 0, lg: 2 }}>
                                    <Stack width={'100%'} height={'16vh'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.6rem'} padding={2} key={key} sx={{
                                        backgroundColor: theme.palette.ne_gold.main,
                                        "&:hover": {
                                            backgroundColor: "rgb(255, 234, 117)",
                                        }
                                    }}>
                                        <Link href={partner.link} target="_blank" underline="none" width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                            <Stack width={{ xs: '45%', md: '35%' }} height={{ xs: '45%', md: '35%' }} sx={{
                                                backgroundImage: `url('${partner.logo}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: { xs: 'contain', lg: partner.percentage },
                                                backgroundRepeat: 'no-repeat'
                                            }}></Stack>
                                        </Link>
                                    </Stack>
                                    <Link href={partner.link} target="_blank" underline="none">
                                        <Typography variant="h6" width={'100%'} textAlign={'center'} fontSize={{ xs: '2rem', lg: '1.4rem' }} fontWeight={700}>
                                            {partner.name}
                                        </Typography>
                                    </Link>
                                </Stack>
                            )
                        })
                    }
                </Carousel>
            </Stack>
            <Stack width={'100%'} display={{ xs: 'none', lg: 'flex' }}>
                <Grid container spacing={2}>
                    {
                        PartnersList.map((partner: Partner, key) => {
                            return <Grid key={key} size={{ xs: 12, md: 4, lg: 2, xl: 2 }}>
                                <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.6rem'} padding={2} key={key} sx={{
                                    backgroundColor: theme.palette.ne_gold.main,
                                    aspectRatio: 4.5 / 2,
                                    "&:hover": {
                                        backgroundColor: "rgb(255, 234, 117)",
                                    }
                                }}>
                                    <Link href={partner.link} target="_blank" underline="none" width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <Stack width={{ xs: '80%', lg: '80%' }} height={{ xs: '80%', lg: '80%' }} sx={{
                                            backgroundImage: `url('${partner.logo}')`,
                                            backgroundPosition: 'center',
                                            backgroundSize: { xs: 'contain', lg: partner.percentage },
                                            backgroundRepeat: 'no-repeat'
                                        }}></Stack>
                                    </Link>
                                </Stack>
                                <Link href={partner.link} target="_blank" underline="none" width={'fit-content'}>
                                    <Typography variant="h6" textAlign={'center'} marginTop={2} fontSize={{ xs: '2rem', lg: '1.4rem' }} fontWeight={700}>
                                        {partner.name}
                                    </Typography>
                                </Link>
                            </Grid>
                        })
                    }
                </Grid>
            </Stack>
        </Stack>
    )
}

export default Partners;