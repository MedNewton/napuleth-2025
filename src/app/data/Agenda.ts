import {type Speaker, speakersList} from "@data/SpeakersList";
import { type Moderator, moderators } from "@data/moderators";

export interface AgendaEvent {
    name: string;
    description?: string;
    speakers: Speaker[];
    moderators: Moderator[];
    day: number;
    startTime: string;
    endTime: string;
    duration: string;
    stage: string;
    tags: string[];
    type: string;
    language: string;
}

const speakers = speakersList;

export const agenda: AgendaEvent[] = [

    // Day 1, Parthenope Stage
    {
        name: "Opening",
        speakers: [],
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "10:00",
        endTime: "10:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: [],
        type: "",
        language: "en",
    },
    {
        name: "TradFi meets DeFi and they hate each other",
        description: "The truth is that it's a love story. In Italian we say 'Chi disprezza, compra' (He who blames, would buy). I professionally entered the 'blockchain for business' space in 2016 when working at IBM, running numerous POCs with the more disparate industries - finance, energy, supply chain, insurance, you name it - almost the totality of which got vaporized in thin air. Why? I continued my career as a Solutions Architect, first in Consensys and then Chainlink Labs (currently), working with the same clients on similar use cases. What changed? I would like to share these answers and lessons learned, retrospecting and looking at what the future has to offer by bridging these two worlds together.",
        speakers: [speakers[82]!], // Cesare Valitutto
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "10:40",
        endTime: "11:00",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Blockchain", "DeFi", "TradFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Crypto in Daily Life: Demystifying Wallets, Payments & Security",
        description: "Crypto in Everyday Life; Custodial vs Non-Custodial Wallets; Crypto Security in Daily Use; Buying Crypto with Your Card; Why Non-Custodial Wallets Are Gaining Popularity",
        speakers: [speakers[24]!], //Andrii Podobied
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "11:00",
        endTime: "11:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Blockchain finally accessible for businesses",
        description: "This talk is about bringing blockchain technology to web2 businesses with a legal-by-design and a financial accessible approach (pay per use/SAAS). In general about Tokenizations and also onchain organizations (DAOs and hybrids)",
        speakers: [speakers[12]!, speakers[25]!, speakers[114]!], // Stefano de la Torre, Gaia Ferrero Regis, Pieter Dalstra
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Blockchain", "Business"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 1,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Parthenope Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "The Cypherpunk Paradox: Privacy, Network States, and Decentralized Growth",
        description: "This presentation/panel explores the evolving dynamics between privacy, network states, and decentralized technologies in shaping global systems. Rooted in the cypherpunk philosophy, it delves into how privacy-focused innovations like blockchain and cryptocurrencies empower individuals while challenging traditional governance models. The discussion highlights the rise of network states, decentralized growth strategies, and privacy as a market advantage. Attendees will gain insights into the balance between innovation, privacy, and the emerging frameworks of the digital age.",
        speakers: [speakers[8]!, speakers[26]!, speakers[98]!], // Martina Petrichenko, Giampiero Zito, QJ
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "14:00",
        endTime: "14:40",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Cypherpunk", "Privacy", "Network"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Crypto Media Manipulation: What Are Journalists Telling Us?",
        description: "This presentation is about cryptocurrency media manipulation, the benefits and threats it brings, and the short and long term goals of crypto media.",
        speakers: [speakers[15]!], // Jakub Dziadkowiec
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "14:40",
        endTime: "15:00",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Media"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Info Defence with ECF Pensieve: Decentralised Knowledge Base and Social Consensus",
        description: "The ECF Pensieve is the result of Ethereum Community Fund’s (ECF) long-standing research and experimentation since 2018 - It addresses a critical question in the decentralization movement: How can we build resilient, credible, and trust-minimized knowledge systems without central authority? ECF Pensieve directly supports this vision by enabling communities to build resilient knowledge bases governed through social consensus, not institutional authority. It treats knowledge as a public good—something to be collectively maintained, verified, and improved over time. This shifts the power of information governance away from monopolistic platforms and toward composable, transparent, and participatory systems.",
        speakers: [speakers[98]!], // QJ
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "15:00",
        endTime: "15:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Media"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Wealth Building Through Private Capital" ,
        description: "",
        speakers: [speakers[101]!, speakers[102]!], // Riccardo Zanetti, Nicolas Nati
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "15:20",
        endTime: "16:00",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Media"],
        type: "Panel",
        language: "it",
    },
    {
        name: "Hackaton Winners Announcement",
        description: "Here the winners of our hackaton will be proclaimed. They will have the chance of explaining their project and will publicly receive awards and prizes.",
        speakers: [],
         moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "16:00",
        endTime: "17:00",
        duration: "1 hour",
        stage: "Parthenope Stage",
        tags: [],
        type: "",
        language: "en",
    },
    {
        name: "Binance Meetup: Crypto Updates, Trends and Quiz Kahoot" ,
        description: "My talk will cover how to make the most of Binance today, with a focus on the latest platform updates, current crypto trends, and what Binance is keeping an eye on. I’ll wrap up with a fun quiz to test the audience’s knowledge.",
        speakers: [speakers[105]!], // Riccardo Zanetti, Nicolas Nati
         moderators: [moderators[7]!], // Chiara Munaretto
        day: 1,
        startTime: "17:00",
        endTime: "17:40",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["DeFi"],
        type: "Panel",
        language: "it",
    },
    
    // Day 1, Cappella Stage
    {
        name: "IoT, AI, and Blockchain: The Infrastructure of the Future",
        description: "This talk is about technological architecture, showing the interaction between IoT devices, AI, and blockchain. Special focus on artificial intelligence in data preprocessing and value creation through intelligent analysis and the use of the oracles on chain",
        speakers: [speakers[3]!], // Giuliano Neroni
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "10:40",
        endTime: "11:00",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["IoT", "AI", "Blockchain"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Trust in the Age of AI: Deepfakes, Challenges, and the Web3 Solution",
        description: "This talk explores how AI-generated deepfakes are threatening trust in digital content—and how blockchain, specifically ERC-7007 with zkML and opML, can offer a decentralized framework for verifiable media authenticity.",
        speakers: [speakers[57]!], // Gianluca Di Bella
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "11:00",
        endTime: "11:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["AI", "Blockchain", "DeepFake"],
        type: "Talk",
        language: "en",
    },
    {
        name: "The Creative Renaissance: How AI Is Democratizing Imagination",
        description: "In this talk, I will explore how Generative AI is reshaping the creative world, not just for designers and coders, but for anyone with an idea. We’ve entered a new era: a Creative Renaissance where technical skill is no longer a barrier. If you can think it, you can prompt it. This shift is radically democratizing creativity, giving more people the power to turn imagination into output. Let's explore how to harness AI as a creative partner!",
        speakers: [speakers[27]!], // Fabio Nottet
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "11:20",
        endTime: "11:40",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["AI", "DeepFake"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Real Talk: A Systems Perspective of Blockchain for Social Impact",
        description: "This talk will explore why blockchain for social and public good remains critically underfunded, underdeveloped, and overshadowed by hype-driven narratives. I’ll unpack where global attention is misallocated, and what it truly takes to build lasting, systems-level impact. This is a call to reposition blockchain as public infrastructure and reclaim its potential for good.",
        speakers: [speakers[99]!], // Glenn Tan
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "11:40",
        endTime: "12:00",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi", "Education"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 1,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Cappella Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Funding Public Goods - Without Donations or Sacrifices",
        description: "My talk will explore innovative (and fun!) crypto mechanisms for funding public goods - which do not require donations or sacrifices. My talk will discuss the pros and cons of both current and failed projects, including: LottoPGF (lotteries), PoolTogether (no-loss lotteries), Paddle Battle (auctions), Glo Dollar (stablecoin), PGN (an Ethereum L2 - now discontinued).",
        speakers: [speakers[6]!], // Loring Harkness
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["Finance"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Regulating DeFi. Will the lawmakers ever catch crypto-boys?",
        description: "They ruled tokens, nevermind their nature. They ruled stablecoins, even if algorithmic. They ruled CEXs and platforms. They ruled issuers, sellers, buyers, even nodes and stakers. They tried to ban mixers and privacy tools. But… can they really embed decentralization, P2P and open source? The fight for freedom is still open.",
        speakers: [speakers[18]!], // Marco Tullio Giordano
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "14:20",
        endTime: "14:40",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["Legal", "DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "How to Stay Bankable in a Crypto World",
        description: "This talk is about how to stay bankable and compliant in crypto—covering what banks, regulators, and tax authorities actually expect, and how to prepare your transactions so they don’t get you flagged or frozen.",
        speakers: [speakers[28]!], // Mikhail Kuznetsov
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "14:40",
        endTime: "15:00",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Before the Deal: What Artists Should Know About Music Ownership",
        description: "This talk dives into the knowledge gap that costs creators control, credit, and income. We’ll break down the basics of music rights, why metadata matters, and how a lack of understanding at the start often leads to confusion, disputes, and lost royalties down the line.",
        speakers: [speakers[29]!], // Emiliano Gambula
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "15:00",
        endTime: "15:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi", "Art", "Legal"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Digital Art, how to Survive and Join the Ecosystem",
        description: "How to meaningfully prepare your art or curatorial career with NFTs. I went from being an outsider to produce my own shows, residencies and ultimately work for one of the largest NFT companies in the world. I have been structuring my experience to give the best possible tips and strategies for artists and curators to launch their career in digital art.",
        speakers: [speakers[30]!], // V Ruins
        moderators: [moderators[8]!], // Ionut Gaucan
        day: 1,
        startTime: "15:20",
        endTime: "16:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi", "Art", "NFT"],
        type: "Talk",
        language: "en",
    },

    // Day 1, Posillipo Stage
    {
        name: "The Legally Compliant Crypto Future is Closer than you Think",
        description: "This talk will explore how to bridge the gap between user privacy in Web3 and the regulatory requirements around digital identity, KYC, and qualified trust services under EU law. We’ll present how compliant solutions like Namirial can ensure full legal effectiveness for blockchain-based operations, paving the way for a decentralized ecosystem with real legal certainty.",
        speakers: [speakers[91]!], //Cesare Marzo
        moderators: [moderators[10]!], // Maria Jesus Navarro
        day: 1,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Legal"],
        type: "Workshop",
        language: "en",
    },
    {
        name: "What does it even Mean doing Marketing in Crypto?",
        description: "",
        speakers: [speakers[10]!, speakers[31]!, speakers[72]!], //Maria Magenes, Dayana Aleksandrova, Ginevra Maggi, Alexander Guy
        moderators: [moderators[10]!], // Maria Jesus Navarro
        day: 1,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Marketing"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 1,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Posillipo Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Real-Time Security Monitoring for Smart Contracts: a Relational Approach",
        description: "Security monitoring of in-production smart contracts is a major piece of the security infrastructure we haven’t yet managed to fully solve. State-of-the-art solutions of deploying monitoring agents are either (i) easy to deploy but are too general (lack the domain insight about the protocol), or, (ii) too ad-hoc, and are not designed to express high-level protocol properties at scale. This results in low signal to noise ratio and poor fidelity of warnings. In this talk I will show how we build effective monitoring agents using a new metalanguage which we’ve recently made available. The metalanguage is designed to express queries of smart contract dynamic or static properties. It borrows concepts from differential dataflow, and is implemented on top of a database designed to maintain a global, consistent view of blockchain data. Monitoring agents in this language generate high-performance relational queries using time-series tables, delta-relations, incrementally materialized views, and JIT chain data decoding. I will show examples of immediate detections of rugpulls, hacks, detecting arbitrage opportunities and breaking of complex invariants in real time.",
        speakers: [speakers[32]!], //Yannis Smaragdakis
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 1,
        startTime: "14:00",
        endTime: "14:40",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Security"],
        type: "Talk",
        language: "en",
    },
    {
        name: "OPSEC 101: Everything that you NEED to do to keep your wallet safe",
        description: "How to keep your seed safe, I've always heard terrible terrible advice on this, I think it's fair, as a security specialist, to give my view on it",
        speakers: [speakers[19]!], // Carlo Parisi
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 1,
        startTime: "14:40",
        endTime: "15:20",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Security"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Wake Framework: Swiss Knife to Ethereum Tooling",
        description: `
Smart contract development often involves using different tools serving different purposes like testing, analysis, deployment, or vulnerability scanning. 

We introduce a comprehensive open-source Python toolkit tailored for everyday Solidity development. 

The Wake tool is presented with simplistic real-world examples compared with other open-source options.  This talk covers the following scenarios: 
- unit testing and cross-chain testing;
- fuzzing;
- vulnerability and code quality issue scanning; and 
- work with the editor (including enhancement with custom detectors and visualizations).
        `,
        speakers: [speakers[34]!], // Dmytro Khimchenko
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 1,
        startTime: "15:20",
        endTime: "15:40",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["Security"],
        type: "Talk",
        language: "en",
    },
    {
        name: "DeFiScan.info: Transparency on Decentralization in DeFi",
        description: "My talk is about presenting the methodology behind the Decentralization Framework of DeFiScan.info and discussing the state of our favorite DeFi apps",
        speakers: [speakers[35]!], //Marc Vlad
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 1,
        startTime: "15:40",
        endTime: "16:00",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },    

    // Day 1, Mergellina Stage

    {
        name: "From digital art to real-world Impact: the NFT as a product passport",
        description: "I will illustrate how this technology can promote transparency and certification, enhancing the trust between producers, sellers, and consumers. An abstraction of the NFT concept, shifting from digital art to a digital passport for a product.",
        speakers: [speakers[11]!], // Lorenzo Colautti
        moderators: [moderators[9]!], // Bianca Dancu
        day: 1,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["NFT", "Art"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Il Transumanesimo nella Saga The Squirrel and the Grail",
        description: "Una produzione a metà tra digitale e multimedialità.",
        speakers: [speakers[100]!], // Maurizio Elettrico
        moderators: [moderators[9]!], // Bianca Dancu
        day: 1,
        startTime: "11:20",
        endTime: "11:40",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["NFT", "Art"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Why I Stopped Waiting for Permission to Build the Future",
        description: "My talk is about what happens when you stop waiting for permission and start building the future, from the ground up, in places the innovation world often overlooks. It’s a story of courage, community, and redefining what decentralization really means.",
        speakers: [speakers[104]!], // Angela Barbella
        moderators: [moderators[9]!], // Bianca Dancu
        day: 1,
        startTime: "11:40",
        endTime: "12:00",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["Education", "Art"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 1,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Mergellina Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "The Key for the Real Success in Web3",
        description: `
        The Key to Real Success in Web3
        1.        Community First: Build trust, foster collaboration, and empower your community.
        2.        Clear Value: Solve real problems with user-friendly blockchain solutions.
        3.        Transparency: Open communication and ethical practices build trust.
        4.        Innovate with Purpose: Stay ahead with solutions that align with trends like scalability and sustainability.
        5.        Collaborate: Partner across industries to create interoperable solutions.
        6.        Educate and Include: Onboard newcomers, promote diversity, and drive adoption.
        7.        Be Resilient: Adapt to changes and maintain a long-term vision.

Focus on these pillars to create meaningful and lasting success in Web3.
        `,
        speakers: [speakers[1]!], // Bruno Miranda
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["Web3", "Marketing"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Chi controllerà l'IA? Utopia decentralizzata o nuova sorveglianza?",
        description: "Il talk approfondisce i valori etici dell'IA e le regole giuridiche",
        speakers: [speakers[74]!], //Michele Iaselli
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "14:20",
        endTime: "14:40",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["AI", "Legal"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Sfide Geopolitiche, Economiche e Legali nell’Era Datizzata e del Capitalismo Politico",
        description: "This talk will go deeply in the geopolitical, economical and legal challenges in the era of Political Capitalism & Datafication",
        speakers: [speakers[83]!, speakers[84]!, speakers[85]!], // Mario Caligiuri, Giovanni Orlacchio, Giovana De Minico
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "14:40",
        endTime: "15:20",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["Economy", "Legal"],
        type: "Panel",
        language: "it",
    },
    {
        name: "What Cryptocurrencies do Better than Banks",
        description: "We’ll explore the aspects that make crypto finance better than traditional finance — specifically, the gaps that cryptocurrencies fill where traditional banks fall short, and why this intrinsic value of crypto is so important for the market.",
        speakers: [speakers[87]!], // Umberto Zanin
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 1,
        startTime: "15:20",
        endTime: "16:00",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["DeFi", "TradFi"],
        type: "Talk",
        language: "it",
    },

    // Day 2, Parthenope Stage
    {
        name: "Migrating to Quantum Safety: Risks and Advantages",
        description: "Quantum Migration requirements, tactics, methods, projects (including legit competition), risks and opportunities. Basically everyone has to switch cryptography, and that's user initiated.",
        speakers: [speakers[2]!], // Ian Smith
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 2,
        startTime: "10:00",
        endTime: "10:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Quantum", "Security"],
        type: "Talk",
        language: "en",
    },
    {   
        name: "A Full-stack Compiler for Quantum Cryptography",
        description: "I will present the architecture of the full-stack quantum cryptography compiler in development at NeverLocal. I will explain how we  formulate classic cryptographic protocols suitable for secure quantum implementation, and how we translate them all the way down to quantum hardware implementation, optimising security parameters along the way. The presentation doesn't require any domain-specific knowledge of quantum cryptography or quantum information.",
        speakers: [speakers[20]!], //Stefano Gogioso
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 2,
        startTime: "10:20",
        endTime: "11:00",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Quantum", "Contextuality"],
        type: "Talk",
        language: "en",
    },
    {
        name: "NeverLocal Experiment",
        description: "For the first time ever, we will conduct a live quantum experiment applied to Web3. Using quantum key distribution infra (think lasers and such) we will harden the security guarantees provided by a trusted execution enclave (TEE) that can be used to implement one-shot signatures and other meaningful cryptographic primitives in the contect of blockchains.",
        speakers: [speakers[20]!, speakers[70]!], // Stefano Gogioso, Fabrizio Genovese
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 2,
        startTime: "11:00",
        endTime: "12:00",
        duration: "1 hour",
        stage: "Parthenope Stage",
        tags: ["Quantum", "Experiment"],
        type: "Workshop",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 2,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Parthenope Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {   
        name: "Quantum Internet: the Short and the Long Term",
        description: "This talk will present the current efforts to build a global quantum internet and the applications that such and infrastructure will enable.",
        speakers: [speakers[36]!], //Marc Kaplan
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Quantum"],
        type: "Talk",
        language: "en",
    },
    {   
        name: "Distributed Systems Made Faster via Quantum Internet",
        description: "This talk is about how (temporary) one-time programs enabled via QKD can be used to decrease communication complexity in distributed systems",
        speakers: [speakers[23]!], //Lev Stambler
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "14:20",
        endTime: "14:40",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Quantum", "Distributed Systems", "MPC"],
        type: "Talk",
        language: "en",
    },
    {   
        name: "From Classical to Quantum-Safe: Upgrading Blockchain Security for the Next Era",
        description: "My talk is about bringing post-quantum cryptography into the blockchain world, before quantum computers break everything and start draining wallets within the next 10 to 20 years.",
        speakers: [speakers[97]!], //Salvatore Migliaccio
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "14:40",
        endTime: "15:00",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["Quantum", "Security"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Trading o investimento? Questo è il dilemma!",
        description: "Le principali differenze teorie e pratiche dell'approccio al mondo degli investimenti e del trading",
        speakers: [speakers[88]!, speakers[89]!], // Matteo Bertonazzi, Massimiliano Casini
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 2,
        startTime: "15:00",
        endTime: "17:00",
        duration: "2 hours",
        stage: "Parthenope Stage",
        tags: [],
        type: "Talk",
        language: "en",
    },

    // Day 2, Cappella Stage
    {
        name: "The Hidden Cost of AI: And How Blockchain Might Save It",
        description: "As the world embraces AI, an often overlooked crisis emerges: AI is only as efficient as the data it consumes. Poorly structured, unverified, or fragmented data leads to excessive transactions, redundant API calls, and avoidable carbon costs across networks.",
        speakers: [speakers[37]!], // Andrea Amenta
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "10:00",
        endTime: "10:40",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["AI"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Hands on ChatGPT - Best Practices on Prompt Design",
        description: "I will explain how LLMs work and the best practices to prompt through practical examples. Could be great if the audience will have laptops. I can hold a workshop for beginner or intermediate as you prefer.",
        speakers: [speakers[38]!], // Silvio Ventre
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["AI", "Prompt Design"],
        type: "Workshop",
        language: "en",
    },
    {
        name: "Decentralization Ends at Ethereum’s Edge",
        description: "A look at centralization risks in Ethereum, focusing on the final interface between users and the network — from block explorers to RPCs — and how we can reclaim decentralization at the edges.",
        speakers: [speakers[39]!], // Marco Castignoli
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Ethereum", "Decentralization"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 2,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Cappella Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Power up your Engineering CV with Decentralized Applications: the Master Course in Computer Engineering at UniNA",
        description: "The talk will describe the experience of creating and teaching a Master course, including how the course has been received by the students. The feedback from the community will inform future editions of the course.",
        speakers: [speakers[117]!], // Giuseppe Aceto
        moderators: [moderators[1]!], // Federica Migliaro
        day: 2,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["Crypto", "Education"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Innovate. Secure. Scale: Bitget’s Path to the Next Billion Users",
        description: "How to scale up a business in web 3.",
        speakers: [speakers[40]!], // Vugar Usi Zade
        moderators: [moderators[1]!], // Federica Migliaro
        day: 2,
        startTime: "14:20",
        endTime: "15:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Bitget", "Defi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "DeFi or not DeFi: Where do we draw the line?",
        description: "I want to give a practical view on the topic of what really is decentralized under the current legal system. The talk will focus on the EU (MiCA) approach but we can compare also with other legal systems from different jurisdictions. I'd like to give a very practical view bringing examples that can be discussed among the participants.",
        speakers: [speakers[75]!], // Carlo Giuliano
        moderators: [moderators[1]!], // Federica Migliaro
        day: 2,
        startTime: "15:00",
        endTime: "15:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["Defi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "On-chain Payments in Real World: Are we there yet?",
        description: "Blockchain has promised to revolutionize the way we pay—offering speed, transparency, and borderless transactions. But how close are we to that vision becoming a mainstream reality? This session dives into the current landscape of on-chain payments, examining where real-world adoption is happening, what’s holding it back, and what needs to change to bridge the gap between innovation and everyday use. ",
        speakers: [speakers[42]!], // Georgy Sokolov
        moderators: [moderators[1]!], // Federica Migliaro
        day: 2,
        startTime: "15:20",
        endTime: "15:40",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi", "Payments"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Unlocking Crypto’s Potential: From Disruptive Technology to Invisible Infrastructure",
        description: "In this talk, we will reflect on the journey of crypto so far, drawing parallels with the growth of the internet and the resilience of natural systems like mycelium. We’ll examine past failures and lessons learned, before looking ahead to the future, where opportunities lie in AI, global innovation through decentralized networks, and practical advancements like real-world asset tokenization.",
        speakers: [speakers[43]!], // Walt Schagen
        moderators: [moderators[1]!], // Federica Migliaro
        day: 2,
        startTime: "15:40",
        endTime: "16:20",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["IT", "DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Redefining DeFi",
        description: "Establishing your brand within web3 + TGE - will take people on a journey from 0 >>> token launch; raising through VCs & investors, choosing the right partners, attaching to ecosystem grants & incentives, growing community, running content campaigns, onboarding BA’s, setting up bounty campaigns, attending virtual and IRL events, token marketing strategies, finding the right KOLs and DIY market making. In this panel we’ll also talk about MEMEs as little or as much as you like.",
        speakers: [speakers[7]!, speakers[38]!, speakers[44]!, speakers[40]!], // Jay Rae, Silvio Ventre, Lorenzo Amoroso, Vugar Usi Zade, Pieter Dalstra
        moderators: [moderators[5]!], // Federica Migliaro
        day: 2,
        startTime: "16:20",
        endTime: "17:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi", "Legal"],
        type: "Panel",
        language: "en",
    },

    // Day 2, Posillipo Stage

    {
        name: "Designing in Pixels: How to Make Beautiful Interfaces That Break User Experience",
        description: "My talk is about techniques to design intuitive, visually stunning interfaces that you’ll proudly showcase—before realizing they’re a nightmare to maintain.",
        speakers: [speakers[0]!], // Mattia Valerio
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 2,
        startTime: "10:00",
        endTime: "10:20",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["Design", "UX"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Web3 Visual Language: What Does the Decentralized Future Look Like?",
        description: "My speech will focus on the evolution of web3 visual style, the transformation of user behavior from web2 to web3. I will talk about visual practices that help the user not to get lost in a decentralized application, as well as the challenges faced by the designer when designing products.",
        speakers: [speakers[45]!], // Illia Tofanchuk
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 2,
        startTime: "10:20",
        endTime: "11:00",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Design", "UX"],
        type: "Talk",
        language: "en",
    },
//     {
//         name: "How Blockchain Technology Embodies Classical Philosophy",
//         description: `
//         What do Plato, Rousseau, and Vitalik Buterin have in common? This thought-provoking session explores how blockchain technology is inadvertently implementing centuries-old philosophical ideas. Presenting how smart contracts embody social contract theory, examine how DAOs reflect classical political philosophy, and analyze how NFTs challenge our metaphysical understanding of value and ownership.
// Drawing from both practical Solidity examples and philosophical frameworks, this talk bridges the gap between abstract philosophical concepts and concrete blockchain implementations.
//         `,
//         speakers: [speakers[46]!], // Liam McMaster
//         moderators: [moderators[5]!], // Olga Arzhaeva
//         day: 2,
//         startTime: "10:40",
//         endTime: "11:00",
//         duration: "20 minutes",
//         stage: "Posillipo Stage",
//         tags: ["Blockchain", "Philosophy"],
//         type: "Talk",
//         language: "en",
//     },
    {
        name: "Sex Education: How to not Get Fucked in Crypto",
        description: "",
        speakers: [speakers[47]!, speakers[48]!, speakers[49]!], // Davide Cervetto, Gabriele Alagna, Samuel Bartolozzi
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 2,
        startTime: "11:00",
        endTime: "11:40",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Scams"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Cutting Through the Noise: Macroeconomics that Matters in Crypto",
        description: "I'll show you what are the most important macroeconomic data to track in crypto.",
        speakers: [speakers[90]!], // Valentina Marzioni
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 2,
        startTime: "11:40",
        endTime: "12:00",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["Macroeconomics"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 2,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Posillipo Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "How self-Tokenization will disrupt creative industries",
        description: "NFTs currently fractionalise creators’ value and often struggle to generate secondary sales. On the other hand, Self-Tokenization provides long-term value and unlocks better alignment between creator value and unlocking exclusive fan experiences, making it a better tool for quantifying and rewarding creator success and community strength.",
        speakers: [speakers[9]!], // Edmund Berkman
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 2,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["Web3", "Tokenomics"],
        type: "Talk",
        language: "en",
    },
    // {
    //     name: "Designing Token Models That Work: A Practical Approach",
    //     description: "My talk is about how to quantify token models and connect them directly to business revenue, ensuring they drive growth, resilience, and long-term value.",
    //     speakers: [speakers[5]!], // Vincent De Vos
    //     moderators: [moderators[6]!], // Valentina Marzioni
    //     day: 2,
    //     startTime: "14:00",
    //     endTime: "14:20",
    //     duration: "20 minutes",
    //     stage: "Posillipo Stage",
    //     tags: ["Web3", "Tokenomics"],
    //     type: "Talk",
    //     language: "en",
    // },
    {
        name: "How Tokenized RWAs Can Change DeFi",
        description: "My talk will discuss the potential Real World Assets have to transform DeFi. Tokenized RWAs represent a multi-trillion-dollar market opportunity with the global securities market estimated to be worth $300 trillion by 2025, with the capability to enhance liquidity, transparency, and trust across the ecosystem.",
        speakers: [speakers[55]!], // Mike Massari
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 2,
        startTime: "14:20",
        endTime: "14:40",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["DeFi", "RWA"],
        type: "Talk",
        language: "en",
    },
    {
        name: "The Bold Truth about RWA",
        description: "I will talk about RWA tokenization, specialized in financial instruments.",
        speakers: [speakers[50]!], // Ludovico Rossi
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 2,
        startTime: "14:40",
        endTime: "15:00",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["RWA"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Startup Competition",
        description: "The winners of the startup competition will be proclaimed.",
        speakers: [],
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 2,
        startTime: "15:00",
        endTime: "17:00",
        duration: "2 hours",
        stage: "Posillipo Stage",
        tags: [],
        type: "",
        language: "en",
    },

    // Day 2, Mergellina Stage

    {
        name: "AI Agent e Regolamentazione: Opportunità e Sfide per un Futuro Responsabile",
        description: "Il mio intervento esplorerà il ruolo degli AI Agent nel contesto della regolamentazione, affrontando le opportunità e le sfide che queste entità autonome rappresentano per un futuro responsabile. Partendo da un esempio concreto, discuterò i rischi legali, etici e normativi legati agli AI Agent, come la responsabilità delle loro azioni, la trasparenza, la protezione dei dati e la sicurezza informatica. In conclusione, presenterò possibili soluzioni, tra cui approcci tecnologico-regolatori, l'importanza di armonizzare le normative a livello globale e la necessità di educare i diversi attori coinvolti. ",
        speakers: [speakers[4]!], // Giovanni Piccirillo
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 2,
        startTime: "10:00",
        endTime: "10:20",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["AI", "Legal"],
        type: "Talk",
        language: "it",
    },
    {
        name: "You Could Have Invented ZK Proofs",
        description: "Explaining how zk proofs work under the hood, using a very simple example that makes it easy to understand. It follows a step by step example that shows how even YOU could have invented zk proofs on your own.",
        speakers: [speakers[17]!], // Alessandro Mazza
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 2,
        startTime: "10:20",
        endTime: "11:00",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["ZK Proofs", "IT"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Tutela della Legalità nel Mercato delle Criptovalute: l’Approccio Operativo dell’Arma",
        description: "Un panel su come l'Arma dei Carabinieri garantisce la legalità nel mercato delle criptovalute.",
        speakers: [speakers[18]!, speakers[96]!, speakers[113]!], // Vincenzo Rana, Marco Tullio Giordano, Gianluca Vitagliano
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 2,
        startTime: "11:00",
        endTime: "11:40",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["Legal"],
        type: "Panel",
        language: "it",
    },
    {
        name: "Non è troppo Presto: Finanza per Giovani che Pensano in Grande",
        description: "Gestire bene il proprio denaro è una competenza fondamentale, ma ancora oggi nessuno ci insegna davvero a farlo. In questo talk voglio affrontare in modo chiaro e pratico i pilastri della finanza personale: risparmio, budgeting, piani di accumulo, fondi comuni di investimento (e la differenza tra gestione attiva e passiva), fino ad arrivare alla previdenza complementare (fondamentale per i più giovani).",
        speakers: [speakers[51]!], // Giulia D'Orta
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 2,
        startTime: "11:40",
        endTime: "12:00",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["DeFi", "TradFi"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 2,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Mergellina Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Beyond Account Model: Fine-Grained Deterministic State Access for Parallelization on EVM",
        description: "Crystality, published at PPoPP 25', proposes a Parallel Execution Runtime for ETH Clients to resolve state conflicts & maximize CPU usage. It decomposes txns into micro ones with non-overlapping state access, ensuring serializability & atomicity.",
        speakers: [speakers[16]!], // Xiangru Ma
        moderators: [moderators[2]!], // Filippo Anania
        day: 2,
        startTime: "14:00",
        endTime: "14:40",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["IT", "EVM"],
        type: "Workshop",
        language: "en",
    },  
    {
        name: "Infinite Languages, One Chain: Expanding Ethereum’s Developer Horizons",
        description: "There are millions of developers sitting on the sidelines. Why? They want to write programs in their favorite language, not Solidity. We should let them. Let’s put that intellectual capital to work. In this talk, we'll share how semantics-first development supports a language inclusive Ethereum.",
        speakers: [speakers[80]!], // Ovidiu Damian
        moderators: [moderators[2]!], // Filippo Anania
        day: 2,
        startTime: "14:40",
        endTime: "15:20",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["IT", "EVM"],
        type: "Talk",
        language: "en",
    },
    {
        name: "dApps are Here to Stay - Chains Come and Go",
        description: "My talk covers the challenges of dApp development under the circumstances of chain abstraction and trans-chain migration of the user-base. It illustrates an EVM middleware that abstracts from particular blockchains, handles node redundancy and fail-over, and wraps API calls into atomic pieces of JS code that create context and relevant feedback for user-friendly dApp development. The talk will be rather technical and perform live samples on different chains. I will demonstrate ChainScript (which is NOT my core product) to cover most of the challenges of an ever-changing infrastructure: High-level commands for migrating a user-base from a dying chain to some prosperous new chain. ChainScript is an EVM compatible scripting language, it is an abstraction of ENS APIs on 15 different chains.",
        speakers: [speakers[54]!], // pepsihasenfuss
        moderators: [moderators[2]!], // Filippo Anania
        day: 2,
        startTime: "15:20",
        endTime: "16:00",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["dApps", "Infra"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Tackling 200 MIllion Dollar Problem: OEV Design That Works and Scales",
        description: "My talk will be about how OEV is bringing back value to the protocols after liquidations",
        speakers: [speakers[55]!], // Mike Massari
        moderators: [moderators[2]!], // Filippo Anania
        day: 2,
        startTime: "16:00",
        endTime: "16:40",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["OEV", "Infra"],
        type: "Talk",
        language: "en",
    },
    {
        name: "You are the Enemy",
        description: "My talk is about the emotional part of trading and investing, especially in the crypto space where the emotions can kick very hard and make us make huge mistakes.",
        speakers: [speakers[77]!], // Enrico Maria Colombini
        moderators: [moderators[2]!], // Filippo Anania
        day: 2,
        startTime: "16:40",
        endTime: "17:00",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["Trading"],
        type: "Talk",
        language: "ita",
    },

    // Day 3, Parthenope Stage
    {
        name: "Decentralized Indexes & RWA Tokenization: The New Frontier of Passive Investing",
        description: "The talk dives into how smart contract–powered index funds can bridge traditional finance with Web3-native assets, creating inflation-hedged, automated, and regulation-aware investment products. Drawing from our experience at Nex Labs—builder of cross-asset indices and partners with TradFi institutions—we’ll explore how tokenized gold, Bitcoin, and tokenized stocks can be aggregated into secure, audited, and transparent structures.",
        speakers: [speakers[56]!], // Lorenzo Ceppaluni
        moderators: [moderators[6]!, moderators[8]!], // Valentina Marzioni, Ionut Gaucan
        day: 3,
        startTime: "10:00",
        endTime: "10:40",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["RWA", "DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Standardizing Supply-Chain Debt: Enhancing Liquidity Through Risk Transfer",
        description: "A discussion of a new protocol that standardizes short-term debt instruments in supply chains, creating a container-like approach for transferring financial obligations. This protocol reduces risk and settlement costs throughout the value chain. It aims to democratize access to liquidity for SMEs by efficiently transferring risk to specialized financial partners who are better positioned to absorb it.",
        speakers: [speakers[21]!], // Philipp Zahn
        moderators: [moderators[6]!, moderators[8]!], // Valentina Marzioni, Ionut Gaucan
        day: 3,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Mech Design", "Supply-Chain", "Risk Management"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Ethereum Macroeconomics via Dynamics",
        description: "This talk explores the macroeconomic challenges facing Ethereum, with a focus on the dynamics of staking, inflation, and governance centralization. Leveraging a 'stock and flow' macroeconomic model inspired by dynamical systems theory, we analyze the risk of excessive staking and its interaction with inflationary and deflationary forces. Our findings reveal that moderate inflation can serve as a mechanism to curb runaway staking, while overly aggressive deflationary strategies risk exacerbating governance centralization. This talk highlights the critical importance of balanced macroeconomic interventions, supported by quantitative modeling and simulations, to sustain Ethereum's decentralized architecture and ensure its long-term economic resilience.",
        speakers: [speakers[58]!], // Daniele Palombi
        moderators: [moderators[6]!, moderators[8]!], // Valentina Marzioni, Ionut Gaucan
        day: 3,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["Mech Design", "Macroeconomics", "Ethereum"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 3,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Parthenope Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Friendly Privacy with Stealth Addresses and Privacy Pools",
        description: "Privacy is always seen as something crucial but cumbersome. We want to demonstrate how a combination of two publicly available technologies, like Stealth Addresses and Privacy Pools, can be complementary in bringing a new parading of privacy.",
        speakers: [speakers[78]!], // Antonio Seveso
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 3,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: ["ZK", "Cryptography", "Privacy"],
        type: "Talk",
        language: "en",
    },
    {
        name: "When Zero Knowledge Becomes Useful and Optimization of Circuits",
        description: "I will talk about how to use primitives in zero knowledge proof generation time to optimize and accelerate the zero knowledge application. Specifically, I would first briefly go over Fiat-Shamir and then illustrate how to use randomness in Fiat-Shamir to verify matrix multiplication in zero knowledge more efficiently specifically from O(n^3) to O(n^2), thus making matrix multiplication in zero knowledge possible and enables some real-world applications like eigentrust computation or private machine learning training.",
        speakers: [speakers[81]!], // Zhengxun Wu
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 3,
        startTime: "14:20",
        endTime: "15:00",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["ZK", "Optimization"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Banking the Blockchain: Crypto, RWA e Istituzioni a Confronto",
        description: ``,
        speakers: [speakers[110]!, speakers[119]!, speakers[76]!, speakers[57]!], // Laurence Kirk, Rosario Napolano, Jaack
        moderators: [moderators[11]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 3,
        startTime: "15:00",
        endTime: "15:40",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["ZK", "Machine Learning"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Bybit and Starting Finance Elevate Education at NapluETH",
        description: "",
        speakers: [speakers[107]!,speakers[108]!,speakers[109]!,speakers[69]!, speakers[118]!], // Mr Rem, Manuel Monaco, Pasquale Carotenuto, Marcello Coppo, Gabriele Sampagnaro
        moderators: [moderators[4]!, moderators[2]!], // Lucrezia Van Stegheren, Filippo Anania
        day: 3,
        startTime: "15:40",
        endTime: "16:20",
        duration: "40 minutes",
        stage: "Parthenope Stage",
        tags: ["ZK", "Optimization"],
        type: "Talk",
        language: "en",
    },

    // Day 3, Cappella Stage

    {
        name: "Quantum Artificial Intelligence",
        description: "My talk is about the introduction to the pioneering research field of quantum artificial intelligence. ",
        speakers: [speakers[52]!], // Giovanni Acampora
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 3,
        startTime: "10:00",
        endTime: "10:40",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Quantum", "AI"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Quantum Money in a Post-Quantum Era",
        description: "Why Bitcoin was just the beginning of an era of decentralized internet money.",
        speakers: [speakers[20]!], // Stefano Gogioso
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 3,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Quantum", "Money"],
        type: "Talk",
        language: "en",
    },
    // {
    //     name: "The Great Quantum Pivot: It's Time for Crypto VC's to Wake Up",
    //     description: "This talk will cover the great shift from traditional blockchain to quantum money from a business perspective, and how VCs will have to adapt do this changing landscape.",
    //     speakers: [speakers[53]!], // John Lilic
    //     moderators: [moderators[7]!], // Chiara Munaretto
    //     day: 3,
    //     startTime: "10:20",
    //     endTime: "12:00",
    //     duration: "40 minutes",
    //     stage: "Cappella Stage",
    //     tags: ["Quantum", "Business"],
    //     type: "Talk",
    //     language: "en",
    // },
    {
        name: "Here Come the Pufpunks with their Black Hole Cypher",
        description: "An exploration on the difficulty of hiding secrets in matter, and proving to remote verifiers that the secrets have not leaked. This problem is of the utmost importance for secure hardware such as TEEs and secure elements, and your phone too! We'll explore the ideas of unclonable secrets, physical one-way functions, black holes, physically unclonable functions (PUFs), and their relevance to solving the double-spending problem, which is central to cryptocurrencies.",
        speakers: [speakers[111]!], // Sylvain Bellemare
        moderators: [moderators[7]!], // Chiara Munaretto
        day: 3,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Crypto", "Quantum"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 3,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Cappella Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "Quantum money+ with indistinguishability obfuscation",
        description: `
        The goal is the talk is to illustrate:
- the properties of an ideal MPC scheme
- the shortcomings of instances of MPC available today
- how these can be improved with iO
        `,
        speakers: [speakers[71]!], // Enrico Bottazzi
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 3,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["Quantum", "MPC"],
        type: "Talk",
        language: "en",
    },    

    {
        name: "Quantum Panel",
        description: "TBA",
        speakers: [speakers[20]!, speakers[73]!, speakers[36]!], // Stefano Gogioso, Chris Tam, Marc Caplan
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 3,
        startTime: "14:20",
        endTime: "15:00",
        duration: "40 minutes",
        stage: "Cappella Stage",
        tags: ["Quantum"],
        type: "Panel",
        language: "en",
    },
    {
        name: "DeFi is Boring, Bring Back the Right Incentives and the Fun",
        description: "I want to talk about the real issue in crypto, the fact that no one has incentives to actually build a product that is profitable and people use. And how to solve this",
        speakers: [speakers[106]!], // Basedtoschi
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 3,
        startTime: "15:20",
        endTime: "15:40",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Avalanche and the Avalanche Ecosystem",
        description: "This speech explores the Avalanche blockchain platform, breaking down how its unique consensus mechanism and architecture drive speed, scalability, and security. We'll showcase key projects within the Avalanche ecosystem; spanning DeFi, NFTs, gaming, and institutional adoption and conclude with a look at where Avalanche is headed next.",
        speakers: [speakers[120]!], // Jaack
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 3,
        startTime: "15:40",
        endTime: "16:00",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "From Wallet to World: Unlocking Crypto Spendability in a Decentralized Future",
        description: "In this talk I’ll introduce Bridgy, a decentralized wallet solution designed to bridge the gap between crypto assets and real-world usability. Bridgy empowers users to maintain full custody of their digital assets while enabling them to seamlessly top up a physical or virtual card for everyday spending. We’ll explore how this model enhances crypto spendability, reduces reliance on centralized exchanges, and promotes true financial sovereignty—making crypto not just a store of value, but a practical means of payment.",
        speakers: [speakers[112]!], // Stefano di Primio
        moderators: [moderators[5]!], // Olga Arzhaeva
        day: 3,
        startTime: "16:00",
        endTime: "16:20",
        duration: "20 minutes",
        stage: "Cappella Stage",
        tags: ["DeFi"],
        type: "Talk",
        language: "en",
    },

    // Day 3, Posillipo Stage
    {
        name: "Unpacking the Security Implications of Bitcoin Ordinals",
        description: "",
        speakers: [speakers[60]!], // Faizan Nahal
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 3,
        startTime: "10:00",
        endTime: "10:40",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Blockchain", "Security"],
        type: "Workshop",
        language: "en",
    },
    {
        name: "Own The Algorithm: SEO & PR for Web3 Power Players",
        description: "This talk explores how Web3 brands can future-proof their visibility across Google search, large language models (LLMs), and media channels. As AI-driven discovery reshapes how users find and engage with content, traditional SEO and PR tactics must evolve. We’ll cover how to optimise your content for both search engines and AI training datasets, the emerging role of digital PR in building brand authority, and actionable strategies to ensure your Web3 project is discoverable, credible, and top of mind in an increasingly AI-first world. Stay ahead of the curve and learn how to own your digital footprint across Web2 and Web3.",
        speakers: [speakers[61]!], // Renee Francis
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 3,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["Social Media"],
        type: "Workshop",
        language: "en",
    },
    {
        name: "Artificial Intelligence: From Assistant to Employee",
        description: "This talk is about the journey of using artificial intelligence, initially as a simple chat assistant, then making it operational by having it interact with a local system.",
        speakers: [speakers[62]!], // Edoardo Mosca
        moderators: [moderators[0]!], // Stefano De La Torre
        day: 3,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["AI"],
        type: "Talk",
        language: "en",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 3,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Posillipo Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    // {
    //     name: "Impact of DeFi and Regenerative Finance in Emerging Markets",
    //     description: "With emerging markets being the biggest consumer adoption of crypto, DeFi and Regenerative Finance are influencing the financial systems with sustainable use case adoption - my talk will focus on the sample use cases driven across different emerging markets, including stablecoin usage, DeFi primitives and remittances.",
    //     speakers: [speakers[63]!], // Naheem
    //     moderators: [moderators[1]!], // Federica Migliaro
    //     day: 3,
    //     startTime: "14:00",
    //     endTime: "14:20",
    //     duration: "20 minutes",
    //     stage: "Posillipo Stage",
    //     tags: ["ReFi", "DeFi"],
    //     type: "Talk",
    //     language: "en",
    // },
    {
        name: "Future-Proofing Investment Portfolios: Strategies for the Digital Age",
        description: "As the digital revolution reshapes financial markets, investors must adopt forward-thinking strategies to safeguard and grow their portfolios. This session outlines practical approaches to navigating the dynamic landscape of blockchain-based solutions and tokenized investment opportunities.",
        speakers: [speakers[103]!], // Timo Lehes
        moderators: [moderators[1]!], // Federica Migliaro
        day: 3,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Posillipo Stage",
        tags: ["Business", "DeFi"],
        type: "Talk",
        language: "en",
    },
    {
        name: "RWAs and Decentralized Applications",
        description: "This panel explores the rise of Real-World Assets (RWA) in Web3 and their role in bridging traditional finance with blockchain. Experts will discuss tokenization, compliance, and infrastructure needed to bring assets like real estate and bonds on-chain. Key challenges such as regulation, liquidity, and trust will be addressed. Use cases and success stories will highlight RWA's growing impact. Attendees will gain insight into the future of decentralized asset ownership.",
        speakers: [speakers[64]!, speakers[65]!], // Davide Costa, Antonio La Gatta
        moderators: [moderators[1]!], // Federica Migliaro
        day: 3,
        startTime: "14:20",
        endTime: "15:00",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: ["RWA"],
        type: "Panel",
        language: "en",
    },
    {
        name: "Private Machine Learning with zkML",
        description: `
        This workshop will give
- An introduction to zkML and opML
- An overview of the tools and frameworks available for zkML
- A demonstration of building, training and running a simple neural network
        `,
        speakers: [speakers[59]!], // Laurence Kirk
        moderators: [moderators[4]!, moderators[2]!], 
        day: 3,
        startTime: "15:00",
        endTime: "15:40",
        duration: "40 minutes",
        stage: "Posillipo Stage",
        tags: [],
        type: "Panel",
        language: "it",
    },

    // Day 3, Mergellina Stage
    {
        name: "Presentazione Libro 'Tesoreria Trasformativa'",
        description: "Tesoreria Trasformativa: Bitcoin in Azienda, Ma con la Testa da Imprenditore",
        speakers: [speakers[92]!], // Alfonso Selva
        moderators: [moderators[3]!], // Giovanni Orlacchio
        day: 3,
        startTime: "10:00",
        endTime: "10:20",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["Books"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Nostr oltre il Social Network: Verso un Internet Decentralizzato e Resistente alla Censura",
        description: "The talk aims to demonstrate how Nostr is not merely a social networking protocol, but a foundational infrastructure layer for building decentralized, censorship-resistant, interoperable, and permissionless applications.",
        speakers: [speakers[66]!], // Vincenzo Imperati
        moderators: [moderators[3]!], // Giovanni Orlacchio
        day: 3,
        startTime: "10:20",
        endTime: "10:40",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["Social Media", "Decentralization"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Blockchain & Web3 Outlook 2024/25: Global Trends and the Italian Perspective",
        description: "The presentation covers the research findings of the 2024 Web3 landscape, focusing on both global and Italian perspectives. It will highlight key trends in the development of Web3 technologies, including advancements in blockchain, tokenization, and decentralized platforms. The session will explore significant industry projects, including financial applications like Digital Bonds and the growing role of stablecoins. A special focus will be on the Web3 adoption in Italy and in the world by companies and institutions.",
        speakers: [speakers[67]!], // Ettore Zauli
        moderators: [moderators[3]!], // Giovanni Orlacchio
        day: 3,
        startTime: "10:40",
        endTime: "11:20",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["Global Trends"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Sicurezza, Tasse e Criptovalute",
        description: "Il settore delle criptovalute, in rapida evoluzione, offre immense opportunità, ma presenta anche sfide significative in termini di sicurezza e protezione dei dati. Questo intervento mira a fornire una panoramica delle principali minacce e vulnerabilità nel mondo delle criptovalute, con un focus sulle implicazioni per la protezione dei dati personali e finanziari, con la prospettiva sia dell'utente, che del fornitore dei servizi. Si approfondirà il tema dell'antiriciclaggio e si toccheranno i vari Regolamenti (MICA, DORA, GDPR, NIS2, RACC GAFI) con espressa esclusione di riproduzioni asettiche del testo normativo, ma con rappresentazioni grafiche, eventualmente realizzate anche con strumenti di Intelligenza Artificiale, e con contenuti di elevato impatto pratico. Di particolare rilevanza sarà anche l'aspetto fiscale inerente alle criptovalute.",
        speakers: [speakers[69]!, speakers[14]!, speakers[68]!], // Marcello Coppo, Piera Di Stefano, Alessandro Benvengù
        moderators: [moderators[3]!], // Giovanni Orlacchio
        day: 3,
        startTime: "11:20",
        endTime: "12:00",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["Security", "Legal", "Crypto"],
        type: "Panel",
        language: "it",
    },
    {
        name: "Lunch Break",
        speakers: [],
        moderators: [],
        day: 3,
        startTime: "12:00",
        endTime: "14:00",
        duration: "2 hours",
        stage: "Mergellina Stage",
        tags: [],
        type: "Break",
        language: "en",
    },
    {
        name: "TaoMark il Primo e-shop Crypto-Friendly Italiano",
        description: "My talk is about how easy is to use TaoMark and spend crypto without converting them or doing a cash out.",
        speakers: [speakers[48]!], // Gabriele Alagna
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 3,
        startTime: "14:00",
        endTime: "14:20",
        duration: "20 minutes",
        stage: "Mergellina Stage",
        tags: ["e-shops"],
        type: "Talk",
        language: "it",
    },
    {
        name: "Tassare o non Tassare?",
        description: "My talk will update the public on the state of the art about taxation in Italy",
        speakers: [speakers[86]!], // Stefano Capaccioli
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 3,
        startTime: "14:20",
        endTime: "15:00",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["Legal"],
        type: "Workshop",
        language: "it",
    },
    {
        name: "Intelligenze al Servizio dei Territori: AI per le Città e le Comunità",
        description: "In che modo l’intelligenza artificiale può diventare uno strumento concreto di sviluppo per territori, città e comunità locali? In questo panel esploriamo casi d’uso, sfide e opportunità dell’adozione dell’AI nei contesti urbani e rurali: dall’assistenza turistica al supporto ai cittadini, dalla valorizzazione culturale alla gestione dei servizi.Confronto aperto tra chi progetta soluzioni, chi le comunica e chi lavora per renderle accessibili e utili a chi vive e lavora sul territorio.",
        speakers: [speakers[93]!, speakers[94]!, speakers[95]!], // Paola Ciaramella, Valentina Russo, Azzurra Mancini
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 3,
        startTime: "15:00",
        endTime: "15:40",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["AI"],
        type: "Panel",
        language: "it",
    },
    {
        name: "Live Tokenization of an RWA",
        description: "I will happily run a demo/workshop of a live tokenization in front of the audience.",
        speakers: [speakers[50]!], //Ludovico Rossi
        moderators: [moderators[6]!], // Valentina Marzioni
        day: 3,
        startTime: "15:40",
        endTime: "16:20",
        duration: "40 minutes",
        stage: "Mergellina Stage",
        tags: ["RWA"],
        type: "Workshop",
        language: "it",
    },
    
    

    {
        name: "Closing",
        speakers: [],
        moderators: [],
        day: 3,
        startTime: "16:20",
        endTime: "16:40",
        duration: "20 minutes",
        stage: "Parthenope Stage",
        tags: [],
        type: "",
        language: "en",
    },
    
    
]

export const tags = [
    "AI",
    "Art",
    "Blockchain",
    "Business",
    "Crypto",
    "DeFi",
    "Design",
    "Economy",
    "Education",
    "EVM",
    "Finance",
    "Game Theory",
    "Gaming",
    "IoT",
    "IT",
    "Legal",
    "Marketing",
    "Media",
    "Music",
    "Network",
    "NFT",
    "Privacy",
    "Quantum",
    "RWA",
    "Security",
    "Tokenomics",
    "Trading",
    "UX",
    "Web3",
    "ZK Proofs",
]

export const types = [
    "Talk",
    "Panel",
    "Workshop",
    "Break",   
]

export const languages = [
    "en",
    "it",
]
