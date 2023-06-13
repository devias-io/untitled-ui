import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Target02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 12h-3.6M6.6 12H3m9-5.4V3m0 18v-3.6m7.2-5.4c0 3.9765-3.2235 7.2-7.2 7.2-3.9764 0-7.2-3.2235-7.2-7.2 0-3.9764 3.2236-7.2 7.2-7.2 3.9765 0 7.2 3.2236 7.2 7.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Target02);
const Memo = memo(ForwardRef);
export default Memo;
