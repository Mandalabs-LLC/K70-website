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
        content:`In Nepal's Koshi Province, the land surrounding Kanchenjunga is home to a rich cultural heritage. Kanchenjunga commands great respect among the local people and is represented through festivities and religious expression. This aspect of culture further identifies Kanchenjunga as something much more than a natural feature but part of the people's heritage and spirituality. The region has long been shrouded in myth and legend, captivating climbers since the early 20th century and being revered in folklore.
        <br/><br/>
       The Kanchenjunga region represents a range of ethnic groups but comprises mainly the Sherpa, Rai, and Limbu communities. Each group contributes unique traditions and ways of life that reflect their deep connection to the mountainous landscape.  All the communities are influenced by Tibetan culture because of their close proximity to Tibet, and local tradition has it that there is a hidden valley behind Beyul Demoshong, considered a land of immortality.`,
        image: people,
        customHeight: 500
    },
    {
        content:`The Limbu community, one of Nepal's indigenous groups, follows Kirat traditions and honours its oral scripture, Mundhum, which guides its customs and rituals.  These communities celebrate vibrant festivals throughout the agricultural cycles, often accompanied by music and dance and emphasising communal living and strong family ties. The Limbu community are the historic residents of these valleys and still live in the lower elevation villages of the KCA. Limbu make annual pilgrimages to Jannu, Oktang, and other sacred sites in KCA.
         <br/><br/>
        The second main ethnic group are the Tibetans and Sherpas who have settled in the higher valleys, mostly in the last hundred years. The Sherpa community is renowned for its exceptional mountaineering skills and deep spiritual connection to the Himalayas. With a rich heritage that emphasises hospitality and resilience, Sherpas frequently serve as guides for trekkers and climbers, showcasing their profound knowledge of the region’s terrain and weather patterns. Their cultural practices are closely tied to Buddhism, which influences their festivals, rituals, and the construction of stupas, and prayer flags, throughout the landscape.`,
         image:people2,
         imageDescription: `Tashi Sherpa, a sherpa on the Kangchenjunga Expedition, 1955`,
    },
    {
        content:`The Rai community, known for its vibrant culture and linguistic diversity, plays a significant role in the region's social fabric. With various sub-groups, each with its own dialect and customs, the Rai people celebrate their heritage through lively festivals and elaborate rituals that emphasise agricultural prosperity and communal harmony. The Rai are also known for their rich oral traditions, showcasing the importance of storytelling in their culture and honouring their history and beliefs.`,
        image:k70event,   
        customHeight: 400    
    },
  
] 