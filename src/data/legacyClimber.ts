import { StaticImageData } from "next/image";
import e1 from '../../public/images/history/e1.png'
import e2 from '../../public/images/history/e2.png'
import e3 from '../../public/images/history/e3.png'
import e4 from '../../public/images/history/e4.png'
import e5 from '../../public/images/history/e5.png'

export interface LegacyClimber {
    name: string;
    image: StaticImageData;
    link: string;
}

export const legacyClimbers: LegacyClimber[] = [
    {
        name: "George Band",
        image: e1,
        link: "/details/legacy-climbers/elvis-presley",
    },
    {
        name: "Joe Brown",
        image: e2,
        link: "/details/legacy-climbers/john-lennon",
    },
    {
        name: "Charles Evans",
        image: e3,
        link: "/details/legacy-climbers/paul-mccartney",
    },
    {
        name: "Norman Hardie",
        image: e4,
        link: "/details/legacy-climbers/elvis-presley",
    },
    {
        name: "Tony Streather",
        image: e5,
        link: "/details/legacy-climbers/john-lennon",
    },
   
]