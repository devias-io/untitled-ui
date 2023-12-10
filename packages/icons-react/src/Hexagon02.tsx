import * as React from 'react';
import { SVGProps } from 'react';
const Hexagon02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5679 11.223c.1576.2836.2363.4254.2672.5755a.9982.9982 0 0 1 0 .403c-.0309.1501-.1096.2919-.2672.5755l-4.1111 7.4c-.1664.2996-.2496.4493-.3679.5584a1.0002 1.0002 0 0 1-.364.2141C16.5721 21 16.4008 21 16.0582 21H7.941c-.3426 0-.514 0-.6667-.0505a1 1 0 0 1-.364-.2141c-.1183-.1091-.2015-.2588-.368-.5584l-4.111-7.4c-.1576-.2836-.2364-.4254-.2672-.5755a1.0003 1.0003 0 0 1 0-.403c.0308-.1501.1096-.2919.2672-.5755l4.111-7.4c.1665-.2995.2497-.4493.368-.5584a1.0002 1.0002 0 0 1 .364-.2141C7.427 3 7.5984 3 7.941 3h8.1172c.3426 0 .5139 0 .6667.0505.1352.0446.2593.1177.364.2141.1183.109.2015.2588.3679.5584l4.1111 7.4Z"
    />
  </svg>
);
export default Hexagon02;
