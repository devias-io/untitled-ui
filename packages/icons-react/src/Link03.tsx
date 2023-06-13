import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Link03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5.0002 5.0002 0 0 0-3.553-8.4734A5 5 0 0 0 13.47 3.47l-1.72 1.71M14 11a4.9997 4.9997 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    />
  </svg>
);
const ForwardRef = forwardRef(Link03);
const Memo = memo(ForwardRef);
export default Memo;
