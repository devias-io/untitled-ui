import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const StrikethroughSquare = (
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
      d="M6 12h12m-7 0h2c1.3807 0 2.5 1.1193 2.5 2.5S14.3807 17 13 17h-2.1667c-.995 0-1.8446-.6229-2.18-1.5m6.6935-7c-.3355-.8771-1.1851-1.5-2.1801-1.5H11c-1.0252 0-1.9062.617-2.292 1.5M7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(StrikethroughSquare);
const Memo = memo(ForwardRef);
export default Memo;
