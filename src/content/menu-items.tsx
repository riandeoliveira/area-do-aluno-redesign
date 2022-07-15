import type { IMenuItem } from "interfaces";
import { BiCalendar, BiDollarCircle } from "react-icons/bi";
import { BsCheck2Circle, BsHeadset } from "react-icons/bs";
import {
  FaBook,
  FaGraduationCap,
  FaRegAddressCard,
  FaUserCircle,
} from "react-icons/fa";

const menuItems: IMenuItem[] = [
  {
    title: "Minha Conta",
    icon: <FaUserCircle size={24} />,
    path: "/minha-conta",
  },
  {
    title: "Meus Cursos",
    icon: <FaBook size={24} />,
    path: "/meus-cursos",
  },
  {
    title: "Vida Acadêmica",
    icon: <FaGraduationCap size={24} />,
    path: "/vida-academica",
  },
  {
    title: "Financeiro",
    icon: <BiDollarCircle size={24} />,
    path: "/financeiro",
  },
  {
    title: "CAA Online",
    icon: <BsHeadset size={24} />,
    path: "/caa-online",
  },
  {
    title: "Rematrícula",
    icon: <FaRegAddressCard size={24} />,
    path: "/rematricula",
  },
  {
    title: "Atividades Complementares",
    icon: <BsCheck2Circle size={24} />,
    path: "/atividades-complementares",
  },
  {
    title: "Agendamento CAA",
    icon: <BiCalendar size={24} />,
    path: "/agendamento-caa",
  },
];

export default menuItems;
