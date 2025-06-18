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

            <Modal open={open} onClose={onClose} sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                padding: 0,
                border: 'none',
            }}>
                <Stack width={{ xs: '90%', md: '85%', lg: '30%' }} height={'85%'} alignItems={'center'} justifyContent={'start'} sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '1rem',
                    border: `none`,
                    overflow: 'hidden',
                    padding: 0,
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
                            "&:hover": {
                                backgroundColor: theme.palette.grey[200],
                            }
                        }}>
                            <MdClose color={"#000000"} size={24} />
                        </IconButton>
                    </Stack>
                    <Stack width={'100%'} height={'60%'} alignItems={'start'} justifyContent={'start'} overflow={'auto'} paddingX={2} paddingBottom={2} paddingTop={3} gap={2}>
                        <Typography variant="h5">{speaker.name}</Typography>
                        {
                            speaker.appartenance && speaker.appartenance.length > 0 && (
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
                            )
                        }

                        {
                            speakerTalks && speakerTalks.length > 0 && (
                                <>
                                    <Divider sx={{
                                        marginTop: 1,
                                        borderColor: "rgba(0, 0, 0, 0.3)",
                                        width: '95%',
                                        marginX: 'auto',
                                    }} />
                                    <Stack width={'100%'} gap={1}>
                                        <Typography variant="h6" fontWeight={700}>Talks:</Typography>
                                        <Stack>
                                            {
                                                speakerTalks.map((talk: AgendaEvent) => (
                                                    <Stack key={talk.name}>
                                                        <Typography variant="subtitle1" fontWeight={400}>{talk.name}</Typography>
                                                    </Stack>
                                                ))
                                            }
                                        </Stack>
                                    </Stack>
                                </>
                            )
                        }

                        {
                            speakerTalks
                            && speakerTalks.length > 0
                            && speakerTalks[0]?.description
                            && speakerTalks[0]?.description.length > 0
                            && (
                                <>
                                    <Divider sx={{
                                        marginTop: 1,
                                        borderColor: "rgba(0, 0, 0, 0.3)",
                                        width: '95%',
                                        marginX: 'auto',
                                    }} />
                                    <Stack width={'100%'} marginTop={3} gap={1}>
                                        <Typography variant="h6" fontWeight={700}>Talk Details:</Typography>
                                        <Typography variant="subtitle1" fontWeight={400}>
                                            {speakerTalks[0]?.description}
                                        </Typography>
                                    </Stack>
                                </>
                            )
                        }

                        {
                            speakerTalks && speakerTalks.length > 0 && (
                                <>
                                    <Divider sx={{
                                        marginTop: 1,
                                        borderColor: "rgba(0, 0, 0, 0.3)",
                                        width: '95%',
                                        marginX: 'auto',
                                    }} />
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
                                </>
                            )
                        }
                    </Stack>
                </Stack>
            </Modal>
        </>
    )
}

export default SpeakerDrawer;