import placeinworld from '../../public/images/placeinworld.jpg';
import people from '../../public/images/people.jpg';
import climbinghistory from '../../public/images/climbinghistory.jpg';
import future from '../../public/images/future.jpg';
import k70events from '../../public/images/K70events.jpg';
import partners from '../../public/images/partners.jpg';
import gallery from '../../public/images/gallery.jpg';
import nature from '../../public/images/nature.jpg';
import { StaticImageData } from 'next/image';

interface GridItem {
    event: string;
    link: string;
    photo: StaticImageData
}

export const gridData: GridItem[] = [
    {
        event: "place in the world",
        link: "/details/place-in-the-world",
        photo: placeinworld
    },
    {
        event: "people",
        link: "/details/people",
        photo: people
    },
    {
        event: "nature",
        link: "/details/nature",
        photo: nature
    },
    {
        event: "climbing history",
        link: "/details/climbing-history",
        photo: climbinghistory
    },
    {
        event: "future",
        link: "/details/future",
        photo: future
    },
    {
        event: "k70 events",
        link: "/details/k70-events",
        photo: k70events
    },
    {
        event: "partners",
        link: "/details/partners",
        photo: partners
    },
    {
        event: "gallery",
        link: "/details/gallery",
        photo: gallery
    },
];