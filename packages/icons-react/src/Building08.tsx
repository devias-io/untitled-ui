import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Building08 = (
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
      d="M3 21h18M6 18v-8m4 8v-8m4 8v-8m4 8v-8m2-3-7.576-4.735c-.1538-.0962-.2307-.1442-.3132-.163a.5001.5001 0 0 0-.2216 0c-.0825.0188-.1594.0668-.3132.163L4 7h16Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Building08);
const Memo = memo(ForwardRef);
export default Memo;
