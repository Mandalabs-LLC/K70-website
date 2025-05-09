import { StaticImageData } from "next/image";
import future from '../../public/images/future/future.jpg';
import piller1 from '@/../public/images/future/pillar1.png';
import piller2 from '@/../public/images/future/Pillar2.png';
import piller3 from '@/../public/images/future/pillar3.png';
import piller4 from '@/../public/images/future/pillar4.png';
import piller5 from '@/../public/images/future/pillar5.png';
import {
    worldlink,
    nimb,
    redpanda,
    sedra,
    snv,
    unesco,
    wwf,
    AlternativeEnergyPromotionCenter,
    logo,
    designcell,
    giz,
    himalayanTrust,
    nationaltrust,
    blueberry,
    naott,
    nepalmountaineering,
    keep,
    gov,
    ntc,
    actionnepal,
} from './partnerImages'

interface futureData {
    content: string;
    image: StaticImageData;
    heading?: string;
    video?: string;
}

export const futureData = [
    {
        heading: 'future',
        content: ` <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> 
        Kangchenjunga Conservation Area Management Council (KCAMC)</a> was formed in 2003 under the provision of 
        Conservation Area Management Regulation 2001 (Government Management) with the goal of mobilizing local communities
        to serve as the active managers of the KCA. KCAMC
        and its affiliated bodies are working in conservation and sustainable
        development activities in line with directives of Government of Nepal, Department of National Park and Wildlife Conservation.
        <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> https://kanchenjunga.org/ </a>`,
        image: future,
        video: '/video/future_video.mp4'
    },
]

interface tourismData {
    pillars: {
        id: number;
        title: string;
        description: string;
        image: StaticImageData;
        initiatives: string[];
        logos: {
            name: string;
            image: StaticImageData;
        }[];
    }[];
}

export const tourismData: tourismData = {
    pillars: [
        {
            id: 1,
            title: "Environment and Conservation",
            description: "Pillar I: Environment and Conservation",
            image: piller1,
            initiatives: [
                "i. UNESCO bio-sphere programme",
                "ii. Red panda habitat protection project",
                "iii. Climate smart and tourism school project",
                "iv. Snow leopard habitat protection project",
                "v. Conservation nursery project",
                "vi. Rangeland conservation project",
                "vii. Sustainable forest management",
                "viii. Water resources management"
            ],
            logos: [
                { name: "WWF", image: wwf },
                { name: "Red Panda Network", image: redpanda },
                { name: "Nepal Government", image: gov },
                { name: "National Trust for Nature Conservation", image: nationaltrust },
                { name: "UNESCO", image: unesco }
            ]
        },
        {
            id: 2,
            title: "Sustainable Tourism Infrastructure",
            description: "Pillar II: Sustainable Tourism Infrastructure",
            image: piller2,
            initiatives: [
                "i. Kangchenjunga park center",
                "ii. Tourist information and exhibition center",
                "iii. Tourist ticket counter",
                "iv. Community multi-purpose training center",
                "v. Kangchenjunga porter and welfare center",
                "vi. Clean energy",
                "vii. Waste management",
                "viii. Clean drinking water project",
                "ix. Community sanitation programme",
                "x. Trail development and management",
                "xi. KCA building codes/guidelines",
                "xii. KCA check posts",
                "xiii. Resting station",
                "xiv. Porter shelter",
                "xv. High altitude health center"
            ],
            logos: [
                { name: "SNV", image: snv },
                { name: "Alternative Energy Promotion Centre", image: AlternativeEnergyPromotionCenter },
                { name: "The Blueberry Hill Charitable Trust", image: blueberry },
                { name: "GIZ", image: giz },
                { name: "Design Cell", image: designcell },
                { name: "NIMB", image: nimb }
            ] 
        },
        {
            id: 3,
            title: "Community Human Capital & Economic Development",
            description: "Pillar III: Community Human Capital & Economic Development",
            image: piller3,
            initiatives: [
                "i. Institutional capacity",
                "ii. Building of KCAMC (governance & management)",
                "iii. Development of KCAMC 5th management plan (2025/26-2029/30)",
                "iv. Enterprise development (forest based, tourism, livelihoods)",
                "v. Capacity building of service providers and service standardization",
                "vi. Tourism skills and vocational training",
                "vii. Agriculture and supply chain management",
                "viii. Porter training",
                "ix. Capacity building of community institution (access to finance)",
                "x. Improving service skills in transportation"
            ],
            logos: [
                { name: "Himalayan", image: himalayanTrust },
                { name: "Nepal Mountaineering Association", image: nepalmountaineering },
                { name: "SERDAC", image: sedra },
                { name: "SNV", image: snv },
                { name: "Action Nepal", image: actionnepal },
                { name: "Kathmandu Environmental Education", image: keep }
            ]
        },
        {
            id: 4,
            title: "Smart Technologies",
            description: "Pillar IV: Smart Technologies",
            image: piller4,
            initiatives: [
                "i. Digital strategy for KCA (10 Years)",
                "ii. Management information system for KCA",
                "iii. Visitor safety management system",
                "iv. Digital monitoring system",
                "v. Expansion of connectivity (mobile and internet network)"
            ],
            logos: [
                { name: "Nepal Government", image: gov },
                { name: "Nepal Telecom", image: ntc },
                { name: "World Link", image: worldlink }
            ]
        },
        {
            id: 5,
            title: "Destination Marketing",
            description: "Pillar V: Destination Marketing",
            image: piller5,
            initiatives: [
                "i. KCA tourism development plan",
                "ii. KCA tourism product development",
                "iii. Destination promotion events and activities (K70)",
                "iv. Private sector engagement in tourism promotion"
            ],
            logos: [
                { name: "Kanchenjunga", image: logo },
                { name: "Nepal Association of Tour & Travel Agents", image: naott }
            ]
        }
    ]
};