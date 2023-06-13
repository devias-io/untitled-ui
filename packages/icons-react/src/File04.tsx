import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const File04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13 3.2425V6.96c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981h3.7175m.2425 1.7894V16.68c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C6.0517 3 6.8078 3 8.32 3h2.8906c.6604 0 .9906 0 1.3013.0746.2755.0661.5389.1752.7805.3233.2724.167.5059.4004.9729.8674l2.8694 2.8694c.467.467.7005.7005.8674.973a2.696 2.696 0 0 1 .3233.7804c.0746.3107.0746.641.0746 1.3013Z"
    />
  </svg>
);
const ForwardRef = forwardRef(File04);
const Memo = memo(ForwardRef);
export default Memo;
