'use client';

import { Box, Link, Button, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";

import side1 from "@assets/side-events/side1.webp"
import side2 from "@assets/side-events/side2.webp"
import side3 from "@assets/side-events/side3.webp"
import side4 from "@assets/side-events/side4.webp"
import side5 from "@assets/side-events/side5.webp"
import side6 from "@assets/side-events/side6.webp"
import side7 from "@assets/side-events/side7.webp"

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
                backgroundImage: `url('${side1.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">Bitget Exclusive Boat Party - Capri</Typography>
                <Typography variant="subtitle1">Sponsored by Bitget, a global leader in crypto and Web3, the event brings a modern twist to the sea — blending tradition with innovation. Expect chilled drinks, excellent quality fish-based food, music, and a laid-back atmosphere where guests can relax, connect, and celebrate.</Typography>
                <Link href="https://lu.ma/gf8lxv3f" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundImage: `url('${side3.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">Opening Party NapulETH</Typography>
                <Typography variant="subtitle1">This isn&apos;t your average afterparty—it&apos;s a Neapolitan-flavored networking extravaganza, complete with a free bar, live music from an enchanting quintetto d&apos;archi, and a crowd of fellow NapulETH adventurers. Whether you&apos;re here to make new friends, plot your next big idea, or just eat your body weight in pagnottielli, you&apos;re in the right place.<br /><br /></Typography>
                <Link href="https://lu.ma/zyn1xinj" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundImage: `url('${side4.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">Sui Sunset Aperitif</Typography>
                <Typography variant="subtitle1">Join the Sui Foundation and Napuleth community for an exclusive sunset gathering at the stunning Villa Doria in Naples—the first-ever Sui event hosted in Italy. After day two of the Napuleth conference, immerse yourself in the elegant ambiance overlooking the city, connect with blockchain enthusiasts and industry leaders, and enjoy fine food and drinks in a relaxed atmosphere.</Typography>
                <Link href="https://lu.ma/x3m0vzqa" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundImage: `url('${side5.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">Crypto Outdoor Workout (COW) - NapulETH 2025</Typography>
                <Typography variant="subtitle1">​We are bringing our favourite workout event to Italy for the first time!</Typography>
                <Typography variant="subtitle1">Take a break from the conference discussions and join us for some exercise at an outdoor gym on the beach walking distance from the main venue 💪</Typography>
                <Link href="https://lu.ma/csb8kp9q" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundImage: `url('${side6.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">ETHGlobal Happy Hour at NapulETH</Typography>
                <Typography variant="subtitle1">​Join us for the ETHGlobal Happy Hour at NapulETH! 🍻✨</Typography>
                <Typography variant="subtitle1">​We&apos;re gathering all the crypto folks in Naples for an evening filled with great conversations, new connections, and plenty of crypto chatter.</Typography>
                <Typography variant="subtitle1">​See you there!<br /><br /></Typography>
                <Link href="https://lu.ma/ethglobal-hh-napuleth" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid container spacing={2} width={'100%'}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box display={"flex"} flexGrow={1} width={'100%'} height={'100%'} borderRadius={'1.2rem'} sx={{
                backgroundColor: theme.palette.ne_gray.main,
                backgroundImage: `url('${side7.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack width={'100%'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.2rem'} paddingX={3} paddingY={3} gap={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h5">Bybit EU AFTERPARTY</Typography>
                <Typography variant="subtitle1">​Are you attending NapulETH? Come to the wildest side event! Bybit EU is hosting their first private party in Italy, and you&apos;re invited! Gear up for an exciting party with the Bybit team and an exclusive DJ Set!</Typography>
                <Typography variant="subtitle1">🍷 We’ve got all the drinks sorted: OPEN BAR for all the participants.<br /></Typography>
                <Link href="https://lu.ma/gw1qirwg?locale=en-GB" underline="none" target="_blank" sx={{
                  marginTop: 2
                }}>
                  <Button variant='outlined' sx={{
                    background: theme.palette.ne_rose.main,
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: "black",
                      color: theme.palette.background.default
                    }
                  }}>
                    <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                      Details & Registration
                    </Typography>
                  </Button>
                </Link>
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
