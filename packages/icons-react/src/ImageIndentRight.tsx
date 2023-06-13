import * as React from 'react';
import { SVGProps } from 'react';
const ImageIndentRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 4H3m18 16H3M9 9.25H3m6 5.5H3M14.6 16h4.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 15.2401 21 14.9601 21 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 8 19.9601 8 19.4 8h-4.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C13 8.76 13 9.04 13 9.6v4.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109Z"
    />
  </svg>
);
export default ImageIndentRight;
