import * as React from 'react';
import { SVGProps } from 'react';
const BarLineChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 20v-7m-8 7V10M4 20v-4m9.4067-10.9725 5.1684 1.9382m-7.7763-1.5648L5.2002 9.6m15.8605-3.1606c.5857.5858.5857 1.5356 0 2.1214-.5858.5857-1.5356.5857-2.1214 0-.5857-.5858-.5857-1.5356 0-2.1214.5858-.5857 1.5356-.5857 2.1214 0Zm-16 3c.5857.5858.5857 1.5356 0 2.1214-.5858.5857-1.5356.5857-2.1214 0-.5857-.5858-.5857-1.5356 0-2.1214.5858-.5857 1.5356-.5857 2.1214 0Zm8-6c.5857.5858.5857 1.5356 0 2.1214-.5858.5857-1.5356.5857-2.1214 0-.5857-.5858-.5857-1.5356 0-2.1214.5858-.5857 1.5356-.5857 2.1214 0Z"
    />
  </svg>
);
export default BarLineChart;
