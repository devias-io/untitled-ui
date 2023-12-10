import * as React from 'react';
import { SVGProps } from 'react';
const ArrowBlockLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 12 7-7v4h10.2c.28 0 .42 0 .527.0545a.4996.4996 0 0 1 .2185.2185C21 9.38 21 9.52 21 9.8v4.4c0 .28 0 .42-.0545.527a.4994.4994 0 0 1-.2185.2185C20.62 15 20.48 15 20.2 15H10v4l-7-7Z"
    />
  </svg>
);
export default ArrowBlockLeft;
