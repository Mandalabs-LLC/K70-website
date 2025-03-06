import { StaticImageData } from "next/image";
import k70event from '../../public/images/k70events.png'; 
import people from '../../public/images/people.jpg'; 
import people2 from '../../public/images/people2.jpg'; 

interface peopleData {
    heading?:string;
    content: string;
    image: StaticImageData;
    imageDescription?: string;    
    video?:string;
}

export const peopleData = [
    {
        heading: "people",
        content:`The land surrounding Kangchenjunga, in the province of Koshi in Eastern Nepal, is home to a rich cultural heritage. Kangchenjunga commands great respect among the local people and is represented through festivities and religious expression. Kangchenjunga is something much more than a natural feature but part of the people's heritage and spirituality. The region has long been shrouded in myth and legend, captivating climbers since the early 20th century and being revered in folklore.
        <br/><br/>
        The Kangchenjunga region represents a range of ethnic groups but comprises mainly the Sherpa, Rai, and Limbu communities. Each group contributes unique traditions and ways of life that reflect their deep connection to the mountainous landscape.  All the communities are influenced by Tibetan culture because of their close proximity to Tibet, and local tradition has it that there is a hidden valley behind Beyul Demoshong, considered a land of immortality.`,
        image: people,
        customHeight: 300,
        video: "/video/people.mp4"
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
        customHeight: 400    
    },
  
] 