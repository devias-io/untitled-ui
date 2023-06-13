import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MarkerPin01 = (
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
      d="M11.2 12.9c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 21c3.6-3.6 7.2-6.8236 7.2-10.8 0-3.9764-3.2236-7.2-7.2-7.2C7.2236 3 4 6.2236 4 10.2c0 3.9764 3.6 7.2 7.2 10.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MarkerPin01);
const Memo = memo(ForwardRef);
export default Memo;
