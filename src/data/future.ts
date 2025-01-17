import { StaticImageData } from "next/image";
import future from '../../public/images/future/future.png';
import intersect from '../../public/images/future/Intersect.svg';
import intersect1 from '../../public/images/future/Intersect-1.svg';
import intersect2 from '../../public/images/future/Intersect-2.svg';
import intersect3 from '../../public/images/future/Intersect-3.svg';
import intersect4 from '../../public/images/future/Intersect-4.svg';
import logo from '../../public/images/future/KCAMC logo.svg';

interface futureData {
    content: string;
    image: StaticImageData;
    heading?: string;
    logo: StaticImageData;
}

export const futureData = [
    {
        heading: 'future',
        content: `Kanchenjunga Conservation Area Management Council (KCAMC) was formed in 2003 under the provision of Conservation Area Management Regulation 2001 (Government Management) with the goal of mobilizing local communities to serve as the active managers of the KCA. KCAMC and its affiliated bodies are working in conservation and sustainable development activities in line with directives of the Government of Nepal, Department of National Park and Wildlife Conservation.
         <a href="https://kanchenjunga.org/" style="color:#2B76A3; text-decoration: underline;" target="_blank"> https://kanchenjunga.org/ </a>`,
        image: future,
        logo: logo
        
    },
]

interface futureSecondSectionImagesData {
    image: StaticImageData;
    title: string;
    content: string;

}

export const futureSecondSectionImages: futureSecondSectionImagesData[] = [
    {
        image: intersect,
        title: "Pillar 1:Environment and Bio-Diversity",
        content: `This pillar of the Samriddha Kanchenjunga Programme focuses on safeguarding the rich ecological heritage and biodiversity of the Kanchenjunga region. This pillar ensures that the Kanchenjunga region's unique biodiversity is preserved for future generations while fostering a sustainable balance between ecological and human needs. Focuses on conserving Kanchenjunga’s unique ecosystems through research, species protection, and education. Key actions include supporting UNESCO Biosphere Reserve status, conserving Red Pandas and Blue Sheep, and raising environmental awareness in schools. The program promotes biodiversity while creating sustainable livelihoods for local communities.`
    },
    {
        image: intersect1,
        title: "Pillar II: Sustainable Tourism Infrastructure",
        content: `This pilalr focuses on improving essential infrastructure to support eco-tourism while preserving the environment. Key initiatives include development of Park with the tourist information and permit center,  establishing porter capacity building and welfare center, clean drinking water systems in the community villages and high mountain camps, sanitation facilities, renewable energy projects, trail development and its maintenance, and waste management system to enhance visitor experience and community well-being. Similarly, introduction of Building Codes (bylaws) in the region to protect the local architectures and culture. Supporting telecom and internet service providers to expand their network coverage.`
    },
    {
        image: intersect2,
        title: "Pillar III: Community Human Capital & Economic Development",
        content: `Aims to empower local communities by enhancing skills, creating employment opportunities, and supporting small businesses. This includes capacity building of lodges/hotels/tea houses, porter training and certification program, vocational education to produce skilled manpower, capacity building for conservation and tourism stakeholders, and management planning for sustainable development. Providing technical support to KCAMC to develop a management plan that serves as a master plan for the development of KCA.`
    },
    {
        image: intersect3,
        title: "Pillar IV: Smart Technologies",
        content: `Integrates modern technology to improve conservation efforts, visitor experiences, and connectivity. Activities include upgrading websites and management systems, expanding mobile and internet networks, and using tech tools for effective monitoring and management.`
    },
    {
        image: intersect4,
        title: "Pillar V: Destination Marketing",
        content: `Seeks to promote Kanchenjunga as a leading eco-tourism destination through strategic marketing efforts. This includes organizing events, producing high-quality content, enhancing digital platforms, and revising policies for sustainable tourism revenue.`
    },

]