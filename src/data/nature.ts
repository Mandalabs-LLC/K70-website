import { StaticImageData } from "next/image";
import nature from '../../public/images/nature/nature.png';
import nature1 from '../../public/images/nature/nature_1.jpg';
import nature2 from '../../public/images/nature/nature_2.jpg';
import nature3 from '../../public/images/nature/nature_3.jpeg';

interface natureData {
    content: string;
    image: StaticImageData;
    heading?: string;
}

export const natureData = [
    {
        heading: 'nature',
        content: `The Kanchenjunga Conservation Area (KCA) in eastern Nepal is a diverse region with breathtaking landscapes and a rich biodiversity. This protected area, which encompasses 2,035 square kilometres,  features widely varied altitudes and climatic conditions, creating a multitude of habitats that support an impressive array of flora and fauna.
        <br/><br/>
        The Kanchenjunga Conservation Area is famous for its magnificent blooming rhododendron (Nepali: gurans) forests in the spring, for the reclusive red panda (habre) that lives in its hemlock-bamboo (thingre salla, malingo) forests, and for the snow leopard (hiun chituwa) that hunts on its snow-covered slopes. It is one of the last places in the Himalayas where there is still ancient temperate and subalpine forests, with no access by road and relatively undisturbed. The tremendous variety of climate conditions, altitudes, and habitats, combined with low population and development pressures in some of the upper valleys, make the KCA an important biodiversity treasure. Many species that the World Conservation Union has identified as critically endangered, endangered, vulnerable, or near threatened worldwide find refuge in the KCA. Numerous species on Nepal’s national list of endangered and threatened species also persist in the KCA.`,
        image: nature3,
    },
    {
        content: `The fauna of the KCA is equally diverse and includes several iconic species that inhabit its varied ecosystems. Notable mammals such as the snow leopard, red panda, Himalayan black bear, blue sheep, and wild dog roam these mountains, each adapted to specific habitats based on altitude and vegetation type. The presence of these species is indicative of a healthy ecosystem; for instance, snow leopards serve as apex predators that help maintain prey populations. The region also has a rich avian population, with a tremendous variety of bird species thriving in its diverse habitats.
 <br/><br/>
However, the KCA faces significant challenges due to climate change and human activities. Rapid infrastructure development and increased tourism exert pressure on these delicate ecosystems. Climate change has led to glacial retreat and altered weather patterns that threaten flora and fauna. The ongoing environmental changes necessitate careful management strategies to preserve this unique biodiversity.
 <br/><br/>
However, the KCA faces significant challenges due to climate change and human activities. Rapid infrastructure development and increased tourism exert pressure on these delicate ecosystems. Climate change has led to glacial retreat and altered weather patterns that threaten flora and fauna. The ongoing environmental changes necessitate careful management strategies to preserve this unique biodiversity.
       `,
        image: nature1,
    },
    {
        content: `The primary threat to most of the rare species is the loss of the habitats they need to survive. Habitat loss in the KCA results from deforestation, expansion of agriculture, and the development of human infrastructure, including poorly planned roads. Of immediate concern is also the overharvesting of medicinal plants, poaching, illegal trading in wildlife and plants, and conflicts between humans and wildlife. The additional stress of climate change increases the importance of protecting the biodiverse ecosystems of the KCA for the future.`,
        image: nature,
    },

    {
        content: `Kanchenjunga Conservation Area’s varied flora and fauna play crucial roles in maintaining ecological integrity while also supporting local cultures and economies. It is one of the last places on earth where nature still thrives in tandem with seasonal grazing and ecotourism.  Inevitably, as development pressures increase, the challenge of protecting this special landscape will pose ever more difficult choices.  As such, it is of critical importance that sustainable practices and undisturbed habitats for rare species of flora and fauna in this high-altitude corner of Nepal are preserved for future generations.`,
        image: nature2,
    },

] 