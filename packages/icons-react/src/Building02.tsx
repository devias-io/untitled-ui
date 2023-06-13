import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Building02 = (
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
      d="M15 21v-5.4c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C14.2401 14 13.9601 14 13.4 14h-2.8c-.5601 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 14.7599 9 15.0399 9 15.6V21M3 7c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3M6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4802 21 18.9201 21 17.8V6.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C19.4802 3 18.9201 3 17.8 3H6.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C3 4.5198 3 5.08 3 6.2v11.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Building02);
const Memo = memo(ForwardRef);
export default Memo;
