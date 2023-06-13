import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BellOff01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.0698 3.9303A5.4 5.4 0 0 1 16.5 8.4c0 1.8907.2432 3.3761.5836 4.5292M5.9328 6.8315A5.3983 5.3983 0 0 0 5.7 8.4c0 2.7812-.7016 4.6854-1.4853 5.9449-.661 1.0624-.9916 1.5936-.9795 1.7418.0134.1641.0482.2266.1804.3247.1194.0886.6577.0886 1.7344.0886H15.6m-6.8812 3.6c.6346.5601 1.4682.9 2.3812.9.913 0 1.7466-.3399 2.3812-.9m5.7188 0L3 3.9"
    />
  </svg>
);
const ForwardRef = forwardRef(BellOff01);
const Memo = memo(ForwardRef);
export default Memo;
