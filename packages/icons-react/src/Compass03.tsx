import * as React from 'react';
import { SVGProps } from 'react';
const Compass03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.4499 7.6394c.4397-.1466.6595-.2199.8057-.1677a.4496.4496 0 0 1 .2727.2727c.0522.1462-.0211.366-.1677.8057l-1.3388 4.0164c-.0417.1252-.0626.1878-.0981.2398a.4489.4489 0 0 1-.1174.1174c-.052.0355-.1146.0564-.2398.0981l-4.0164 1.3388c-.4397.1466-.6595.2199-.8057.1677a.4496.4496 0 0 1-.2727-.2727c-.0522-.1462.0211-.366.1677-.8057l1.3388-4.0164c.0417-.1252.0626-.1878.0981-.2398a.4495.4495 0 0 1 .1174-.1174c.052-.0355.1146-.0564.2398-.0981l4.0164-1.3388Z"
    />
  </svg>
);
export default Compass03;
