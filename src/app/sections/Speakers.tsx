import { Link, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import { type Speaker, speakersList } from "@data/SpeakersList";
import SpeakerCard from "@components/speakerCard";
import Image from "next/image";
import horn from "@assets/rockHand.webp";

const Speakers = () => {
    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">Speakers</Typography>
            <Grid container spacing={0.5}>
                {speakersList.slice(0, 8).sort((a, b) => a.name.localeCompare(b.name)).map((speaker: Speaker) => (
                    <Grid key={speaker.id} size={{ xs: 12, md: 4, lg: 3 }}>
                        <Stack width={'100%'} height={'100%'} sx={{
                            aspectRatio: '1/1',
                            borderRadius: '1rem',
                        }}>
                            <SpeakerCard speaker={speaker} />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <Link href={"/speakers"} underline={"none"} width={"100%"}>
                <Stack position={"relative"} overflow={"hidden"} width={"100%"} alignItems={"center"} justifyContent={"center"} paddingY={4} borderRadius={"1rem"} sx={{
                    backgroundColor: theme.palette.ne_gold.main
                }}>
                    <Image src={horn} alt="horn" width={70} height={100} style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: "rotate(90deg)"
                    }} />
                    <Typography variant="h5">
                        See More
                    </Typography>
                    <Image src={horn} alt="horn" width={70} height={100} style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        transform: "rotate(-90deg)"
                    }} />
                </Stack>
            </Link>
        </Stack>
    )
}

export default Speakers;
