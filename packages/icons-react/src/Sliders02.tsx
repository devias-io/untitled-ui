import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Sliders02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 21v-6m0 0c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Zm0-8V3m7 18v-6m0-8V3m0 4c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2Zm7 14v-4m0 0c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Zm0-8V3"
    />
  </svg>
);
const ForwardRef = forwardRef(Sliders02);
const Memo = memo(ForwardRef);
export default Memo;
