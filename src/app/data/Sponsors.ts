import s1 from '@assets/topsponsors2024/lilic.webp'
import s3 from '@assets/topsponsors2024/bybit.webp'
import s4 from '@assets/topsponsors2024/bitget2.webp'
import s6 from '@assets/topsponsors2024/esp.webp'
import s7 from '@assets/topsponsors2024/nexLogo.webp'
import s8 from '@assets/topsponsors2024/CMC.webp'
import s9 from '@assets/topsponsors2024/nova.webp'
import s10 from '@assets/topsponsors2024/BGA.webp'
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
import s23 from '@assets/topsponsors2024/bebiip2.webp'
import s24 from '@assets/topsponsors2024/Namirial.webp'
import s25 from '@assets/topsponsors2024/Wirex.webp'
import s26 from '@assets/topsponsors2024/Spyral.webp'
import s27 from '@assets/topsponsors2024/Cyberscope.webp'
import s28 from '@assets/topsponsors2024/Parthenope.webp'
import s29 from '@assets/topsponsors2024/BuidlGuidl.webp'
import s30 from '@assets/topsponsors2024/mood.webp'
import s32 from "@assets/partners/QuillAudits.webp"
import s33 from "@assets/topsponsors2024/Urbe.webp"
import s34 from "@assets/partners/LATENT.webp"
import s35 from "@assets/partners/binance.webp"
import s36 from "@assets/partners/gluef.webp"
import s37 from "@assets/partners/maccheroni.webp"
import s38 from "@assets/partners/Akka.webp"
import s39 from "@assets/partners/Avalanche.webp"
import s40 from "@assets/partners/bridgy.webp"
import s41 from '@assets/partners/grow.webp'
import s42 from '@assets/partners/tao.webp'
import s43 from '@assets/partners/Bebiip.webp'

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
        name: "Binance",
        logo: s35.src,
        link: 'https://www.binance.com/en',
        percentage: '100%',
        mobilePercentage: '100%',
        show: true
    },
    {
        name: "BitGet",
        logo: s4.src,
        link: "https://www.bitget.com/",
        percentage: '75%',
        mobilePercentage: '80%',
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
        name: "Avalanche",
        logo: s39.src,
        link: "https://www.avax.network/",
        percentage: '70%',
        mobilePercentage: '65%',
        show: true
    },
    {
        name: "Bridgy",
        logo: s40.src,
        link: "https://www.bridgy.com/",
        percentage: '75%',
        mobilePercentage: '65%',
        show: true
    },
    {
        name: "Grow3.ai",
        logo: s41.src,
        link: "https://grow3.ai/",
        percentage: '75%',
        mobilePercentage: '65%',
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
        name: "Bybit",
        logo: s3.src,
        link: "https://www.bybit.com/",
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
        name: 'Taomark',
        logo: s42.src,
        link: 'https://taomark.com/',
        percentage: '50%',
        mobilePercentage: '50%',
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
    {
        name: 'Bebiip',
        logo: s23.src,
        link: '',
        percentage: '95%',
        mobilePercentage: '95%',
        show: true
    },
    {
        name: 'Namirial',
        logo: s24.src,
        link: 'https://www.namirial.com/en/',
        percentage: '95%',
        mobilePercentage: '95%',
        show: true,
        invert: false
    },
    {
        name: 'Wirex',
        logo: s25.src,
        link: 'https://wirexapp.com/',
        percentage: '95%',
        mobilePercentage: '95%',
        show: true,
        invert: false
    },
    {
        name: 'Spyral',
        logo: s26.src,
        link: 'https://spyral.studio/',
        percentage: '95%',
        mobilePercentage: '95%',
        show: true,
        invert: false
    },
    {
        name: 'Mood',
        logo: s30.src,
        link: 'https://moodglobalservices.com/',
        percentage: '70%',
        mobilePercentage: '50%',
        show: true,
        invert: false
    },
    {
        name: 'QuillAudits',
        logo: s32.src,
        link: 'https://www.quillaudits.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        show: true,
        invert: false
    },
    {
        name: 'AKKA',
        logo: s38.src,
        link: 'https://italy.akka.app/',
        percentage: '75%',
        mobilePercentage: '75%',
        show: true,
        invert: false
    },
    {
        name: 'Urbe',
        logo: s33.src,
        link: 'https://urbe.build/',
        percentage: '100%',
        mobilePercentage: '100%',
        show: true,
        invert: false
    },
    {
        name: 'Parthenope',
        logo: s28.src,
        link: 'https://parthenope.it/',
        percentage: '50%',
        mobilePercentage: '50%',
        show: true,
        invert: false
    },
    {
        name: 'Cyberscope',
        logo: s27.src,
        link: 'https://cyberscope.io/',
        percentage: '100%',
        mobilePercentage: '100%',
        show: true,
        invert: true
    },
    {
        name: 'BuidlGuidl',
        logo: s29.src,
        link: 'https://buidlguidl.com/',
        percentage: '95%',
        mobilePercentage: '95%',
        show: true,
        invert: false
    },
    {
        name: 'LATENT',
        logo: s34.src,
        link: 'https://latentlabs.xyz/',
        percentage: '100%',
        mobilePercentage: '100%',
        show: true,
        invert: false
    },
    {
        name: 'GLUE Finance',
        logo: s36.src,
        link: 'https://www.glue.finance/',
        percentage: '70%',
        mobilePercentage: '70%',
        show: true,
        invert: false
    },
    {
        name: 'Bebiip',
        logo: s43.src,
        link: 'https://bebiip.com/',
        percentage: '85%',
        mobilePercentage: '85%',
        show: true,
    },
    {
        name: 'Tina Maccheroni',
        logo: s37.src,
        link: 'https://shop.tinamaccheroni.com/',
        percentage: '55%',
        mobilePercentage: '55%',
        show: true,
        invert: false
    }
]