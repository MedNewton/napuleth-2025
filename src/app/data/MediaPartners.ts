import p1 from '@assets/partners/ETHDam.webp'
import p2 from '@assets/partners/ethzurich.webp'
import p3 from '@assets/partners/ethbucharest.webp'
import p4 from '@assets/partners/thirlld.webp'
import p5 from '@assets/partners/cryptoNews.png'
import p6 from '@assets/partners/gateway.png'
import p7 from '@assets/partners/criptogirl.png'
import p8 from '@assets/partners/byzantine.png'

export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    mobilePercentage: string;
    color: string;
    invert?: boolean;
}

export const MediaPartnersList: Partner[] = [
    {
        name: 'ETH Dam',
        logo: p1.src,
        link: 'https://www.ethdam.com/',
        percentage: '47%',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'ETH Zurich',
        logo: p2.src,
        link: 'https://ethz.ch/en.html',
        percentage: '47%',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'ETH Bucharest',
        logo: p3.src,
        link: 'https://ethbucharest.ro/',
        percentage: '75%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'Thrilld Labs',
        logo: p4.src,
        link: 'https://www.thrilldlabs.io/',
        percentage: '95%',
        mobilePercentage: '95%',
        color: '',
        invert: true
    },
    {
        name: 'Crypto News',
        logo: p5.src,
        link: 'https://cryptonews.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Gateway',
        logo: p6.src,
        link: 'https://thecryptogateway.it/',
        percentage: '80%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Criptogirl',
        logo: p7.src,
        link: 'https://www.criptogirl.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Byzantine',
        logo: p8.src,
        link: 'https://www.byzantine.fi/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    }
]
