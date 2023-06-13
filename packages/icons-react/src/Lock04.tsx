import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Lock04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.101 10H7V8c0-2.7614 2.2386-5 5-5s5 2.2386 5 5v2h-.101M12 14v2m7-1c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Lock04);
const Memo = memo(ForwardRef);
export default Memo;
