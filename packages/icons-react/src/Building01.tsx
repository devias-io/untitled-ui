import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Building01 = (
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
      d="M15 21v-5.4c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C14.2401 14 13.9601 14 13.4 14h-2.8c-.5601 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 14.7599 9 15.0399 9 15.6V21m10 0V6.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C17.4802 3 16.9201 3 15.8 3H8.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C5 4.5198 5 5.08 5 6.2V21m16 0H3M9.5 8h.01m4.99 0h.01M10 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Building01);
const Memo = memo(ForwardRef);
export default Memo;
