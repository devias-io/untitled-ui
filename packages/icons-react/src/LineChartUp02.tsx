import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LineChartUp02 = (
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
      d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.2401 3 19.9601 3 19.4V3m18 4-5.4343 5.4343c-.198.198-.297.297-.4112.3341a.499.499 0 0 1-.309 0c-.1142-.0371-.2132-.1361-.4112-.3341l-1.8686-1.8686c-.198-.198-.297-.297-.4112-.3341a.499.499 0 0 0-.309 0c-.1142.0371-.2132.1361-.4112.3341L7 15m14-8h-4m4 0v4"
    />
  </svg>
);
const ForwardRef = forwardRef(LineChartUp02);
const Memo = memo(ForwardRef);
export default Memo;
