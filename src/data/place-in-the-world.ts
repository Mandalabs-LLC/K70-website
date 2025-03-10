import { StaticImageData } from "next/image";
import  placeintheworld from '../../public/images/place-in-the-world/place_in_the_world.jpg';
interface placeInTheWorldData {
    heading?:string;
    content: string; 
    image: StaticImageData;
    imageDescription?: string;    
    video?: string;       
}

export const placeInTheWorldData = [
    {
        heading: `place in the world`,
        content:`At 8,586 meters, Mount Kangchenjunga is a prominent feature of the Eastern Himalaya and the third-highest peak in the world. Spanning the border between Sikkim in India and Eastern Nepal, this majestic peak has a rich history and significant ecological importance, making it a vital part of both countries' natural heritage. The name "Kangchenjunga" is derived from the Tibetan words ‘Kang-Chhen-Dzo-Nga,’ meaning “The Five Treasures of Snow,” which represents gold, silver, grain, gems, and sacred scriptures.
        <br/><br/>
       Historically, Kangchenjunga was considered the highest mountain in the world until the mid-19th century when measurements confirmed that Mount Everest surpassed it. The mountain contains five distinct summits, each rising above 8,000 meters —Main, Central, West (Yalung Kang), South, and Kangbachen. The Yalung Kang and Kangbachen summits are situated in Nepal, while the main, central, and south summits lie on the Nepal-India international boundary.`,
        image:placeintheworld,
        customHeight: 400,
        imageDescription: `Map of Sikkim showing Kangchenjunga, Garwood lantern slide, 1899   (*NHR). n.b. spelling on map: Kanchinjinca and Sikhim`,
        video:"/video/Place_in_the_World_Video.mp4"
    },
  
] 