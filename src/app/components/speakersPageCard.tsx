import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";
import { type Speaker } from "@data/SpeakersList";

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakersPageCard = ({ speaker }: SpeakerCardProps) => {
    return (
        <Stack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'} gap={3} sx={{
            cursor: 'pointer',
            backgroundColor: theme.palette.ne_darkblue.main,
            borderRadius: '1rem',
            "&:hover": {
                backgroundColor: theme.palette.ne_lightblue.main,
                "& .speaker-image": {
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out'
                }
            }
        }}>
            <Image className="speaker-image" src={speaker.image} alt={speaker.name} width={200} height={200} style={{
                borderRadius: '0.8rem',
                aspectRatio: '1/1',
                boxShadow: `
                                    0 0 #000000,
                                    0 0 #000000,
                                    0 6px 18px rgba(0, 0, 0, 0.3)
                                    `
            }} />
            <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant="h6" fontWeight={700}>{speaker.name}</Typography>
                <Typography variant="subtitle2" fontWeight={500} textAlign={'center'} maxWidth={'80%'}>{speaker.appartenance}</Typography>
            </Stack>

        </Stack>
    )
}

export default SpeakersPageCard;