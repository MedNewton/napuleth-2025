import p4 from '@assets/partners/thirlld.webp'
import p5 from '@assets/partners/cryptoNews.webp'
import p6 from '@assets/partners/gateway.webp'
import p7 from '@assets/partners/criptogirl.webp'
import p8 from '@assets/partners/byzantine.webp'
import p9 from '@assets/partners/breaking.webp'
import p10 from '@assets/partners/beincrypto.webp'
import p11 from '@assets/partners/Investing_napoli.webp'
import p12 from '@assets/partners/cryptopub.webp'
import p13 from '@assets/partners/RBW.webp'
import p14 from '@assets/partners/pizzadao.webp'
import p15 from '@assets/partners/cryptobears.webp'
import p16 from '@assets/partners/coinrank.webp'


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
        name: 'BeInCrypto',
        logo: p10.src,
        link: 'https://it.beincrypto.com/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
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
        name: 'Crypto Pub',
        logo: p12.src,
        link: 'https://x.com/ilcryptopub_?lang=en',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'Investing Napoli',
        logo: p11.src,
        link: 'https://investingnapoli.it/',
        percentage: '55%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'Blockchain Week Rome',
        logo: p13.src,
        link: 'https://blockchainweekrome.com/en/',
        percentage: '75%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Pizza DAO',
        logo: p14.src,
        link: 'https://www.instagram.com/pizza_dao/',
        percentage: '60%',
        mobilePercentage: '60%',
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
        name: 'Crypto Bears',
        logo: p15.src,
        link: 'https://www.cryptobears.it/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Coin Rank',
        logo: p16.src,
        link: 'https://www.coinrank.io/',
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
    },
]
