import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LockUnlocked03 = (
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
      d="M7 11V8c0-2.7614 2.2386-5 5-5 2.419 0 4.4367 1.7178 4.9 4M8.8 21h6.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C20 18.7202 20 17.8802 20 16.2v-.4c0-1.6802 0-2.5202-.327-3.162a2.9994 2.9994 0 0 0-1.311-1.311C17.7202 11 16.8802 11 15.2 11H8.8c-1.6802 0-2.5202 0-3.162.327a2.9997 2.9997 0 0 0-1.311 1.311C4 13.2798 4 14.1198 4 15.8v.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C6.2798 21 7.1198 21 8.8 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LockUnlocked03);
const Memo = memo(ForwardRef);
export default Memo;
