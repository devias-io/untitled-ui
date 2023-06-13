import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BracketsEllipses = (
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
      d="M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20M7.5 12h.01M12 12h.01m4.49 0h.01M8 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BracketsEllipses);
const Memo = memo(ForwardRef);
export default Memo;
