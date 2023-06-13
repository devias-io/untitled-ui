import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Sliders03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.0505 9H5.5C4.1193 9 3 7.8807 3 6.5S4.1193 4 5.5 4h9.5505m-6.101 16H18.5c1.3807 0 2.5-1.1193 2.5-2.5S19.8807 15 18.5 15H8.9495M3 17.5C3 19.433 4.567 21 6.5 21s3.5-1.567 3.5-3.5S8.433 14 6.5 14 3 15.567 3 17.5Zm18-11c0 1.933-1.567 3.5-3.5 3.5S14 8.433 14 6.5 15.567 3 17.5 3 21 4.567 21 6.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Sliders03);
const Memo = memo(ForwardRef);
export default Memo;
