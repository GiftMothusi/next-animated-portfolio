import { google, fivver, nsg, sabc } from "../../public";
import { animation1, animation2, animation3 } from "../../public/animations";
import { flyer1, flyer2, flyer3 } from "../../public/flyers";
import {
  illustration1,
  illustration2,
  illustration3,
} from "../../public/illustrations";
import { logo1, logo2, logo3 } from "../../public/logos";

import {
  illustrator,
  photoshop,
  aftereffects,
  indesign,
  premierepro,
  premiererush,
  lightroom,
  stock,
} from "../../public/mytools";
import { photo1, photo2, photo3 } from "../../public/photography";
import { poster1, poster2, poster3 } from "../../public/posters";

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Google",
    icon: google,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Aliquam erat leo, feugiat vitae nunc sit amet, vestibulum elementum massa. Nulla faucibus neque sed arcu scelerisque, lacinia volutpat mauris posuere",
      "Nunc vulputate tempor bibendum. Cras ac elit luctus, mollis urna eget, iaculis odio",
      "Nam eget consequat quam",
      "Fusce hendrerit turpis in sem rutrum, sed aliquam neque ornare. Maecenas venenatis tincidunt urna a venenatis.",
    ],
  },
  {
    title: "Junior Graphic Designer",
    company_name: "SABC",
    icon: sabc,
    iconBg: "#E6DEDD",
    date: "2023-2024",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Aliquam erat leo, feugiat vitae nunc sit amet, vestibulum elementum massa. Nulla faucibus neque sed arcu scelerisque, lacinia volutpat mauris posuere",
      "Nunc vulputate tempor bibendum. Cras ac elit luctus, mollis urna eget, iaculis odio",
      "Nam eget consequat quam",
      "Fusce hendrerit turpis in sem rutrum, sed aliquam neque ornare. Maecenas venenatis tincidunt urna a venenatis.",
    ],
  },
  {
    title: "Graphic Designer Intern",
    company_name: "National School of Government",
    icon: nsg,
    iconBg: "#383E56",
    date: "2022- 2023",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Aliquam erat leo, feugiat vitae nunc sit amet, vestibulum elementum massa. Nulla faucibus neque sed arcu scelerisque, lacinia volutpat mauris posuere",
      "Nunc vulputate tempor bibendum. Cras ac elit luctus, mollis urna eget, iaculis odio",
      "Nam eget consequat quam",
      "Fusce hendrerit turpis in sem rutrum, sed aliquam neque ornare. Maecenas venenatis tincidunt urna a venenatis.",
    ],
  },
  {
    title: "Freelance Graphic Designer",
    company_name: "Fivver",
    icon: fivver,
    iconBg: "#E6DEDD",
    date: "2020- 2022",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Aliquam erat leo, feugiat vitae nunc sit amet, vestibulum elementum massa. Nulla faucibus neque sed arcu scelerisque, lacinia volutpat mauris posuere",
      "Nunc vulputate tempor bibendum. Cras ac elit luctus, mollis urna eget, iaculis odio",
      "Nam eget consequat quam",
      "Fusce hendrerit turpis in sem rutrum, sed aliquam neque ornare. Maecenas venenatis tincidunt urna a venenatis.",
    ],
  },
];

const tools = [
  { name: "Adobe Illustrator", icon: illustrator },
  { name: "Adobe Photoshop", icon: photoshop },
  { name: "Adobe Lightroom", icon: lightroom },
  { name: "Adobe InDesign", icon: indesign },
  { name: "Adobe AfterEffects", icon: aftereffects },
  { name: "Adobe PremierRush", icon: premiererush },
  { name: "Adobe PremierPro", icon: premierepro },
  { name: "Adobe Stock", icon: stock },
];

const portfolioCard = [
  {
    id: 1,
    title: "Illustrations",
    images: [illustration1, illustration2, illustration3],
  },
  {
    id: 2,
    title: "Photography",
    images: [photo1, photo2, photo3],
  },
  {
    id: 3,
    title: "Posters",
    images: [poster1, poster2, poster3],
  },
  {
    id: 4,
    title: "Flyers",
    images: [flyer1, flyer2, flyer3],
  },
  {
    id: 5,
    title: "Logos",
    images: [logo1, logo2, logo3],
  },
  {
    id: 6,
    title: "Animations",
    images: [animation1, animation2, animation3],
  },
];

export { experiences, tools, portfolioCard };
