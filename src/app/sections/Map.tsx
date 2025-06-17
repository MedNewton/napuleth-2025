import { Box, Stack, Typography } from "@mui/material";
import theme from "@theme/theme";

const Map = () => {
    return (
        <Stack width="100%" height="100%" position="relative" gap={2}>
            <Stack gap={0.5}>
            <Typography variant="h4" color={theme.palette.text.primary}>Find our event here:</Typography>
            <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2025, held at Villa Doria D&apos;Angri in Naples</Typography>
            </Stack>
            <Box width="100%" height={'400px'} borderRadius={"1.8rem"} overflow={"hidden"} sx={{
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"
            }}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2181076827023!2d14.2161494!3d40.8231727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09543e505225%3A0x8549f64b85877f64!2sVilla%20Doria%20d&#39;Angri!5e0!3m2!1sar!2sma!4v1749077003659!5m2!1sar!2sma&language=it" 
                width="100%"
                height="100%"
                style={{ border: '0', width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Stack>
    )
}

export default Map;
