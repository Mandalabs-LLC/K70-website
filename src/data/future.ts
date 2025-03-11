import { StaticImageData } from "next/image";
import future from '../../public/images/future/future.jpg';
import piller1 from '../../public/images/future/piller1.jpg';
import piller2 from '../../public/images/future/piller2.jpg';
import piller3 from '../../public/images/future/piller3.jpg';
import piller4 from '../../public/images/future/piller4.jpg';
import piller5 from '../../public/images/future/piller5.jpg';

interface futureData {
    content: string;
    image: StaticImageData;
    heading?: string;
    video?: string;
}

export const futureData = [
    {
        heading: 'future',
        content: ` <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> 
        Kangchenjunga Conservation Area Management Council (KCAMC)</a> was formed in 2003 under the provision of 
        Conservation Area Management Regulation 2001 (Government Management) with the goal of mobilizing local communities
        to serve as the active managers of the KCA. <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> KCAMC</a>
        and its affiliated bodies are working in conservation and sustainable
        development activities in line with directives of Government of Nepal, Department of National Park and Wildlife Conservation.
        <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> https://kanchenjunga.org/ </a>`,
        image: future,
        video: '/video/future_video.mp4'
    },
]

interface futureSecondSectionImagesData {
    image: StaticImageData;
    title: string;
    content: string;

}

export const futureSecondSectionImages: futureSecondSectionImagesData[] = [
    {
        image: piller1,
        title: "Pillar I: Environment and Conservation",
        content: `This pillar of the Samriddha Kangchenjunga Programme focuses on safeguarding the rich ecological heritage and biodiversity
        of the Kangchenjunga region. This pillar ensures that the Kangchenjunga region's unique biodiversity is preserved for future 
        generations while fostering a sustainable balance between ecological and human needs. It focuses on conserving Kangchenjunga’s
        unique ecosystems through research, species protection, and education. Key actions include supporting  <a href="https://unesco.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> 
        UNESCO</a> Biosphere Reserve
        status, conserving Red Pandas and Blue Sheep, and raising environmental awareness in schools. The program promotes biodiversity
        while creating sustainable livelihoods for local communities.`
    },
    {
        image: piller2,
        title: "Pillar II: Sustainable Tourism Infrastructure",
        content: `This pillar focuses on improving essential infrastructure to support eco-tourism while preserving the environment. Key 
        initiatives include the development of the park with the tourist information and permit center, establishing porter capacity 
        building and welfare center, clean drinking water systems in the community villages and high mountain camps, sanitation 
        facilities, renewable energy projects, trail development and maintenance, and a waste management system to enhance visitor
        experience and community well-being. Also, the introduction of Building Codes (bylaws) in the region to protect the local
        architecture and culture and the support of telecom and internet service providers to expand their network coverage.`
    },
    {
        image: piller3,
        title: "Pillar III: Community Human Capital & Economic Development",
        content: `This aims to empower local communities by enhancing skills, creating employment opportunities, and supporting
        small businesses. It includes capacity building of lodges/hotels/tea houses, porter training and certification program, vocational
        education to produce skilled manpower, capacity building for conservation and tourism stakeholders, and management planning for 
        sustainable development. It will also provide technical support to KCAMC to develop a management plan that serves as a master plan
        for the development of KCA.`
    },
    {
        image: piller4,
        title: "Pillar IV: Smart Technologies",
        content: `Integrates modern technology to improve conservation efforts, visitor experiences, and connectivity. Activities 
        include upgrading websites and management systems, expanding mobile and internet networks, and using tech tools 
        for effective monitoring and management.`
    },
    {
        image: piller5,
        title: "Pillar V: Destination Marketing",
        content: `Seeks to promote Kangchenjunga as a leading eco-tourism destination through strategic marketing efforts. This
        includes organizing events, producing high-quality content, enhancing digital platforms, and revising policies for sustainable tourism revenue.`
    },

]