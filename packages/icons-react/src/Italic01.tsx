import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Italic01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 4h-9m4 16H5M15 4 9 20"
    />
  </svg>
);
const ForwardRef = forwardRef(Italic01);
const Memo = memo(ForwardRef);
export default Memo;
