import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Glasses01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.2 11.1812c1.1102-.6416 2.4897-.6416 3.5999 0M9.1456 9.0544c1.4059 1.4059 1.4059 3.6853 0 5.0912s-3.6853 1.4059-5.0912 0-1.4059-3.6853 0-5.0912 3.6853-1.4059 5.0912 0Zm10.8 0c1.4059 1.4059 1.4059 3.6853 0 5.0912s-3.6853 1.4059-5.0912 0-1.4059-3.6853 0-5.0912 3.6853-1.4059 5.0912 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Glasses01);
const Memo = memo(ForwardRef);
export default Memo;
