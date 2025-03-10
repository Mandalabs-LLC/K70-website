import { StaticImageData } from "next/image";
import redpanda1 from '../../public/images/nature/Nature_redpanda.jpg';
import cactus from '../../public/images/nature/Nature_cactus.jpg';
import flora from '../../public/images/nature/Nature_flora.jpg';
import HimalayanGriffonVulture from '../../public/images/nature/Nature_HimalayanGriffonVulture.jpg';
import HimalayanYew from '../../public/images/nature/Nature_HimalayanYew.webp';
import Mountain from '../../public/images/nature/Nature_Mountain.jpg';
import redpanda2 from '../../public/images/nature/Nature_redpanda.jpeg';
import snowleopard from '../../public/images/nature/Nature_snowleopard.jpg';
import Tragopansatyra from '../../public/images/nature/Nature_Tragopansatyra.jpeg';
import laliguras from '../../public/images/nature/laligurash.webp';

interface natureData {
    content: string;
    image: StaticImageData;
    heading?:string;
    video?:string;
}

export const natureData = [
    {
        heading:'nature',
        content:`The Kangchenjunga Conservation Area (KCA) in eastern Nepal is a diverse region, both in terms of its breathtaking 
        landscapes and rich biodiversity. This protected area, which encompasses 2,035 square kilometers, also features rapid elevation
         changes and varied climatic conditions, creating a multitude of habitats that support an impressive array of flora and fauna.
        <br/><br/>
        The Kangchenjunga Conservation Area is famous for its magnificent blooming rhododendron (Nepali: gurans) forests in the spring, for
        the reclusive red panda (habre) that lives in its hemlock-bamboo (thingre salla, malingo) forests, and for the snow        
        leopard (hiun chituwa) that hunts its icy cliffs. It is also one of the last places in the Himalayas where ancient, 
        roadless, and relatively undisturbed temperate and subalpine forests still exist. The tremendous variety of climate 
        conditions, altitudes, and habitats, combined with low population and development pressures in some of the upper 
        valleys, make the KCA an important biodiversity treasure. Many species that the World Conservation Union has identified
        as critically endangered, endangered, vulnerable, or near threatened worldwide find refuge in the KCA. Numerous species
        on Nepal’s national list of endangered and threatened species also persist in the KCA.`,
        image: redpanda1,
        video: '/video/nature_video.mp4'
    },  
    {
        content:`The fauna of the KCA is equally diverse and includes several iconic species that inhabit its varied ecosystems. Notable mammals such as
        the snow leopard, red panda,  Himalayan black bear, blue sheep, and wild dog roam these mountains, each adapted to specific habitats based on
        altitude and vegetation type. The presence of these species is indicative of a healthy ecosystem; for instance, snow leopards serve as apex 
        predators that help maintain prey populations. The region also has a rich avian population, with a tremendous variety of bird species thriving
        in its diverse habitats.
        <br/><br/>
        However, the KCA faces significant challenges due to climate change and human activities. Rapid infrastructure development and increased tourism 
        exert pressure on these delicate ecosystems. Climate change has led to glacial retreat and altered weather patterns that threaten flora and 
        fauna. The ongoing environmental changes necessitate careful management strategies to preserve this unique biodiversity.`,
         image:Mountain,
    },
  
] 

interface natureDataSecond {
    content: string;
    image:StaticImageData[];
} 

export const natureDataSecond =[
    {
        images:[snowleopard,Tragopansatyra, redpanda2, HimalayanGriffonVulture ],
        content:`The primary threat to most of the rare species is the loss of the habitats they need to survive. Habitat loss in the KCA results from 
        deforestation, expansion of agriculture, and the development of human infrastructure, including poorly planned roads. Of immediate concern is 
        also the overharvesting of medicinal plants, poaching, illegal trading in wildlife and plants, and conflicts between humans and wildlife. The
        additional stress of climate change increases the importance of protecting the biodiverse ecosystems of the KCA for the future.`,
    },
    {
        images:[flora, laliguras, cactus, HimalayanYew],
        content:`Kangchenjunga Conservation Area’s varied flora and fauna play crucial roles in maintaining ecological integrity while also supporting local
        cultures and economies. It is one of the last places on earth where nature still thrives in tandem with seasonal grazing and ecotourism.  Inevitably,
        as development pressures increase, the challenge of protecting this special landscape will pose ever more difficult choices.  As such, it is of critical
        importance that sustainable practices and undisturbed habitats for rare species of flora and fauna in this high-altitude corner of Nepal are preserved
        for future generations.`,
    }
]