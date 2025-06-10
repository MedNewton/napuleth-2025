import p1 from '@assets/partners/SpaghettETH.webp'
import p2 from '@assets/partners/beincrypto.webp'
import p3 from '@assets/partners/Belonq.webp'
import p4 from '@assets/partners/hg.webp'
import p5 from '@assets/partners/commune.webp'
import p6 from '@assets/partners/lisa.webp'
import p7 from '@assets/partners/fabbrica.webp'
import p8 from '@assets/partners/spicy.webp'
import p9 from '@assets/partners/regione.webp'
import p10 from '@assets/partners/ethzurich.webp'
import p11 from '@assets/partners/barbera.webp'
import p12 from '@assets/partners/Investing_napoli.webp'
import p13 from '@assets/partners/urbe.webp'
import p14 from '@assets/partners/cryptoNews.webp'
import p15 from '@assets/partners/deffio.webp'
import p16 from '@assets/partners/federico.webp'
import p17 from '@assets/partners/Belonq.webp'
import p18 from '@assets/topsponsors2024/mood.webp'
export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    color: string;
    mobilePercentage: string;
    invert?: boolean;
}

export const PartnersList: Partner[] = [
    {
        name: 'SpaghettETH',
        logo: p1.src,
        link: 'https://www.spaghett-eth.com/',
        percentage: 'contain',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'BeInCrypto',
        logo: p2.src,
        link: 'https://it.beincrypto.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'HGVIS',
        logo: p4.src,
        link: 'https://hgvis.io/',
        percentage: '75%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Commune Di Napoli',
        logo: p5.src,
        link: 'https://www.comune.napoli.it/home',
        percentage: '40%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: "Mood Global Services",
        logo: p18.src,
        link: "https://moodglobalservices.com/",
        percentage: '60%',
        mobilePercentage: '45%',
        color: '',
    },
    {
        name: 'LISA',
        logo: p6.src,
        link: 'https://lisalab.it/',
        percentage: '70%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Fabbrica Italiana dell\'Innovazione',
        logo: p7.src,
        link: 'https://www.fabbricaitalianainnovazione.it/',
        percentage: '75%',
        mobilePercentage: '85%',
        color: '',
    },
    {
        name: 'Spici',
        logo: p8.src,
        link: 'https://www.spici.eu/',
        percentage: '35%',
        mobilePercentage: '45%',
        color: '',
    },
    {
        name: 'Regione Campania',
        logo: p9.src,
        link: 'https://www.regione.campania.it/',
        percentage: '40%',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'Cafe Barbera',
        logo: p11.src,
        link: 'https://www.caffebarbera.it/en/',
        percentage: '60%',
        mobilePercentage: '60%',
        color: '',
    },
    {
        name: 'Investing Napoli',
        logo: p12.src,
        link: 'https://investingnapoli.it/',
        percentage: '55%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'Urbe Campus',
        logo: p13.src,
        link: 'https://urbe.build/',
        percentage: '55%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'Crypto News',
        logo: p14.src,
        link: 'https://cryptonews.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Belonq Community',
        logo: p17.src,
        link: 'https://belonqevent.com/',
        percentage: '65%',
        mobilePercentage: '65%',
        color: '',
    },
    {
        name: 'Federico II University of Naples',
        logo: p16.src,
        link: 'https://www.international.unina.it/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    }
]
