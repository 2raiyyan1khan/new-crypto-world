import { BiBitcoin, BiHome, BiNews } from "react-icons/bi";

const CURRENCIES = "/currencies"
const NEWS = "/news"

export const routes = [
  {
    name: "Home",
    to: "/",
    icon: BiHome
  },
  {
    name: "Currencies",
    to: CURRENCIES,
    icon: BiBitcoin
  },
  {
    name: "News",
    to: NEWS,
    icon: BiNews
  },
];
