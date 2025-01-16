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
        content:`Mount Kanchenjunga is a prominent feature of the eastern Himalayas and the third-highest peak in the world at 8,586 meters. Spanning the border between Sikkim in India and Eastern Nepal, this majestic peak has a rich history and significant ecological importance, making it a vital part of both countries' natural heritage. The name "Kanchenjunga" is derived from the Tibetan words ‘Kang-Chhen-Dzo-Nga,’ meaning “The Five Treasures of Snow,” which represents gold, silver, grain, gems, and sacred religious texts.
        <br/><br/>
      
Historically, Kanchenjunga was considered the highest mountain in the world until the mid-19th century when measurements confirmed that Mount Everest surpassed it. The mountain contains five distinct summits—Main, Central, West, South, and Kangbachen—each rising above 8,000 meters. The center, primary, and south peaks are situated in Taplejung, Nepal, while the north peak is found in Sikkim.`,
        image:placeintheworld,
        customHeight: 400,
        imageDescription: `Map of Sikkim showing Kangchenjunga, Garwood lantern slide, 1899   (*NHR). n.b. spelling on map: Kanchinjinca and Sikhim`,
    },
    {
        content:`Essentially, Mount Kanchenjunga represents not only a geographical wonder but also an integral part of Nepal and India's cultural and ecological expression. Its historical importance, climbing conditions, and current conservation processes make it a focal point of attention for adventurers and environmentalists alike.`,
         customHeight: 100,
         image:map2,    
    },
    {
        content:`The Kanchenjunga Conservation Area (KCA) contains many ecosystems, ranging from subtropical forests to glacial wilderness. It is of utmost importance regarding biodiversity and habitat for many endangered species, including snow leopard and red panda. The KCA is a community-managed protected area, with initial support (1998-2006)from Nepal’s Department of National Parks and Wildlife Conservation and the World Wildlife Fund.
        <br/><br/>
        We are focusing on the Nepali side of Kanchenjunga, but of course, one cannot fully appreciate the mountain without considering its entirety.
        `,
        image:map1,  
        customHeight: 400,     
    },
  
] 