import * as React from 'react';
import { SVGProps } from 'react';
const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 4.9895c0-.9711 0-1.4567.2025-1.7244a1 1 0 0 1 .7379-.395c.335-.02.739.2494 1.5471.7881l10.5156 7.0104c.6677.4451 1.0015.6677 1.1178.9482a.9993.9993 0 0 1 0 .7662c-.1163.2805-.4501.503-1.1178.9482L7.4875 20.3415c-.808.5387-1.212.8081-1.5471.7881a.9998.9998 0 0 1-.738-.3949C5 20.467 5 19.9814 5 19.0103V4.9895Z"
    />
  </svg>
);
export default Play;
