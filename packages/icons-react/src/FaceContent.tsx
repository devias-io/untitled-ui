import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FaceContent = (
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
      d="M8.4 12.8s1.35 1.8 3.6 1.8 3.6-1.8 3.6-1.8m.9-4.284c-.3555.4365-.8415.684-1.35.684-.5085 0-.981-.2475-1.35-.684m-3.6 0c-.3555.4365-.8415.684-1.35.684-.5085 0-.981-.2475-1.35-.684M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(FaceContent);
const Memo = memo(ForwardRef);
export default Memo;
