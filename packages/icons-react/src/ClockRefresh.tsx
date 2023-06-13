import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ClockRefresh = (
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
      d="M20.4532 12.8928c-.2778 2.6099-1.7565 5.0556-4.2035 6.4684-4.0655 2.3472-9.264.9543-11.6113-3.1112l-.25-.433m-.8422-4.7099c.2778-2.6099 1.7566-5.0556 4.2035-6.4684 4.0655-2.3472 9.2641-.9542 11.6113 3.1113l.25.433M3.4932 18.0659l.732-2.732 2.732.732m10.085-8.132 2.7321.7321.732-2.732M11.9997 7.5V12l2.5 1.5"
    />
  </svg>
);
const ForwardRef = forwardRef(ClockRefresh);
const Memo = memo(ForwardRef);
export default Memo;
