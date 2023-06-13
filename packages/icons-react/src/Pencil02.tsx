import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Pencil02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.4 2 21 5.6M3 20l1.1488-4.2121c.075-.2748.1124-.4122.17-.5404a1.803 1.803 0 0 1 .1872-.3227c.0827-.1135.1834-.2142.3848-.4156l9.3001-9.3c.1782-.1783.2673-.2674.37-.3008a.4502.4502 0 0 1 .2782 0c.1027.0334.1918.1225.37.3007l2.5818 2.5818c.1782.1782.2673.2673.3007.37a.451.451 0 0 1 0 .2782c-.0334.1027-.1225.1918-.3007.37l-9.3 9.3001c-.2015.2014-.3022.3021-.4157.3848a1.7974 1.7974 0 0 1-.3227.1873c-.1282.0575-.2656.095-.5404.1699L3 20Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Pencil02);
const Memo = memo(ForwardRef);
export default Memo;
