import * as React from 'react';
import { SVGProps } from 'react';
const SunSetting01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8.4c-2.9823 0-5.4 2.4177-5.4 5.4h10.8c0-2.9823-2.4177-5.4-5.4-5.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1.8M5.9827 6.8827 4.7099 5.6099m13.3073 1.2728L19.29 5.6099M6.6 13.8c0-2.9823 2.4177-5.4 5.4-5.4 2.9823 0 5.4 2.4177 5.4 5.4m3.6 0H3m15.3 3.6H5.7"
    />
  </svg>
);
export default SunSetting01;
