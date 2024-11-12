import { StaticImageData } from "next/image";
import future from '../../public/images/future/future.png';
import intersect from '../../public/images/future/Intersect.svg';
import intersect1 from '../../public/images/future/Intersect-1.svg';
import intersect2 from '../../public/images/future/Intersect-2.svg';
import intersect3 from '../../public/images/future/Intersect-3.svg';
import intersect4 from '../../public/images/future/Intersect-4.svg';

interface futureData {
    content: string;
    image: StaticImageData;
    heading?: string;
}

export const futureData = [
    {
        heading: 'future',
        content: `Kanchenjunga Conservation Area Management Council (KCAMC) was formed in 2003 under the provision of Conservation
         Area Management Regulation 2001 (Government Management) with an aim of management of KCA through mobilizing local 
         communities. KCAMC and its affiliated bodies are working in conservation and sustainable development activities in 
         line with directives of Government of Nepal, Department of National Park and Wildlife Conservation.
         <a href="https://kanchenjunga.org/about-us/" style="color:#2B76A3; text-decoration: underline;"> https://kanchenjunga.org/about-us/ </a>`,
        image: future,
    },
]

interface futureSecondSectionImagesData {
        image: StaticImageData;
        title: string;
        content: string;

}

export const futureSecondSectionImages:futureSecondSectionImagesData[] = [
    {
        image: intersect,
        title: "Piller 1",
        content: `Environment & conservation`
    },
    {
        image: intersect1,
        title: "Piller 2",
        content: `Sustainable tourism infrastructure`
    },
    {
        image: intersect2,
        title: "Piller 3",
        content: `Community Human Capital & economic development`
    },
    {
        image: intersect3,
        title: "Piller 4",
        content: `Smart technology`
    },
    {
        image: intersect4,
        title: "Piller 5",
        content: `Destination Marketing`
    },
    
]