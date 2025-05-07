import p1 from '@assets/partners/ETHDam.webp'
import p2 from '@assets/partners/ethzurich.webp'
import p3 from '@assets/partners/ethbucharest.webp'
import p4 from '@assets/partners/thirlld.webp'
export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    color: string;
}

export const MediaPartnersList: Partner[] = [
    {
        name: 'ETH Dam',
        logo: p1.src,
        link: 'https://www.ethdam.com/',
        percentage: '33%',
        color: '',
    },
    {
        name: 'ETH Zurich',
        logo: p2.src,
        link: 'https://ethz.ch/en.html',
        percentage: '33%',
        color: '',
    },
    {
        name: 'ETH Bucharest',
        logo: p3.src,
        link: 'https://ethbucharest.ro/',
        percentage: '50%',
        color: '',
    },
    {
        name: 'Thrilld Labs',
        logo: p4.src,
        link: 'https://www.thrilldlabs.io/',
        percentage: '80%',
        color: '',
    },
]
