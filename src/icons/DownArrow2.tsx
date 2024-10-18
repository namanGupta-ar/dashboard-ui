import React from 'react';

function DownArrow2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 14 14" {...props}>
      <path
        d="M11.0846 7.77776L7.0013 11.6666M7.0013 11.6666L2.91797 7.77776M7.0013 11.6666L7.0013 2.33331"
        stroke="#3E6259"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const MemoDownArrow2 = React.memo(DownArrow2);
export default MemoDownArrow2;
