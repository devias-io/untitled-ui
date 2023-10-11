import * as React from 'react';
import { SVGProps } from 'react';
const Triangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M2.3902 18.0983 10.615 3.8917c.4545-.7852.6818-1.1777.9784-1.3096a1 1 0 0 1 .8126 0c.2965.1319.5238.5244.9783 1.3096l8.2249 14.2066c.4562.788.6843 1.182.6506 1.5054a1.0003 1.0003 0 0 1-.4065.7051c-.263.1912-.7182.1912-1.6288.1912H3.7749c-.9106 0-1.3658 0-1.6288-.1912a1.0002 1.0002 0 0 1-.4065-.7051c-.0337-.3234.1944-.7174.6506-1.5054Z"
    />
  </svg>
);
export default Triangle;
