import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 10H3m17-4H3m17 8H3m13 4H3"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignLeft);
const Memo = memo(ForwardRef);
export default Memo;
