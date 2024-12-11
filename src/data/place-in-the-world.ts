import { StaticImageData } from "next/image";
import  placeintheworld from '../../public/images/place-in-the-world/place_in_the_world.jpg';
import map1 from '../../public/images/place-in-the-world/map1.png';
import map2 from '../../public/images/place-in-the-world/map2.png';

interface placeInTheWorldData {
    heading?:string;
    content: string; 
    image: StaticImageData;
    imageDescription?: string;           
}

export const placeInTheWorldData = [
    {
        heading: `place in the world`,
        content:`Mount Kanchenjunga is a prominent feature of the eastern Himalayas and the third-highest peak in the 
        world at 8,586 meters. Spanning the border between Sikkim in India and Eastern Nepal, this majestic peak has 
        a rich history and significant ecological importance, making it a vital part of both countries' natural heritage. 
        The name "Kanchenjunga" is derived from the Tibetan words ‘Kang-Chhen-Dzo-Nga,’ meaning “The Five Treasures of 
        Snow,” which represents gold, silver, grain, gems, and sacred religious texts.
        <br/><br/>
        Historically, Kanchenjunga was considered the highest mountain in the world until the mid-19th century when measurements
        confirmed that Mount Everest surpassed it. The mountain contains five distinct summits—Main, Central, West, South, and
        Kangbachen—each rising above 8,000 meters. The center, primary, and south peaks are situated in Taplejung, Nepal, while
        the north peak is found in Sikkim.`,
        image:placeintheworld,
        imageDescription: `Map of Sikkim showing Kangchenjunga, Garwood lantern slide, 1899   (*NHR). n.b. spelling on map: Kanchinjinca and Sikhim`,
    },
    {
        content:`The Kanchenjunga Conservation Area (KCA) contains many ecosystems, ranging from subtropical forests to glacial
         wilderness. It is of utmost importance regarding biodiversity and habitat for many endangered species, such as the snow 
         leopard and the red panda. The KCA is a collaborative project with organizations like WWF, which has been instrumental
          in the conservation process aimed at preserving this unique environment. It plays a critical role in biodiversity and 
          serves as a habitat for many endangered species, including the snow leopard and the red panda. The KCA has been a 
          collaborative project with organizations like WWF, which has been instrumental in the conservation efforts aimed at
         preserving this unique environment.`,
         image:map2,    
    },
    {
        content:`Essentially, Mount Kanchenjunga represents not only a geographical wonder but also an integral part of Nepal 
        and India's cultural and ecological expression. Its historical importance, climbing conditions, and current conservation 
        processes make it a focal point of attention for adventurers and environmentalists alike This connection to exploration 
        is highlighted by Aleister Crowley, who led an early expedition to Kanchenjunga in 1905 and became an emblem of adventure.
         Crowley's fascination with the mystical and the unknown later led to his inclusion on the iconic Sgt. Pepper's Lonely Hearts
        Club Band album cover, where he appears among other cultural figures representing the spirit of exploration and challenge.`,
        image:map1,       
    },
  
] 