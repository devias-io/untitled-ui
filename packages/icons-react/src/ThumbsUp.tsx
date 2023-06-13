import * as React from 'react';
import { SVGProps } from 'react';
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 21v-9.9M2 12.9v6.3c0 .9941.8059 1.8 1.8 1.8h12.0836c1.3327 0 2.466-.9723 2.6686-2.2894l.9693-6.3C19.7731 10.775 18.5076 9.3 16.8529 9.3H13.7a.9.9 0 0 1-.9-.9V5.2193C12.8 3.9936 11.8064 3 10.5807 3a.7398.7398 0 0 0-.676.4393l-3.1672 7.1262a.9.9 0 0 1-.8224.5345H3.8c-.9941 0-1.8.8059-1.8 1.8Z"
    />
  </svg>
);
export default ThumbsUp;
