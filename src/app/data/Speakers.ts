import s1 from "@assets/speakers/cesarevalitutto.jpeg"
import s2 from "@assets/speakers/giulianoneroni.png"
import s3 from "@assets/speakers/stefanodelatorre.jpg"
import s4 from "@assets/speakers/marinapetrichenko.jpg"
import s5 from "@assets/speakers/loringharkness.jpg"
import s6 from "@assets/speakers/jakubdziadkowiec.jpg"
import s7 from "@assets/speakers/marcotulliogiordano.jpeg"
import s8 from "@assets/speakers/carloparisi.png"
import s9 from "@assets/speakers/brunomiranda.jpg"
import s10 from "@assets/speakers/giovanniorlacchio.webp"
import s11 from "@assets/speakers/mariocaligiuri.jpg"
import s12 from "@assets/speakers/giovannademinico.jpg"
import s13 from "@assets/speakers/piccirillogiovanni.jpeg"
import s14 from "@assets/speakers/iansmith.jpg"
import s15 from "@assets/speakers/mariamagnes.jpg"
import s16 from "@assets/speakers/dayanaaleksandrova.jpeg"
import s17 from "@assets/speakers/alessandromazza.webp"
import s18 from "@assets/speakers/stefanodeangelis.jpeg"
import s19 from "@assets/speakers/edmundberkmann.webp"
import s20 from "@assets/speakers/haowang.webp"
import s21 from "@assets/speakers/ovidiudamian.jpg"
import s22 from "@assets/speakers/marcinkazmierczak.jpg"
import s23 from "@assets/speakers/marcellocoppo.jpg"
import s24 from "@assets/speakers/stefanocapaccioli.webp"

import placeHolder from "@assets/speakers/placeholder.jpg"


export interface Speaker {
    name: string;
    image: string;
    appartenance: string;
    id?: number;
}

export const speakers: Speaker[] = [
    {
        name: "Cesare Valitutto",
        image: s1.src,
        appartenance: "Company XYZ",
        id: 0,
    },
    {
        name: "Giuliano Neroni",
        image: s2.src,
        appartenance: "Company XYZ",
        id: 1,
    },
    {
        name: "Lorenzo Colautti",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 2,
    },
    {
        name: "Stefano De la Torre",
        image: s3.src,
        appartenance: "Company XYZ",
        id: 3,
    },
    {
        name: "Marina Petrichenko",
        image: s4.src,
        appartenance: "Company XYZ",
        id: 4,
    },
    {
        name: "Loring Harkness",
        image: s5.src,
        appartenance: "Company XYZ",
        id: 5,
    },
    {
        name: "Giorgio Bonuccelli",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 6,
    },
    {
        name: "Jakub Dziadkowiec",
        image: s6.src,
        appartenance: "Company XYZ",
        id: 7,
    },
    {
        name: "Marco Tullio Giordano",
        image: s7.src,
        appartenance: "Company XYZ",
        id: 8,
    },
    {
        name: "Carlo Parisi",
        image: s8.src,
        appartenance: "Company XYZ",
        id: 9,
    },
    {
        name: "Bruno Miranda",
        image: s9.src,
        appartenance: "Company XYZ",
        id: 10,
    },
    {
        name: "Giovanni Orlacchio",
        image: s10.src,
        appartenance: "Company XYZ",
        id: 11,
    },
    {
        name: "Mario Caligiuri",
        image: s11.src,
        appartenance: "Company XYZ",
        id: 12,
    },
    {
        name: "Giovanna De Minico",
        image: s12.src,
        appartenance: "Company XYZ",
        id: 13,
    },
    {
        name: "Giovanni Piccirillo",
        image: s13.src,
        appartenance: "Company XYZ",
        id: 14,
    },
    {
        name: "Ian Smith",
        image: s14.src,
        appartenance: "Company XYZ",
        id: 15,
    },
    {
        name: "Maria Magenes",
        image: s15.src,
        appartenance: "Company XYZ",
        id: 16,
    },
    {
        name: "Dayana Aleksandrova",
        image: s16.src,
        appartenance: "Company XYZ",
        id: 17,
    },
    {
        name: "Alessandro Mazza",
        image: s17.src,
        appartenance: "Company XYZ",
        id: 18,
    },
    {
        name: "Stefano De Angelis",
        image: s18.src,
        appartenance: "Company XYZ",
        id: 19,
    },
    {
        name: "Mattia Valerio",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 20,
    },
    {
        name: "Edmund Berkmann",
        image: s19.src,
        appartenance: "Company XYZ",
        id: 21,
    },
    {
        name: "Vincent De Vos",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 22,
    },
    {
        name: "Hao Wang",
        image: s20.src,
        appartenance: "Company XYZ",
        id: 23,
    },
    {
        name: "Jay Rae",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 24,
    },
    {
        name: "Ovidiu Damian",
        image: s21.src,
        appartenance: "Company XYZ",
        id: 25,
    },
    {
        name: "Marcin Kazmierczak",
        image: s22.src,
        appartenance: "Company XYZ",
        id: 26,
    },
    {
        name: "Marcello Coppo",
        image: s23.src,
        appartenance: "Company XYZ",
        id: 27,
    },
    {
        name: "Piera di Stefano",
        image: placeHolder.src,
        appartenance: "Company XYZ",
        id: 28,
    },
    {
        name: "Stefano Capaccioli",
        image: s24.src,
        appartenance: "Company XYZ",
        id: 29,
    },
]

