import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Mark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.2 11c0 3.9765-3.2235 7.2-7.2 7.2m7.2-7.2c0-3.9764-3.2235-7.2-7.2-7.2m7.2 7.2H21m-9 7.2c-3.9764 0-7.2-3.2235-7.2-7.2m7.2 7.2V20m-7.2-9c0-3.9764 3.2236-7.2 7.2-7.2M4.8 11H3m9-7.2V2m2.7 9c0 1.4912-1.2088 2.7-2.7 2.7S9.3 12.4912 9.3 11s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Mark);
const Memo = memo(ForwardRef);
export default Memo;
