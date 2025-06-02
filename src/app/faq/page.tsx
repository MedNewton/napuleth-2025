"use client";

import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";
import { type FaqItem, faq } from "@data/faq";
import { Stack, Typography, IconButton, Collapse } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FaqPage = () => {
    const [open, setOpen] = useState(false);
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const [selectedQuestionCategory, setSelectedQuestionCategory] = useState<string | null>(null);
    const uniqueCategories = [...new Set(faq.map(item => item.category))];

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
                    <Typography variant="h3">NapulETH FAQ</Typography>
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
                    <Grid key={category} size={{ xs: 12, md: 12, lg: 6 }}>
                        <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'} paddingY={2}>
                            <Typography variant="h5">{category}</Typography>
                        </Stack>
                        <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                            {
                                faq.filter(item => item.category === category).map((item: FaqItem, index: number) => (
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
                                            <Typography variant="h6" width={{ xs: '100%', md: '80%' }} sx={{
                                                paddingX: 2,
                                                paddingTop: 1,
                                                paddingBottom: 2
                                            }}>{item.answer}</Typography>
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

export default FaqPage