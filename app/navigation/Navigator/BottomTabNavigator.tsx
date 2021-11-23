/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Image} from "react-native";
import { SvgXml } from "react-native-svg";

import { Colors, Font } from "style";

import MovieNavigator from "./BottomTab/MovieNavigator";
import SeriesNavigator from "./BottomTab/SeriesNavigator";
import BookNavigator from "./BottomTab/BookNavigator";
import ProfileNavigator from "./BottomTab/ProfileNavigator";


const BottomTab = createBottomTabNavigator();

const MovieOptions = {
  tabBarLabel: "Movie",
  tabBarIcon: ({ focused}) => <SvgXml xml={focused?
    (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="32.75" width="32" height="2" rx="1" fill="url(#paint0_linear_72:3369)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9231 36.5829C51.6667 36.5829 53.3821 34.8044 53.3821 32.2869L53.3821 28.9702L58.5572 33.2069C59.3783 33.8814 60.625 33.2965 60.625 32.2254V23.545C60.625 22.4751 59.3783 21.8877 58.5572 22.5635L53.3821 26.8001L53.3821 23.4954C53.3821 20.9791 51.6667 19.188 48.9231 19.188H41.0839C38.329 19.188 36.625 20.9791 36.625 23.4954V32.2869C36.625 34.8044 38.329 36.5829 41.0701 36.5829H48.9231Z" fill="url(#paint1_linear_72:3369)"/>
    <defs>
    <linearGradient id="paint0_linear_72:3369" x1="32.75" y1="0.999769" x2="64.7496" y2="0.999769" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_72:3369" x1="36.625" y1="27.8835" x2="60.6247" y2="27.8835" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    </defs>
    </svg>
    
    
  `):
  (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9231 36.5829C51.6667 36.5829 53.3821 34.8044 53.3821 32.2869L53.3821 28.9702L58.5572 33.2069C59.3783 33.8814 60.625 33.2965 60.625 32.2254V23.545C60.625 22.4751 59.3783 21.8877 58.5572 22.5635L53.3821 26.8001L53.3821 23.4954C53.3821 20.9791 51.6667 19.188 48.9231 19.188H41.0839C38.329 19.188 36.625 20.9791 36.625 23.4954V32.2869C36.625 34.8044 38.329 36.5829 41.0701 36.5829H48.9231Z" fill="#67686D"/>
  </svg>
  
  
  
  `)
  }/>,
};

