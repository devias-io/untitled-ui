import * as React from 'react';
import { SVGProps } from 'react';
const MessageSmileCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.9996 14s1.3125 1.5 3.5 1.5 3.5-1.5 3.5-1.5m-.75-5h.01m-5.51 0h.01m2.74 11c4.6944 0 8.5-3.8056 8.5-8.5S17.194 3 12.4996 3s-8.5 3.8056-8.5 8.5c0 .95.1559 1.8636.4434 2.7166.1082.321.1623.4815.172.6048.0097.1218.0024.2072-.0277.3255-.0305.1199-.0979.2446-.2326.4939l-1.6356 3.0276c-.2334.4318-.35.6477-.3239.8144a.5.5 0 0 0 .2336.3494c.144.0879.3881.0626.8764.0122l5.121-.5294c.155-.016.2326-.024.3033-.0213a.901.901 0 0 1 .1864.0248c.0689.0159.1555.0493.3289.116.948.3653 1.978.5655 3.0548.5655Zm3.25-11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default MessageSmileCircle;
