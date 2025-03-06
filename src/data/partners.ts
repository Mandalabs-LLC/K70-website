import { StaticImageData } from "next/image";
import worldlink from '../../public/images/partners/worldlink.png';
import icmod from '../../public/images/partners/icmod.png';
import nimb from '../../public/images/partners/nimb.png';
import redpanda from '../../public/images/partners/red-panda.png';
import sedra from '../../public/images/partners/sedra.png';
import snv from '../../public/images/partners/snv.png';
import unesco from '../../public/images/partners/unesco.png';
import wwf from '../../public/images/partners/wwf.png';
import AlternativeEnergyPromotionCenter from '../../public/images/partners/alternative.png';
import ntb from '../../public/images/partners/ntb.png';
import business360 from '../../public/images/partners/business360.png';
import designcell from '../../public/images/partners/designcell.png';
import giz from '../../public/images/partners/giz.svg';
import hbl from '../../public/images/partners/hbl.png';
import himalayanTrust from '../../public/images/partners/himalayantrust.png';
import nationaltrust from '../../public/images/partners/nationaltrust.svg';
import nepalchinafriendship from '../../public/images/partners/nepalchinafriendship.jpg';
import trekagency from '../../public/images/partners/trekagency.png';
import blueberry from '../../public/images/partners/blueberry.png';
import naott from '../../public/images/partners/naott.png';
import nepalmountaineering from '../../public/images/partners/nepalmountaineering.png';

interface Partner {
    title: string;
    link:string;
    description?:string;
    logo: StaticImageData;
}

