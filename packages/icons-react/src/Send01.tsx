import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Send01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m10.4995 13.5001 10.5-10.5M10.6271 13.828l2.6281 6.758c.2315.5954.3473.893.5141.9799a.4996.4996 0 0 0 .4615.0003c.1669-.0867.2831-.3842.5153-.9793l6.5903-16.8878c.2097-.5371.3145-.8057.2571-.9773a.4999.4999 0 0 0-.3158-.3159c-.1716-.0573-.4402.0475-.9774.2571L3.4126 9.2536c-.5951.2322-.8926.3483-.9793.5152a.5.5 0 0 0 .0002.4616c.087.1668.3846.2825.98.5141l6.758 2.6281c.1208.047.1812.0705.2321.1068a.4992.4992 0 0 1 .1167.1167c.0363.0508.0598.1113.1068.2321Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Send01);
const Memo = memo(ForwardRef);
export default Memo;
