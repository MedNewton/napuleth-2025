import s1 from '@assets/topSpeakers2024/AndreeaCia.webp'
import s2 from '@assets/topSpeakers2024/FabrizioGenovese.webp'
import s3 from '@assets/topSpeakers2024/gianluca.webp'
import s4 from '@assets/topSpeakers2024/AlessandraBrandi.webp'
import s5 from '@assets/topSpeakers2024/FrancescoVincenti.webp'
import s6 from '@assets/topSpeakers2024/DayanaAleksandrova.webp'
import s7 from '@assets/topSpeakers2024/MatteoTambussi.webp'

export interface Speaker{
    name: string;
    image: string;
    affiliation: string;
    link: string;
}

export const TopSpeakersList2024: Speaker[] = [
    {
        name: 'Andreea Cia',
        image: s1.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Fabrizio Genovese',
        image: s2.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Gianluca Di Bella',
        image: s3.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Alessandra Brandi',
        image: s4.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Francesco Vincenti',
        image: s5.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Dayana Aleksandrova',
        image: s6.src,
        affiliation: "",
        link: ""
    },
    {
        name: 'Matteo Tambussi',
        image: s7.src,
        affiliation: "",
        link: ""
    }

]