// icon:bx-share | Boxicons https://boxicons.com/ | Atisa
import * as React from 'react';

const Share = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 21"
      fill="currentColor"
      {...props}
    >
      <path
        d="M17.9422 9.06718L14.1922 12.8172C14.0749 12.9345 13.9159 13.0003 13.75 13.0003C13.5841 13.0003 13.4251 12.9345 13.3078 12.8172C13.1905 12.6999 13.1247 12.5408 13.1247 12.375C13.1247 12.2091 13.1905 12.0501 13.3078 11.9328L15.9914 9.25H12.8906C11.3661 9.24957 9.88475 9.75586 8.67941 10.6892C7.47407 11.6226 6.61315 12.9302 6.23203 14.4062C6.19059 14.5668 6.08706 14.7044 5.94421 14.7886C5.80136 14.8729 5.63089 14.8969 5.47031 14.8555C5.30973 14.814 5.17219 14.7105 5.08795 14.5676C5.0037 14.4248 4.97965 14.2543 5.02109 14.0937C5.47079 12.3488 6.48809 10.8031 7.91281 9.69986C9.33752 8.59664 11.0887 7.99863 12.8906 8H15.993L13.3078 5.31718C13.2497 5.25912 13.2037 5.19018 13.1723 5.11431C13.1408 5.03844 13.1247 4.95712 13.1247 4.875C13.1247 4.79287 13.1408 4.71156 13.1723 4.63569C13.2037 4.55982 13.2497 4.49088 13.3078 4.43281C13.4251 4.31553 13.5841 4.24965 13.75 4.24965C13.8321 4.24965 13.9134 4.26582 13.9893 4.29725C14.0652 4.32868 14.1341 4.37474 14.1922 4.43281L17.9422 8.18281C18.0003 8.24085 18.0464 8.30978 18.0779 8.38566C18.1093 8.46153 18.1255 8.54286 18.1255 8.625C18.1255 8.70713 18.1093 8.78846 18.0779 8.86433C18.0464 8.94021 18.0003 9.00914 17.9422 9.06718ZM15 16.75H3.125V7.375C3.125 7.20924 3.05915 7.05027 2.94194 6.93305C2.82473 6.81584 2.66576 6.75 2.5 6.75C2.33424 6.75 2.17527 6.81584 2.05806 6.93305C1.94085 7.05027 1.875 7.20924 1.875 7.375V17.375C1.875 17.5408 1.94085 17.6997 2.05806 17.8169C2.17527 17.9341 2.33424 18 2.5 18H15C15.1658 18 15.3247 17.9341 15.4419 17.8169C15.5592 17.6997 15.625 17.5408 15.625 17.375C15.625 17.2092 15.5592 17.0503 15.4419 16.9331C15.3247 16.8158 15.1658 16.75 15 16.75Z"
        fill="#031B15"
      />
    </svg>
  );
};

const MemoShare = React.memo(Share);
export default MemoShare;

