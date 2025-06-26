'use client';

import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";

const Meetups = () => {
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
            Meetups
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            NapulETH Meetups stand as vibrant gatherings, held monthly, where a community of blockchain enthusiasts and seasoned professionals converge to foster knowledge exchange. Our events serve as a platform for industry experts to share their insights, cutting-edge developments, and real-world experiences within the Ethereum ecosystem.
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
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
              <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.2rem'} paddingX={2} paddingY={12} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6">Coming Soon...</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Meetups;
