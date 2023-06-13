import * as React from 'react';
import { SVGProps } from 'react';
const Pentagon = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.0605 2.932c.3378-.2451.5067-.3677.6913-.415a.9982.9982 0 0 1 .497 0c.1846.0473.3535.1699.6913.415l8.1185 5.892c.3384.2456.5077.3683.61.5295a.9998.9998 0 0 1 .1538.4733c.012.1906-.0527.3894-.182.787l-3.1003 9.5311c-.1292.3972-.1938.5958-.3154.7427a1.0004 1.0004 0 0 1-.4023.2922c-.1773.0702-.3862.0702-.8038.0702H6.982c-.4176 0-.6265 0-.8038-.0702a1.0003 1.0003 0 0 1-.4023-.2922c-.1216-.1469-.1862-.3455-.3154-.7427l-3.1003-9.5311c-.1293-.3976-.194-.5964-.182-.787a1 1 0 0 1 .1538-.4733c.1023-.1612.2715-.284.61-.5295l8.1185-5.892Z"
    />
  </svg>
);
export default Pentagon;
