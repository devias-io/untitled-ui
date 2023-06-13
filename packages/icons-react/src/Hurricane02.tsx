import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hurricane02 = (
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
      d="M17.4 11.2c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4m10.8 0c0-2.9823-2.4177-5.4-5.4-5.4-2.9823 0-5.4 2.4177-5.4 5.4m10.8 0c0 3.9765-3.2236 7.2-7.2 7.2-3.9764 0-7.2-3.2235-7.2-7.2m3.6 0C6.6 7.2236 9.8235 4 13.8 4c3.9764 0 7.2 3.2236 7.2 7.2m-8.1 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Hurricane02);
const Memo = memo(ForwardRef);
export default Memo;
