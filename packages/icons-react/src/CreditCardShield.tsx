import * as React from 'react';
import { SVGProps } from 'react';
const CreditCardShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M17.4 19.4s2.7-1.2869 2.7-3.2173v-2.2521l-1.9688-.7035a2.1693 2.1693 0 0 0-1.4634 0l-1.9678.7035v2.2521c0 1.9304 2.7 3.2173 2.7 3.2173Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9.5H3m18 .9V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h5.67m5.85 1.8s2.7-1.2869 2.7-3.2173v-2.2521l-1.9688-.7035a2.1693 2.1693 0 0 0-1.4634 0l-1.9678.7035v2.2521c0 1.9304 2.7 3.2173 2.7 3.2173Z"
    />
  </svg>
);
export default CreditCardShield;
