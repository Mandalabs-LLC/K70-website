import { StaticImageData } from "next/image";
import  placeintheworld from '../../public/images/place-in-the-world/place_in_the_world.jpg';
import map1 from '../../public/images/place-in-the-world/map1.png';
import map2 from '../../public/images/place-in-the-world/map2.png';

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
    // {
    //     content:`The Kanchenjunga Conservation Area (KCA) contains many ecosystems, ranging from subtropical forests to glacial
    //      wilderness. It is of utmost importance regarding biodiversity and habitat for many endangered species, such as the snow 
    //      leopard and the red panda. The KCA is a collaborative project with organizations like WWF, which has been instrumental
    //       in the conservation process aimed at preserving this unique environment. It plays a critical role in biodiversity and 
    //       serves as a habitat for many endangered species, including the snow leopard and the red panda. The KCA has been a 
    //       collaborative project with organizations like WWF, which has been instrumental in the conservation efforts aimed at
    //      preserving this unique environment.`,
    //      customHeight: 100,
    //      image:map2,    
    // },
    // {
    //     content:`Essentially, Mount Kanchenjunga represents not only a geographical wonder but also an integral part of Nepal 
    //     and India's cultural and ecological expression. Its historical importance, climbing conditions, and current conservation 
    //     processes make it a focal point of attention for adventurers and environmentalists alike This connection to exploration 
    //     is highlighted by Aleister Crowley, who led an early expedition to Kanchenjunga in 1905 and became an emblem of adventure.
    //      Crowley's fascination with the mystical and the unknown later led to his inclusion on the iconic Sgt. Pepper's Lonely Hearts
    //     Club Band album cover, where he appears among other cultural figures representing the spirit of exploration and challenge.`,
    //     image:map1,  
    //     customHeight: 400,     
    // },
  
] 