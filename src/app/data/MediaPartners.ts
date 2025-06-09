import p4 from '@assets/partners/thirlld.webp'
import p5 from '@assets/partners/cryptoNews.webp'
import p6 from '@assets/partners/gateway.webp'
import p7 from '@assets/partners/criptogirl.webp'
import p8 from '@assets/partners/byzantine.webp'
import p9 from '@assets/partners/breaking.webp'

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
    },
    {
        name: 'Crypto Breaking News',
        logo: p9.src,
        link: 'https://www.cryptobreaking.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    }
]
