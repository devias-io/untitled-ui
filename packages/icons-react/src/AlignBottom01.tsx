import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignBottom01 = (
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
      d="M3 21h18M12 3v14m0 0 7-7m-7 7-7-7"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignBottom01);
const Memo = memo(ForwardRef);
export default Memo;
