import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CodeSnippet01 = (
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
      d="m15.6 16.8 5.4-5.4L15.6 6M8.4 6 3 11.4l5.4 5.4"
    />
  </svg>
);
const ForwardRef = forwardRef(CodeSnippet01);
const Memo = memo(ForwardRef);
export default Memo;
