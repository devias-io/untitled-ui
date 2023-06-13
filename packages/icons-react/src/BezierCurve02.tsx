import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BezierCurve02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.1998 18.437c-2.7791-.6703-4.9666-2.8579-5.6368-5.6371m14.8742.0001c-.6703 2.7791-2.8578 4.9666-5.6368 5.6369m-.0002-14.874c2.7791.6703 4.9667 2.8578 5.637 5.637M4.5632 9.2c.6702-2.7792 2.8578-4.9668 5.637-5.637M4.44 12.8h.72c.504 0 .756 0 .9486-.0981a.9003.9003 0 0 0 .3933-.3933C6.6 12.1161 6.6 11.864 6.6 11.36v-.72c0-.504 0-.756-.098-.9486a.9.9 0 0 0-.3934-.3933C5.916 9.2 5.664 9.2 5.16 9.2h-.72c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C3 9.884 3 10.136 3 10.64v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Zm14.4 0h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 12.1161 21 11.864 21 11.36v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C20.3161 9.2 20.064 9.2 19.56 9.2h-.72c-.504 0-.7561 0-.9486.098a.9003.9003 0 0 0-.3933.3934c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Zm-7.2-7.2h.72c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C13.8 4.916 13.8 4.664 13.8 4.16v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C13.1161 2 12.864 2 12.36 2h-.72c-.504 0-.7561 0-.9486.098a.9003.9003 0 0 0-.3933.3934C10.2 2.684 10.2 2.936 10.2 3.44v.72c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Zm0 14.4h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C13.1161 16.4 12.864 16.4 12.36 16.4h-.72c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933C10.8839 20 11.136 20 11.64 20Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BezierCurve02);
const Memo = memo(ForwardRef);
export default Memo;
