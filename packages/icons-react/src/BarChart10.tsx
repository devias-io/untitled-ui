import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChart10 = (
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
      d="M9 7H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 7.76 3 8.04 3 8.6v10.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V4.6c0-.56 0-.84.109-1.054a1.0001 1.0001 0 0 1 .437-.437C9.76 3 10.04 3 10.6 3h2.8c.5601 0 .8401 0 1.054.109a1 1 0 0 1 .437.437C15 3.76 15 4.04 15 4.6V21m0-10h4.4c.5601 0 .8401 0 1.054.109a.9998.9998 0 0 1 .437.437c.109.2139.109.4939.109 1.054v6.8c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C20.2401 21 19.9601 21 19.4 21H15"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart10);
const Memo = memo(ForwardRef);
export default Memo;
