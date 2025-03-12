import { StaticImageData } from "next/image";
import JD_Hooker from '../../public/images/history/JD_Hooker.png';
import nima from '../../public/images/history/nima.png';
import polish from '../../public/images/history/polish.png';
import RC_Evans from '../../public/images/history/RC_Evans.png';
import Aleister from '../../public/images/history/Aleister.png';
import bulgarian from '../../public/images/history/bulgarian.png';
import hungarian from '../../public/images/history/hungarian.png';
import indianarmy from '../../public/images/history/indianarmy.png';
import japanese from '../../public/images/history/japanese.png';
import phurba from '../../public/images/history/phurba.svg';
import climber1 from '../../public/images/history/climber1.svg';
import climber2 from '../../public/images/history/climber2.svg';
import climber3 from '../../public/images/history/climber3.svg';
import climber4 from '../../public/images/history/climber4.svg';
import pnenines from '../../public/images/history/1980s.jpeg';

interface climbingHistoryData {
    date: string;
    content: string;
    image: StaticImageData[];
}

interface Climbers {
    name: string;
    image: StaticImageData;
}

export const climbers: Climbers[] = [
    {
        name: 'George Band',
        image: climber1,
    },
    {
        name: 'Joe Brown',
        image: climber2,
    },
    {
        name: 'Tony Streather',
        image: climber4,
    },
    {
        name: 'Norman Hardie',
        image: climber3,
    },
]

export const climbingHistory: climbingHistoryData[] = [
    {
        date: 'Early Exploration, 1848-1849',
        content: 'J.D. Hooker conducts early explorations, inspiring future expeditions with his detailed sketches and writings.',
        image: [JD_Hooker],
    },
    {
        date: 'First Serious Attempt, 1905',
        content: `Aleister Crowley leads the first serious climbing attempt, reaching 6,500 meters but faces a tragic accident, highlighting the mountain's dangers. Crowley's fascination with the mystical and the unknown later led to his inclusion on the iconic Sgt. Pepper's Lonely Hearts Club Band album cover, where he appears among other cultural figures representing the spirit of exploration and challenge.`,
        image: [Aleister],
    },
    {
        date: 'First Ascent, May 25, 1955',
        content: `A British expedition led by Dr.R.C. Evans achieves the first successful ascent. Climbers George Band and Joe Brown summit but stop short to honour a promise to the Chogyal of the Kingdom of Sikkim.`,
        image: [RC_Evans],
    },
   
    {
        date: '1973',
        content: 'Japanese climbers Yutaka Ageta and Takeo Matsuda summit Kangchenjunga West; Matsuda goes missing during descent.',
        image: [japanese],
    },
    {
        date: '1977',
        content: `An Indian Army team led by Colonel Narendra Kumar completes the second ascent via the Northeast spur route, establishing a significant milestone for Indian mountaineering.`,
        image: [indianarmy],
    },
    {
        date: '1978',
        content: 'Polish climbers Wojciech Wróż and Eugeniusz Chrobak make the first successful ascent of Kangchenjunga South summit.',
        image: [polish],
    },
    {
        date: '14TH MAY 1980',
        content: `The first Nepali to climb this peak was Ang Phurba Sherpa on 14th May 1980.`,
        image: [phurba],
    },
    {
        date: '1980<span style="font-size: 70%;">s</span> - 1990<span style="font-size: 70%;">s</span>',
        content: "Several expeditions occur, including a notable solo ascent by climber Jerzy Kukuczka in 1991.",
        image: [pnenines],
    },
    {
        date: '2013',
        content: "Hungarian climbers Zsolt Erőss and Péter Kiss summit but disappear during descent.",
        image: [hungarian],
    },
    {
        date: '2014',
        content: "Bulgarian climber Boyan Petrov summits without supplemental oxygen; Indian climber Chhanda Gayen, the first Indian woman to summit, tragically dies in an avalanche.",
         image: [bulgarian],
    },
    {
        date: '2024',
        content:"Nepali climber Nima Rinji Sherpa successfully summited Kangchenjunga at age 18, becoming the youngest person to complete all 14 of the world's highest peaks.",
        image: [nima],
    }
];