import { Box, Stack, Typography } from "@mui/material"
import theme from "@theme/theme"

interface TrackPillProps {
    track: string,
    color: string,
}

const TrackPill = ({ track, color }: TrackPillProps) => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} marginX={0.5} gap={1} borderRadius={'1.8rem'} paddingX={2} paddingY={1.5} width={'fit-content'} height={'fit-content'} sx={{
            backgroundColor: theme.palette.background.default,
        }}>
            <Box borderRadius={'50%'} width={10} height={10} sx={{
                backgroundColor: color
            }}></Box>
            <Typography variant="h6" whiteSpace={'nowrap'} lineHeight={1}>{track}</Typography>
        </Stack>
    )
}

export default TrackPill