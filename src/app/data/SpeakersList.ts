import mattivalerio from '@assets/speakers/New/webp/MattiaValerio.webp'
import brunoakaspicy from '@assets/speakers/New/webp/BrunoMirnada.webp'
import iamsmith from '@assets/speakers/New/webp/IanSmith.webp'
import neroni from '@assets/speakers/New/webp/GiulianoNeroni.webp'
import piccirillo from '@assets/speakers/New/webp/Giovanni-Piccirillo.webp'
import vincentdevos from '@assets/speakers/New/webp/VincentDeVos.webp'
import loring from '@assets/speakers/New/webp/LoringHarkness.webp'
import jay from '@assets/speakers/New/webp/JamesRae.webp'
import marina from '@assets/speakers/New/webp/MarinaPetrichenko.webp'
import berkman from '@assets/speakers/New/webp/EdmundBerkmann.webp'
import thequeen from '@assets/speakers/New/webp/MariaMagenes.webp'
import colautti from '@assets/speakers/New/webp/LorenzoColautti.webp'
import delatorre from '@assets/speakers/New/webp/StefanoDelaTorre.webp'
import dayana from '@assets/speakers/New/webp/dayana.webp'
import distefano from '@assets/speakers/New/webp/Piera-Di-Stefano.webp'
import jakub from '@assets/speakers/New/webp/JakubDziadkowiec.webp'
import hao from '@assets/speakers/New/webp/HaoWang.webp'
import mazza from '@assets/speakers/New/webp/mazza.webp'
import tullio from '@assets/speakers/New/webp/MarcoTullioGiordano.webp'
import parisi from '@assets/speakers/New/webp/CarloParisi.webp'
import gogioso from '@assets/speakers/New/webp/StefanoGogioso.webp'
import zahn from '@assets/speakers/New/webp/philipp_zahn.webp'
import lev from '@assets/speakers/New/webp/LevStambler.webp'



export interface Speaker {
    name: string;
    image: string;
    url: string;
    appartenance: string;
    appartenanceUrl: string;
    announced: boolean;
    id?: number;
}

