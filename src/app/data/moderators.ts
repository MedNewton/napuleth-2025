import BiancaDancu from '@assets/moderators/BiancaDancu.webp'
import ChiaraMunaretto from '@assets/moderators/ChiaraMunaretto.webp'
import FedericaMigliaro from '@assets/moderators/FedericaMigliaro.webp'
import FilippoAnania from '@assets/moderators/FilippoAnania.webp'
import GiovanniOrlacchio from '@assets/moderators/GiovanniOrlacchio.webp'
import IonutGaucan from '@assets/moderators/IonutGaucan.webp'
import LucreziaVanStegheren from '@assets/moderators/LucreziaVanStegheren.webp'
import OlgaArzhaeva from '@assets/moderators/OlgaArzhaeva.webp'
import StefanoDeLaTorre from '@assets/moderators/StefanoDeLaTorre.webp'
import ValentinaMarzioni from '@assets/moderators/ValentinaMarzioni.webp'
import MariaJesusNavarro from '@assets/moderators/MariaJesusNavarro.webp'

export interface Moderator {
    name: string;
    image: string;
    description: string;
}

export const moderators: Moderator[] = [
    {
        name: "Stefano De La Torre", // 0
        image: StefanoDeLaTorre.src,
        description: "NapulETH is proud to welcome Stefano De La Torre, the CEO of a tokenization platform specializing in safety attestations, with a legal-by-design approach and GDPR compliance. Stefano is also a co-founder of one of Italy’s largest Web3 communities, which has supported over 40 blockchain projects.",
    },
    {
        name: "Federica Migliaro", // 1
        image: FedericaMigliaro.src,
        description: "NapulETH is proud to welcome Federica Migliaro, business development lead at kpk (formerly Karpatkey). With a focus on growth and strategy in the Web3 ecosystem, she brings sharp operational insight and cross-border experience to the conversations unfolding at the event.",
    },
    {
        name: "Filippo Anania", // 2
        image: FilippoAnania.src,
        description: "NapulETH is proud to welcome Filippo Anania, founder and director of The Crypto Show, the first TV talk show in Italy fully dedicated to crypto, blockchain, and Web3. With a background in law and a Master in Blockchain Management, he has held key roles at Binance Italy, BingX, and MEXC, bringing a unique blend of legal, marketing, and media expertise to the stage.",
    },
    {
        name: "Giovanni Orlacchio", // 3
        image: GiovanniOrlacchio.src,
        description: "Doctor of Law trained in the University of Naples Federico II, after attending the DIGITA | Digital Transformation and Industry Innovation Academy began working as a Cybersecurity Analyst at Deloitte. He is also a member of numerous entities including Centro Studi Internazionali, IPE, TedXIschia and Global Shapers Community.",
    },
    {
        name: "Lucrezia Van Stegheren", // 4
        image: LucreziaVanStegheren.src,
        description: "Lucrezia Van Stegeren is a presenter, writer, and podcaster specializing in innovation, blockchain, and emerging technologies. She is the co-founder of Cryptoland Podcast, one of the first Italian shows dedicated to Web3. Lucrezia has established herself as a leading voice in the tech and digital media space, conducting interviews, hosting events, and creating editorial content that makes even the most complex topics accessible. She is a regular contributor to Forbes Italy, where she writes about technology, innovation, and the people shaping the future.",
    },
    {
        name: "Olga Arzhaeva", // 5
        image: OlgaArzhaeva.src,
        description: "As a LUISS graduate, Olga is a young blockchain evangelist and Co-founder & Co-president of the Italian Blockchain Student Association. She has extensive experience in blockchain research, with a focus on blockchain notarization, business internationalization within Web3, and tokenization. With a professional background in finance, she is continuing her path with a Master’s in Corporate Finance at SDA Bocconi starting this year.",
    },
    {
        name: "Valentina Marzioni", // 6
        image: ValentinaMarzioni.src,
        description: "NapulETH is proud to welcome Valentina Marzioni, known in the space as @Ladyinfinance. Financial expert at Diaman Partners and passionate communicator, she brings her sharp insight and dynamic energy to connect people, panels, and ideas throughout the event.",
    },
    {
        name: "Chiara Munaretto", // 7
        image: ChiaraMunaretto.src,
        description: "NapulETH is proud to welcome Chiara Munaretto, a Web3 marketing strategist with a strong track record in community building and digital innovation. After her experience at Deloitte’s Web3 team, she continues to support founders and projects across Europe, bringing insight, energy, and vision to the event.",
    },
    {
        name: "Ionut Gaucan", // 8
        image: IonutGaucan.src,
        description: "One of the most esteemed Team members, Ionut, will also contribute as session moderator this year! Ionut is an Italian KOL, active across the spectrum of everything crypto. He is also part of the NeverLocal team.",
    },
    {
        name: "Bianca Dancu", // 9
        image: BiancaDancu.src,
        description: "Bianca Dancu is a Bitcoin and crypto investor, blockchain advocate, and Marketing Manager at iluminary.ai. She’s also part of CryptoGirl, the first Italian community for women in Web3, supporting education, decentralization, and financial freedom through blockchain and AI.",
    },
    {
        name: "Maria Jesus Navarro", // 10
        image: MariaJesusNavarro.src,
        description: "Maria Jesus Navarro is a crypto professional with a strong background in business development and relationship management. She is currently VIP Relationship Manager for Europe and Latin America at Bybit, one of the leading global crypto exchanges. With experience across fintech, growth marketing, and product operations, Maria focuses on connecting institutional and high-net-worth clients with Web3 tools and opportunities.",
    },
]