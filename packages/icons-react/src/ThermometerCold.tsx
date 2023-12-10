import * as React from 'react';
import { SVGProps } from 'react';
const ThermometerCold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11h9-9Zm6.3-7.2v14.4V3.8ZM3.9 8.3 6.6 11l-2.7 2.7M12 5.6 9.3 8.3 6.6 5.6m0 10.8 2.7-2.7 1.35 1.35M15.6 3.8c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v9.4816c1.076.6225 1.8 1.7859 1.8 3.1184 0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.3325.724-2.4959 1.8-3.1184V3.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11h9M9.3 3.8v14.4M3.9 8.3 6.6 11l-2.7 2.7M12 5.6 9.3 8.3 6.6 5.6m0 10.8 2.7-2.7 1.35 1.35m8.55-1.7684V3.8c0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8v9.4816c-1.076.6225-1.8 1.7859-1.8 3.1184 0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6 0-1.3325-.724-2.4959-1.8-3.1184Z"
    />
  </svg>
);
export default ThermometerCold;