export const speakersList: Speaker[] = [
    {
        name: "Mattia Valerio",
        image: mattivalerio.src,
        url: "https://www.linkedin.com/in/mattiavalerio-toscano",
        appartenance: "Figma, MUI",
        appartenanceUrl: "",
        announced: true,
        id: 1,
    },
    {
        name: "Bruno Mirnada",
        image: brunoakaspicy.src,
        url: "https://card3.co/OV3HWV",
        appartenance: "ChiliBangs, Web3 Women Summit",
        appartenanceUrl: "",
        announced: true,
        id: 2,
    },
    {
        name: "Ian Smith",
        image: iamsmith.src,
        url: "http://x.com/IanSmith_HSA",
        appartenance: "QuantumEVM",
        appartenanceUrl: "",
        announced: true,
        id: 3,
    },
    {
        name: "Giuliano Neroni",
        image: neroni.src,
        url: "http://giulianoneroni.com",
        appartenance: "Growa",
        appartenanceUrl: "",
        announced: true,
        id: 4,
    },
    {
        name: "Piccirillo Giovanni",
        image: piccirillo.src,
        url: "http://linkedin.com/in/giovanni-piccirillo-941709239",
        appartenance: "Growa",
        appartenanceUrl: "",
        announced: true,
        id: 5,
    },
    {
        name: "Vincent De Vos",
        image: vincentdevos.src,
        url: "https://www.linkedin.com/in/vindevos/",
        appartenance: "Chainforce, BLOKC, Watt2Trade, 3DOS, WeRate",
        appartenanceUrl: "",
        announced: true,
        id: 6,
    },
    {
        name: "Loring Harkness",
        image: loring.src,
        url: "https://x.com/LoringHarkness",
        appartenance: "Shutter Network, Paddle Battle",
        appartenanceUrl: "",
        announced: true,
        id: 7,
    },
    {
        name: "James Rae",
        image: jay.src,
        url: "https://linktr.ee/jayrae212",
        appartenance: "AdvocateAgency.io, Quintes.org, Steelo.io",
        appartenanceUrl: "",
        announced: true,
        id: 8,
    },
    {
        name: "Marina Petrichenko",
        image: marina.src,
        url: "https://x.com/Crypto_marina",
        appartenance: "Institute of Free Technology , Codex Storage",
        appartenanceUrl: "",
        announced: true,
        id: 9,
    },
    {
        name: "Edmund Berkmann",
        image: berkman.src,
        url: "https://uk.linkedin.com/in/edmund-berkmann-8987a6123",
        appartenance: "Steelo Labs Ltd., Atrium Uniswap Incubator, Perfect Abstractions.",
        appartenanceUrl: "",
        announced: true,
        id: 10,
    },
    {
        name: "Maria Magenes",
        image: thequeen.src,
        url: "https://x.com/mariamagenes1",
        appartenance: "Hype, SpaghettETH",
        appartenanceUrl: "",
        announced: true,
        id: 11,
    },
    {
        name: "Lorenzo Colautti",
        image: colautti.src,
        url: "https://www.linkedin.com/in/lorenzo-colautti/",
        appartenance: "CERTIFIE",
        appartenanceUrl: "",
        announced: true,
        id: 12,
    },
    {
        name: "Stefano De la Torre",
        image: delatorre.src,
        url: "https://www.linkedin.com/in/delatorrest/",
        appartenance: "Safety on Chain (SOC), 333.Builders",
        appartenanceUrl: "",
        announced: true,
        id: 13,
    },
    {
        name: "Dayana Aleksandrova",
        image: dayana.src,
        url: "http://x.com/dee_centralized",
        appartenance: "Cointelegraph",
        appartenanceUrl: "",
        announced: true,
        id: 14,
    },
    {
        name: "Piera Di Stefano",
        image: distefano.src,
        url: "https://www.linkedin.com/in/piera-di-stefano",
        appartenance: "Growa",
        appartenanceUrl: "",
        announced: true,
        id: 15,
    },
    {
        name: "Jakub Dziadkowiec",
        image: jakub.src,
        url: "https://x.com/JakubDziadkowie",
        appartenance: "BeInCrypto",
        appartenanceUrl: "",
        announced: true,
        id: 16,
    },
    {
        name: "Hao Wang",
        image: hao.src,
        url: "https://scholar.google.com/citations?user=S6P75HkAAAAJ&hl",
        appartenance: "Crystality, PREDA, International Digital Economy Academy",
        appartenanceUrl: "",
        announced: true,
        id: 17,
    },
    {
        name: "Alessandro Mazza",
        image: mazza.src,
        url: "https://x.com/crypto_ita2",
        appartenance: "",
        appartenanceUrl: "",
        announced: true,
        id: 18,
    },
    {
        name: "Marco Tullio Giordano",
        image: tullio.src,
        url: "https://linktr.ee/emmetiggi",
        appartenance: "",
        appartenanceUrl: "",
        announced: true,
        id: 19,
    },
    {
        name: "Carlo Parisi",
        image: parisi.src,
        url: "https://x.com/ManInBlackie",
        appartenance: "Growa",
        appartenanceUrl: "Protofire, Triwei, EEA, Castle Capital",
        announced: true,
        id: 20,
    },
    {
        name: "Stefano Gogioso",
        image: gogioso.src,
        url: "https://www.linkedin.com/in/stefano-gogioso-0000000000000000000000000000000000000000/",
        appartenance: "Growa",
        appartenanceUrl: "",
        announced: true,
        id: 21,
    },
    {
        name: "Philipp Zahn",
        image: zahn.src,
        url: "https://www.philipp-zahn.com/",
        appartenance: "20squares",
        appartenanceUrl: "",
        announced: true,
        id: 22,
    },
    {
        name: "Lev Stambler",
        image: lev.src,
        url: "https://lev.zip",
        appartenance: "NeverLocal",
        appartenanceUrl: "",
        announced: true,
        id: 24,
    }
]
