import * as React from 'react';
import { SVGProps } from 'react';
const ArrowBlockUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.8 21c-.28 0-.42 0-.527-.0545a.4996.4996 0 0 1-.2185-.2185C9 20.62 9 20.48 9 20.2V10H5l7-7 7 7h-4v10.2c0 .28 0 .42-.0545.527a.4994.4994 0 0 1-.2185.2185C14.62 21 14.48 21 14.2 21H9.8Z"
    />
  </svg>
);
export default ArrowBlockUp;
