'use client'
import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CallMadeIcon from '@mui/icons-material/CallMade';

import TopSpeakersList2024 from "@data/TopSpeakers2024";

interface Speaker {
    name: string;
    image: string;
    affiliation: string;
    link: string;
}

const TopSpeakers2024 = () => {
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
            <Stack width={'100%'} direction={'row'} alignItems={'end'} justifyContent={'space-between'}>
                <Stack>
                    <Typography variant="h4">Top Speakers</Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'end'} gap={1}>
                    <Typography variant="h5" fontWeight={500}>See more</Typography>
                    <CallMadeIcon fontSize="medium" />
                </Stack>
            </Stack>
            <Stack width={'100%'}>
                <Carousel
                    responsive={responsive}

                >
                    {
                        TopSpeakersList2024.map((item: Speaker, key) => {
                            return (
                                <Stack key={key} alignItems={'center'} gap={1} paddingX={2}>
                                    <Stack width={'100%'} height={'40vh'} borderRadius={'1.6rem'} key={key} sx={{
                                        backgroundColor: theme.palette.ne_gray.main,
                                        backgroundImage: `url('${item.image}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                    </Stack>
                                    <Typography variant="h6" fontWeight={700}>
                                        {item.name}
                                    </Typography>
                                </Stack>
                            )
                        })
                    }
                </Carousel>
            </Stack>
        </Stack>
    )
}

export default TopSpeakers2024;