export const ourPartners:Partner[] =[
    {
        title: "Alternative Energy Promotion Center",
        description: "AEPC will facilitate access to renewable energy and water management resources in the Kangchenjunga region to implement sustainable energy solutions.",
        link:"https://www.aepc.gov.np/",
        logo: AlternativeEnergyPromotionCenter,
    },
    {
        title: "Business 360",
        link:"https://www.b360nepal.com/",
        description: "Promotes eco-tourism and sustainable business practices, enhancing K70's visibility among stakeholders.",
        logo: business360,
    },
    {
        title: "Design Cell",
        link:"https://designcell.com.np/",
        description: "Assists in providing technical support on eco-friendly infrastructure designs and building codes for visitor centers, lodges, and other facilities in the Kangchenjunga Conservation Area. A study of building codes has been completed by Design Cell in the Kangchenjunga Area.",
        logo: designcell,
    },
    {
        title: "German Cooperation Supported by (GIZ) Deutsche Gesellschaft für Internationale Zusammenarbeit",
        link:"https://www.giz.de/en/html/index.html",
        description: "Their expertise contributes to advancing renewable energy in the region by offering technical assistance for the development of micro-hydro systems.",
        logo: giz,
    },
    {
        title: "Himalayan Bank Limited",
        description: "The Himalayan Bank supports for conservation and development initiatives in the Samriddha Kangchenjunga Program.",
        link:"https://www.himalayanbank.com/en/",
        logo: hbl,
    },
    {
        title: "Himalayan Trust UK",
        description: "The Himalayan Trust UK has been working in the Kangchenjunga region for 20 years, by supporting 35 schools and 4 health posts. HTUK is proud to partner with Samriddha Kangchenjunga. On education, HTUK will be working with REED https://reednepal.org and Samriddha Pahad to provide new education resources around conservation, sustainable tourism, and vocational training. On Health, HTUK will work with Action for Nepal (https://actionfornepal.org) to expand the community network to provide health facilities along the Kangchenjunga Base Camp North and South Routes.",
        link:"https://himalayantrust.co.uk/",
        logo: himalayanTrust ,
    },
    {
        title: "International Centre for Integrated Mountain Development",
        description: "ICIMOD will provide technical expertise on sustainable mountain development and climate adaptation strategies in the Kangchenjunga region. ICIMOD has completed a solid waste management study in partnership with SP and KCAMC in the Kangchenjunga Conservation Area.",
        link:"https://www.icimod.org/",
        logo: icmod,
    },
    {
        title: "Nepal Association of Tours and Travel Agents",
        description: "Helps promote KCA as a prime eco-tourism destination and provides training for local guides.",
        link:"https://natta.org.np/",
        logo: naott,
    },
    {
        title: "Nepal Investment Bank Limited",
        description: "NIMB will provide funding support to scale Samriddha Kangchenjunga’s initiatives, their investment solutions will help secure long-term project sustainability.",
        link:"https://www.nimb.com.np/en/personal-banking",
        logo: nimb,
    },
    {
        title: "Nepal Mountaineering Association",
        link:"https://www.nepalmountaineering.org/",
        description: "Enhances sustainable mountaineering practices and supports safety training for guides and porters.",
        logo: nepalmountaineering,
    },
    {
        title: "Nepal Trust for Nature Conservation",
        link:"https://www.ntnc.org.np/",
        description: "NTNC will contribute to the development of Kangchenjunga Conservation Area through a range of initiatives related to biodiversity and conservation.",
        logo: nationaltrust,
    },
    {
        title: "Nepal China Friendship Forum",
        link:"https://www.facebook.com/ncfforum/",
        description: "NCFF will contribute to promoting the Kangchenjunga region to attract more tourists to the region while working with local tourism businesses and entrepreneurs.",
        logo: nepalchinafriendship,
    },
    {
        title: "Nepal Tourism Board",
        description: "Anchors the holistic development and promotion of Kangchenjunga by providing various support to attract the tourists to the Kangchenjunga Conservation Area.",
        link:"https://ntb.gov.np/",
        logo: ntb,
    },
    {
        title: "Red Panda Network",
        description: "Red Panda Network will collaborate with Samriddha Kangchenjunga Program to protect endangered wildlife and promote biodiversity conservation. Their programs will support K70's efforts to raise awareness about wildlife protection.",
        link:"https://redpandanetwork.org/",
        logo: redpanda,
    },
    {
        title: "SEDRA Project/Business and Finance Consulting",
        description: "SEDRA will contribute through capacity development of the MSME in the region mainly focusing on tourism service providers like agency, hotel, lodges, tea houses etc.  ",
        link:"#",
        logo: sedra,
    },
    {
        title: "SNV",
        description: "SNV will assist Samriddha Kangchenjunga Program with technical support in agriculture, renewable energy, and water sanitation projects. Their experience in rural development will enhance the community outreach programs. SNV has micro-hydro detailed project report (DPR) in the KBC South in partnership with KCAMC and SP.",
        link:"https://www.snv.org/",
        logo: snv,
    },
    {
        title: "Trekking Agencies' Association of Nepal (TAAN)",
        description: "Promotes trekking in the area and ensures standardized practices for safety and sustainability.",
        link:"https://www.taan.org.np/",
        logo: trekagency,
    },
    {
        title: "The Blueberry Hill Charitable Trust",
        description: "BHCT is the founder of Samriddha Pahad and the longterm donor to Samriddha Kangchenjunga Program to support conservation activities, economic development and enable impactful grassroots initiatives.",
        link:"https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/3997577/what-who-how-where",
        logo: blueberry,
    },
    {
        title: "UNESCO",
        description: "UNESCO Nepal is supporting Kangchenjunga Conservation Area to explore the opportunity to be nominated as Nepal’s first UNESCO Biosphere Reserve. The UNESCO World Network of Biosphere Reserves (WNBR) covers internationally designated protected areas, known as biosphere or nature reserves, which are meant to demonstrate a balanced relationship between people and nature and encourage sustainable development.",
        link:"https://www.unesco.org/en",
        logo: unesco,
    },
    {
        title: "Worldlink",
        description: "Worldlink is working with Samriddha Kangchenjunga Program to expand communication infrastructure and digital connectivity to the Kangchenjunga region. WL is creating a pool of local technical resources in Taplejung by building the capacity of local youth. ",
        link:"https://worldlink.com.np/",
        logo: worldlink,
    },
    {
        title: "World Wild Fund for Nature Nepal",
        description: "The WWF Nepal is contributing to Samriddha Kangchenjunga Program by supporting development of KCAMC’s 5-year management plan.",
        link:"https://www.worldwildlife.org/",
        logo: wwf,
    },



     
]