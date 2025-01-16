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
        content: 'British botanist J.D. Hooker was one of the first explorers to document the Kangchenjunga massif in detail during his expeditions in 1848 and 1849. His sketches and writings inspired further exploration.',
        image: [JD_Hooker],
    },
    {
        date: 'First Serious Attempt, 1905',
        content: 'Aleister Crowley and a Swiss team made the first significant climbing attempt. They reached about 6,500 meters on the southwest face but suffered a tragic accident that resulted in fatalities. ',
        image: [Aleister],
    },
    {
        date: 'First Ascent, May 25, 1955',
        content: 'On May 25, 1955, a British expedition led by Dr. R.C. Evans achieved the first successful ascent. Climbers George Band and Joe Brown reached the summit but stopped short of honouring a promise to the Maharajah of Sikkim that the peak would remain inviolate.',
        image: [RC_Evans],
    },
    {
        date: 'May 26, 1955',
        content: 'Norman Hardie and Tony Streather summit Kanchenjunga, following the first ascent team.',
        image: [Tony, Norman],
    },
    {
        date: '1973',
        content: 'Japanese climbers Yutaka Ageta and Takeo Matsuda summit Kangchenjunga West (Yalung Kang) via the southwestern ridge. Matsuda goes missing during the descent.',
        image: [japanese],
    },
    {
        date: '1977',
        content: 'The second ascent of Kanchenjunga was achieved by an Indian Army team led by Colonel Narendra Kumar, who completed the Northeast spur route.',
        image: [indianarmy],
    },
    {
        date: '1978',
        content: 'Polish climbers Wojciech Wróż and Eugeniusz Chrobak make the first successful ascent of Kangchenjunga South summit.',
        image: [polish],
    },
    {
        date: '1980s - 1990s',
        content: "Various expeditions continue to attempt summits of Kanchenjunga's multiple peaks, with notable ascents including Jerzy Kukuczka's solo ascent in 1991.",
        image: [jerjy],
    },
    {
        date: '2013',
        content: "A group, including Hungarian climbers Zsolt Erőss and Péter Kiss, reaches the summit but disappears during their descent.",
        image: [hungarian],
    },
    {
        date: '2014',
        content: "Bulgarian climber Boyan Petrov summits without supplemental oxygen. Chhanda Gayen becomes the first Indian woman to summit but tragically dies in an avalanche during her descent.",
        image: [bulgarian],
    },
    {
        date: '2024',
        content:"Nepali climber Nima Rinji Sherpa successfully summited Kanchenjunga at age 18, becoming the youngest person to complete all 14 of the world's highest peaks.",
        image: [ttf],
    }
];