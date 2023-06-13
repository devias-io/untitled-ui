import * as React from 'react';
import { SVGProps } from 'react';
const HeartCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.9969 9.3611c-.8997-1.0518-2.4-1.3348-3.5273-.3716-1.1273.9632-1.286 2.5735-.4007 3.7127.567.7296 2.0191 2.0826 2.9899 2.9611.3226.292.4839.4379.6771.4965a.9217.9217 0 0 0 .522 0c.1932-.0586.3545-.2045.6771-.4965.9708-.8785 2.4229-2.2315 2.9899-2.9611.8853-1.1392.746-2.7597-.4007-3.7127-1.1466-.953-2.6276-.6802-3.5273.3716Z"
      clipRule="evenodd"
    />
  </svg>
);
export default HeartCircle;
