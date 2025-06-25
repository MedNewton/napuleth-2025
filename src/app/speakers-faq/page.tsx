"use client";

import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";
import { type FaqItem, speakersFaq } from "@data/speakersFaq";
import { Stack, Typography, IconButton, Collapse, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SpeakersFaqPage = () => {
    const [open, setOpen] = useState(false);
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const [selectedQuestionCategory, setSelectedQuestionCategory] = useState<string | null>(null);
    const uniqueCategories = [...new Set(speakersFaq.map(item => item.category))];

    const toggleOpen = (index: number, category: string) => {
        setOpenQuestion(openQuestion === index && selectedQuestionCategory === category ? null : index);
        setSelectedQuestionCategory(category);
    }

    return (
        <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
            <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                <Navbar isHome={false} />
            </Stack>
            <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'} paddingTop={8} paddingX={{ xs: 2, md: 2, lg: 8 }}>
                <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                    <Typography variant="h3">Hello speakers,</Typography>
                    <Typography variant="h6">As the time for NapulETH draws near, we have put together a little email with all the needed guidelines for your talk. <span style={{ fontWeight: 700 }}>PLEASE TAKE SOME TIME TO REVIEW WHAT FOLLOWS:</span></Typography>
                </Stack>
                <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                    <ul style={{
                        fontSize: "1.2rem"
                    }}>
                        <li>
                            The agenda is finally on our website, and you can find it <Link href="/agenda" underline="always" target="_blank">here</Link>.
                        </li>
                        <li>
                            When you applied, you specified a day and a time preference. We honored them for the most part, and specified those in the email confirmation.
                        </li>
                        <li>
                            Regarding talks duration, we had to modify some speeches length. <strong>So you may have been bumped from a 20m speech to a 40m one, or vice-versa</strong>. Please check on the agenda to make sure you know how long your slot is.
                        </li>
                        <li>
                            Your title, name and credentials are public on our website. If you want to make changes, please send an email to <Link href="mailto:speakers@napuleth.org" underline="always" target="_blank">speakers@napuleth.org</Link>.
                        </li>
                        <li>
                            Our agenda is final. If you aren’t able to make it for whatever reason, please inform us asap as we will unfortunately have to replace you with another speaker.
                        </li>
                    </ul>
                </Stack>
            </Stack>
            <Grid container spacing={{ xs: 1, md: 0.5, lg: 2 }} sx={{
                width: '100%',
                height: '100%',
                alignItems: 'start',
                justifyContent: 'center',
                paddingY: 4,
                paddingX: { xs: 2, md: 2, lg: 10 }
            }}>
                {uniqueCategories.map((category: string) => (
                    <Grid key={category} size={{ xs: 12, md: 12, lg: 12 }}>
                        <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'} paddingY={2}>
                            <Typography variant="h5">{category}</Typography>
                        </Stack>
                        <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                            {
                                speakersFaq.filter(item => item.category === category).map((item: FaqItem, index: number) => (
                                    <Stack key={index} width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                                        <IconButton onClick={() => toggleOpen(index, category)} sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            "&:hover": {
                                                backgroundColor: 'transparent'
                                            },
                                            "& .questionArrow": {
                                                marginTop: -0.5,
                                                transition: 'transform 0.3s ease-in-out',
                                                transform: openQuestion === index && selectedQuestionCategory === item.category ? 'rotate(0deg)' : 'rotate(-90deg)'
                                            }
                                        }}>
                                            <IoMdArrowDropdown size={20} className="questionArrow" />
                                            <Typography variant="h6">{item.question}</Typography>
                                        </IconButton>
                                        <Collapse in={openQuestion === index && selectedQuestionCategory === item.category} orientation="vertical">
                                            {
                                                typeof item.answer === 'string' ? (
                                                    <Typography variant="h6" width={{ xs: '100%', md: '80%' }} sx={{
                                                        paddingX: 2,
                                                        paddingTop: 1,
                                                        paddingBottom: 2
                                                    }}>{item.answer}</Typography>
                                                ) : item.answer
                                            }
                                        </Collapse>
                                    </Stack>
                                ))
                            }
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <Stack width={'100%'} height={'100%'}>
                <Footer />
            </Stack>
        </Stack>
    )
}

export default SpeakersFaqPage