import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignVerticalCenter01 = (
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
      d="M3 12h16.2m-8.1-9v5.85m0 0 3.6-3.6m-3.6 3.6-3.6-3.6M11.1 21v-5.85m0 0 3.6 3.6m-3.6-3.6-3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignVerticalCenter01);
const Memo = memo(ForwardRef);
export default Memo;
