import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const RefreshCcw05 = (
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
      d="M8.5466 19.7675c2.3991 1.0644 5.2566 1.0066 7.7036-.4062 4.0655-2.3472 5.4584-7.5457 3.1112-11.6112l-.25-.433M4.6385 16.2502c-2.3472-4.0655-.9543-9.264 3.1112-11.6112 2.447-1.4128 5.3045-1.4706 7.7036-.4062M2.4934 16.3338l2.732.7321.7321-2.7321m12.0851-4.6679.7321-2.732 2.732.732"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCcw05);
const Memo = memo(ForwardRef);
export default Memo;
