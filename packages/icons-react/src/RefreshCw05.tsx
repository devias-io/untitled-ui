import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const RefreshCw05 = (
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
      d="M20.453 12.893c-.2778 2.6099-1.7566 5.0557-4.2036 6.4684-4.0655 2.3472-9.264.9543-11.6112-3.1112l-.25-.433m-.842-4.7102c.2777-2.6099 1.7565-5.0556 4.2035-6.4684 4.0655-2.3472 9.264-.9543 11.6112 3.1112l.25.433M3.4932 18.0662l.732-2.7321 2.732.7321m10.0852-8.132 2.732.732.7321-2.732"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCw05);
const Memo = memo(ForwardRef);
export default Memo;
