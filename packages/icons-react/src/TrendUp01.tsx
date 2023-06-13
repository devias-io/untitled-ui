import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const TrendUp01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 7-7.0818 7.0818c-.3564.3564-.5346.5346-.7401.6014a.9004.9004 0 0 1-.5562 0c-.2055-.0668-.3837-.245-.7401-.6014l-2.4636-2.4636c-.3564-.3564-.5346-.5346-.74-.6014a.9005.9005 0 0 0-.5563 0c-.2055.0668-.3837.245-.7401.6014L3 16m18-9h-6.3M21 7v6.3"
    />
  </svg>
);
const ForwardRef = forwardRef(TrendUp01);
const Memo = memo(ForwardRef);
export default Memo;
