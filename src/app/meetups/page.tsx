import { Box, Stack, Typography, Button, Link, ListItemText } from "@mui/material";
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image";
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";

import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import bastoni from '@assets/asso di bastoni.webp'
import spade from '@assets/asso di spade.webp'




const Meetups = () => {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={2} gap={3} sx={{
      overflow: 'hidden'
    }}>
      <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
        backgroundColor: theme.palette.ne_lightblue.main
      }}>
        <Box height={'100%'} width={"20%"} sx={{
          position: 'absolute',
          left: '-5%',
          backgroundImage: `url('${bastoni.src}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </Box>
        <Navbar />
        <Stack width={'60%'} alignItems={'center'} gap={2} paddingBottom={3}>
          <Typography variant="h3">
            Meetups
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            NapulETH Meetups stand as vibrant gatherings, held monthly, where a community of blockchain enthusiasts and seasoned professionals converge to foster knowledge exchange. Our events serve as a platform for industry experts to share their insights, cutting-edge developments, and real-world experiences within the Ethereum ecosystem.
          </Typography>
        </Stack>
        <Box height={'100%'} width={"20%"} sx={{
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
        <Grid size={6}>
          <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
            backgroundColor: theme.palette.ne_lightblue.main,
            filter: 'blur(6px)'
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
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack width={'100%'} borderRadius={'1.2rem'} padding={2} gap={1} sx={{
            backgroundColor: theme.palette.ne_lightblue.main,
            filter: 'blur(6px)'
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
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
                <Grid size={4}>
                  <Stack width={'100%'} borderRadius={"1rem"} sx={{
                    aspectRatio: 1,
                    backgroundColor: theme.palette.background.default
                  }}></Stack>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Meetups;