const Seriesptions = {
  tabBarLabel: "Series",
  tabBarIcon: ({ focused}) => <SvgXml xml={focused?
    (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="33.25" width="32" height="2" rx="1" fill="url(#paint0_linear_72:8741)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3434 17.9997C57.3434 17.8229 57.2731 17.6533 57.1481 17.5283C57.0231 17.4032 56.8535 17.333 56.6767 17.333H42.0101C41.8332 17.333 41.6637 17.4032 41.5386 17.5283C41.4136 17.6533 41.3434 17.8229 41.3434 17.9997V18.6663H57.3434V17.9997ZM58.6634 22.6665H39.8367C39.5043 22.6665 39.1855 22.7986 38.9505 23.0336C38.7154 23.2686 38.5834 23.5874 38.5834 23.9198V36.0798C38.5834 36.4122 38.7154 36.731 38.9505 36.9661C39.1855 37.2011 39.5043 37.3332 39.8367 37.3332H58.6634C58.9958 37.3332 59.3146 37.2011 59.5496 36.9661C59.7847 36.731 59.9167 36.4122 59.9167 36.0798V23.9198C59.9167 23.5874 59.7847 23.2686 59.5496 23.0336C59.3146 22.7986 58.9958 22.6665 58.6634 22.6665ZM53.37 30.5532L46.8567 33.4598C46.7553 33.5054 46.6441 33.5249 46.5332 33.5166C46.4223 33.5082 46.3153 33.4722 46.2219 33.4119C46.1284 33.3516 46.0516 33.2689 45.9983 33.1713C45.945 33.0737 45.9169 32.9644 45.9167 32.8532V27.0398C45.9169 26.9286 45.945 26.8193 45.9983 26.7217C46.0516 26.6241 46.1284 26.5414 46.2219 26.4811C46.3153 26.4208 46.4223 26.3848 46.5332 26.3765C46.6441 26.3681 46.7553 26.3876 46.8567 26.4332L53.37 29.3332C53.4883 29.3853 53.5889 29.4708 53.6595 29.5791C53.7301 29.6874 53.7677 29.8139 53.7677 29.9432C53.7677 30.0725 53.7301 30.199 53.6595 30.3073C53.5889 30.4156 53.4883 30.501 53.37 30.5532ZM58.4681 20.195C58.5931 20.32 58.6634 20.4896 58.6634 20.6664V21.3331H39.9967V20.6664C39.9967 20.4896 40.067 20.32 40.192 20.195C40.317 20.07 40.4866 19.9998 40.6634 19.9998H57.9967C58.1735 19.9998 58.3431 20.07 58.4681 20.195Z" fill="url(#paint1_linear_72:8741)"/>
    <defs>
    <linearGradient id="paint0_linear_72:8741" x1="33.25" y1="0.999769" x2="65.2496" y2="0.999769" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_72:8741" x1="38.5834" y1="27.3308" x2="59.9164" y2="27.3308" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    </defs>
    </svg>
    
    
  `):
  (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3434 17.9999C57.3434 17.8231 57.2731 17.6535 57.1481 17.5285C57.0231 17.4035 56.8535 17.3333 56.6767 17.3333H42.0101C41.8332 17.3333 41.6637 17.4035 41.5386 17.5285C41.4136 17.6535 41.3434 17.8231 41.3434 17.9999V18.6666H57.3434V17.9999ZM58.6634 22.6667H39.8367C39.5043 22.6667 39.1855 22.7988 38.9505 23.0338C38.7154 23.2689 38.5834 23.5877 38.5834 23.9201V36.0801C38.5834 36.4125 38.7154 36.7313 38.9505 36.9663C39.1855 37.2014 39.5043 37.3334 39.8367 37.3334H58.6634C58.9958 37.3334 59.3146 37.2014 59.5496 36.9663C59.7847 36.7313 59.9167 36.4125 59.9167 36.0801V23.9201C59.9167 23.5877 59.7847 23.2689 59.5496 23.0338C59.3146 22.7988 58.9958 22.6667 58.6634 22.6667ZM53.37 30.5534L46.8567 33.4601C46.7553 33.5057 46.6441 33.5252 46.5332 33.5168C46.4223 33.5084 46.3153 33.4725 46.2219 33.4122C46.1284 33.3519 46.0516 33.2692 45.9983 33.1716C45.945 33.074 45.9169 32.9646 45.9167 32.8534V27.0401C45.9169 26.9289 45.945 26.8195 45.9983 26.7219C46.0516 26.6243 46.1284 26.5416 46.2219 26.4813C46.3153 26.421 46.4223 26.3851 46.5332 26.3767C46.6441 26.3683 46.7553 26.3878 46.8567 26.4334L53.37 29.3334C53.4883 29.3856 53.5889 29.471 53.6595 29.5793C53.7301 29.6876 53.7677 29.8141 53.7677 29.9434C53.7677 30.0727 53.7301 30.1992 53.6595 30.3075C53.5889 30.4158 53.4883 30.5013 53.37 30.5534ZM58.4681 20.1953C58.5931 20.3203 58.6634 20.4899 58.6634 20.6667V21.3333H39.9967V20.6667C39.9967 20.4899 40.067 20.3203 40.192 20.1953C40.317 20.0702 40.4866 20 40.6634 20H57.9967C58.1735 20 58.3431 20.0702 58.4681 20.1953Z" fill="#67686D"/>
  </svg>
  
  
  `)
  }/>,
};

