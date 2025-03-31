import { StaticImageData } from "next/image";
import lelep1 from '../../public/images/events/Lalep01.svg';
import lelep2 from '../../public/images/events/Lalep02.svg';
import lelep3 from '../../public/images/events/Lalep03.jpg';
import british1 from '../../public/images/events/british1.png';
import british2 from '../../public/images/events/british2.png';
import british3 from '../../public/images/events/british3.png';
import aloft1 from '../../public/images/events//aloft hotel01.jpg';
import aloft2 from '../../public/images/events/aloft hotel02.jpg';
import aloft3 from '../../public/images/events/aloft hotel03.jpg';
import royal1 from '../../public/images/events/royal geographical society01.png';
import royal2 from '../../public/images/events/royal geographical society02.svg';
import royal3 from '../../public/images/events/royal geographical society03.svg';


interface k70Events {
    date: string;
    content: string;
    title: string;
    images?: StaticImageData[];
    
}

export const k70Events: k70Events[] = [
    {
        date: '18 April, 2025',
        content: `The celebrations will start in the heart of the Kangchenjunga region, with a special event taking place in the scenic village of Lelep, Taplejung, alongside an exhibition of a curated collection of photographs relating to Kangchenjunga. The event will also include members of the local community, KCAMC, and the local government.`,
        title: '- Lelep, Taplejung',
        images: [lelep1, lelep2, lelep3]
    },
    
    {
        date: '24 April, 2025',
        content: `The Kangchenjunga 70 celebrations will include an event in Kathmandu, Nepal, bringing together the private sector, media, government stakeholders, and international organizations to pay tribute to the legacy of Kangchenjunga's first ascent. A curated collection of photographs relating to Kangchenjunga will also be exhibited at the event.`,
        title: '- Aloft Hotel, Kathmandu',
        images: [aloft1, aloft2, aloft3]
    },
    {
        date: '25 April, 2025',
        content: `A celebration will be hosted by the British Ambassador to Nepal at the Ambassador’s residence in Kathmandu.`,
        title: ' - British Ambasadoor’s Residence, Kathmandu',
        images: [british1, british2, british3]
    },
    {
        date: '5 June, 2025',
        content: `In the United Kingdom, the festivities will culminate at the prestigious Royal Geographic Society, where 
        adventurers, mountaineers, and enthusiasts will gather to commemorate this historic moment. The celebrations will honor 
        pioneering climbers and foster community engagement while highlighting the region's rich cultural heritage.`,
        title: '- Royal Geographical Society, London',
        images: [royal1, royal2, royal3]

    },
    {
        date: 'SPRING 2026',
        content: "70<sup>th</sup> Anniversary Duke of Edinborough expedition to Kanchecnjunga",
        title: 'DETAILS TO FOLLOW'
    }
]