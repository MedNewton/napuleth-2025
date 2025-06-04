import p1 from '@assets/partners/ETHDam.webp'
import p2 from '@assets/partners/ethzurich.webp'
import p3 from '@assets/partners/ethbucharest.webp'
import p4 from '@assets/partners/Eth Dublino Irlanda.webp'
import p5 from '@assets/partners/ETH Cluj Napoca Romania .webp'
import p6 from '@assets/partners/ETH Belgrado Serbia.webp'
import p7 from '@assets/partners/Devconnect Buenos Aires Argentina.webp'
import p8 from '@assets/partners/ETH ROME.webp'
import p9 from '@assets/partners/ETH Riyadh Arabia Saudita.webp'
import p10 from '@assets/partners/ETH NEWYORK USA.webp'
import p11 from '@assets/partners/ETH Tokyo.webp'
import p12 from '@assets/partners/ETH Sydney.webp'
import p13 from '@assets/partners/ETH SINGAPORE .webp'
import p14 from '@assets/partners/Eth Shanghai China.webp'
import p15 from '@assets/partners/ETH SAN FARNCISCO USA.webp'
import p17 from '@assets/partners/ETHWarsaw Polonia.webp'
import p18 from '@assets/partners/ethPrague Republica Ceca .webp'
import p19 from '@assets/partners/ETHPanda da mettere il pin vicino a Pechino.webp'
import p20 from '@assets/partners/ETHKL Kuala Lampur Malesia .webp'



export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    mobilePercentage: string;
    color: string;
    invert?: boolean;
}

export const ETHFamilyList: Partner[] = [
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
        name: 'ETH Dublino Irlanda',
        logo: p4.src,
        link: 'https://ethdublin.ie/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'ETH Cluj Napoca Romania',
        logo: p5.src,
        link: 'https://ethcluj.ro/',
        percentage: '85%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'ETH Belgrado Serbia',
        logo: p6.src,
        link: 'https://ethbelgrade.rs/',
        percentage: '60%',
        mobilePercentage: '55%',
        color: '',
    },
    {
        name: 'ETH Buenos Aires Argentina',
        logo: p7.src,
        link: 'https://ethbuenosaires.com/',
        percentage: '60%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'ETH Roma Italia',
        logo: p8.src,
        link: 'https://ethroma.it/',
        percentage: '85%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'ETH Riyadh Arabia Saudita',
        logo: p9.src,
        link: 'https://ethriyadh.sa/',
        percentage: '55%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'ETH New York USA',
        logo: p10.src,
        link: 'https://ethnewyork.com/',
        percentage: '55%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'ETH Tokyo Giappone',
        logo: p11.src,
        link: 'https://ethtokyo.jp/',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'ETH Sydney Australia',
        logo: p12.src,
        link: 'https://ethsydney.com/',
        percentage: '70%',
        mobilePercentage: '65%',
        color: '',
    },
    {
        name: 'ETH Singapore',
        logo: p13.src,
        link: 'https://ethsingapore.com/',
        percentage: '70%',
        mobilePercentage: '65%',
        color: '',
    },
    {
        name: 'ETH Shanghai Cina',
        logo: p14.src,
        link: 'https://ethshanghai.com/',
        percentage: '70%',
        mobilePercentage: '65%',
        color: '',
    },
    {
        name: 'ETH San Francisco USA',
        logo: p15.src,
        link: 'https://ethsanfrancisco.com/',
        percentage: '35%',
        mobilePercentage: '35%',
        color: '',
    },
    {
        name: 'ETH Warsaw Polonia',
        logo: p17.src,
        link: 'https://ethwarsaw.pl/',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'ETH Prague Repubblica Ceca',
        logo: p18.src,
        link: 'https://ethprague.cz/',
        percentage: '60%',
        mobilePercentage: '60%',
        color: '',
    },
    {
        name: 'ETH Panda da mettere il pin vicino a Pechino',
        logo: p19.src,
        link: 'https://ethpanda.com/',
        percentage: '70%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'ETH KL Kuala Lumpur Malesia',
        logo: p20.src,
        link: 'https://ethkuala.com/',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    }
]

