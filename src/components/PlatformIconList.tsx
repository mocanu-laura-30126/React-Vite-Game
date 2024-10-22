import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { px } from "framer-motion";
interface Props {
  platforms: Platform[];
}
//[key:string] de mai jos este un index signature
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name:PlayStation
    //slug:playstation lower case
    pc: FaWindows,
    playstation: FaPlaystation,
    xbos: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
