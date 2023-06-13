import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChart01 = (
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
      d="M18 20V10m-6 10V4M6 20v-6"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart01);
const Memo = memo(ForwardRef);
export default Memo;
