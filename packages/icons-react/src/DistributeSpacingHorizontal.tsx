import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const DistributeSpacingHorizontal = (
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
      d="M21 21V3M3 21V3m6 5v8c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C10.6022 19 11.0681 19 12 19c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C15 17.3978 15 16.9319 15 16V8c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C13.3978 5 12.9319 5 12 5c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C9 6.6022 9 7.0681 9 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(DistributeSpacingHorizontal);
const Memo = memo(ForwardRef);
export default Memo;
