import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Recording02 = (
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
      d="M3 10v4m4.5-3v2M12 6v12m4.5-15v18M21 10v4"
    />
  </svg>
);
const ForwardRef = forwardRef(Recording02);
const Memo = memo(ForwardRef);
export default Memo;
