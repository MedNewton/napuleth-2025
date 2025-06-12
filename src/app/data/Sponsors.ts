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
import s13 from "@assets/partners/neverlocal.webp"
import s14 from '@assets/partners/fareimpressa.webp'
import s15 from "@assets/topsponsors2024/zircuit.webp"
import s16 from "@assets/topsponsors2024/bchainers.webp"
import s17 from '@assets/topsponsors2024/Caffè.webp'
import s18 from "@assets/topsponsors2024/vesuvia.webp"
import s19 from "@assets/topsponsors2024/taikai.webp"
import s20 from "@assets/topsponsors2024/farassi.webp"
import s21 from "@assets/topsponsors2024/sorbillo.webp"
import s22 from '@assets/partners/regione.webp'

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
        name: "NexLabs",
        logo: s7.src,
        link: "https://nexlabs.io/",
        percentage: '80%',
        mobilePercentage: '75%',
        show: true
    },
    {
        name: "NeverLocal",
        logo: s13.src,
        link: "https://neverlocal.com/",
        percentage: '120%',
        mobilePercentage: '120%',
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
        name: "CMC",
        logo: s8.src,
        link: "https://coinmarketcap.com/",
        percentage: '100%',
        mobilePercentage: '100%',
        show: true
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
        name: "Fare Impressa",
        logo: s14.src,
        link: "https://www.fare-impresa.it/",
        percentage: '85%',
        mobilePercentage: '85%',
        show: true,
        invert: false
    },
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
        name: "BChainers",
        logo: s16.src,
        link: "https://bchainers.academy/",
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
        name: "Caffe Barbera",
        logo: s17.src,
        link: "https://www.caffebarbera.com/en",
        percentage: '65%',
        mobilePercentage: '65%',
        show: true,
        invert: false
    },
    {
        name: 'VasuvIA',
        logo: s18.src,
        link: 'http://www.vesuv-ia.it/',
        percentage: '75%',
        mobilePercentage: '75%',
        show: true
    },
    {
        name: 'Taikai',
        logo: s19.src,
        link: 'https://taikai.network/',
        percentage: '65%',
        mobilePercentage: '65%',
        show: true
    },
    {
        name: 'Zircuit',
        logo: s15.src,
        link: 'https://www.zircuit.com/',
        percentage: '70%',
        mobilePercentage: '70%',
        show: true
    },
    {
        name: 'Acqua Minerale Frasassi',
        logo: s20.src,
        link: 'https://acquafrasassi.it/en/',
        percentage: '70%',
        mobilePercentage: '65%',
        show: true
    },
    {
        name: 'Sorbillo',
        logo: s21.src,
        link: 'https://www.sorbillo.it/',
        percentage: '70%',
        mobilePercentage: '65%',
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
    {
        name: 'Regione Campania',
        logo: s22.src,
        link: 'https://www.regione.campania.it/',
        percentage: '45%',
        mobilePercentage: '45%',
        show: true
    },
]