import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Move = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.7 8.3 3 11m0 0 2.7 2.7M3 11h18M9.3 4.7 12 2m0 0 2.7 2.7M12 2v18m2.7-2.7L12 20m0 0-2.7-2.7m9-9L21 11m0 0-2.7 2.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Move);
const Memo = memo(ForwardRef);
export default Memo;
