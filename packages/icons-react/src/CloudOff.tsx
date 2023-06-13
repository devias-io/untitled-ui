import * as React from 'react';
import { SVGProps } from 'react';
const CloudOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.05 17.4C4.8133 17.4 3 15.5868 3 13.35c0-2.1092 1.6124-3.8418 3.6718-4.0326A5.3754 5.3754 0 0 1 7.758 6.8581l10.3684 10.3684A4.0513 4.0513 0 0 1 16.95 17.4h-9.9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.7303 14.8063A4.0406 4.0406 0 0 0 21 13.35c0-2.1092-1.6124-3.8418-3.6718-4.0326C16.907 6.755 14.6818 4.8 12 4.8c-.4019 0-.7936.044-1.1704.1272m-3.0709 1.93a5.3753 5.3753 0 0 0-1.087 2.4602C4.6125 9.5082 3 11.2408 3 13.35c0 2.2368 1.8133 4.05 4.05 4.05h9.9c.4105 0 .8067-.0611 1.18-.1746M3.9 3l16.2 16.2"
    />
  </svg>
);
export default CloudOff;
