import * as React from 'react';
import { SVGProps } from 'react';
const ZapFast = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 3-6.5964 9.235c-.292.4088-.438.6131-.4317.7835a.5.5 0 0 0 .1942.3773c.135.1042.3861.1042.8885.1042H16L15 21l6.5964-9.235c.292-.4088.438-.6131.4317-.7835a.5.5 0 0 0-.1942-.3773c-.135-.1042-.3861-.1042-.8885-.1042H16L17 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17.5H3.5m3-5.5H2m7-5.5H4M17 3l-6.5964 9.235c-.292.4088-.438.6131-.4317.7835a.5.5 0 0 0 .1942.3773c.135.1042.3861.1042.8885.1042H16L15 21l6.5964-9.235c.292-.4088.438-.6131.4317-.7835a.5.5 0 0 0-.1942-.3773c-.135-.1042-.3861-.1042-.8885-.1042H16L17 3Z"
    />
  </svg>
);
export default ZapFast;
