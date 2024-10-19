import React from 'react';

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 20 21" {...props}>
      <path
        d="M14.1663 17.8289V16.1622C14.1663 15.2781 13.8152 14.4303 13.19 13.8052C12.5649 13.18 11.7171 12.8289 10.833 12.8289H4.16634C3.28229 12.8289 2.43444 13.18 1.80932 13.8052C1.1842 14.4303 0.833008 15.2781 0.833008 16.1622V17.8289"
        stroke="#7E8986"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50033 9.49552C9.34127 9.49552 10.8337 8.00314 10.8337 6.16219C10.8337 4.32124 9.34127 2.82886 7.50033 2.82886C5.65938 2.82886 4.16699 4.32124 4.16699 6.16219C4.16699 8.00314 5.65938 9.49552 7.50033 9.49552Z"
        stroke="#7E8986"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.167 17.8289V16.1623C19.1664 15.4237 18.9206 14.7062 18.4681 14.1225C18.0156 13.5388 17.3821 13.1219 16.667 12.9373"
        stroke="#7E8986"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.333 2.93726C14.05 3.12084 14.6855 3.53784 15.1394 4.12251C15.5932 4.70719 15.8395 5.42628 15.8395 6.16642C15.8395 6.90656 15.5932 7.62566 15.1394 8.21033C14.6855 8.79501 14.05 9.21201 13.333 9.39559"
        stroke="#7E8986"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const MemoUser = React.memo(User);
export default MemoUser;
