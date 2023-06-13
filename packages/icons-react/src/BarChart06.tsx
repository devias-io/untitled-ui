import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChart06 = (
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
      d="M9 8v13m12-4v4M3 3v18m12-8v8"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart06);
const Memo = memo(ForwardRef);
export default Memo;
