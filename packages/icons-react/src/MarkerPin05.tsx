import * as React from 'react';
import { SVGProps } from 'react';
const MarkerPin05 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 15.6V3v12.6Zm0-5.85 4.75-2.5577c.3609-.1943.5413-.2915.6047-.4234a.4502.4502 0 0 0 .0106-.3661c-.0557-.1354-.2303-.2428-.5794-.4576L12 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 12.337c3.1786.625 5.4 2.0522 5.4 3.713 0 2.2368-4.0294 4.05-9 4.05s-9-1.8132-9-4.05c0-1.6608 2.2214-3.088 5.4-3.713M12 15.6V3l4.7859 2.9452c.3491.2148.5237.3222.5794.4576a.4502.4502 0 0 1-.0106.3661c-.0634.132-.2438.2291-.6047.4234L12 9.75"
    />
  </svg>
);
export default MarkerPin05;
