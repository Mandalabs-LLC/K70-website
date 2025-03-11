import { StaticImageData } from "next/image";
import people1 from '../../public/images/people/people1.jpg'

interface peopleData {
    heading?: string;
    content: string;
    image: StaticImageData;
    imageDescription?: string;
    video?: string;
}

export const peopleData = [
    {
        heading: "people",
        content: `The land surrounding Kangchenjunga, in the province of Koshi in Eastern Nepal, is home to a rich cultural heritage. Kangchenjunga 
        commands great respect among the local people and is represented through festivities and religious expression. Kangchenjunga 
        is something much more than a natural feature but part of the people's heritage and spirituality. The region has long been shrouded in myth
         and legend, captivating climbers since the early 20th century and being revered in folklore.
        <br/><br/>
        The Kangchenjunga region represents a range of ethnic groups but comprises mainly the Sherpa, Rai, and Limbu communities. Each group contributes
        unique traditions and ways of life that reflect their deep connection to the mountainous landscape.  All the communities are influenced by Tibetan
        culture because of their close proximity to Tibet, and local tradition has it that there is a hidden valley behind Beyul Demoshong, considered
        a land of immortality.`,
        image: people1,
        video: "/video/people.mp4"
    },
] 