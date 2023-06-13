import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const VolumeMax = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.9731 4.9706C20.2487 6.7438 21 8.9196 21 11.2706c0 2.3512-.7513 4.5268-2.0269 6.3m-3.6023-9.9c.7118 1.0205 1.1292 2.2615 1.1292 3.6 0 1.3386-.4174 2.5796-1.1292 3.6m-5.5-9.5709L7.0219 8.149c-.1557.1556-.2335.2335-.3243.2891a.9.9 0 0 1-.2602.1078c-.1036.0248-.2136.0248-.4338.0248H4.44c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 9.2546 3 9.5066 3 10.0107v2.52c0 .5041 0 .7561.098.9486a.8993.8993 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h1.5635c.2202 0 .3302 0 .4338.0249a.9002.9002 0 0 1 .2602.1078c.0908.0556.1686.1334.3243.2891l2.849 2.8491c.3856.3856.5784.5783.7439.5914a.4502.4502 0 0 0 .3775-.1564c.1078-.1262.1078-.3989.1078-.9441V5.8089c0-.5453 0-.8179-.1078-.9441a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5914Z"
    />
  </svg>
);
const ForwardRef = forwardRef(VolumeMax);
const Memo = memo(ForwardRef);
export default Memo;
