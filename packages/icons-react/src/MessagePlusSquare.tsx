import * as React from 'react';
import { SVGProps } from 'react';
const MessagePlusSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 13.5v-6m-3 3h6M7 18v2.3355c0 .5329 0 .7993.1092.9361a.5.5 0 0 0 .3913.1881c.1751-.0002.3832-.1666.7993-.4995l2.3854-1.9084c.4873-.3898.731-.5847 1.0023-.7233a2.9969 2.9969 0 0 1 .7617-.2672C12.7477 18 13.0597 18 13.6837 18H16.2c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 15.7202 21 14.8802 21 13.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8V14c0 .93 0 1.395.1022 1.7765a3.0001 3.0001 0 0 0 2.1213 2.1213C5.605 18 6.07 18 7 18Z"
    />
  </svg>
);
export default MessagePlusSquare;
