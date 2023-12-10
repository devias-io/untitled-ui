import * as React from 'react';
import { SVGProps } from 'react';
const Globe01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.4999 17.9999c4.1422 0 7.5-3.3579 7.5-7.5s-3.3578-7.5-7.5-7.5c-4.1421 0-7.5 3.3579-7.5 7.5s3.3579 7.5 7.5 7.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.6317 2.3682c4.491 4.491 4.491 11.7724 0 16.2634-4.3009 4.3009-11.1608 4.483-15.6783.5464-.197-.1716-.2956-.2575-.34-.3748a.5212.5212 0 0 1-.011-.3219c.0362-.1201.1347-.2185.3315-.4154l2.2152-2.2152M18 10.4999c0 4.1421-3.3578 7.5-7.5 7.5-4.1421 0-7.5-3.3579-7.5-7.5s3.3579-7.5 7.5-7.5c4.1422 0 7.5 3.3579 7.5 7.5Z"
    />
  </svg>
);
export default Globe01;
