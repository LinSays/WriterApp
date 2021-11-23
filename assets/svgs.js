import React from "react";
import {
  G,
  Path,
  Ellipse,
  Circle,
  Svg,
  Defs,
  Stop,
  LinearGradient,
  ClipPath,
  Rect,
} from "react-native-svg";
import GradientPath from "react-native-svg-path-gradient";

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
  SortArrows: (
    <G>
      <Path d="M0 45h90L45 0 0 45z" />
      <Path d="M0 55h90l-45 45L0 55z" />
    </G>
  ),
  Tick: {
    svg: (
      <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z" />
    ),
    viewBox: "0 0 50 50",
  },
  Logo: {
    svg: (
      <Svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.96554 27.6372C8.78326 6.65108 31.3437 -4.87476 52.334 1.98291C73.3657 8.79927 84.8525 31.3552 78.0348 52.3826C71.1757 73.3688 48.6153 84.8533 27.625 78.0369C6.63465 71.1793 -4.85218 48.6233 1.96554 27.6372ZM37.335 69.6507C41.6736 58.9924 48.0781 50.8128 58.0361 45.8142C58.532 45.5663 58.8212 44.9879 58.6146 44.3683C56.6313 37.5932 56.5899 30.6529 57.9122 23.2995C58.0361 22.7212 57.6642 22.1428 57.1271 21.9776L46.8385 18.6313L36.55 15.2851C36.0128 15.1199 35.393 15.3678 35.1451 15.9048C31.8809 22.5972 27.7902 28.2156 22.2121 32.5119C21.7576 32.8424 21.6336 33.4621 21.8815 33.9578C27.0052 43.8312 27.3357 54.2416 24.6086 65.437C24.4847 66.0567 24.8152 66.635 25.3937 66.8416L26.7986 67.296C27.4184 67.5026 28.0795 67.1721 28.2861 66.5524L35.8475 43.2115C36.0541 42.5919 36.7153 42.2614 37.335 42.4679L38.9465 43.005L40.558 43.542C41.1778 43.7486 41.5083 44.4096 41.3017 45.0292L33.7402 68.3701C33.5336 68.9898 33.8642 69.6507 34.484 69.8573L35.8889 70.3117C36.4673 70.5183 37.0871 70.2291 37.335 69.6507ZM62.5399 19.5402L65.2257 16.07C65.5976 15.5743 65.515 14.872 65.0604 14.4589C60.6806 10.5343 55.9701 7.68386 50.9705 6.11404C45.9708 4.46159 40.5166 4.00716 34.6493 4.58552C34.0708 4.62683 33.6163 5.16388 33.6163 5.78355L33.6989 10.1625C33.7402 10.6583 34.0708 11.0714 34.5253 11.2366L47.9128 15.5743L61.259 19.9533C61.7136 20.0772 62.2507 19.9533 62.5399 19.5402ZM39.8971 30.5291C40.8889 30.0333 41.9632 29.992 43.0789 30.3638C44.236 30.7356 45.0624 31.3966 45.5996 32.3468C46.0955 33.2969 46.1781 34.2884 45.8475 35.3625C45.4756 36.4366 44.8145 37.2628 43.8227 37.7585C42.831 38.2543 41.7566 38.3369 40.6409 37.9651C39.4839 37.6346 38.6575 36.9323 38.1616 35.9408C37.6657 34.9494 37.5831 33.8753 37.9137 32.8012C38.2442 31.7684 38.9054 30.9835 39.8971 30.5291Z"
          fill="url(#paint0_linear_2:138)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2:138"
            x1="0"
            y1="39.9928"
            x2="79.999"
            y2="39.9928"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FEAC6D" />
            <Stop offset="1" stopColor="#AE61ED" />
          </LinearGradient>
        </Defs>
      </Svg>
    ),
    viewBox: "0 0 80 80",
  },
  Google: {
    svg: (
      <Svg
        width="100"
        height="96"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
          fill="#FFC107"
        />
        <Path
          d="M3.65295 7.3455L6.93845 9.755C7.82745 7.554 9.98045 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65895 2 5.32795 4.1685 3.65295 7.3455Z"
          fill="#FF3D00"
        />
        <Path
          d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0718 17.5742 13.8038 18.001 12.5 18C9.89903 18 7.69053 16.3415 6.85853 14.027L3.59753 16.5395C5.25253 19.778 8.61353 22 12.5 22Z"
          fill="#4CAF50"
        />
        <Path
          d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
          fill="#1976D2"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Apple: {
    svg: (
      <Svg
        width="100"
        height="96"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clip-path="url(#clip0_2:319)">
          <Path
            d="M7.57847 23.5507C7.10528 23.2359 6.68591 22.8469 6.33647 22.3987C5.95208 21.9361 5.59593 21.4507 5.26997 20.9452C4.50503 19.8246 3.90514 18.5998 3.48872 17.3085C2.98847 15.8085 2.74622 14.3707 2.74622 12.9645C2.74622 11.394 3.08597 10.023 3.75047 8.87099C4.24305 7.97057 4.96728 7.21812 5.84822 6.69149C6.70195 6.16122 7.6829 5.87102 8.68772 5.85149C9.03947 5.85149 9.41822 5.90249 9.82022 5.99999C10.109 6.08174 10.4607 6.21074 10.8905 6.37124C11.4372 6.58199 11.738 6.71099 11.84 6.74249C12.1602 6.85949 12.4295 6.91049 12.641 6.91049C12.8015 6.91049 13.028 6.85949 13.2852 6.78149C13.43 6.73049 13.703 6.64049 14.0937 6.47324C14.4807 6.33224 14.7852 6.21149 15.0275 6.12149C15.3987 6.01199 15.758 5.91074 16.0782 5.85974C16.4579 5.79988 16.8432 5.78403 17.2265 5.81249C17.8907 5.8559 18.5449 5.99665 19.1682 6.23024C20.1875 6.64049 21.0117 7.28099 21.6252 8.19149C21.3659 8.35131 21.1225 8.53566 20.8985 8.74199C20.4107 9.17442 19.9952 9.68208 19.6677 10.2457C19.2397 11.016 19.0178 11.8838 19.0235 12.765C19.0392 13.8472 19.3167 14.8005 19.8635 15.6247C20.2654 16.2356 20.7878 16.758 21.3987 17.16C21.7115 17.3707 21.9807 17.5155 22.2387 17.613C22.118 17.988 21.989 18.351 21.8367 18.711C21.4914 19.5183 21.0729 20.2923 20.5865 21.0232C20.153 21.6525 19.8132 22.1212 19.5552 22.4332C19.1532 22.9095 18.7662 23.2732 18.3755 23.5267C17.9457 23.8117 17.438 23.964 16.922 23.964C16.5725 23.9774 16.2231 23.9351 15.887 23.8387C15.5982 23.7412 15.3125 23.6355 15.0312 23.5147C14.7388 23.3804 14.4373 23.2669 14.129 23.175C13.3667 22.9792 12.5676 22.9779 11.8047 23.1712C11.492 23.2612 11.1912 23.3662 10.8942 23.4952C10.4765 23.6707 10.199 23.7885 10.0385 23.8387C9.71822 23.9325 9.38596 23.991 9.04996 24.0105C8.53022 24.0105 8.04572 23.862 7.56572 23.5612L7.57847 23.5507ZM14.4335 5.08949C13.754 5.42924 13.1052 5.57399 12.461 5.52674C12.3597 4.87799 12.461 4.21424 12.7302 3.48749C12.9594 2.87179 13.2981 2.30263 13.73 1.80749C14.186 1.28625 14.7393 0.859019 15.359 0.549737C16.019 0.209987 16.6482 0.0262371 17.2497 -0.000762939C17.3277 0.678737 17.2497 1.34699 17 2.06924C16.7688 2.7077 16.4308 3.30218 16.0002 3.82724C15.5608 4.34918 15.0215 4.77808 14.414 5.08874L14.4335 5.08949Z"
            fill="white"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_2:319">
            <Rect width="24" height="24" fill="white" transform="translate(0.5)" />
          </ClipPath>
        </Defs>
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Movie: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9231 20.5829C15.6667 20.5829 17.3821 18.8044 17.3821 16.2869L17.3821 12.9701L22.5572 17.2067C23.3783 17.8813 24.625 17.2964 24.625 16.2253V7.54484C24.625 6.47494 23.3783 5.88757 22.5572 6.56336L17.3821 10.8L17.3821 7.49536C17.3821 4.97915 15.6667 3.18799 12.9231 3.18799H5.08395C2.329 3.18799 0.625 4.97915 0.625 7.49536V16.2869C0.625 18.8044 2.329 20.5829 5.07006 20.5829H12.9231Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Movie_active: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9231 20.5829C15.6667 20.5829 17.3821 18.8044 17.3821 16.2869L17.3821 12.9701L22.5572 17.2067C23.3783 17.8813 24.625 17.2964 24.625 16.2253V7.54484C24.625 6.47494 23.3783 5.88757 22.5572 6.56336L17.3821 10.8L17.3821 7.49536C17.3821 4.97915 15.6667 3.18799 12.9231 3.18799H5.08395C2.329 3.18799 0.625 4.97915 0.625 7.49536V16.2869C0.625 18.8044 2.329 20.5829 5.07006 20.5829H12.9231Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Series: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3434 2.00004C20.3434 1.82323 20.2731 1.65366 20.1481 1.52864C20.0231 1.40361 19.8535 1.33337 19.6767 1.33337H5.01005C4.83324 1.33337 4.66367 1.40361 4.53865 1.52864C4.41362 1.65366 4.34338 1.82323 4.34338 2.00004V2.66671H20.3434V2.00004ZM21.6634 6.66663H2.83671C2.5043 6.66663 2.18551 6.79867 1.95047 7.03372C1.71542 7.26876 1.58337 7.58755 1.58337 7.91996V20.08C1.58337 20.4124 1.71542 20.7312 1.95047 20.9662C2.18551 21.2012 2.5043 21.3333 2.83671 21.3333H21.6634C21.9958 21.3333 22.3146 21.2012 22.5496 20.9662C22.7847 20.7312 22.9167 20.4124 22.9167 20.08V7.91996C22.9167 7.58755 22.7847 7.26876 22.5496 7.03372C22.3146 6.79867 21.9958 6.66663 21.6634 6.66663ZM16.37 14.5533L9.85671 17.46C9.75529 17.5056 9.64408 17.525 9.5332 17.5167C9.42232 17.5083 9.31529 17.4723 9.22186 17.412C9.12844 17.3517 9.05158 17.269 8.99828 17.1714C8.94498 17.0739 8.91694 16.9645 8.91671 16.8533V11.04C8.91694 10.9288 8.94498 10.8194 8.99828 10.7218C9.05158 10.6242 9.12844 10.5415 9.22186 10.4812C9.31529 10.4209 9.42232 10.3849 9.5332 10.3766C9.64408 10.3682 9.75529 10.3877 9.85671 10.4333L16.37 13.3333C16.4883 13.3855 16.5889 13.4709 16.6595 13.5792C16.7301 13.6875 16.7677 13.814 16.7677 13.9433C16.7677 14.0726 16.7301 14.1991 16.6595 14.3074C16.5889 14.4157 16.4883 14.5011 16.37 14.5533ZM21.4681 4.19526C21.5931 4.32029 21.6634 4.48986 21.6634 4.66667V5.33333H2.99672V4.66667C2.99672 4.48986 3.06696 4.32029 3.19198 4.19526C3.31701 4.07024 3.48658 4 3.66339 4H20.9967C21.1735 4 21.3431 4.07024 21.4681 4.19526Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Series_active: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3434 2.00004C20.3434 1.82323 20.2731 1.65366 20.1481 1.52864C20.0231 1.40361 19.8535 1.33337 19.6767 1.33337H5.01005C4.83324 1.33337 4.66367 1.40361 4.53865 1.52864C4.41362 1.65366 4.34338 1.82323 4.34338 2.00004V2.66671H20.3434V2.00004ZM21.6634 6.66663H2.83671C2.5043 6.66663 2.18551 6.79867 1.95047 7.03372C1.71542 7.26876 1.58337 7.58755 1.58337 7.91996V20.08C1.58337 20.4124 1.71542 20.7312 1.95047 20.9662C2.18551 21.2012 2.5043 21.3333 2.83671 21.3333H21.6634C21.9958 21.3333 22.3146 21.2012 22.5496 20.9662C22.7847 20.7312 22.9167 20.4124 22.9167 20.08V7.91996C22.9167 7.58755 22.7847 7.26876 22.5496 7.03372C22.3146 6.79867 21.9958 6.66663 21.6634 6.66663ZM16.37 14.5533L9.85671 17.46C9.75529 17.5056 9.64408 17.525 9.5332 17.5167C9.42232 17.5083 9.31529 17.4723 9.22186 17.412C9.12844 17.3517 9.05158 17.269 8.99828 17.1714C8.94498 17.0739 8.91694 16.9645 8.91671 16.8533V11.04C8.91694 10.9288 8.94498 10.8194 8.99828 10.7218C9.05158 10.6242 9.12844 10.5415 9.22186 10.4812C9.31529 10.4209 9.42232 10.3849 9.5332 10.3766C9.64408 10.3682 9.75529 10.3877 9.85671 10.4333L16.37 13.3333C16.4883 13.3855 16.5889 13.4709 16.6595 13.5792C16.7301 13.6875 16.7677 13.814 16.7677 13.9433C16.7677 14.0726 16.7301 14.1991 16.6595 14.3074C16.5889 14.4157 16.4883 14.5011 16.37 14.5533ZM21.4681 4.19526C21.5931 4.32029 21.6634 4.48986 21.6634 4.66667V5.33333H2.99672V4.66667C2.99672 4.48986 3.06696 4.32029 3.19198 4.19526C3.31701 4.07024 3.48658 4 3.66339 4H20.9967C21.1735 4 21.3431 4.07024 21.4681 4.19526Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Book: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.95 3.60001H22.35V22.8H6.75002C4.75802 22.8 3.15002 21.192 3.15002 19.2V4.80001C3.15002 2.80801 4.75802 1.20001 6.75002 1.20001H17.55V18H6.75002C6.09002 18 5.55002 18.54 5.55002 19.2C5.55002 19.86 6.09002 20.4 6.75002 20.4H19.95V3.60001Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Book_active: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.95 3.60001H22.35V22.8H6.75002C4.75802 22.8 3.15002 21.192 3.15002 19.2V4.80001C3.15002 2.80801 4.75802 1.20001 6.75002 1.20001H17.55V18H6.75002C6.09002 18 5.55002 18.54 5.55002 19.2C5.55002 19.86 6.09002 20.4 6.75002 20.4H19.95V3.60001Z"
          fill="#67686D"
        />
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Profile: {
    svg: (
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.25 2C6.829 2 2.25 6.579 2.25 12C2.25 17.421 6.829 22 12.25 22C17.671 22 22.25 17.421 22.25 12C22.25 6.579 17.671 2 12.25 2ZM12.25 7C13.977 7 15.25 8.272 15.25 10C15.25 11.728 13.977 13 12.25 13C10.524 13 9.25 11.728 9.25 10C9.25 8.272 10.524 7 12.25 7ZM7.144 16.772C8.041 15.452 9.537 14.572 11.25 14.572H13.25C14.964 14.572 16.459 15.452 17.356 16.772C16.078 18.14 14.265 19 12.25 19C10.235 19 8.422 18.14 7.144 16.772Z"
          fill="url(#paint0_linear_2:402)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2:402"
            x1="2.25"
            y1="11.9977"
            x2="22.2498"
            y2="11.9977"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stop-color="#FEAC6D" />
            <Stop offset="1" stop-color="#AE61ED" />
          </LinearGradient>
        </Defs>
      </Svg>
    ),
    view: "0 0 25 24",
  },
  Profile_active: {
    svg: (
      <Svg
        width="100"
        height="100"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M10.25 0C4.829 0 0.25 4.579 0.25 10C0.25 15.421 4.829 20 10.25 20C15.671 20 20.25 15.421 20.25 10C20.25 4.579 15.671 0 10.25 0ZM10.25 5C11.977 5 13.25 6.272 13.25 8C13.25 9.728 11.977 11 10.25 11C8.524 11 7.25 9.728 7.25 8C7.25 6.272 8.524 5 10.25 5ZM5.144 14.772C6.041 13.452 7.537 12.572 9.25 12.572H11.25C12.964 12.572 14.459 13.452 15.356 14.772C14.078 16.14 12.265 17 10.25 17C8.235 17 6.422 16.14 5.144 14.772Z"
          fill="url(#paint0_linear_2:403)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2:403"
            x1="0.25"
            y1="9.99769"
            x2="20.2498"
            y2="9.99769"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stop-color="#FEAC6D" />
            <Stop offset="1" stop-color="#AE61ED" />
          </LinearGradient>
        </Defs>
      </Svg>
    ),
    view: "0 0 21 20",
  },
  Edit: {
    svg: (
      <Svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.4001 7.34L16.6601 4.6C16.3024 4.26409 15.8338 4.07136 15.3434 4.05845C14.8529 4.04554 14.3748 4.21337 14.0001 4.53L5.00005 13.53C4.67682 13.856 4.47556 14.2832 4.43005 14.74L4.00005 18.91C3.98658 19.0565 4.00559 19.2041 4.05571 19.3424C4.10584 19.4807 4.18585 19.6062 4.29005 19.71C4.38349 19.8027 4.49431 19.876 4.61615 19.9258C4.73798 19.9755 4.86845 20.0008 5.00005 20H5.09005L9.26005 19.62C9.71685 19.5745 10.1441 19.3732 10.4701 19.05L19.4701 10.05C19.8194 9.68097 20.0082 9.18851 19.995 8.68053C19.9819 8.17256 19.768 7.69051 19.4001 7.34ZM16.0001 10.68L13.3201 8L15.2701 6L18.0001 8.73L16.0001 10.68Z"
          fill="#1DAEFF"
        />
      </Svg>
    ),
    view: "0 0 120 120",
  },
  Edit_white: {
    svg: (
      <Svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.4001 7.34L16.6601 4.6C16.3024 4.26409 15.8338 4.07136 15.3434 4.05845C14.8529 4.04554 14.3748 4.21337 14.0001 4.53L5.00005 13.53C4.67682 13.856 4.47556 14.2832 4.43005 14.74L4.00005 18.91C3.98658 19.0565 4.00559 19.2041 4.05571 19.3424C4.10584 19.4807 4.18585 19.6062 4.29005 19.71C4.38349 19.8027 4.49431 19.876 4.61615 19.9258C4.73798 19.9755 4.86845 20.0008 5.00005 20H5.09005L9.26005 19.62C9.71685 19.5745 10.1441 19.3732 10.4701 19.05L19.4701 10.05C19.8194 9.68097 20.0082 9.18851 19.995 8.68053C19.9819 8.17256 19.768 7.69051 19.4001 7.34ZM16.0001 10.68L13.3201 8L15.2701 6L18.0001 8.73L16.0001 10.68Z"
          fill="#fff"
        />
      </Svg>
    ),
    view: "0 0 120 120",
  },
  File: {
    svg: (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.74 7.32994L15.3 2.32994C15.2065 2.22634 15.0924 2.14347 14.9649 2.08663C14.8375 2.0298 14.6995 2.00027 14.56 1.99994H6.56C6.22775 1.99597 5.89797 2.0575 5.5895 2.18099C5.28103 2.30449 4.9999 2.48754 4.76218 2.71969C4.52446 2.95184 4.33479 3.22855 4.20402 3.534C4.07324 3.83946 4.00392 4.16768 4 4.49994V19.4999C4.00392 19.8322 4.07324 20.1604 4.20402 20.4659C4.33479 20.7713 4.52446 21.048 4.76218 21.2802C4.9999 21.5123 5.28103 21.6954 5.5895 21.8189C5.89797 21.9424 6.22775 22.0039 6.56 21.9999H17.44C17.7723 22.0039 18.102 21.9424 18.4105 21.8189C18.719 21.6954 19.0001 21.5123 19.2378 21.2802C19.4755 21.048 19.6652 20.7713 19.796 20.4659C19.9268 20.1604 19.9961 19.8322 20 19.4999V7.99994C19.9994 7.7521 19.9067 7.51333 19.74 7.32994ZM9 11.9999H12C12.2652 11.9999 12.5196 12.1053 12.7071 12.2928C12.8946 12.4804 13 12.7347 13 12.9999C13 13.2652 12.8946 13.5195 12.7071 13.707C12.5196 13.8946 12.2652 13.9999 12 13.9999H9C8.73478 13.9999 8.48043 13.8946 8.29289 13.707C8.10536 13.5195 8 13.2652 8 12.9999C8 12.7347 8.10536 12.4804 8.29289 12.2928C8.48043 12.1053 8.73478 11.9999 9 11.9999ZM15 17.9999H9C8.73478 17.9999 8.48043 17.8946 8.29289 17.707C8.10536 17.5195 8 17.2652 8 16.9999C8 16.7347 8.10536 16.4804 8.29289 16.2928C8.48043 16.1053 8.73478 15.9999 9 15.9999H15C15.2652 15.9999 15.5196 16.1053 15.7071 16.2928C15.8946 16.4804 16 16.7347 16 16.9999C16 17.2652 15.8946 17.5195 15.7071 17.707C15.5196 17.8946 15.2652 17.9999 15 17.9999ZM14.71 7.99994C14.5038 7.97963 14.3139 7.87917 14.1811 7.72019C14.0483 7.5612 13.9833 7.35641 14 7.14994V3.99994L17.74 7.99994H14.71Z"
          fill="white"
        />
      </Svg>
    ),
    view: "0 0 96 96",
  },
  Thumb: {
    svg: (
      <Svg
        width="96"
        height="96"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4V20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0ZM6.66667 5.33333C7.06223 5.33333 7.44891 5.45063 7.77781 5.67039C8.1067 5.89016 8.36305 6.20251 8.51443 6.56797C8.6658 6.93342 8.70541 7.33555 8.62824 7.72351C8.55107 8.11148 8.36059 8.46784 8.08088 8.74755C7.80118 9.02725 7.44481 9.21773 7.05685 9.2949C6.66889 9.37208 6.26675 9.33247 5.9013 9.18109C5.53585 9.02972 5.22349 8.77337 5.00373 8.44447C4.78397 8.11557 4.66667 7.7289 4.66667 7.33333C4.66667 6.8029 4.87738 6.29419 5.25245 5.91912C5.62753 5.54405 6.13623 5.33333 6.66667 5.33333ZM21.3333 19.7733C21.3628 20.1569 21.239 20.5365 20.9891 20.8289C20.7391 21.1213 20.3835 21.3027 20 21.3333H4L14.0933 12.24C14.2628 12.0854 14.4839 11.9997 14.7133 11.9997C14.9427 11.9997 15.1639 12.0854 15.3333 12.24L21.3333 18.2133V19.7733Z"
          fill="#1DAEFF"
        />
      </Svg>
    ),
    view: "0 0 24 24",
  },
  User: {
    svg: (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18Z"
          fill="#1DAEFF"
        />
      </Svg>
    ),
    view: "0 0 24 24",
  },
  Detach: {
    svg: (
      <Svg
        width="96"
        height="96"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.1288 2.68583C15.3654 2.64092 14.5152 2.89904 13.7071 3.70716L9.41422 8.00005L11 9.58584L15.2929 5.29294C15.6834 4.90242 16.3166 4.90242 16.7071 5.29294C17.0976 5.68347 17.0976 6.31663 16.7071 6.70716L12.4142 11.0001L14 12.5858L18.2929 8.29294C19.101 7.48482 19.3591 6.63468 19.3142 5.87127C19.2679 5.08329 18.8922 4.30649 18.2929 3.70716C17.6936 3.10782 16.9168 2.73218 16.1288 2.68583ZM15.4142 14.0001L19.7071 9.70716C20.899 8.51528 21.3909 7.11543 21.3108 5.75383C21.2321 4.41681 20.6078 3.19361 19.7071 2.29294C18.8065 1.39228 17.5832 0.767924 16.2462 0.689276C14.8846 0.609183 13.4848 1.10107 12.2929 2.29294L8.00001 6.58584L4.70712 3.29294C4.31659 2.90242 3.68343 2.90242 3.2929 3.29294C2.90238 3.68347 2.90238 4.31663 3.2929 4.70716L10.2925 11.7067C10.2923 11.7066 10.2926 11.7069 10.2925 11.7067C10.2926 11.7069 10.2932 11.7074 10.2933 11.7076L16.2893 17.7036C16.2905 17.7048 16.2917 17.7059 16.2928 17.7071C16.294 17.7083 16.2952 17.7095 16.2964 17.7107L19.2929 20.7072C19.6834 21.0977 20.3166 21.0977 20.7071 20.7072C21.0976 20.3166 21.0976 19.6835 20.7071 19.2929L18.4142 17L22.7071 12.7072C23.0976 12.3166 23.0976 11.6835 22.7071 11.293C22.3166 10.9024 21.6834 10.9024 21.2929 11.2929L17 15.5858L15.4142 14.0001ZM6.00001 8.58584L16.4142 19.0001L13.7071 21.7072C12.0152 23.399 10.0529 24.0784 8.16004 23.9671C6.29177 23.8572 4.56857 22.9828 3.2929 21.7072C2.01724 20.4315 1.14288 18.7083 1.03298 16.84C0.92164 14.9472 1.60102 12.9848 3.2929 11.2929L6.00001 8.58584ZM10.5858 16.0001L9.00001 14.4143L7.70712 15.7072C7.39899 16.0153 7.32838 16.3029 7.34203 16.5351C7.35713 16.7918 7.48278 17.0686 7.70712 17.2929C7.93145 17.5173 8.20825 17.6429 8.46498 17.658C8.69713 17.6717 8.98478 17.6011 9.2929 17.2929L10.5858 16.0001ZM7.58579 13.0001L6.2929 14.2929C5.60102 14.9848 5.29664 15.8222 5.34548 16.6525C5.39288 17.4583 5.76724 18.1815 6.2929 18.7072C6.81857 19.2328 7.54177 19.6072 8.34754 19.6546C9.17788 19.7034 10.0152 19.399 10.7071 18.7072L12 17.4143L13.5858 19.0001L12.2929 20.2929C10.9848 21.6011 9.57213 22.0467 8.27748 21.9705C6.95825 21.8929 5.68145 21.2673 4.70711 20.2929C3.73278 19.3186 3.10713 18.0418 3.02953 16.7226C2.95338 15.4279 3.39899 14.0153 4.70712 12.7072L6.00001 11.4143L7.58579 13.0001Z"
          fill="white"
        />
      </Svg>
    ),
    view: "0 0 24 24",
  },
};