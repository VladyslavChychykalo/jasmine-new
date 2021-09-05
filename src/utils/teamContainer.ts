import { v4 as uuidv4 } from "uuid";

import NatashaNailsPhoto from "../assets/images/gallery/team1.png";
import SergeyMassagePhoto from "../assets/images/gallery/team2.png";
import MarinaNailsPhoto from "../assets/images/gallery/team3.png";
import AlenaNailsPhoto from "../assets/images/gallery/team4.png";
import MashaHairPhoto from "../assets/images/gallery/team5.png";
import NatashaCosmetologyPhoto from "../assets/images/gallery/team6.png";
import RitaHairPhoto from "../assets/images/gallery/team7.png";
import KatyaHairPhoto from "../assets/images/gallery/team8.png";
import OlyaHairPhoto from "../assets/images/gallery/team9.png";

const teamContainer = [
  {
    id: uuidv4(),
    selectName: "Парикмахеры",
    team: [
      { id: uuidv4(), src: RitaHairPhoto, experience: 5 },
      { id: uuidv4(), src: KatyaHairPhoto, experience: 4 },
      { id: uuidv4(), src: OlyaHairPhoto, experience: 12 },
      { id: uuidv4(), src: MashaHairPhoto, experience: 9 },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Ногтевой сервис",
    team: [
      { id: uuidv4(), src: AlenaNailsPhoto },
      { id: uuidv4(), src: NatashaNailsPhoto },
      { id: uuidv4(), src: MarinaNailsPhoto },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Массажисты",
    team: [{ id: uuidv4(), src: SergeyMassagePhoto }],
  },
  {
    id: uuidv4(),
    selectName: "Косметология",
    team: [{ id: uuidv4(), src: NatashaCosmetologyPhoto }],
  },
];

export default teamContainer;
