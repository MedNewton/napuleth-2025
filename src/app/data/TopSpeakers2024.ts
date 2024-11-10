import s1 from '@assets/topSpeakers2024//lilic.webp'
import s2 from '@assets/topSpeakers2024/QJ.webp'
import s3 from '@assets/topSpeakers2024/FabrizioGenovese.webp'
import s4 from '@assets/topSpeakers2024/StefanoGogioso.webp'
import s5 from '@assets/topSpeakers2024/Viktor.webp'
import s6 from '@assets/topSpeakers2024/CarloParisi.webp'
import s7 from '@assets/topSpeakers2024/FilippoChiricozzi.webp'

export interface Speaker{
    name: string;
    image: string;
    affiliation: string;
    link: string;
}

export const TopSpeakersList2024: Speaker[] = [
    {
        name: 'John Lilic',
        image: s1.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'QJ',
        image: s2.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Fabrizio Genovese',
        image: s3.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Stefano Gogioso',
        image: s4.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Viktor',
        image: s5.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Carlo Parisi',
        image: s6.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Filippo Chiricozzi',
        image: s7.src,
        affiliation: "",
        link: ""
    }

]