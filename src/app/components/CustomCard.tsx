import { Stack } from "@mui/material";

interface CustomCardProps {
    gradient: string;
    border: string;
    shadow: string;
    children: React.ReactNode;
    padding?: number;
    className?: string
}

const CustomCard: React.FC<CustomCardProps> = ({ gradient, border, shadow, children, padding, className }) => {
    return (
        <Stack className={className} width={'100%'} height={'100%'} border={border} boxShadow={shadow} borderRadius={"1.2rem"} padding={padding ? padding : 3} position={'relative'} overflow={'hidden'} sx={{
            background: gradient,
        }}>
            {children}
        </Stack>
    )
}

export default CustomCard