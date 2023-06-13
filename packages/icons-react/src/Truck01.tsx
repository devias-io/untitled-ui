import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Truck01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.8 6.7h2.1035c.2202 0 .3302 0 .4338.0249a.9015.9015 0 0 1 .2602.1077c.0908.0557.1686.1335.3243.2892l3.6564 3.6564c.1557.1557.2335.2335.2892.3243a.9014.9014 0 0 1 .1077.2602c.0249.1036.0249.2136.0249.4338V14.35c0 .4193 0 .629-.0685.7944a.9006.9006 0 0 1-.4871.4871c-.1654.0685-.3751.0685-.7944.0685m-4.5 0H13.8m0 0V6.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C12.4321 4 11.9281 4 10.92 4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 5.3678 3 5.872 3 6.88v7.02c0 .9941.8059 1.8 1.8 1.8m9 0h-3.6m0 0c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7m5.4 0c0-1.4912-1.2088-2.7-2.7-2.7s-2.7 1.2088-2.7 2.7m14.85.45c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25 1.0074-2.25 2.25-2.25 2.25 1.0074 2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Truck01);
const Memo = memo(ForwardRef);
export default Memo;
