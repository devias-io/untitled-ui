import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const RefreshCw04 = (
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
      d="M17 5.1254c2.1213 1.5455 3.5 4.049 3.5 6.8746 0 4.6944-3.8056 8.5-8.5 8.5h-.5M7 18.8746C4.8787 17.329 3.5 14.8255 3.5 12c0-4.6944 3.8056-8.5 8.5-8.5h.5m.5 18.9-2-2 2-2M11 5.6l2-2-2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCw04);
const Memo = memo(ForwardRef);
export default Memo;
