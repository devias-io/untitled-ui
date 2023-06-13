import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Sliders01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.7 19.2v-6.3m0-3.6V3M12 19.2v-8.1m0-3.6V3m6.3 16.2v-4.5m0-3.6V3M3 12.9h5.4m.9-5.4h5.4m.9 7.2H21"
    />
  </svg>
);
const ForwardRef = forwardRef(Sliders01);
const Memo = memo(ForwardRef);
export default Memo;
