import { Stack, Typography, Box, Link } from "@mui/material";
import { type Speaker } from "@data/SpeakersList";
import Image from "next/image";
import theme from "@theme/theme";

interface ProgressiveBlurSpeakerCardProps {
    speaker: Speaker;
}

const ProgressiveBlurSpeakerCard = ({ speaker }: ProgressiveBlurSpeakerCardProps) => {
    return (
        <Stack position={'relative'} overflow={'hidden'} width={'100%'} height={{ xs: '30vh', lg: '40vh' }} borderRadius={"1.2rem"} alignItems={'center'} justifyContent={'end'} padding={{ xs: 1, lg: 1 }} sx={{
            boxShadow: '0px 5px 3px rgba(0, 0, 0, 0.2)',
            "&:hover": {
                "@media (hover: hover)": {
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
            }
        }}>
            <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
                <Image src={speaker.image} alt={speaker.name} fill quality={60} priority={false} style={{objectFit:"cover",}} />
            </Box>
            <Box position={'absolute'} bottom={0} left={0} width={'100%'} height={'45%'} className="gradient-blur" overflow={'hidden'}>
                <Box />
            </Box>
            <Box className="speakerinfo" width={'100%'} marginX={'auto'} paddingX={1.5} paddingY={2} zIndex={10} sx={{
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.1s ease, box-shadow 0.2s ease',
                willChange: 'opacity, transform, box-shadow, background-color'
            }}>
                <Stack>
                    <Typography className="speaker-name" variant="h6" fontWeight={'bold'} color={'white'}>{speaker.name}</Typography>
                    <Link href={speaker.appartenance[0]?.url} target="_blank" rel="noopener noreferrer" underline="none">
                        <Typography className="speaker-appartenance" variant="subtitle1" color={theme.palette.grey[300]}>{speaker.appartenance[0]?.name}</Typography>
                    </Link>
                </Stack>

            </Box>
        </Stack>
    )
};

export default ProgressiveBlurSpeakerCard;

