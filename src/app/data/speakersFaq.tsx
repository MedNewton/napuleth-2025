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
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'What is the deadline to send my presentation?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">July 13th.</Typography>
            <Typography variant="h6">If for whatever reason you miss the deadline, you can bring your presentation on a USB stick, or drop it in the following google drive <Link href="">link</Link></Typography>
            <Typography variant="h6">
                In case you bring a USB stick, please note that we can&apos;t guarantee compatibility with our devices, so be careful.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
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
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'Where do I send my presentation?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
            Drop your presentation in the following <Link href="">google drive</Link>
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'I want to have another speaker with me',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
            All speakers were notified. If you have a talk and want to have another person on stage with you, we won&apos;t force anyone off the stage. But these extra speakers won&apos;t show up on our agenda as we don&apos;t have time to add them, unfortunately.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'What will there be in the room?',
        answer: <Stack paddingX={4} paddingY={1}>
            <ul>
                <li>
                    <Typography variant="h6">
                    Microphones
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                    Laptops
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                    A google drive
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                    hdmi connection and screen
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                    A clicker
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                    A couple of people per room to help you, wearing a pink bracelet.
                    </Typography>
                </li>
                
            </ul>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'Will I have a record / picture of me?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
            Most certainly. All talks will be recorded, and uploaded on our YouTube channel almost immediately.
            </Typography>
            <Typography variant="h6">
            The recording guys will be in the room with you. If you have any special request, ask the people wearing a pink bracelet before your talk begins.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'Is there a speakers’ lounge?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
            Yes, we have a small room with a dedicated bathroom just for speakers. You can find it on the map.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'When do I present?',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
            Check your presentation time on the <Link href="/agenda" underline="always" target="_blank">agenda</Link>. Be sure not to forget those and please come in your room 10 minutes early and make yourself known to the people in the room wearing a pink bracelet.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
    {
        question: 'I need help!',
        answer: <Stack paddingX={4} paddingY={1}>
            <Typography variant="h6">
                On site: Look for anyone with a pink bracelet. They are part of the team and will be able to help you.
            </Typography>
            <Typography variant="h6">
            Before the event: Mail us at <Link href="mailto:speakers@napuleth.com">speakers@napuleth.com</Link>.
            </Typography>
        </Stack>,
        category: 'PRACTICAL Q&A'
    },
]

