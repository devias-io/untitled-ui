import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CalendarMinus01 = (
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
      d="M8.4 14.7h5.4m5.4-6.3H3M14.7 3v2.7M7.5 3v2.7M7.32 21h7.56c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 21 5.8078 21 7.32 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarMinus01);
const Memo = memo(ForwardRef);
export default Memo;
