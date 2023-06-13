import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 9v8m4.5-8v8m5-8v8M19 9v8M3 18.6v.8c0 .5601 0 .8401.109 1.054a.9994.9994 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h14.8c.5601 0 .8401 0 1.054-.109a.9993.9993 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-.8c0-.56 0-.8401-.109-1.054a1.0003 1.0003 0 0 0-.437-.437C20.2401 17 19.9601 17 19.4 17H4.6c-.56 0-.84 0-1.054.109a1.0005 1.0005 0 0 0-.437.437C3 17.7599 3 18.04 3 18.6Zm8.6529-15.5229-7.4 1.6445c-.447.0993-.6706.149-.8374.2692a1 1 0 0 0-.3344.4168C3 5.5966 3 5.8256 3 6.2835V7.4c0 .56 0 .8401.109 1.054.0959.1882.2489.3411.437.437C3.76 9 4.04 9 4.6 9h14.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.2401 21 7.96 21 7.4V6.2835c0-.458 0-.687-.0812-.876a.9992.9992 0 0 0-.3343-.4167c-.1668-.1202-.3903-.1699-.8374-.2692l-7.4-1.6444c-.1295-.0288-.1943-.0432-.2597-.049a1.0004 1.0004 0 0 0-.1748 0c-.0654.0058-.1302.0202-.2597.049Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bank);
const Memo = memo(ForwardRef);
export default Memo;
