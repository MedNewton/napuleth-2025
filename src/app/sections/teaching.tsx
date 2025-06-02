'use client'
import { Stack, Typography, Button, Link, Box } from "@mui/material";
import theme from "@theme/theme";

import teaching from '@assets/teaching.jpeg'
import { FaYoutube } from "react-icons/fa6";


const Teaching = () => {

    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">NapulETH & Federico II University</Typography>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} gap={2}>
                <Stack width={{ xs: '100%', lg: '35%' }} height={{ xs: '30vh', lg: '50vh' }}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${teaching.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '1.8rem',
                    }}></Box>
                </Stack>
                <Stack width={{ xs: '100%', lg: '65%' }} paddingY={2} justifyContent={'space-between'} height={{ xs: 'auto', lg: '50vh' }} gap={2}>
                    <Typography variant="h6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</Typography>
                    <Stack>
                        <Link href="https://www.youtube.com/watch?v=UKoOHo5lVEI" target="_blank" underline="none">
                        <Stack
                            width={'fit-content'}
                            direction="row"
                            alignItems={'center'}
                            justifyContent={'center'}
                            gap={1}
                            paddingX={2}
                            paddingY={1.5}
                            borderRadius={'.8rem'}
                            sx={{
                                backgroundColor: theme.palette.ne_rose.main
                            }}
                        >
                            <FaYoutube color="red" size={30} />
                            <Typography variant='h5' paddingTop={0.4}>Watch full video</Typography>
                        </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Teaching;