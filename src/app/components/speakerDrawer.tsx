import Drawer from '@mui/material/Drawer';
import { Link, Stack, Typography, IconButton, Divider, Modal } from '@mui/material';
import Image from 'next/image';
import { type Speaker } from '@data/SpeakersList';
import { agenda, type AgendaEvent } from '@data/Agenda';
import theme from '@theme/theme';
import { MdArrowOutward, MdClose, MdOpenInNew } from "react-icons/md";



interface SpeakerDrawerProps {
    speaker: Speaker;
    open: boolean;
    onClose: () => void;
}

const SpeakerDrawer = ({ speaker, open, onClose }: SpeakerDrawerProps) => {

    const speakerTalks = agenda.filter((event: AgendaEvent) => event.speakers.includes(speaker));

    function getUniqueTagsForSpeaker(speaker: Speaker): string[] {
        const speakerTalks = agenda.filter(event =>
            event.speakers.some(s => s.name === speaker.name) // you may want to use `id` if available
        );

        const allTags = speakerTalks.flatMap(event => event.tags);
        const uniqueTags = [...new Set(allTags)];

        return uniqueTags;
    }

    return (
        <>
            <Drawer anchor="right" open={open} onClose={onClose} sx={{
                display: { xs: 'none', md: 'block' },
                borderRadius: 0,
                "& .MuiDrawer-paper": {
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                    boxShadow: 'none',
                    width: { xs: '99vw', md: '40vw' },
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
                                objectFit: 'cover',
                                aspectRatio: '1/1',
                                boxShadow: `
                                            0 0 #000000,
                                            0 0 #000000,
                                            0 6px 18px rgba(0, 0, 0, 0.3)
                                            `
                            }} />
                            <Stack width={'100%'} height={'100%'} justifyContent={'center'} gap={1.5}>
                                <Typography variant="h5">{speaker.name}</Typography>
                                <Stack direction={'row'} flexWrap={'wrap'} gap={1} divider={<Divider orientation="vertical" flexItem sx={{
                                    borderColor: theme.palette.grey[800],
                                }} />}>
                                    {
                                        speaker.appartenance.map((appartenance) => (
                                            <Link href={appartenance.url} key={appartenance.name} target="_blank" rel="noopener noreferrer" underline="none">
                                                <Typography variant="subtitle1" fontWeight={500}>{appartenance.name}</Typography>
                                            </Link>
                                        ))
                                    }
                                </Stack>
                            </Stack>
                        </Stack>
                        <Divider sx={{
                            marginTop: 4,
                            borderColor: "rgba(0, 0, 0, 0.3)",
                            width: '95%',
                            marginX: 'auto',
                        }} />
                        {
                            speakerTalks && speakerTalks.length > 0 && (
                                <Stack width={'100%'} marginTop={3} gap={1}>
                                    <Typography variant="h6" fontWeight={700}>Talks:</Typography>
                                    <Stack>
                                        {
                                            speakerTalks.map((talk: AgendaEvent) => (
                                                <Stack key={talk.name}>
                                                    <Typography variant="subtitle1">{talk.name}</Typography>
                                                </Stack>
                                            ))
                                        }
                                    </Stack>
                                </Stack>
                            )
                        }
                        {
                            speakerTalks
                            && speakerTalks.length > 0
                            && speakerTalks[0]?.description
                            && speakerTalks[0]?.description.length > 0
                            && (
                                <Stack width={'100%'} marginTop={3} gap={1}>
                                    <Typography variant="h6" fontWeight={700}>Talk Details:</Typography>
                                    <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                                        {speakerTalks[0]?.description}
                                    </Typography>
                                </Stack>
                            )
                        }
                    </Stack>
                </Stack>
            </Drawer>
            <Modal open={open} onClose={onClose} sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                <Stack width={'90%'} height={'85%'} alignItems={'center'} justifyContent={'start'} sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '1rem',
                    border: `1px solid ${theme.palette.divider}`,
                    overflow: 'hidden',
                }}>
                    <Stack width={'100%'} height={'40%'} direction={'row'} alignItems={'start'} justifyContent={'end'} padding={2} sx={{
                        backgroundImage: `url(${speaker.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '1rem 1rem 0 0',
                    }}>
                        <IconButton onClick={onClose} sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: '50%',
                            border: `1px solid ${theme.palette.divider}`,
                        }}>
                            <MdClose color={"#000000"} size={24} />
                        </IconButton>
                    </Stack>
                    <Stack width={'100%'} height={'60%'} alignItems={'start'} justifyContent={'start'} overflow={'auto'} paddingX={2} paddingBottom={2} paddingTop={3} gap={2}>
                        <Typography variant="h5">{speaker.name}</Typography>
                        <Stack gap={1}>
                            <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                                Affiliation:
                            </Typography>
                            <Stack direction={'row'} flexWrap={'wrap'} gap={1} divider={<Divider orientation="vertical" flexItem sx={{
                                borderColor: theme.palette.grey[800],
                            }} />}>
                                {
                                    speaker.appartenance.map((appartenance) => (
                                        <Link href={appartenance.url} key={appartenance.name} target="_blank" rel="noopener noreferrer" underline="none" sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                            gap: 0.5,
                                        }}>
                                            <Typography variant="subtitle1" fontWeight={500}>{appartenance.name}</Typography>
                                            <MdArrowOutward color={theme.palette.text.secondary} size={16} />
                                        </Link>
                                    ))
                                }
                            </Stack>
                        </Stack>
                        <Divider sx={{
                            marginTop: 1,
                            borderColor: "rgba(0, 0, 0, 0.3)",
                            width: '95%',
                            marginX: 'auto',
                        }} />
                        {
                            speakerTalks && speakerTalks.length > 0 && (
                                <Stack width={'100%'} gap={1}>
                                    <Typography variant="h6" fontWeight={700}>Talks:</Typography>
                                    <Stack>
                                        {
                                            speakerTalks.map((talk: AgendaEvent) => (
                                                <Stack key={talk.name}>
                                                    <Typography variant="subtitle1">{talk.name}</Typography>
                                                </Stack>
                                            ))
                                        }
                                    </Stack>
                                </Stack>
                            )
                        }
                        <Divider sx={{
                            marginTop: 1,
                            borderColor: "rgba(0, 0, 0, 0.3)",
                            width: '95%',
                            marginX: 'auto',
                        }} />
                        {
                            speakerTalks
                            && speakerTalks.length > 0
                            && speakerTalks[0]?.description
                            && speakerTalks[0]?.description.length > 0
                            && (
                                <Stack width={'100%'} marginTop={3} gap={1}>
                                    <Typography variant="h6" fontWeight={700}>Talk Details:</Typography>
                                    <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                                        {speakerTalks[0]?.description}
                                    </Typography>
                                </Stack>
                            )
                        }
                        <Divider sx={{
                            marginTop: 1,
                            borderColor: "rgba(0, 0, 0, 0.3)",
                            width: '95%',
                            marginX: 'auto',
                        }} />
                        {
                            speakerTalks && speakerTalks.length > 0 && (
                                <Stack width={'100%'} marginTop={3} gap={1}>
                                    <Typography variant="h6" fontWeight={700}>Tags & Topics:</Typography>
                                    <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                                        {getUniqueTagsForSpeaker(speaker).map((tag) => (
                                            <Typography variant="subtitle1" key={tag} sx={{
                                                paddingX: 1,
                                                paddingY: 0.5,
                                                borderRadius: '0.6rem',
                                                backgroundColor: theme.palette.ne_green.main,
                                            }}>#{tag}</Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                            )
                        }
                    </Stack>
                </Stack>
            </Modal>
        </>
    )
}

export default SpeakerDrawer;