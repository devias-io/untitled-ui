import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyPound = (
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
      d="M17.5 20.5h-11s3.5-2.7587 3.5-7c0-2.8275-2.0862-3.8388-2.1163-6.195.002-4.6642 5.6168-4.4162 7.5684-2.5624M6.5 13.5H15"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPound);
const Memo = memo(ForwardRef);
export default Memo;
