import * as React from 'react';
import { SVGProps } from 'react';
const ImageIndentLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M3 9.6c0-.56 0-.84.109-1.054a1.0001 1.0001 0 0 1 .437-.437C3.76 8 4.04 8 4.6 8h4.8c.56 0 .8401 0 1.054.109a1 1 0 0 1 .437.437C11 8.76 11 9.04 11 9.6v4.8c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C10.2401 16 9.96 16 9.4 16H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 15.2401 3 14.9601 3 14.4V9.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9.25h-6M21 4H3m18 10.75h-6M21 20H3m1.6-4h4.8c.56 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C11 15.2401 11 14.9601 11 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C10.2401 8 9.96 8 9.4 8H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 8.76 3 9.04 3 9.6v4.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 16 4.04 16 4.6 16Z"
    />
  </svg>
);
export default ImageIndentLeft;
