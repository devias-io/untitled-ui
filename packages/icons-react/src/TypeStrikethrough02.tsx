import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const TypeStrikethrough02 = (
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
      d="M8 20h8m-5.75-9.5V20m3.5-6v6M3 3l18 18M4 7V6c0-.5413.215-1.0323.5642-1.3923M9.5 4H17c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C20 5.6022 20 6.0681 20 7m-9.75-3v1m3.5-1v4"
    />
  </svg>
);
const ForwardRef = forwardRef(TypeStrikethrough02);
const Memo = memo(ForwardRef);
export default Memo;
