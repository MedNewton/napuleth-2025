"use client";

import { useState } from "react";
import { Box, Stack, Typography, Button, Link, Divider } from "@mui/material";
import TextField from '@mui/material/TextField';
import Image from "next/image";
import theme from "@theme/theme";
import { type AgendaEvent, agenda, tags, types, languages } from "@data/Agenda";
import soli from '@assets/soli.webp'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IoFilterOutline } from "react-icons/io5";
import italy from "@assets/italy.webp";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";



const Agenda = () => {

  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedStage, setSelectedStage] = useState<string>("Main Stage");
  const [visibleFilters, setVisibleFilters] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  }

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  }

  const toggleFilters = () => {
    setVisibleFilters(!visibleFilters);
  }

  const handleDayChange = (day: number) => {
    setSelectedDay(day);
  }

  const handleStageChange = (stage: string) => {
    setSelectedStage(stage);
  }


  return (
    <>
    <Box width={'100vw'} height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2} sx={{
      overflow: 'hidden'
    }}>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} gap={1}>
        <Stack sx={{
          animation: 'float 3s ease-in-out infinite', // Apply the animation
          '@keyframes float': {
            '0%': {
              transform: 'translateY(0)', // Starting position
            },
            '50%': {
              transform: 'translateY(-10px)', // Move the image up
            },
            '100%': {
              transform: 'translateY(0)', // Move the image back down
            },
          },
        }}>
          <Image src={soli} alt="soli coming soon napuleth biggest web3 event southern italy 2025" height={300} width={300} ></Image>
        </Stack>
        <Typography width={'100%'} textAlign={'center'} variant="h4">Coming Soon...</Typography>
        <Typography width={'100%'} textAlign={'center'} variant="h6">Agenda will be open very soon.</Typography>
      </Stack>
      <Link href="/" underline="none">
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} paddingY={2} paddingX={3} borderRadius={'10rem'} gap={1} sx={{
          backgroundColor: theme.palette.ne_rose.main
        }}>
          <KeyboardBackspaceIcon fontSize="large" />
          <Typography width={'100%'} textAlign={'center'} variant="h5">Back to Homepage</Typography>
        </Stack>
      </Link>

    </Box>
    <Stack display="none" width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
      <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
        <Navbar isHome={false} />
      </Stack>
      <Stack width={'100%'} height={'100%'} paddingTop={8} paddingBottom={4} paddingX={{ xs: 2, md: 4 }} gap={1} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h4" textAlign={'center'}>Welcome to the NapulETH 2025 Agenda</Typography>
        <Typography variant="h6" textAlign={'center'} sx={{ width: { xs: '95%', md: '60%' } }}>
          Explore the Napuleth event agenda with ease. Filter sessions by speakers, stages, days, and topics to plan your journey through talks, panels, and workshops.
        </Typography>
      </Stack>
      <Stack width={'100%'} height={'100%'} paddingY={4} paddingX={{ xs: 2, md: 10 }} gap={1}>
        <Stack width={'100%'} height={'100%'} gap={1} padding={1} borderRadius={'1rem'} border={'1px solid #000'}>
          <Stack direction={'row'} width={'100%'} alignItems={'end'} overflow={'hidden'}>
            <TextField id="standard-basic" label="" placeholder="Search ..." variant="standard" sx={{
              height: 50,
              maxHeight: 50,
              width: '100%',
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              margin: 0,
              paddingY: 0,
              paddingX: 1,
              fontSize: "1.6rem",
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
              "&:hover": {
                border: "none",
                outline: "none",
                "&:before": {
                  display: "none",
                },
                "&:after": {
                  display: "none",
                },
              },
              "& .MuiInputBase-root": {
                padding: 0,
                margin: 0,
                height: '100%',
                width: '100%',
                border: "none",
                outline: "none",
                "&:before": {
                  display: "none",
                },
                "&:after": {
                  display: "none",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                outline: "none",
                "&:before": {
                  display: "none",
                },
                "&:after": {
                  display: "none",
                },
              },
              "&:focus": {
                border: "none",
                outline: "none",
                "&:before": {
                  display: "none",
                },
                "&:after": {
                  display: "none",
                },
              },

            }} />
            <Button variant="outlined" onClick={() => toggleFilters()} sx={{
              height: '100%',
              maxHeight: 50,
              aspectRatio: '1/1',
              borderRadius: '0.5rem',
              border: "none",
              boxShadow: "none",
              outline: "none",
              margin: 0,
              padding: 0,
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <IoFilterOutline size={20} color="#000000" />
            </Button>
          </Stack>
          <Stack width={'100%'} height={visibleFilters ? 'auto' : 0} overflow={"hidden"} gap={1} sx={{
            transition: 'height 0.3s ease-in-out, visibility 0.3s ease-in-out, opacity 0.3s ease-in-out',
            visibility: visibleFilters ? 'visible' : 'hidden',
            display: visibleFilters ? 'block' : 'none',
            opacity: visibleFilters ? 1 : 0,
          }}>
            <Divider sx={{ border: "1px solid #BDBDBD", marginBottom: 2, width: '98%', marginLeft: 'auto', marginRight: 'auto' }} />
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="h6">Filters:</Typography>
              <Link href={`/`} underline="none" onClick={(e) => { e.preventDefault(); handleDayChange(1) }}>
                <Typography variant="h6" color={theme.palette.ne_darkblue.main}>Reset all</Typography>
              </Link>
            </Stack>

            <Typography variant="h6" fontWeight={400} sx={{ marginTop: 1 }}>Tags:</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
              {
                tags.map((tag) => (
                  <Typography variant="h6" key={tag} onClick={() => toggleTag(tag)} sx={{
                    paddingX: 1,
                    paddingBottom: 0.5,
                    paddingTop: 1,
                    borderRadius: '0.6rem',
                    backgroundColor: selectedTags.includes(tag) ? "#000000" : "transparent",
                    color: selectedTags.includes(tag) ? "#FFFFFF" : "#000000",
                    border: "1px solid #000000",
                    cursor: "pointer",
                  }}>{tag}</Typography>
                ))
              }
            </Stack>

            <Typography variant="h6" fontWeight={400} sx={{ marginTop: 1 }}>Types:</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
              {
                types.map((type) => (
                  <Typography variant="h6" key={type} onClick={() => toggleType(type)} sx={{
                    paddingX: 1,
                    paddingBottom: 0.5,
                    paddingTop: 1,
                    borderRadius: '0.6rem',
                    backgroundColor: selectedTypes.includes(type) ? "#000000" : "transparent",
                    color: selectedTypes.includes(type) ? "#FFFFFF" : "#000000",
                    border: "1px solid #000000",
                    cursor: "pointer",
                  }}>{type}</Typography>
                ))
              }
            </Stack>

            <Typography variant="h6" fontWeight={400} sx={{ marginTop: 1 }}>Languages:</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
              {
                languages.map((language) => (
                  <Typography variant="h6" key={language} onClick={() => toggleLanguage(language)} sx={{
                    paddingX: 1,
                    paddingBottom: 0.5,
                    paddingTop: 1,
                    borderRadius: '0.6rem',
                    backgroundColor: selectedLanguages.includes(language) ? "#000000" : "transparent",
                    color: selectedLanguages.includes(language) ? "#FFFFFF" : "#000000",
                    border: "1px solid #000000",
                    cursor: "pointer",
                  }}>{language === "en" ? "English" : "Italian"}</Typography>
                ))
              }
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={'row'} width={'100%'} height={'100%'} borderRadius={'1rem'} border={'1px solid #000'}>
          <Stack width={'100%'} height={'100%'} padding={1} border={'1px solid #000'} sx={{
            borderTopLeftRadius: '1rem',
            borderBottomLeftRadius: '1rem',
            backgroundColor: selectedDay === 1 ? theme.palette.ne_lightblue.main : 'transparent',
          }}>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleDayChange(1) }} sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}>
              <Typography variant="h5">Day 1</Typography>
              <Typography variant="h6" display={{ xs: 'none', md: 'block' }}>17 July, 2025</Typography>
              <Typography variant="h6" display={{ xs: 'block', md: 'none' }}>17/07/25</Typography>
            </Link>
          </Stack>
          <Stack width={'100%'} height={'100%'} padding={1} border={'1px solid #000'} sx={{
            backgroundColor: selectedDay === 2 ? theme.palette.ne_lightblue.main : 'transparent',
          }}>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleDayChange(2) }} sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}>
              <Typography variant="h5">Day 2</Typography>
              <Typography variant="h6" display={{ xs: 'none', md: 'block' }}>18 July, 2025</Typography>
              <Typography variant="h6" display={{ xs: 'block', md: 'none' }}>18/07/25</Typography>
            </Link>
          </Stack>
          <Stack width={'100%'} height={'100%'} padding={1} border={'1px solid #000'} sx={{
            backgroundColor: selectedDay === 3 ? theme.palette.ne_lightblue.main : 'transparent',
            borderTopRightRadius: '1rem',
            borderBottomRightRadius: '1rem',
          }}>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleDayChange(3) }} sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}>
              <Typography variant="h5">Day 3</Typography>
              <Typography variant="h6" display={{ xs: 'none', md: 'block' }}>19 July, 2025</Typography>
              <Typography variant="h6" display={{ xs: 'block', md: 'none' }}>19/07/25</Typography>
            </Link>
          </Stack>
        </Stack>
        <Stack width={'100%'} border={'1px solid #000'} borderRadius={'1rem'} overflow={'hidden'}>
          <Stack direction={'row'} width={'100%'} padding={1} gap={1} border={'1px solid #000'} sx={{
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            flexWrap: 'wrap',
          }}>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleStageChange("Main Stage") }}>
              <Typography variant="h6" paddingBottom={1} paddingX={2} paddingTop={1.5} border="2px solid #000000" borderRadius={'4rem'} sx={{
                backgroundColor: selectedStage === "Main Stage" ? theme.palette.ne_purple.main : 'transparent',
                whiteSpace: 'nowrap',
              }}>Main Stage</Typography>
            </Link>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleStageChange("Capella") }}>
              <Typography variant="h6" paddingBottom={1} paddingX={2} paddingTop={1.5} border="2px solid #000000" borderRadius={'4rem'} sx={{
                backgroundColor: selectedStage === "Capella" ? theme.palette.ne_purple.main : 'transparent',
                whiteSpace: 'nowrap',
              }}>Capella</Typography>
            </Link>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleStageChange("Sala 3") }}>
              <Typography variant="h6" paddingBottom={1} paddingX={2} paddingTop={1.5} border="2px solid #000000" borderRadius={'4rem'} sx={{
                backgroundColor: selectedStage === "Sala 3" ? theme.palette.ne_purple.main : 'transparent',
                whiteSpace: 'nowrap',
              }}>Sala 3</Typography>
            </Link>
            <Link href={`/agenda/${selectedDay}`} underline="none" onClick={(e) => { e.preventDefault(); handleStageChange("Sala 4") }}>
              <Typography variant="h6" paddingBottom={1} paddingX={2} paddingTop={1.5} border="2px solid #000000" borderRadius={'4rem'} sx={{
                backgroundColor: selectedStage === "Sala 4" ? theme.palette.ne_purple.main : 'transparent',
                whiteSpace: 'nowrap',
              }}>Sala 4</Typography>
            </Link>
          </Stack>
          {
            agenda
              .filter((event) => event.day === selectedDay)
              .filter((event) => event.stage === selectedStage)
              .filter((event) => selectedTags.every((tag) => event.tags.includes(tag) || event.tags.includes(tag.toLowerCase()) || event.tags.includes(tag.toUpperCase())))
              .filter((event) => selectedTypes.every((type) => event.type.toLowerCase() === type.toLowerCase()))
              .filter((event) => selectedLanguages.every((language) => event.language.toLowerCase() === language.toLowerCase()))
              .map((event, index) => {
                if (event.type === "Break") {
                  return (
                    <Stack key={index} direction={'column'} height={'100%'} minHeight={'100px'} alignItems={'center'} justifyContent={'center'} width={'100%'} border={'1px solid #000'} sx={{
                      backgroundColor: theme.palette.ne_rose.main,
                    }}>
                      <Typography variant="h6" fontWeight={600}>🍝🍕 &nbsp;Lunch Break&nbsp; 🍝🍕</Typography>
                      <Typography variant="subtitle1" color={"text.secondary"}>{event.startTime} - {event.endTime}</Typography>
                    </Stack>
                  )
                }
                return (
                  <Stack key={index} direction={'row'} height={'100%'} minHeight={'100px'} alignItems={'stretch'} justifyContent={'stretch'} width={'100%'} border={'1px solid #000'} sx={{
                    borderBottomLeftRadius: index === agenda.length - 1 ? '1rem' : '0px',
                    borderBottomRightRadius: index === agenda.length - 1 ? '1rem' : '0px',
                  }}>
                    <Stack width={'30%'} flexGrow={1} padding={1} borderRight={'1px solid #000'} sx={{
                    }}>
                      <Typography variant="h6">{event.startTime} - {event.endTime}</Typography>
                      <Typography variant="subtitle1" color={"text.secondary"}>{event.duration}</Typography>
                    </Stack>
                    <Stack width={'70%'} gap={1} flexGrow={1} padding={1} borderLeft={'1px solid #000'} sx={{
                    }}>
                      <Stack direction={'row'} justifyContent={'start'} alignItems={'start'} gap={1}>
                        <Typography variant="h5">{event.name}</Typography>
                        <Typography variant="subtitle1" fontWeight={600} sx={{
                          paddingX: 1,
                          paddingBottom: 0.2,
                          paddingTop: 0.7,
                          borderRadius: '0.6rem',
                          backgroundColor: event.type === "Talk" ?
                            theme.palette.ne_lightblue.main
                            : event.type === "Panel" ?
                              theme.palette.ne_purple.main
                              : event.type === "Workshop" ?
                                theme.palette.ne_rose.main
                                : 'transparent',
                        }}>{event.type}</Typography>
                        {
                          event.language === "it" && (
                            <Typography variant="subtitle1" fontWeight={600} sx={{
                              paddingX: 1,
                              paddingBottom: 0.2,
                              paddingTop: 0.4,
                              borderRadius: '0.6rem',
                              backgroundImage: `url(${italy.src})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }}>
                              <span style={{ opacity: 0 }}>italy</span>
                            </Typography>
                          )
                        }
                      </Stack>
                      {
                        event.speakers.length > 0 && (
                          <Stack gap={1}>
                            <Typography variant="subtitle1">
                              Speakers:
                            </Typography>
                            <Stack gap={0.5}>
                              {event.speakers.map((speaker) => (
                                <Stack direction={'row'} gap={0.5} key={speaker.name}>
                                  <Image src={speaker.image} alt={speaker.name} width={20} height={20} style={{ borderRadius: '50%' }} />
                                  <Typography variant="subtitle1">
                                    {speaker.name}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          </Stack>
                        )
                      }
                      {
                        event.moderators.length > 0 && (
                          <Stack gap={1}>
                            <Typography variant="subtitle1">
                              Moderators:
                            </Typography>
                            <Stack gap={0.5}>
                              {event.moderators.map((moderator) => (
                                <Stack direction={'row'} gap={0.5} key={moderator.name}>
                                  <Image src={moderator.image} alt={moderator.name} width={20} height={20} style={{ borderRadius: '50%' }} />
                                  <Typography variant="subtitle1">
                                    {moderator.name}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          </Stack>
                        )
                      }
                      {
                        event.tags.length > 0 && (
                          <Stack direction={'row'} marginTop={3} marginBottom={1} gap={1} flexWrap={'wrap'}>
                            {event.tags.map((tag) => (
                              <Typography variant="subtitle1" key={tag} sx={{
                                paddingX: 1,
                                paddingY: 0.5,
                                borderRadius: '0.6rem',
                                backgroundColor: theme.palette.ne_green.main,
                              }}>#{tag}</Typography>
                            ))}
                          </Stack>
                        )
                      }
                    </Stack>
                  </Stack>
                )
              })
          }
        </Stack>
      </Stack>
      <Stack width={'100%'} height={'100%'}>
        <Footer />
      </Stack>
    </Stack>
    </>
    
  );
}

export default Agenda;
