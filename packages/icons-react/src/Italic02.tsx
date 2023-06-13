import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Italic02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m13.25 4-6 16m9.5-16-6 16M19.5 4h-10m5 16h-10"
    />
  </svg>
);
const ForwardRef = forwardRef(Italic02);
const Memo = memo(ForwardRef);
export default Memo;
