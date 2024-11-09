import p1 from '@assets/partners/SpaghettETH.webp'
import p2 from '@assets/partners/beincrypto.webp'
import p3 from '@assets/partners/Belonq.webp'
import p4 from '@assets/partners/hg.webp'
import p5 from '@assets/partners/commune.webp'
import p6 from '@assets/partners/lisa.webp'
import p7 from '@assets/partners/fabbrica.webp'

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
        link: '',
        percentage: 'contain',
        color: '',
    },
    {
        name: 'BeInCrypto',
        logo: p2.src,
        link: '',
        percentage: '100%',
        color: '',
    },
    {
        name: 'Belonq Community',
        logo: p3.src,
        link: '',
        percentage: '65%',
        color: '',
    },
    {
        name: 'HGVIS',
        logo: p4.src,
        link: '',
        percentage: '75%',
        color: '',
    },
    {
        name: 'Commune Di Napoli',
        logo: p5.src,
        link: '',
        percentage: '40%',
        color: '',
    },
    {
        name: 'LISA',
        logo: p6.src,
        link: '',
        percentage: '70%',
        color: '',
    },
    {
        name: 'Fabbrica Italiana dell\'Innovazione',
        logo: p7.src,
        link: '',
        percentage: '75%',
        color: '',
    },
    
]
