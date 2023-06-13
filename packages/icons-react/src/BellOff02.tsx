import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BellOff02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14 21h-4M8.633 3.0337A6.0001 6.0001 0 0 1 18 8c0 2.1008.2702 3.7512.6484 5.0324M6.2587 6.2572A5.9983 5.9983 0 0 0 6 8c0 3.0902-.7795 5.206-1.6503 6.6054-.7346 1.1805-1.1018 1.7707-1.0884 1.9354.015.1823.0536.2518.2005.3608C3.5945 17 4.1926 17 5.3888 17H17m4 4L3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(BellOff02);
const Memo = memo(ForwardRef);
export default Memo;
