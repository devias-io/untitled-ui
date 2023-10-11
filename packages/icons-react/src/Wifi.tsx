import * as React from 'react';
import { SVGProps } from 'react';
const Wifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19.5h.01M22.8064 8.7008C19.9595 6.092 16.1656 4.5 11.9999 4.5c-4.1658 0-7.9597 1.592-10.8065 4.2008m3.5385 3.5422C6.6701 10.5357 9.2141 9.5 12 9.5s5.3299 1.0357 7.268 2.743m-3.5697 3.5321A5.9743 5.9743 0 0 0 11.9999 14.5a5.9747 5.9747 0 0 0-3.7445 1.3116"
    />
  </svg>
);
export default Wifi;
