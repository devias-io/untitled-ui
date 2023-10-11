import * as React from 'react';
import { SVGProps } from 'react';
const PlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M9.75 8.2688c0-.4296 0-.6443.0898-.7642a.45.45 0 0 1 .3281-.1792c.1494-.0107.3301.1055.6914.3377l4.2486 2.7313c.3135.2015.4703.3023.5244.4305a.449.449 0 0 1 0 .3502c-.0541.1282-.2109.229-.5244.4305l-4.2486 2.7312c-.3613.2323-.542.3485-.6914.3378a.45.45 0 0 1-.3281-.1792c-.0898-.1199-.0898-.3346-.0898-.7642V8.2688Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 8.2688c0-.4296 0-.6443.0898-.7642a.45.45 0 0 1 .3281-.1792c.1494-.0107.3301.1055.6914.3377l4.2486 2.7313c.3135.2015.4703.3023.5244.4305a.449.449 0 0 1 0 .3502c-.0541.1282-.2109.229-.5244.4305l-4.2486 2.7312c-.3613.2323-.542.3485-.6914.3378a.45.45 0 0 1-.3281-.1792c-.0898-.1199-.0898-.3346-.0898-.7642V8.2688Z"
    />
  </svg>
);
export default PlayCircle;
