import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ChevronUpDouble = (
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
      d="m17 18-5-5-5 5m10-7-5-5-5 5"
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronUpDouble);
const Memo = memo(ForwardRef);
export default Memo;
