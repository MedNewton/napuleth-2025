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
import p19 from '@assets/partners/thirlld.webp'
import p20 from '@assets/partners/gateway.webp'
import p21 from '@assets/partners/byzantine.webp'
import p22 from "@assets/partners/chainlink.webp"
import p23 from "@assets/partners/cyberscope1.webp"
import p24 from "@assets/partners/tedx.webp"
import p25 from "@assets/partners/binance.webp"
import p26 from "@assets/partners/shapers.webp"
import p27 from "@assets/partners/csi.webp"
import p28 from "@assets/partners/dbw.webp"
import p29 from "@assets/partners/wehub.webp"
import p30 from "@assets/partners/QuillAudits.webp"
import p31 from "@assets/partners/GDG.webp"
import p32 from "@assets/partners/multilumix.webp"

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
        name: 'Chainlink',
        logo: p22.src,
        link: 'https://www.chainlink.com/',
        percentage: '80%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'CyberScope',
        logo: p23.src,
        link: 'https://www.cyberscope.io/',
        percentage: '90%',
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
        name: 'TedX Angri',
        logo: p24.src,
        link: 'https://tedxangri.it/',
        percentage: '80%',
        mobilePercentage: '90%',
        color: '',
    },
    {
        name: 'Global Shapers Community',
        logo: p26.src,
        link: 'https://www.globalshapers.org/home',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'Centro Studi Internazionali',
        logo: p27.src,
        link: 'https://studi-internazionali.org/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Dutch Blockchain Week',
        logo: p28.src,
        link: 'https://dutchblockchainweek.com/',
        percentage: '80%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'WeHub',
        logo: p29.src,
        link: 'https://wehub.it/',
        percentage: '80%',
        mobilePercentage: '90%',
        color: '',
    },
    {
        name: 'Quill Audits',
        logo: p30.src,
        link: 'https://www.quillaudits.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Google Developer Groups',
        logo: p31.src,
        link: 'https://gdg.community.dev/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'multilumex',
        logo: p32.src,
        link: 'https://multilumix.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Commune Di Napoli',
        logo: p5.src,
        link: 'https://www.comune.napoli.it/home',
        percentage: '50%',
        mobilePercentage: '50%',
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
        name: 'Urbe Campus',
        logo: p13.src,
        link: 'https://urbe.build/',
        percentage: '55%',
        mobilePercentage: '70%',
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
    },
    {
        name: 'Thrilld Labs',
        logo: p19.src,
        link: 'https://www.thrilldlabs.io/',
        percentage: '95%',
        mobilePercentage: '95%',
        color: '',
        invert: true
    },
    {
        name: 'Gateway',
        logo: p20.src,
        link: 'https://thecryptogateway.it/',
        percentage: '80%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Byzantine',
        logo: p21.src,
        link: 'https://www.byzantine.fi/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
]
