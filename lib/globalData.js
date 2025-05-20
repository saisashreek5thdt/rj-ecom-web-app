import { GiWool } from "react-icons/gi";
import { ImScissors } from "react-icons/im";
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";
export const globalData = [
    {
        id:1,
        icon:<ImScissors className="w-10 h-10"/>,
        title:"Custom Made Tailoring",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus, maiores neque velit quisquam repellendus sit vitae, deserunt illum quam magnam consequatur officia minima. Molestias.",
        image: "/custom.jpg",
    },
    {
        id:2,
        icon:<GiWool className="w-10 h-10"/>,
        title:"Luxurious Fabrics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus, maiores neque velit quisquam repellendus sit vitae, deserunt illum quam magnam consequatur officia minima. Molestias.",
        image: "/fabrics.jpg",
    },
    {
        id:3,
        icon:<GiSewingMachine className="w-10 h-10"/>,
        title:"Hand Embroidery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus, maiores neque velit quisquam repellendus sit vitae, deserunt illum quam magnam consequatur officia minima. Molestias.",
        image: "./handem.jpg",
    },
    {
        id:4,
        icon:<GiSewingNeedle className="w-10 h-10"/>,
        title:"Prefect Fittings and Designs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus, maiores neque velit quisquam repellendus sit vitae, deserunt illum quam magnam consequatur officia minima. Molestias.",
        image: "./fitting.jpg",
    }
];
