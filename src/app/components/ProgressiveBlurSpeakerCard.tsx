import { Stack, Typography, Box } from "@mui/material";
import { type Speaker } from "@data/SpeakersList";
import logo from '@assets/logo.webp'
import Image from "next/image";
import theme from "@theme/theme";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ProgressiveBlurSpeakerCardProps {
    speaker: Speaker;
}

const ProgressiveBlurSpeakerCard = ({ speaker }: ProgressiveBlurSpeakerCardProps) => {
    return (
        <Stack position={'relative'} overflow={'hidden'} width={'100%'} height={'60vh'} borderRadius={"1.2rem"} alignItems={'center'} justifyContent={'end'} padding={2} sx={{
            backgroundImage: `url(${speaker.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'green',
            boxShadow: '0px 5px 3px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            "&:hover": {
                ".speakerinfo": {
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                },
                ".speaker-name": {
                    color: theme.palette.text.primary,
                },
                ".speaker-appartenance": {
                    color: theme.palette.grey[600],
                },
                ".arrow-icon": {
                    opacity: 1,
                }
            }
        }}>
            <Box className="arrow-icon" position={'absolute'} top={0} right={0} padding={1} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.background.default,
                borderRadius: '50%',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                marginRight: 2,
                marginTop: 2,
                opacity: 0,
                transition: 'background-color 0.1s ease, box-shadow 0.2s ease',
                willChange: 'opacity, transform, box-shadow, background-color'
            }}>
                <MdOutlineArrowOutward size={24} color={theme.palette.grey[800]} />
            </Box>
            <Box position={'absolute'} bottom={0} left={0} width={'100%'} height={'55%'} className="gradient-blur" overflow={'hidden'}>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </Box>
            <Box className="speakerinfo" width={'100%'} marginX={'auto'} paddingX={1.5} paddingY={2.5} zIndex={10} sx={{
                borderRadius: '1.2rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.1s ease, box-shadow 0.2s ease',
                willChange: 'opacity, transform, box-shadow, background-color'
            }}>
                <Stack>
                    <Typography className="speaker-name" variant="h6" fontWeight={'bold'} color={'white'}>{speaker.name}</Typography>
                    <Typography className="speaker-appartenance" variant="subtitle1" color={theme.palette.grey[300]}>{speaker.appartenance.toString().split(',')[0]}</Typography>
                </Stack>
                <Stack>
                    <Image src={logo} alt="logo" width={30} height={45} />
                </Stack>
            </Box>
        </Stack>
    )
};

export default ProgressiveBlurSpeakerCard;

