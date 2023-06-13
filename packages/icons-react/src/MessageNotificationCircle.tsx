import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MessageNotificationCircle = (
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
      d="M11.707 3.0365C7.3842 3.4362 3.9996 7.0728 3.9996 11.5c0 .95.1559 1.8636.4434 2.7166.1082.321.1623.4815.172.6048.0097.1218.0024.2072-.0277.3255-.0305.1199-.0979.2446-.2326.4939l-1.6356 3.0276c-.2334.4318-.35.6477-.3239.8144a.5.5 0 0 0 .2336.3494c.144.0879.3881.0626.8764.0122l5.121-.5294c.155-.016.2326-.024.3033-.0213a.901.901 0 0 1 .1864.0248c.0689.0159.1555.0493.3289.116.948.3653 1.978.5655 3.0548.5655 4.4308 0 8.0698-3.3902 8.4645-7.7181m-.8432-8.4032c1.1716 1.1716 1.1716 3.071 0 4.2426-1.1715 1.1716-3.071 1.1716-4.2426 0-1.1716-1.1715-1.1716-3.071 0-4.2426 1.1716-1.1716 3.0711-1.1716 4.2426 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MessageNotificationCircle);
const Memo = memo(ForwardRef);
export default Memo;
