import * as React from 'react';
import { SVGProps } from 'react';
const FolderDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
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
      d="m12.9 6.6-1.004-2.008c-.2889-.5779-.4334-.8668-.649-1.078a1.7999 1.7999 0 0 0-.6725-.4156C10.2892 3 9.9662 3 9.3201 3H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 4.3678 3 4.872 3 5.88v.72m0 0h13.68c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 8.6517 21 9.4078 21 10.92v3.96c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 17.1482 3 16.3921 3 14.88V6.6Zm6.3 6.3 2.7 2.7m0 0 2.7-2.7M12 15.6v-5.4"
    />
  </svg>
);
export default FolderDownload;
