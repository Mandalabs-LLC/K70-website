import placeinworld from '../../public/images/placeinworld.jpg';
import people from '../../public/images/people.jpg';
import climbinghistory from '../../public/images/climbinghistory.jpg';
import future from '../../public/images/future.png';
import k70events from '../../public/images/k70events.png';
import partners from '../../public/images/partners.jpg';
import gallery from '../../public/images/gallery.png';
import nature from '../../public/images/nature.jpeg';
import { StaticImageData } from 'next/image';

interface GridItem {
    event: string;
    link: string;
    photo: StaticImageData;
}

export const gridData: GridItem[] = [
    {
        event: "place in the world",
        link: "#",
        photo: placeinworld
    },
    {
        event: "people",
        link: "#",
        photo: people
    },
    {
        event: "nature",
        link: "#",
        photo: nature
    },
    {
        event: "climbing history",
        link: "#",
        photo: climbinghistory
    },
    {
        event: "future",
        link: "#",
        photo: future
    },
    {
        event: "k70 events",
        link: "#",
        photo: k70events
    },
    {
        event: "partners",
        link: "#",
        photo: partners
    },
    {
        event: "gallery",
        link: "#",
        photo: gallery
    },
];