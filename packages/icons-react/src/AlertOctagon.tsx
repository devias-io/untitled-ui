import * as React from 'react';
import { SVGProps } from 'react';
const AlertOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.8522 2.4218c.1557-.1557.2335-.2335.3243-.2892a.9.9 0 0 1 .2602-.1077C8.5403 2 8.6503 2 8.8705 2h6.259c.2202 0 .3302 0 .4338.0249a.9015.9015 0 0 1 .2602.1077c.0908.0557.1686.1335.3243.2892l4.4304 4.4304c.1557.1557.2335.2335.2892.3243a.9.9 0 0 1 .1077.2602C21 7.5403 21 7.6503 21 7.8705v6.259c0 .2202 0 .3302-.0249.4338a.9014.9014 0 0 1-.1077.2602c-.0557.0908-.1335.1686-.2892.3243l-4.4304 4.4304c-.1557.1557-.2335.2335-.3243.2892a.9014.9014 0 0 1-.2602.1077C15.4597 20 15.3497 20 15.1295 20h-6.259c-.2202 0-.3302 0-.4338-.0249a.9.9 0 0 1-.2602-.1077c-.0908-.0557-.1686-.1335-.3243-.2892l-4.4304-4.4304c-.1557-.1557-.2335-.2335-.2892-.3243a.9015.9015 0 0 1-.1077-.2602C3 14.4597 3 14.3497 3 14.1295v-6.259c0-.2202 0-.3302.0249-.4338a.9.9 0 0 1 .1077-.2602c.0557-.0908.1335-.1686.2892-.3243l4.4304-4.4304Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7.4V11m0 3.6h.009M3 7.8705v6.259c0 .2202 0 .3302.0249.4338a.9015.9015 0 0 0 .1077.2602c.0557.0908.1335.1686.2892.3243l4.4304 4.4304c.1557.1557.2335.2335.3243.2892a.9.9 0 0 0 .2602.1077C8.5403 20 8.6503 20 8.8705 20h6.259c.2202 0 .3302 0 .4338-.0249a.9014.9014 0 0 0 .2602-.1077c.0908-.0557.1686-.1335.3243-.2892l4.4304-4.4304c.1557-.1557.2335-.2335.2892-.3243a.9014.9014 0 0 0 .1077-.2602C21 14.4597 21 14.3497 21 14.1295v-6.259c0-.2202 0-.3302-.0249-.4338a.9.9 0 0 0-.1077-.2602c-.0557-.0908-.1335-.1686-.2892-.3243l-4.4304-4.4304c-.1557-.1557-.2335-.2335-.3243-.2892a.9015.9015 0 0 0-.2602-.1077C15.4597 2 15.3497 2 15.1295 2h-6.259c-.2202 0-.3302 0-.4338.0249a.9.9 0 0 0-.2602.1077c-.0908.0557-.1686.1335-.3243.2892L3.4218 6.8522c-.1557.1557-.2335.2335-.2892.3243a.9.9 0 0 0-.1077.2602C3 7.5403 3 7.6503 3 7.8705Z"
    />
  </svg>
);
export default AlertOctagon;