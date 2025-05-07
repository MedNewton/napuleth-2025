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
      overflow: 'hidden',
      backgroundColor: theme.palette.ne_lightblue.main
    }}>
      <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
        backgroundColor: theme.palette.ne_lightblue.main
      }}>
        <Navbar isHome={true} />
        <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingBottom={3}>
          <Typography variant="h3" textAlign={'center'}>
          Explore Our Side Events
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
          Explore the Ethereum community with interactive workshops, panels, and networking. Connect with developers, investors, and enthusiasts while discovering the latest innovations. Don’t miss these enriching experiences!
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={{ xs: 1, md: 2 }} width={'100%'} paddingX={{ xs: 0, md: 4 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">ETH.SPARKLING: Road to NapulETH</Typography>
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
                  <Typography variant="body1" color={theme.palette.text.secondary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default SideEvents;
