import s1 from '@assets/topsponsors2024/lilic.webp'
import s2 from '@assets/topsponsors2024/mood.webp'
import s3 from '@assets/topsponsors2024/bybit.webp'
import s4 from '@assets/topsponsors2024/youhodler.webp'
import s5 from '@assets/topsponsors2024/20squares.webp'
import s6 from '@assets/topsponsors2024/esp.webp'

export interface Sponsor {
    name: string;
    logo: string;
    link: string;
    percentage: string;
}

export const TopSponsorsList: Sponsor[] = [
    {
        name: "John Lilic",
        logo: s1.src,
        link: "https://www.johnlilic.info/",
        percentage: '80%'
    },
    {
        name: "Mood Global Services",
        logo: s2.src,
        link: "https://moodglobalservices.com/",
        percentage: '70%'
    },
    {
        name: "ByBit",
        logo: s3.src,
        link: "https://www.bybit.com/",
        percentage: '60%'
    },
    {
        name: "YouHodler",
        logo: s4.src,
        link: "https://www.youhodler.com/",
        percentage: '100%'
    },
    {
        name: "20Squares",
        logo: s5.src,
        link: "https://20squares.xyz/",
        percentage: '70%'
    },
    {
        name: "ESP",
        logo: s6.src,
        link: "https://esp.ethereum.foundation/",
        percentage: '80%'
    },
]