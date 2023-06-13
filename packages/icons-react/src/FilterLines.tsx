import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FilterLines = (
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
      d="M6 12h12M3 6h18M9 18h6"
    />
  </svg>
);
const ForwardRef = forwardRef(FilterLines);
const Memo = memo(ForwardRef);
export default Memo;
