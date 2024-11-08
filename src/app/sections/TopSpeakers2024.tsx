import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";

const TopSpeakers2024 = () => {
    return(
        <Stack width={'100%'} gap={2}>
            <Stack>
                <Typography variant="h4">Top Speakers</Typography>
                <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
            </Stack>
        </Stack>
    )
}

export default TopSpeakers2024;