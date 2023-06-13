import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CoinsSwap02 = (
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
      d="m6.6 5.6 1.8-1.8m0 0L6.6 2m1.8 1.8H6.6C4.6118 3.8 3 5.4118 3 7.4m14.4 9-1.8 1.8m0 0 1.8 1.8m-1.8-1.8h1.8c1.9882 0 3.6-1.6118 3.6-3.6M10.3701 6.05C10.9696 3.721 13.0838 2 15.6 2 18.5823 2 21 4.4177 21 7.4c0 2.5162-1.7209 4.6304-4.0499 5.2299M13.8 14.6c0 2.9823-2.4177 5.4-5.4 5.4C5.4177 20 3 17.5823 3 14.6c0-2.9823 2.4177-5.4 5.4-5.4 2.9823 0 5.4 2.4177 5.4 5.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsSwap02);
const Memo = memo(ForwardRef);
export default Memo;
