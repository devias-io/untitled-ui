import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Send03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.5004 12h-5.5m-.0846.2915-2.335 6.9747c-.1834.548-.2751.8219-.2093.9907a.4998.4998 0 0 0 .3314.2998c.1745.0487.438-.0698.9649-.307l16.7114-7.5201c.5144-.2315.7715-.3472.851-.508a.4997.4997 0 0 0 0-.4432c-.0795-.1607-.3366-.2765-.851-.5079L3.6619 3.7478c-.5253-.2364-.788-.3546-.9622-.3062a.5.5 0 0 0-.3315.2992c-.066.1684.0247.4417.2062.9885l2.342 7.0563c.0312.0939.0468.1408.053.1888a.5003.5003 0 0 1-.0002.1284c-.0063.048-.022.0949-.0534.1887Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Send03);
const Memo = memo(ForwardRef);
export default Memo;
