import * as React from 'react';
import { SVGProps } from 'react';
const ZapCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 6.15-4.1746 6.0721c-.2513.3655-.377.5483-.3694.7002a.45.45 0 0 0 .1764.3354c.121.0923.3428.0923.7863.0923H12v4.5l4.1746-6.0721c.2513-.3655.3769-.5483.3694-.7002a.4502.4502 0 0 0-.1764-.3354c-.121-.0923-.3428-.0923-.7863-.0923H12v-4.5Z"
    />
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 6.15-4.1746 6.0721c-.2513.3655-.377.5483-.3694.7002a.45.45 0 0 0 .1764.3354c.121.0923.3428.0923.7863.0923H12v4.5l4.1746-6.0721c.2513-.3655.3769-.5483.3694-.7002a.4502.4502 0 0 0-.1764-.3354c-.121-.0923-.3428-.0923-.7863-.0923H12v-4.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
  </svg>
);
export default ZapCircle;
