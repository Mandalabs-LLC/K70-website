import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

interface socialMediaIcons {
    icon: React.ElementType;
    href:string;
}

export const socialMediaIcons: socialMediaIcons[] = [
    {
      icon:CiFacebook,
      href: "#"
    },
    {
      icon:CiInstagram,
      href: "#"
    },
    {
      icon:CiYoutube,
      href: "#"
    },
  ];