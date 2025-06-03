import Drawer from '@mui/material/Drawer';
import { Link, Stack, Typography, IconButton, Divider } from '@mui/material';
import Image from 'next/image';
import { type Speaker } from '@data/SpeakersList';
import theme from '@theme/theme';
import { MdArrowOutward, MdClose } from "react-icons/md";



interface SpeakerDrawerProps {
    speaker: Speaker;
    open: boolean;
    onClose: () => void;
}

const SpeakerDrawer = ({ speaker, open, onClose }: SpeakerDrawerProps) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{
            borderRadius: 0,
            "& .MuiDrawer-paper": {
                borderRadius: 0,
                backgroundColor: 'transparent',
                paddingBottom: 1,
                paddingTop: 1,
                boxShadow: 'none',
            }
        }}>
            <Stack width={{ xs: '100%', md: '40vw' }} height={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Stack width={'100%'} height={'100%'} paddingX={2} paddingY={1} borderRadius={'1rem'} sx={{
                    backgroundColor: theme.palette.ne_darkblue.main,
                }}>
                    <Stack direction={'row'} justifyContent={'flex-end'} marginBottom={1}>
                        <IconButton onClick={onClose}>
                            <MdClose color={"#000000"} size={24} />
                        </IconButton>
                    </Stack>
                    <Stack width={'100%'} direction={'row'} alignItems={'center'} gap={2}>
                        <Image src={speaker.image} alt={speaker.name} width={120} height={120} style={{
                            borderRadius: '0.8rem',
                            aspectRatio: '1/1',
                            boxShadow: `
                                            0 0 #000000,
                                            0 0 #000000,
                                            0 6px 18px rgba(0, 0, 0, 0.3)
                                            `
                        }} />
                        <Stack width={'100%'} height={'100%'} justifyContent={'center'} gap={1.5}>
                            <Typography variant="h5">{speaker.name}</Typography>
                            {
                                speaker.appartenance && speaker.appartenance !== "" && (
                                    <Typography variant="subtitle1" fontWeight={500}>{speaker.appartenance}</Typography>
                                )
                            }
                            {
                                speaker.url && speaker.url !== "" && (
                                    <Link href={speaker.url ? speaker.url : ''} underline='none' target='_blank' rel='noopener noreferrer'>
                                        <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                                            <Typography variant="subtitle1" fontWeight={500} sx={{
                                                "&:hover": {
                                                    textDecoration: 'underline',
                                                }
                                            }}>Link</Typography>
                                            <MdArrowOutward size={20} />
                                        </Stack>
                                    </Link>
                                )
                            }
                        </Stack>
                    </Stack>
                    <Divider sx={{
                        marginTop: 4,
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        width: '95%',
                        marginX: 'auto',
                    }} />
                    <Stack width={'100%'} marginTop={3} gap={1}>
                        <Typography variant="h6" fontWeight={700}>Talks:</Typography>
                        <Typography variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Stack>
                    <Stack width={'100%'} marginTop={3} gap={1}>
                        <Typography variant="h6" fontWeight={700}>Tracks:</Typography>
                        <Typography variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Drawer>
    )
}

export default SpeakerDrawer;