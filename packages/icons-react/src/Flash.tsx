import * as React from 'react';
import { SVGProps } from 'react';
const Flash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="m12.0567 3-8.0159 9.6191c-.3139.3767-.4708.565-.4732.7241a.45.45 0 0 0 .167.3568c.1238.1.369.1.8594.1h6.5627l-.9 7.2 8.0159-9.6191c.314-.3767.4709-.565.4733-.7241a.4498.4498 0 0 0-.1671-.3568c-.1237-.1-.3689-.1-.8593-.1h-6.5628l.9-7.2Z"
    />
  </svg>
);
export default Flash;
