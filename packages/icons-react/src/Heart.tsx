import * as React from 'react';
import { SVGProps } from 'react';
const Heart = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.9938 4.9222c-1.7994-2.1036-4.8-2.6695-7.0546-.7432-2.2545 1.9263-2.572 5.147-.8014 7.4254 1.472 1.8942 5.927 5.8893 7.3871 7.1823.1633.1447.245.217.3403.2455a.4542.4542 0 0 0 .2573 0c.0953-.0285.1769-.1008.3403-.2455 1.4601-1.293 5.915-5.2881 7.3871-7.1823 1.7705-2.2783 1.4918-5.5193-.8015-7.4254-2.2933-1.906-5.2551-1.3604-7.0546.7432Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Heart;
