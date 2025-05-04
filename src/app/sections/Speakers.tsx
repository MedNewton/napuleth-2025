import { Stack, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import Image from "next/image";

import bg1 from "@assets/img1.webp";
import horn from "@assets/rockHand.webp";
import { type Speaker, speakers } from "@data/Speakers";

const Speakers = () => {
    return (
        <Stack width={'100%'} gap={2}>
            <Stack width={'100%'} direction={'row'} alignItems={'stretch'} justifyContent={'space-between'} gap={2}>
                <Stack id="speakersTitle" flexGrow={1} paddingY={3} paddingX={4} alignItems={'center'} justifyContent={'center'} sx={{
                    backgroundColor: theme.palette.ne_lightblue.main,
                    borderRadius: '1rem'
                }}>
                    <Typography variant="h4">Our Speakers</Typography>
                </Stack>
                <Stack display={{ xs: 'none', lg: "flex" }} id="speakersDescription" flexGrow={1} padding={2} alignItems={'start'} justifyContent={'center'} sx={{
                    backgroundImage: `url(${bg1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '1rem'
                }}>
                    <Stack width={'40%'} direction={'row'} alignItems={'center'} padding={2} justifyContent={'start'} gap={2} sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: '1rem'
                    }}>
                        <Typography variant="subtitle1">NapulETH features top Ethereum innovators and fresh voices, offering insights into blockchain, real-world applications, and the future of Web3.</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={"100%"} display={{ xs: "none", lg: "flex" }}>
                <Grid container spacing={2}>
                    {speakers.slice(0, 16).map((speaker: Speaker, index) => (
                        <Grid key={index} size={{ xs: 6, md: 4, lg: 3 }} sx={{
                            border: `2px solid ${theme.palette.ne_gray.main}`,
                            borderRadius: '1rem',
                            padding: 2,
                            "&:hover": {
                                borderColor: "#000000",
                                backgroundColor: theme.palette.ne_lightblue.main,
                                transition: "all 0.3s ease-in-out"
                            }
                        }}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
                                <Box width={50} height={50} sx={{
                                    backgroundColor: theme.palette.ne_gray.main,
                                    borderRadius: '50%',
                                    aspectRatio: '1/1'
                                }}></Box>
                                <Stack>
                                    <Typography variant="h6" fontWeight={600}>{speaker.name}</Typography>
                                    <Typography variant="subtitle1" color={"#666666"}>{speaker.appearance}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Stack width={"100%"}>
                <Grid container spacing={2} display={{ xs: "auto", lg: "none" }}>
                    {speakers.slice(0, 8).map((speaker: Speaker, index) => (
                        <Grid key={index} size={{ xs: 6, md: 4, lg: 3 }} sx={{
                            border: `2px solid ${theme.palette.ne_gray.main}`,
                            borderRadius: '1rem',
                            padding: 2,
                            "&:hover": {
                                borderColor: "#000000",
                                backgroundColor: theme.palette.ne_lightblue.main,
                                transition: "all 0.3s ease-in-out"
                            }
                        }}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
                                <Box width={50} height={50} sx={{
                                    backgroundColor: theme.palette.ne_gray.main,
                                    borderRadius: '50%',
                                    aspectRatio: '1/1'
                                }}></Box>
                                <Stack justifyContent={"center"}>
                                    <Typography variant="subtitle1" fontWeight={600}>{speaker.name}</Typography>
                                    <Typography variant="body1" color={"#666666"}>{speaker.appearance}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
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
        </Stack>
    )
}

export default Speakers;
