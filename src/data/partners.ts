import { StaticImageData } from "next/image";
import worldlink from '../../public/images/partners/worldlink.png';
import airband from '../../public/images/partners/airband.png';
import icmod from '../../public/images/partners/icmod.png';
import keep from '../../public/images/partners/keep.png';
import kfw from '../../public/images/partners/kfw.png';
import mewi from '../../public/images/partners/mewi.png';
import nea from '../../public/images/partners/nea.png';
import nimb from '../../public/images/partners/nimb.png';
import nma from '../../public/images/partners/nma.png';
import redpanda from '../../public/images/partners/redpanda.png';
import sedra from '../../public/images/partners/sedra.png';
import snv from '../../public/images/partners/snv.png';
import unesco from '../../public/images/partners/unesco.svg';
import wwf from '../../public/images/partners/wwf.png';
import tbct from '../../public/images/partners/The_blueberry_charitable_trust.jpg'
interface Partner {
    title: string;
    link:string;
    logo: StaticImageData;
}

export const ourPartners:Partner[] =[
    {
        title: "International Centre for Integrated Mountain Development.",
        link:"https://www.icimod.org/",
        logo: icmod,
    },
    {
        title: "Kathmandu Environmental Education Project",
        link:"https://keepnepal.org/",
        logo: keep,
    },
    {
        title: "Kreditanstalt für Wiederaufbau",
        link:"https://www.kfw.de/kfw.de.html",
        logo: kfw,
    },
    {
        title: "Microsoft Airband",
        link:"https://www.microsoft.com/en-us/corporate-responsibility/airband-initiative",
        logo: airband,
    },
    {
        title: "Ministry of Energy, Water Resources and Irrigation",
        link:"https://moewri.gov.np/",
        logo: mewi,
    },
    {
        title: "Nepal Electricity Authority",
        link:"https://www.nea.org.np/",
        logo: nea ,
    },
    {
        title: "Nepal Investment Bank Limited",
        link:"https://www.nimb.com.np/",
        logo: nimb,
    },
    {
        title: "Nepal Mountaineering Association",
        link:"https://www.nepalmountaineering.org/home",
        logo: nma,
    },
    {
        title: "Red Panda Network",
        link:"https://redpandanetwork.org/",
        logo: redpanda,
    },
    {
        title: "SNV",
        link:"https://www.snv.org/",
        logo: snv,
    },
    {
        title: "Special Education Data Reporting Application",
        link:"https://education.mn.gov/mde/index.htm",
        logo: sedra,
    },
    {
        title: "The Blueberry Charitable Trust",
        link:"#",
        logo: tbct,
    },
    {
        title: "UNESCO",
        link:"https://www.unesco.org/en",
        logo: unesco,
    },
    {
        title: "World Wide Fund for Nature",
        link:"https://www.worldwildlife.org/",
        logo: wwf,
    },
    {
        title: "Worldlink",
        link:"https://worldlink.com.np/",
        logo: worldlink,
    },
     
]