import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChart02 = (
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
      d="M18 20V4M6 20v-4m6 4V10"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart02);
const Memo = memo(ForwardRef);
export default Memo;
