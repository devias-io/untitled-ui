import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const RefreshCcw04 = (
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
      d="M17 18.8746c2.1213-1.5456 3.5-4.0491 3.5-6.8746 0-4.6944-3.8056-8.5-8.5-8.5h-.5m.5 17c-4.6944 0-8.5-3.8056-8.5-8.5 0-2.8256 1.3787-5.329 3.5-6.8746M11 22.4l2-2-2-2m2-12.8-2-2 2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCcw04);
const Memo = memo(ForwardRef);
export default Memo;
