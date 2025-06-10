import s1 from '@assets/topsponsors2024/lilic.webp'
import s2 from '@assets/topsponsors2024/mood.webp'
import s3 from '@assets/topsponsors2024/bybit.webp'
import s4 from '@assets/topsponsors2024/Bitget.webp'
import s5 from '@assets/topsponsors2024/20squares.webp'
import s6 from '@assets/topsponsors2024/esp.webp'
import s7 from '@assets/topsponsors2024/nexLogo.png'
import s8 from '@assets/topsponsors2024/CMC.webp'
import s9 from '@assets/topsponsors2024/nova.webp'
import s10 from '@assets/topsponsors2024/BGA.webp'
import s11 from '@assets/partners/Belonq.webp'
import s12 from '@assets/partners/deffio.webp'

export interface Sponsor {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    mobilePercentage: string;
    show: boolean;
    invert?: boolean;
}

export const SponsorsList: Sponsor[] = [
    {
        name: "ESP",
        logo: s6.src,
        link: "https://esp.ethereum.foundation/",
        percentage: '70%',
        mobilePercentage: '70%',
        show: true
    },
    {
        name: "John Lilic",
        logo: s1.src,
        link: "https://www.johnlilic.info/",
        percentage: '70%',
        mobilePercentage: '60%',
        show: true
    },
    {
        name: "NexLabs",
        logo: s7.src,
        link: "https://nexlabs.io/",
        percentage: '80%',
        mobilePercentage: '75%',
        show: true
    },
    {
        name: "BitGet",
        logo: s4.src,
        link: "https://www.bitget.com/",
        percentage: '100%',
        mobilePercentage: '100%',
        show: true
    },
    {
        name: "Nova",
        logo: s9.src,
        link: "https://www.novaprotocol.io/",
        percentage: '55%',
        mobilePercentage: '55%',
        show: true,
        invert: true
    },
    {
        name: "BGA",
        logo: s10.src,
        link: "https://chainforgood.org/",
        percentage: '85%',
        mobilePercentage: '75%',
        show: true,
        invert: true
    },
    {
        name: "CMC",
        logo: s8.src,
        link: "https://coinmarketcap.com/",
        percentage: '100%',
        mobilePercentage: '100%',
        show: true
    },
    {
        name: 'DeFfio',
        logo: s12.src,
        link: 'https://deffio.com/wallet/',
        percentage: '70%',
        mobilePercentage: '70%',
        show: true
    },
]