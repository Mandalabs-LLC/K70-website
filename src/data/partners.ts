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

interface Partner {
    title: string;
    logo: StaticImageData;
}

export const privateSectorPartner:Partner[] =[
    {
        title: "worldlink",
        logo: worldlink,
    },
    {
        title: "Nepal Investment Bank Limited",
        logo: nimb,
    },
    {
        title: "Microsoft Airband",
        logo: airband,
    },
]


export const developmentSectorPartner:Partner[] =[
    {
        title: "UNESCO",
        logo: unesco,
    },
    {
        title: "Red Panda Network",
        logo: redpanda,
    },
    {
        title: "World Wide Fund for Nature",
        logo: wwf,
    },
    {
        title: "SNV",
        logo: snv,
    },
    {
        title: "International Centre for Integrated Mountain Development.",
        logo: icmod,
    },
    {
        title: "Kreditanstalt für Wiederaufbau",
        logo: kfw,
    },
    {
        title: "Special Education Data Reporting Application",
        logo: sedra,
    },
    {
        title: "Kathmandu Environmental Education Project",
        logo: keep,
    },
    {
        title: "Nepal Mountaineering Association",
        logo: nma,
    },
    {
        title: "Ministry of Energy, Water Resources and Irrigation",
        logo: mewi,
    },
    {
        title: "Nepal Electricity Authority",
        logo: nea ,
    },
]