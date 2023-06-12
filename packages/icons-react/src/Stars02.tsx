import * as React from 'react';
import { SVGProps } from 'react';
const Stars02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.25 20v-4.5m0-9V2M3 4.25h4.5M3 17.75h4.5M12.9 2.9l-1.5608 4.058c-.2538.6599-.3807.9898-.578 1.2674a2.6996 2.6996 0 0 1-.6358.6358c-.2776.1973-.6075.3242-1.2674.578L4.8 11l4.058 1.5608c.6599.2538.9898.3807 1.2674.578a2.699 2.699 0 0 1 .6358.6358c.1973.2776.3242.6075.578 1.2674L12.9 19.1l1.5608-4.058c.2538-.6599.3807-.9898.578-1.2674a2.699 2.699 0 0 1 .6358-.6358c.2776-.1973.6075-.3242 1.2674-.578L21 11l-4.058-1.5608c-.6599-.2538-.9898-.3807-1.2674-.578a2.6996 2.6996 0 0 1-.6358-.6358c-.1973-.2776-.3242-.6075-.578-1.2674L12.9 2.9Z"
    />
  </svg>
);
export default Stars02;
