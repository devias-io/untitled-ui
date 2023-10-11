import * as React from 'react';
import { SVGProps } from 'react';
const SkipBack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 16.671c0 1.0657 0 1.5985-.2185 1.8722a1 1 0 0 1-.7826.3762c-.3502-.0004-.7662-.3333-1.5984-.999l-5.8388-4.671c-.5338-.4271-.8007-.6406-.8974-.8986a1 1 0 0 1 0-.7016c.0967-.258.3636-.4715.8974-.8986l5.8388-4.671c.8322-.6657 1.2482-.9986 1.5984-.999a.9997.9997 0 0 1 .7826.3762C19 5.7304 19 6.2633 19 7.329v9.342Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 19V5m11.4005 1.0796-5.8388 4.671c-.5338.4271-.8007.6406-.8974.8986a1 1 0 0 0 0 .7016c.0967.258.3636.4715.8974.8986l5.8388 4.671c.8322.6657 1.2482.9986 1.5984.999a1 1 0 0 0 .7826-.3762C19 18.2695 19 17.7367 19 16.671V7.329c0-1.0657 0-1.5985-.2185-1.8722a.9997.9997 0 0 0-.7826-.3762c-.3502.0004-.7662.3333-1.5984.999Z"
    />
  </svg>
);
export default SkipBack;
