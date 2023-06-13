import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ParagraphWrap = (
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
      d="M3 6h18M3 12h15a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2M3 18h7"
    />
  </svg>
);
const ForwardRef = forwardRef(ParagraphWrap);
const Memo = memo(ForwardRef);
export default Memo;