const BookOptions = {
  tabBarLabel: "Book",
  tabBarIcon: ({ focused}) => <SvgXml xml={focused?
    (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="32.75" width="32" height="2" rx="1" fill="url(#paint0_linear_72:13425)"/>
    <path d="M55.95 19.6002H58.35V38.8002H42.75C40.758 38.8002 39.15 37.1922 39.15 35.2002V20.8002C39.15 18.8082 40.758 17.2002 42.75 17.2002H53.55V34.0002H42.75C42.09 34.0002 41.55 34.5402 41.55 35.2002C41.55 35.8602 42.09 36.4002 42.75 36.4002H55.95V19.6002Z" fill="url(#paint1_linear_72:13425)"/>
    <defs>
    <linearGradient id="paint0_linear_72:13425" x1="32.75" y1="0.999769" x2="64.7496" y2="0.999769" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_72:13425" x1="39.15" y1="27.9977" x2="58.3498" y2="27.9977" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    </defs>
    </svg>
    
  `):
  (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M55.95 19.6H58.35V38.8H42.75C40.758 38.8 39.15 37.192 39.15 35.2V20.8C39.15 18.808 40.758 17.2 42.75 17.2H53.55V34H42.75C42.09 34 41.55 34.54 41.55 35.2C41.55 35.86 42.09 36.4 42.75 36.4H55.95V19.6Z" fill="#67686D"/>
  </svg>
  
  
  `)
  }/>,
};

const ProfileOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused}) => <SvgXml xml={focused?
    (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="33.25" width="32" height="2" rx="1" fill="url(#paint0_linear_2:400)"/>
    <path d="M49.25 18C43.829 18 39.25 22.579 39.25 28C39.25 33.421 43.829 38 49.25 38C54.671 38 59.25 33.421 59.25 28C59.25 22.579 54.671 18 49.25 18ZM49.25 23C50.977 23 52.25 24.272 52.25 26C52.25 27.728 50.977 29 49.25 29C47.524 29 46.25 27.728 46.25 26C46.25 24.272 47.524 23 49.25 23ZM44.144 32.772C45.041 31.452 46.537 30.572 48.25 30.572H50.25C51.964 30.572 53.459 31.452 54.356 32.772C53.078 34.14 51.265 35 49.25 35C47.235 35 45.422 34.14 44.144 32.772Z" fill="url(#paint1_linear_2:400)"/>
    <defs>
    <linearGradient id="paint0_linear_2:400" x1="33.25" y1="0.999769" x2="65.2496" y2="0.999769" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2:400" x1="39.25" y1="27.9977" x2="59.2498" y2="27.9977" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FEAC6D"/>
    <stop offset="1" stop-color="#AE61ED"/>
    </linearGradient>
    </defs>
    </svg>
    
  `):
  (`<svg width="98" height="56" viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M49.25 18C43.829 18 39.25 22.579 39.25 28C39.25 33.421 43.829 38 49.25 38C54.671 38 59.25 33.421 59.25 28C59.25 22.579 54.671 18 49.25 18ZM49.25 23C50.977 23 52.25 24.272 52.25 26C52.25 27.728 50.977 29 49.25 29C47.524 29 46.25 27.728 46.25 26C46.25 24.272 47.524 23 49.25 23ZM44.144 32.772C45.041 31.452 46.537 30.572 48.25 30.572H50.25C51.964 30.572 53.459 31.452 54.356 32.772C53.078 34.14 51.265 35 49.25 35C47.235 35 45.422 34.14 44.144 32.772Z" fill="#67686D"/>
  </svg>
  
  `)
  }/>,
};



const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  
  return (
      <BottomTab.Navigator
      initialRouteName={"MovieNavigator"}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor : "red",
        inactiveTintColor : "blue",
        style: {
          backgroundColor:"#0D0B26",
          borderTopWidth: 0,
          shadowColor:"rgba(200, 206, 220, 0.15)",
          shadowOffset:{width:0, height:-10},
          shadowRadius:50,
          elevation:3,
          padding:0,
          height:56
        },
        showLabel: false,
        iconStyle:{
        },
      }}
      >
        <BottomTab.Screen name="MovieNavigator" options={MovieOptions} component={MovieNavigator} />

        <BottomTab.Screen name="SeriesNavigator" options={Seriesptions} component={SeriesNavigator} />

        <BottomTab.Screen name="BookNavigator" options={BookOptions} component={BookNavigator} />

        <BottomTab.Screen name="ProfileNavigator" options={ProfileOptions} component={ProfileNavigator} />


        
      </BottomTab.Navigator>
    
    
  );
};

export default BottomTabNavigator;
