import { StaticImageData } from "next/image";
import k70event from '../../public/images/k70events.png'; 
import people from '../../public/images/people.jpg'; 
import people2 from '../../public/images/people2.jpg'; 

interface peopleData {
    heading?:string;
    content: string;
    image: StaticImageData;
    imageDescription?: string;    
}

export const peopleData = [
    {
        heading: "people",
        content:`In Nepal's Koshi Province, the surroundings of Kanchenjunga are home to a rich cultural heritage. To the 
        locals, Kanchenjunga commands great respect, hence being represented through festivities and religious expressions. This
         aspect of culture further identifies Kanchenjunga as something much more than a natural feature but part of the people's 
         heritage and spirituality. The region has long been shrouded in myth and legend, captivating climbers since the early 
         20th century, and being revered in folklore.
        <br/><br/>
        The Kanchenjunga region represents a range of ethnic groups but comprises mainly of the Sherpa, Rai, and Limbu communities. Each
         group contributes unique traditions and ways of life that reflect their deep connection to the mountainous landscape. All 
         communities have influences from the Tibetan culture due to their proximity. Local tradition refers to a hidden valley 
         behind Beyul Demoshong, considered a land of immortality, which adds spiritual significance to Kanchenjunga for these 
         communities.`,
        image: people,
    },
    {
        content:`The Sherpa community is renowned for its exceptional mountaineering skills and deep spiritual connection to the
         Himalayas. With a rich heritage that emphasizes hospitality and resilience, Sherpas frequently serve as guides for trekkers 
         and climbers, showcasing their profound knowledge of the region’s terrain and weather patterns. Their cultural practices 
         are closely tied to Buddhism, which influences their festivals, rituals, and the construction of prayer flags and stupas
        throughout the landscape.
        <br/><br/>
        The Rai community, known for its vibrant culture and linguistic diversity, plays a significant role in the region's social 
        fabric. With various sub-groups, each with its own dialect and customs, the Rai people celebrate their heritage through 
        lively festivals and elaborate rituals that emphasize agricultural prosperity and communal harmony. The Rai are also known
         for their rich oral traditions, which preserve their history and beliefs, showcasing the importance of storytelling in their
          culture.`,
         image:people2,
         imageDescription: `Tashi Sherpa, a sherpa on the Kangchenjunga Expedition, 1955`,
    },
    {
        content:` The Limbu community, one of Nepal's Indigenous groups, follows Kirat traditions and honors their oral scripture, Mundhum,
         which guides their customs and rituals. Limbu culture is rich in music and dance; traditional performances accompany agricultural 
         activities and social gatherings.
        <br/><br/>
        These communities celebrate vibrant festivals that honor agricultural cycles, often accompanied by music and dance, emphasizing 
        communal living and strong family ties.`,
        image:k70event,       
    },
  
] 