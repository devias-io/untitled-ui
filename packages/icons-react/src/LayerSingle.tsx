import * as React from 'react';
import { SVGProps } from 'react';
const LayerSingle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.322 7.167c-.1181-.059-.1771-.0886-.239-.1002a.4502.4502 0 0 0-.166 0c-.0619.0116-.1209.0411-.239.1002L3 11.506l8.678 4.339c.1181.059.1771.0885.239.1001a.4498.4498 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 11.506l-8.678-4.339Z"
    />
  </svg>
);
export default LayerSingle;
