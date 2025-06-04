import { Link, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import { type Speaker, speakersList } from "@data/SpeakersList";
import SpeakerCard from "@components/speakerCard";
import Image from "next/image";
import horn from "@assets/rockHand.webp";
import ProgressiveBlurSpeakerCard from "@components/ProgressiveBlurSpeakerCard";
import { MdOutlineArrowOutward } from "react-icons/md";

const Speakers = () => {
    const featuredSpeakers: Speaker[] = [speakersList[8]!, speakersList[7]!, speakersList[10]!, speakersList[15]!]
    return (
        <Stack width={'100%'} gap={2} overflow={'hidden'}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="h4" color={theme.palette.text.primary}>Speakers</Typography>
                <Link href={'/speakers'} underline={'none'} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 0.5,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: '1.2rem',

                }}>
                    <Typography variant="h6" lineHeight={1.4} color={theme.palette.text.primary}>View All</Typography>
                    <MdOutlineArrowOutward size={20} color={theme.palette.text.primary} style={{
                        marginTop: -1.5
                    }} />
                </Link>
            </Stack>
            <Grid container spacing={1} rowSpacing={1.5} height={'100%'}>
                {
                    speakersList.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 12).map((speaker: Speaker) => (
                        <Grid height={'100%'} key={speaker.id} size={{
                            xs: 6,
                            md: 6,
                            lg: 2
                        }}>
                            <Link href={`/speakers`} underline={'none'}>
                                <ProgressiveBlurSpeakerCard speaker={speaker} />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default Speakers;
