import { Stack, Typography, Link } from '@mui/material';

export type FaqItem = {
    question: string;
    answer: string | React.ReactNode;
    category: string;
}

export const speakersFaq: FaqItem[] = [
    {
        question: 'How do I name my presentation?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6" fontWeight={700}>Speakername_PresentationTitle.pdf</Typography>
            <Typography variant="h6">Please stick to this guideline as we have tons of talks to organize, and it will make our life much easier.</Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'What is the deadline to send my presentation?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6" fontWeight={700}>July 16th.</Typography>
            <Typography variant="h6">
                If for whatever reason you miss the deadline, you can bring your presentation on a USB stick, or drop it in the following <Link href="https://drive.google.com/drive/folders/1KmBJvpmbGVzIXnIRz3BupD5gbebAtI7z">google drive</Link>.
            </Typography>
            <Typography variant="h6">
                In case you bring a USB stick, please note that we can&apos;t guarantee compatibility with our devices, so be careful.
            </Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'What is the format of the deck slides I will send? ',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6" fontWeight={700}>
                Slides need to be in a 16:9 (widescreen) format.
            </Typography>
            <Typography variant="h6">
                You can bring your own laptop and do a live demo. We strongly suggest you send us a Google Slide or PDF version, just in case something happens.
            </Typography>
            <Typography variant="h6">
                If you bring your own laptop, make sure to have an HDMI adaptor.
            </Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'Where do I send my presentation?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Drop your presentation in the following <Link href="https://drive.google.com/drive/folders/1KmBJvpmbGVzIXnIRz3BupD5gbebAtI7z">google drive</Link>.
            </Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'How long is my talk?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Check your presentation duration on the <Link href="/agenda" underline="always" target="_blank">agenda</Link>. For scheduling reasons, in some rare instances we had to modify some speeches&apos; length from what we communicated in the acceptance mail. This means that you may have been bumped from a 20m speech to a 40m one, or vice-versa. Please check to make sure you know how long your talk slot is.
            </Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'Will my name appear somewhere on your website?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Your title, name and credentials are public on our website. If you want to make changes, please send an email to <Link href="mailto:speakers@napuleth.org" underline="always" target="_blank">speakers@napuleth.org</Link>.
            </Typography>
        </Stack>,
        category: 'PRESENTATION SUBMISSION'
    },
    {
        question: 'When is my talk?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Check your presentation time on the <Link href="/agenda" underline="always" target="_blank">agenda</Link>. Be sure not to forget those and please come in your room 10 minutes early and make yourself known to the people in the room wearing a white bracelet.
            </Typography>
        </Stack>,
        category: 'AT THE VENUE'
    },
    {
        question: 'Is there a speakers’ lounge?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Yes, we have a small room with a dedicated bathroom just for speakers. You can find it on the map.
            </Typography>
        </Stack>,
        category: 'AT THE VENUE'
    },
    {
        question: 'I want to have another speaker with me',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                All speakers were notified. If you have a talk and want to have another person on stage with you, we won&apos;t force anyone off the stage. But these extra speakers won&apos;t show up on our agenda as we don&apos;t have time to add them, unfortunately.
            </Typography>
        </Stack>,
        category: 'ON STAGE'
    },
    {
        question: 'What will there be in the room?',
        answer: <Stack paddingX={4} paddingY={1}>
            <ul>
                <li>
                    <Typography variant="h6">Microphones</Typography>
                </li>
                <li>
                    <Typography variant="h6">Laptops</Typography>
                </li>
                <li>
                    <Typography variant="h6">Connection to google drive</Typography>
                </li>
                <li>
                    <Typography variant="h6">HDMI connection and screen</Typography>
                </li>
                <li>
                    <Typography variant="h6">A clicker</Typography>
                </li>
                <li>
                    <Typography variant="h6">A couple of people per room to help you, wearing a white bracelet.</Typography>
                </li>
            </ul>
        </Stack>,
        category: 'ON STAGE'
    },
    {
        question: 'Will my talk be recorded?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Most certainly. All talks will be recorded, and uploaded on our YouTube channel almost immediately. Our photographers and video makers will also take pictures and short videos of you while you present, which will be used on our social media.
            </Typography>
            <Typography variant="h6">                
                If you do not wish to be recorded, please notify us as soon as possible either at at <Link href="mailto:speakers@napuleth.com">speakers@napuleth.com</Link> or live at the venue.
            </Typography>
            <Typography variant="h6">
                The recording guys will be in the room with you. If you have any special request, ask the people wearing a white bracelet before your talk begins.
            </Typography>
        </Stack>,
        category: 'ON STAGE'
    },
    {
        question: 'I have a conflict and I want to reschedule my talk.',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                We are sorry, but we can&apos;t help you with that. When you applied, you specified a day and a time preference. We honored them for the most part, and specified those in the email confirmation. Our agenda is full to the brim and there is no way we can move talks around this late. 
            </Typography>
            <Typography variant="h6">                
                If you don&apos;t think you can make it, please mail us at <Link href="mailto:speakers@napuleth.com">speakers@napuleth.com</Link> so that we can give your slot to someone else.
            </Typography>
        </Stack>,
        category: 'OTHER QUESTIONS'
    },
    {
        question: 'I want to cancel my talk.',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                Sorry to hear that! As above, please mail us at <Link href="mailto:speakers@napuleth.com">speakers@napuleth.com</Link> so that we can give your slot to someone else.
            </Typography>
        </Stack>,
        category: 'OTHER QUESTIONS'
    },
    {
        question: 'I need help!',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                On site: Look for anyone with a white bracelet. They are part of the team and will be able to help you.
            </Typography>
            <Typography variant="h6">
                Before the event: Mail us at <Link href="mailto:speakers@napuleth.com">speakers@napuleth.com</Link>.
            </Typography>
        </Stack>,
        category: 'OTHER QUESTIONS'
    },
]

