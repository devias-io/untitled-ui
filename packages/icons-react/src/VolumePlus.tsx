import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const VolumePlus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.85 14.3206v-6.3m-3.15 3.15H21M9.8709 4.2998l-2.8491 2.849c-.1557.1557-.2335.2336-.3243.2892a.9.9 0 0 1-.2602.1078c-.1036.0248-.2136.0248-.4338.0248H4.44c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 8.2546 3 8.5066 3 9.0107v4.32c0 .5041 0 .7561.098.9486a.8993.8993 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h1.5635c.2202 0 .3302 0 .4338.0249a.9002.9002 0 0 1 .2602.1078c.0908.0556.1686.1334.3243.2891l2.849 2.8491c.3856.3856.5784.5783.7439.5914a.4502.4502 0 0 0 .3775-.1564c.1078-.1262.1078-.3989.1078-.9441V4.8089c0-.5453 0-.8179-.1078-.9441a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5914Z"
    />
  </svg>
);
const ForwardRef = forwardRef(VolumePlus);
const Memo = memo(ForwardRef);
export default Memo;
