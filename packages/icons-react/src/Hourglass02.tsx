import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hourglass02 = (
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
      d="M16.8463 3H5.7537A.7537.7537 0 0 0 5 3.7537a9.0442 9.0442 0 0 0 2.649 6.3953l1.0973 1.0973c.109.109.1635.1634.2025.2158a.8999.8999 0 0 1 0 1.0758c-.039.0524-.0935.1068-.2025.2158L7.649 13.851A9.0442 9.0442 0 0 0 5 20.2463c0 .4163.3374.7537.7537.7537h11.0926a.7536.7536 0 0 0 .7537-.7537 9.0444 9.0444 0 0 0-2.649-6.3953l-1.0973-1.0973c-.109-.109-.1634-.1634-.2025-.2158a.9.9 0 0 1 0-1.0758c.0391-.0524.0935-.1068.2025-.2158l1.0973-1.0973A9.0444 9.0444 0 0 0 17.6 3.7537.7537.7537 0 0 0 16.8463 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Hourglass02);
const Memo = memo(ForwardRef);
export default Memo;
