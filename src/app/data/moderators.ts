import m1 from '@assets/moderators/AlexandraOvergaag.webp'
import m2 from '@assets/moderators/FedericaMigliaro.webp'
import m3 from '@assets/moderators/FilippoAnania.webp'
import m4 from '@assets/moderators/GiovanniOrlacchio.webp'
import m5 from '@assets/moderators/LucreziaVanStegheren.webp'
import m6 from '@assets/moderators/OlgaArzhaeva.webp'
import m7 from '@assets/moderators/Valentina.webp'
import m8 from '@assets/moderators/ChiaraMunaretto.webp'

export interface Moderator {
    name: string;
    image: string;
    description: string;
}

export const moderators: Moderator[] = [
    {
        name: 'Alexandra Overgaag',
        image: m1.src,
        description: 'NapulETH is proud to welcome Alexandra Overgaag, founder and CEO of Thrilld Labs, a company building Web3 networking and event solutions. With a strong presence across the European crypto scene, she brings her experience in strategic communication and community design to help shape meaningful connections throughout the event.',
    },
    {
        name: 'Federica Migliaro',
        image: m2.src,
        description: 'NapulETH is proud to welcome Federica Migliaro, business development lead at kpk (formerly Karpatkey). With a focus on growth and strategy in the Web3 ecosystem, she brings sharp operational insight and cross-border experience to the conversations unfolding at the event.',
    },
    {
        name: 'Filippo Anania',
        image: m3.src,
        description: 'NapulETH is proud to welcome Filippo Anania, founder and director of The Crypto Show, the first TV talk show in Italy fully dedicated to crypto, blockchain, and Web3. With a background in law and a Master in Blockchain Management, he has held key roles at Binance Italy, BingX, and MEXC, bringing a unique blend of legal, marketing, and media expertise to the stage.',
    },
    {
        name: 'Giovanni Orlacchio',
        image: m4.src,
        description: 'Doctor of Law trained in the University of Naples Federico II, after attending the DIGITA | Digital Transformation and Industry Innovation Academy began working as a Cybersecurity Analyst at Deloitte. He is also a member of numerous entities including Centro Studi Internazionali, IPE, TedXIschia and Global Shapers Community.',
    },
    {
        name: 'Lucrezia Van Stegheren',
        image: m5.src,
        description: 'Lucrezia Van Stegeren is a presenter, writer, and podcaster specializing in innovation, blockchain, and emerging technologies. She is the co-founder of Cryptoland Podcast, one of the first Italian shows dedicated to Web3. Lucrezia has established herself as a leading voice in the tech and digital media space, conducting interviews, hosting events, and creating editorial content that makes even the most complex topics accessible. She is a regular contributor to Forbes Italy, where she writes about technology, innovation, and the people shaping the future.',
    },
    {
        name: 'Olga Arzhaeva',
        image: m6.src,
        description: 'As a LUISS graduate, Olga is a young blockchain evangelist and Co-founder & Co-president of the Italian Blockchain Student Association. She has extensive experience in blockchain research, with a focus on blockchain notarization, business internationalization within Web3, and tokenization. With a professional background in finance, she is continuing her path with a Master’s in Corporate Finance at SDA Bocconi starting this year.',
    },
    {
        name: 'Valentina Marzioni',
        image: m7.src,
        description: 'NapulETH is proud to welcome Valentina Marzioni, known in the space as @Ladyinfinance. Financial expert at Diaman Partners and passionate communicator, she brings her sharp insight and dynamic energy to connect people, panels, and ideas throughout the event.',
    },
    {
        name: 'Chiara Munaretto',
        image: m8.src,
        description: 'NapulETH is proud to welcome Chiara Munaretto, a Web3 marketing strategist with a strong track record in community building and digital innovation. After her experience at Deloitte’s Web3 team, she continues to support founders and projects across Europe, bringing insight, energy, and vision to the event.',
    }
]
