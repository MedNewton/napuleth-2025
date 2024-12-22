import p1 from '@assets/partners/SpaghettETH.webp'
import p2 from '@assets/partners/beincrypto.webp'
import p3 from '@assets/partners/Belonq.webp'
import p4 from '@assets/partners/hg.webp'
import p5 from '@assets/partners/commune.webp'
import p6 from '@assets/partners/lisa.webp'
import p7 from '@assets/partners/fabbrica.webp'
import p8 from '@assets/partners/spicy.webp'
import p9 from '@assets/partners/regione.webp'

export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    color: string;
}

export const PartnersList: Partner[] = [
    {
        name: 'SpaghettETH',
        logo: p1.src,
        link: 'https://www.spaghett-eth.com/',
        percentage: 'contain',
        color: '',
    },
    {
        name: 'BeInCrypto',
        logo: p2.src,
        link: 'https://it.beincrypto.com/',
        percentage: '100%',
        color: '',
    },
    {
        name: 'Belonq Community',
        logo: p3.src,
        link: 'https://belonqevent.com/',
        percentage: '65%',
        color: '',
    },
    {
        name: 'HGVIS',
        logo: p4.src,
        link: 'https://hgvis.io/',
        percentage: '75%',
        color: '',
    },
    {
        name: 'Commune Di Napoli',
        logo: p5.src,
        link: 'https://www.comune.napoli.it/home',
        percentage: '40%',
        color: '',
    },
    {
        name: 'LISA',
        logo: p6.src,
        link: 'https://lisalab.it/',
        percentage: '70%',
        color: '',
    },
    {
        name: 'Fabbrica Italiana dell\'Innovazione',
        logo: p7.src,
        link: 'https://www.fabbricaitalianainnovazione.it/',
        percentage: '75%',
        color: '',
    },
    {
        name: 'Spici',
        logo: p8.src,
        link: 'https://www.spici.eu/',
        percentage: '35%',
        color: '',
    },
    {
        name: 'Regione Campania',
        logo: p9.src,
        link: 'https://www.regione.campania.it/',
        percentage: '40%',
        color: '',
    },
]
