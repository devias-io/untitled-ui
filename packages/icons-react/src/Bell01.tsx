import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bell01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.7449 20.1c.6346.5601 1.4682.9 2.3812.9.913 0 1.7466-.3399 2.3813-.9m3.0187-11.7a5.4 5.4 0 1 0-10.8 0c0 2.7812-.7016 4.6854-1.4853 5.9449-.661 1.0624-.9916 1.5936-.9795 1.7418.0134.1641.0482.2266.1804.3247.1194.0886.6578.0886 1.7344.0886h11.9c1.0767 0 1.615 0 1.7344-.0886.1322-.0981.167-.1606.1804-.3247.0121-.1482-.3184-.6794-.9795-1.7418-.7837-1.2595-1.4853-3.1637-1.4853-5.9449Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bell01);
const Memo = memo(ForwardRef);
export default Memo;
