import { StaticImageData } from "next/image";
import JD_Hooker from '../../public/images/history/JD_Hooker.png';
import Norman from '../../public/images/history/Norman.png';
import Tony from '../../public/images/history/Tony.png';
import polish from '../../public/images/history/polish.png';
import RC_Evans from '../../public/images/history/RC_Evans.png';
import Aleister from '../../public/images/history/Aleister.png';
import bulgarian from '../../public/images/history/bulgarian.png';
import hungarian from '../../public/images/history/hungarian.png';
import indianarmy from '../../public/images/history/indianarmy.png';
import japanese from '../../public/images/history/japanese.png';
import jerjy from '../../public/images/history/jerjy.png';
import ttf from '../../public/images/history/twentytwentyfour.png'

interface climbingHistoryData {
    date: string;
    content: string;
    image: StaticImageData[];
}

export const climbingHistory: climbingHistoryData[] = [
    {
        date: 'Early Exploration, 1848-1849',
        content: 'J.D. Hooker conducts early explorations, inspiring future expeditions with his detailed sketches and writings.',
        image: [JD_Hooker],
    },
    {
        date: 'First Serious Attempt, 1905',
        content: `Aleister Crowley and a Swiss team made the first significant climbing attempt. They reached abAleister Crowley leads the first serious climbing attempt, reaching 6,500 meters but faces a tragic accident, highlighting the mountain's dangers. Crowley's fascination with the mystical and the unknown later led to his inclusion on the iconic Sgt. Pepper's Lonely Hearts Club Band album cover, where he appears among other cultural figures representing the spirit of exploration and challenge.out 6,500 meters on the southwest face but suffered a tragic accident that resulted in fatalities.`,
        image: [Aleister],
    },
    {
        date: 'First Ascent, May 25, 1955',
        content: 'A British expedition led by Dr.R.C. Evans achieves the first successful ascent. Climbers George Band and Joe Brown summit but stop short to honour a promise to the Chogyal of the Kingdom of Sikkim.',
        image: [RC_Evans],
    },
    {
        date: 'May 26, 1955',
        content: 'Norman Hardie and Tony Streather summit Kanchenjunga, following the first ascent team.',
        image: [Tony, Norman],
    },
    {
        date: '1973',
        content: 'Japanese climbers Yutaka Ageta and Takeo Matsuda summit Kangchenjunga West; Matsuda goes missing during descent.',
        image: [japanese],
    },
    {
        date: '1977',
        content: 'An Indian Army team led by Colonel Narendra Kumar completes the second ascent via the Northeast spur route, establishing a significant milestone for Indian mountaineering.',
        image: [indianarmy],
    },
    {
        date: '1978',
        content: 'Polish climbers Wojciech Wróż and Eugeniusz Chrobak achieve the first ascent of Kangchenjunga South summit.',
        image: [polish],
    },
    // {
    //     date: '1980',
    //     content: 'The first Nepali to climb this peak was Anfg',
    //     image: [jerjy],
    // },
    {
        date: '1980s - 1990s',
        content: "Various expeditions occur, including a notable solo ascent by climber Jerzy Kukuczka in 1991.",
        image: [jerjy],
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
        content:"Nepali climber Nima Rinji Sherpa successfully summited Kanchenjunga at age 18, becoming the youngest person to complete all 14 of the world's highest peaks.",
        image: [ttf],
    }
];