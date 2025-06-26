import { Box, Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Grid from '@mui/material/Grid2';
import Navbar from "@components/Navbar";


import fabri from '@assets/team/FabrizioGenovese.webp'
import andrea from '@assets/team/AndreaVillager.webp'
import reffaelle from '@assets/team/RaffaeleOrefice.webp'
import ionut from '@assets/team/IonutGaucan.webp'
import gianluca from '@assets/team/gianluca.webp'
import lore from '@assets/team/lore.webp'
import catherine from '@assets/team/CatherineMarotta.webp'
import paola from '@assets/team/PaolaCiaramella.webp'
import maria from '@assets/team/Maria Maddalena.webp'
import med from '@assets/team/med.webp'
import Footer from "@sections/Footer";



const Team = () => {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={2} gap={3} sx={{
      overflow: 'hidden',
      backgroundColor: theme.palette.ne_lightblue.main
    }}>
      <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
        backgroundColor: theme.palette.ne_lightblue.main
      }}>

        <Navbar />
        <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingBottom={3}>
          <Typography variant="h3" textAlign={'center'}>
            Beyond the Familiar Faces
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            The Ethereum ecosystem constantly talks about onboarding the masses, yet conferences are filled with the same familiar faces—marketing officers, lead developers, and ambassadors. While their insights are valuable, these events risk becoming echo chambers.
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            To truly break this loop, we need to offer real incentives for those unfamiliar with web3 to join in. Our goal is to bring genuinely new faces into the Ethereum community by creating accessible, high-profile events. If you share this vision, NapulETH Open Village is for you.
          </Typography>
        </Stack>

      </Stack>
      <Grid container spacing={3} width={'100%'} paddingX={{ xs: 2, md: 10 }}>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${fabri.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Fabrizio R. Genovese
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Strategy Lead
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${andrea.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Andrea Paesano
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Event Lead
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${gianluca.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Gianluca Di Bella
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Strategic Partner
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${lore.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Lorenzo Ceppaluni
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Strategic Partner
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${ionut.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Ionut Gaucan
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Business Development
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${reffaelle.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Raffaele Orefice
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Community Lead
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${paola.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Paola Ciaramella
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Business Development
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${maria.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Maria M. Ascione
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Business Development
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${med.src}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Med Ben Moussa
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Web Development
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Stack width={'100%'} gap={1}>
            <Box width={'100%'} sx={{
              aspectRatio: '1/1',
              backgroundImage: `url('${catherine.src}')`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1.2rem'
            }}>

            </Box>
            <Stack width={'100%'} gap={1} alignItems={'center'} justifyContent={"center"} borderRadius={'1.2rem'} padding={2} sx={{
              backgroundColor: theme.palette.ne_gold.main,
              minHeight: { xs: '120px', sm: 'auto' },
            }}>
              <Typography variant="h5" fontSize={{ xs: "1.2rem", lg: "1.4rem" }} textAlign={"center"}>
                Catherine Marotta
              </Typography>
              <Typography variant="h6" fontSize={{ xs: "1rem", lg: "1.2rem" }} textAlign={"center"}>
                Graphic Designer
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Team;
