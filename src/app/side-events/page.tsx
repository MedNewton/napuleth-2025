'use client';

import { Box, Stack, Typography, Button, Link, ListItemText, keyframes } from "@mui/material";
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image";
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";

import EastIcon from '@mui/icons-material/East';
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import bastoni from '@assets/asso di bastoni.webp'
import spade from '@assets/asso di spade.webp'
import coppe from '@assets/asso di coppe.webp'
import denari from '@assets/asso di denari.webp'


const moveLeftRight = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(6px); }
`;


const SideEvents = () => {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={2} gap={3} sx={{
      overflow: 'hidden'
    }}>
      <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
        backgroundColor: theme.palette.ne_lightblue.main
      }}>
        <Box height={'100%'} width={"20%"} display={{ xs: 'none', lg: 'block' }} sx={{
          position: 'absolute',
          left: '-5%',
          backgroundImage: `url('${bastoni.src}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </Box>
        <Navbar />
        <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingBottom={3}>
          <Typography variant="h3">
            Explore The Side Events
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
          Explore the Ethereum community with interactive workshops, panels, and networking. Connect with developers, investors, and enthusiasts while discovering the latest innovations. Don’t miss these enriching experiences!
          </Typography>
        </Stack>
        <Box height={'100%'} width={"20%"} display={{ xs: 'none', lg: 'block' }} sx={{
          position: 'absolute',
          right: '-5%',
          backgroundImage: `url('${bastoni.src}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(-1)'
        }}></Box>
      </Stack>
      <Grid container spacing={2} width={'100%'}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
            backgroundColor: theme.palette.ne_lightblue.main,
          }}>
            <Typography variant="h4">ETH.SPARKLING: Road to NapulETH</Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
              <IoMdTime size={16} />
              <Typography variant="body2">04/17/2024</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
              <IoLocationOutline size={16} />
              <Link underline="hover" href="https://www.google.com/maps/place/The+Spark+Creative+Hub+-+Mondadori+Bookstore,+Via+degli+Acquari,+80133,+Naples,+Italy." target="_blank">
                <Typography variant="body2">The Spark Creative Hub - Mondadori Bookstore, Via degli Acquari, 80133, Naples, Italy.</Typography>
              </Link>
            </Stack>
            <Stack>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">Program:</Typography>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{
                    width: 'fit-content'
                  }}>
                    <GoDotFill />
                  </ListItemIcon>
                  <ListItemText
                    primary="Human Civilizations and Crypto's Role in Shaping Civilization's New Era"
                    secondary="Michel Bauwens"
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{
                    width: 'fit-content'
                  }}>
                    <GoDotFill />
                  </ListItemIcon>
                  <ListItemText
                    primary="Open Discussion, Networking & Aperitif"
                  />
                </ListItem>
              </List>
            </Stack>
            <Stack gap={1}>
              <Typography variant="h6">Pictures:</Typography>
              <Grid container width={'100%'} spacing={2}>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundImage: `url('https://napuleth.github.io/_next/static/media/11.fc62356a.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundImage: `url('https://napuleth.github.io/_next/static/media/12.f5d59097.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></Stack>
                </Grid>
              </Grid>
            </Stack>
            <Link href="https://app.moongate.id/e/napul-eth-open-village-2025" target="_blank" underline="none" width={'100%'}> 
                    <Button sx={{
                        width: '100%',
                        marginTop: 2,
                        backgroundColor: theme.palette.ne_rose.main,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Buy The Ticket</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
            backgroundColor: theme.palette.ne_lightblue.main,
          }}>
            <Typography variant="h4">ETH.SPARKLING: Road to NapulETH</Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
              <IoMdTime size={16} />
              <Typography variant="body2">04/17/2024</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
              <IoLocationOutline size={16} />
              <Link underline="hover" href="https://www.google.com/maps/place/The+Spark+Creative+Hub+-+Mondadori+Bookstore,+Via+degli+Acquari,+80133,+Naples,+Italy." target="_blank">
                <Typography variant="body2">The Spark Creative Hub - Mondadori Bookstore, Via degli Acquari, 80133, Naples, Italy.</Typography>
              </Link>
            </Stack>
            <Stack>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">Program:</Typography>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{
                    width: 'fit-content'
                  }}>
                    <GoDotFill />
                  </ListItemIcon>
                  <ListItemText
                    primary="Human Civilizations and Crypto's Role in Shaping Civilization's New Era"
                    secondary="Michel Bauwens"
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{
                    width: 'fit-content'
                  }}>
                    <GoDotFill />
                  </ListItemIcon>
                  <ListItemText
                    primary="Open Discussion, Networking & Aperitif"
                  />
                </ListItem>
              </List>
            </Stack>
            <Stack gap={1}>
              <Typography variant="h6">Pictures:</Typography>
              <Grid container width={'100%'} spacing={2}>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundImage: `url('https://napuleth.github.io/_next/static/media/11.fc62356a.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundImage: `url('https://napuleth.github.io/_next/static/media/12.f5d59097.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></Stack>
                </Grid>
              </Grid>
            </Stack>
            <Link href="https://app.moongate.id/e/napul-eth-open-village-2025" target="_blank" underline="none" width={'100%'}> 
                    <Button sx={{
                        width: '100%',
                        marginTop: 2,
                        backgroundColor: theme.palette.ne_rose.main,
                        paddingRight: 2,
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingX={1.5} paddingY={1} lineHeight={1}>Buy The Ticket</Typography>
                        <EastIcon fontSize="medium" sx={{
                            animation: `${moveLeftRight} 1s infinite alternate`
                        }} />
                    </Button>
                </Link>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default SideEvents;
