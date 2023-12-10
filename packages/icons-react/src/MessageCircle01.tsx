import * as React from 'react';
import { SVGProps } from 'react';
const MessageCircle01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.9996 11.5c0 4.6944-3.8056 8.5-8.5 8.5-1.0768 0-2.1068-.2002-3.0548-.5655-.1734-.0667-.26-.1001-.329-.116a.901.901 0 0 0-.1863-.0248c-.0707-.0027-.1482.0053-.3033.0213l-5.121.5294c-.4883.0504-.7324.0757-.8764-.0122a.5.5 0 0 1-.2336-.3494c-.0261-.1667.0905-.3826.3239-.8144l1.6356-3.0276c.1347-.2493.202-.374.2326-.4939.0301-.1183.0374-.2037.0278-.3255-.0098-.1233-.064-.2838-.1721-.6048A8.4898 8.4898 0 0 1 3.9996 11.5c0-4.6944 3.8056-8.5 8.5-8.5s8.5 3.8056 8.5 8.5Z"
    />
  </svg>
);
export default MessageCircle01;
