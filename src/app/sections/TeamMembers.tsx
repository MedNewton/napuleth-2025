'use client'
import { Stack, Typography, Button } from "@mui/material";
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ButtonGroupProps, type ArrowProps } from 'react-multi-carousel/lib/types';

import CallMadeIcon from '@mui/icons-material/CallMade';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { type TeamMember, TeamMembersList } from "@data/Team";

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
    myOwnStuff: string;
}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} marginX={5}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                width: '100%',
                height: '100%',
                maxWidth: '100%',
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
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} right={0} marginX={5}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowForwardIosIcon fontSize="medium" />
            </Button>
        </Stack>
    );
};


interface Speaker {
    name: string;
    image: string;
    affiliation: string;
    link: string;
}



const TeamMembers = () => {
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
            <Typography variant="h4">Our Team</Typography>
            <Stack width={'100%'}>
                <Carousel
                    responsive={responsive}
                    customLeftArrow={<CustomLeftArrow myOwnStuff={""} />}
                    customRightArrow={<CustomRightArrow myOwnStuff={""} />}
                >
                    {
                        TeamMembersList.map((member: TeamMember, key) => {
                            return (
                                <Stack key={key} alignItems={'center'} gap={2} paddingX={2}>
                                    <Stack width={'100%'} height={'40vh'} borderRadius={'1.6rem'} key={key} sx={{
                                        backgroundColor: theme.palette.ne_gray.main,
                                        backgroundImage: `url('${member.image}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                    </Stack>
                                    <Stack width={'100%'} alignItems={'center'} gap={0.5}>
                                        <Typography variant="h6" fontWeight={700}>
                                            {member.name}
                                        </Typography>
                                        <Stack width={'100%'} alignItems={'center'} paddingX={3} paddingY={1} borderRadius={10} sx={{
                                            backgroundColor: theme.palette.ne_lightblue.main
                                        }}>
                                            <Typography variant="h6" textAlign={'center'} fontWeight={500}>
                                                {member.position}
                                            </Typography>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            )
                        })
                    }
                </Carousel>
            </Stack>
        </Stack>
    )
}

export default TeamMembers;