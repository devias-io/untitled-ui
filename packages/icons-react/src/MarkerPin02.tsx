import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MarkerPin02 = (
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
      d="M11.2 12.45c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 21c1.8-3.6 7.2-5.9236 7.2-10.8 0-3.9764-3.2236-7.2-7.2-7.2C7.2236 3 4 6.2236 4 10.2c0 4.8764 5.4 7.2 7.2 10.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MarkerPin02);
const Memo = memo(ForwardRef);
export default Memo;
