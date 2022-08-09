import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 1400 700"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M856.3,320.6H804l-14.6-45c-3.2-9.9-12.4-16.6-22.8-16.6h-98.1c-5.7-21.4-13.1-39.1-16.1-45.9    c1.1-1.1,1.5-2.8,0.8-4.3l-2.5-5.8c-0.8-1.9-3.1-2.9-5.1-2c-1.9,0.8-2.9,3.1-2,5.1l2.5,5.8c0.5,1.2,1.5,2,2.7,2.2    c2.8,6.4,10.6,24.7,16.4,46.8h-29.3l-59.6,59.6h-73.6c-5.5,0-9.9,4.4-9.9,9.9v11.6h-1c-1,0-1.9,0.8-1.9,1.9v7.3    c0,1,0.8,1.9,1.9,1.9h1v44.9l3.7,0.8c0,0.9-0.1,1.8-0.1,2.7c0,0.9,0,1.8,0.1,2.7l-3.7,0.8l1.3,8.7l3.8-0.2    c0.4,1.8,0.9,3.5,1.5,5.1l-3.3,1.8l3.7,8l3.6-1.3c0.9,1.6,1.9,3.1,2.9,4.5l-2.7,2.7l5.8,6.7l3.1-2.3c1.3,1.2,2.6,2.4,4,3.5    l-1.8,3.4l7.4,4.8l2.3-3c1.6,0.8,3.2,1.6,4.9,2.2l-0.8,3.7l8.4,2.5l1.4-3.5c1.7,0.3,3.5,0.6,5.3,0.8l0.3,3.8h8.8l0.3-3.8    c1.8-0.2,3.6-0.4,5.3-0.8l1.4,3.5l8.4-2.5l-0.8-3.7c1.7-0.7,3.3-1.4,4.9-2.2l2.3,3l7.4-4.8l-1.8-3.4c1.4-1.1,2.8-2.3,4-3.5    l3.1,2.3l5.8-6.7l-2.7-2.7c1-1.4,2-3,2.9-4.5l3.6,1.3l3.7-8l-3.3-1.8c0.6-1.7,1.1-3.4,1.5-5.1l3.8,0.2l1.3-8.7l-3.7-0.8    c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0-1.8-0.1-2.7l3.7-0.8h178.3l3.7,0.8c0,0.9-0.1,1.8-0.1,2.7c0,0.9,0,1.8,0.1,2.7l-3.7,0.8l1.3,8.7    l3.8-0.2c0.4,1.8,0.9,3.5,1.5,5.1l-3.3,1.8l3.7,8l3.6-1.3c0.9,1.6,1.9,3.1,2.9,4.5l-2.7,2.7l5.8,6.7l3.1-2.3    c1.3,1.2,2.6,2.4,4,3.5l-1.8,3.4l7.4,4.8l2.3-3c1.6,0.8,3.2,1.6,4.9,2.2l-0.8,3.7l8.4,2.5l1.4-3.5c1.7,0.3,3.5,0.6,5.3,0.8    l0.3,3.8h8.8l0.3-3.8c1.8-0.2,3.6-0.4,5.3-0.8l1.4,3.5l8.4-2.5l-0.8-3.7c1.7-0.7,3.3-1.4,4.9-2.2l2.3,3l7.4-4.8l-1.8-3.4    c1.4-1.1,2.8-2.3,4-3.5l3.1,2.3l5.8-6.7l-2.7-2.7c1-1.4,2-3,2.9-4.5l3.6,1.3l3.7-8l-3.3-1.8c0.6-1.7,1.1-3.4,1.5-5.1l3.8,0.2    l1.3-8.7l-3.7-0.8c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0-1.8-0.1-2.7l3.7-0.8v-41.3C892.5,336.9,876.3,320.6,856.3,320.6z M835,365.5    v20.1c-1.7,0.2-3.4,0.7-4.9,1.4l-10.9-16.9C824,367.4,829.3,365.8,835,365.5z M855,370.1L844.1,387c-1.5-0.7-3.1-1.2-4.9-1.4    v-20.1C844.9,365.8,850.3,367.4,855,370.1z M815.8,372.4l10.9,16.9c-1.3,1.1-2.4,2.4-3.3,3.8l-18.3-8.3    C807.6,379.8,811.3,375.6,815.8,372.4z M847.6,389.2l10.9-16.9c4.5,3.2,8.1,7.5,10.7,12.4l-18.3,8.3    C850.1,391.6,848.9,390.3,847.6,389.2z M803.3,388.6l18.3,8.3c-0.5,1.5-0.7,3.1-0.7,4.8c0,0.1,0,0.1,0,0.2l-19.9,2.9    c-0.1-1-0.1-2-0.1-3.1C800.8,397.1,801.7,392.6,803.3,388.6z M821.4,406.1c0.5,1.7,1.2,3.2,2.1,4.6l-15.2,13.1    c-3.3-4.3-5.7-9.4-6.8-14.9L821.4,406.1z M826.3,413.9c1.3,1.1,2.7,2.1,4.3,2.7l-5.7,19.3c-5.3-1.9-10-4.9-13.8-8.9L826.3,413.9z     M834.6,417.8c0.8,0.1,1.7,0.2,2.5,0.2s1.7-0.1,2.5-0.2l5.7,19.3c-2.6,0.6-5.4,0.9-8.2,0.9c-2.8,0-5.6-0.3-8.2-0.9L834.6,417.8z     M849.4,435.9l-5.7-19.3c1.6-0.7,3-1.6,4.3-2.7l15.2,13.1C859.3,430.9,854.6,434,849.4,435.9z M865.9,423.8l-15.2-13.1    c0.9-1.4,1.6-3,2.1-4.6l19.9,2.9C871.6,414.5,869.2,419.5,865.9,423.8z M873.4,401.7c0,1-0.1,2.1-0.1,3.1l-19.9-2.9    c0-0.1,0-0.1,0-0.2c0-1.7-0.3-3.3-0.7-4.8l18.3-8.3C872.6,392.6,873.4,397.1,873.4,401.7z M641.9,269.5h24v51.1h-24V269.5z     M684.5,272.5h70c10.4,0,19.6,6.7,22.8,16.6l10.3,31.5h-103V272.5z M546,365.5v20.1c-1.7,0.2-3.4,0.7-4.9,1.4l-10.9-16.9    C535,367.4,540.3,365.8,546,365.5z M565.9,370.1L555.1,387c-1.5-0.7-3.1-1.2-4.9-1.4v-20.1C555.9,365.8,561.2,367.4,565.9,370.1z     M526.7,372.4l10.9,16.9c-1.3,1.1-2.4,2.4-3.3,3.8l-18.3-8.3C518.6,379.8,522.3,375.6,526.7,372.4z M558.6,389.2l10.9-16.9    c4.5,3.2,8.1,7.5,10.7,12.4l-18.3,8.3C561,391.6,559.9,390.3,558.6,389.2z M514.3,388.6l18.3,8.3c-0.5,1.5-0.7,3.1-0.7,4.8    c0,0.1,0,0.1,0,0.2l-19.9,2.9c-0.1-1-0.1-2-0.1-3.1C511.8,397.1,512.7,392.6,514.3,388.6z M532.4,406.1c0.5,1.7,1.2,3.2,2.1,4.6    l-15.2,13.1c-3.3-4.3-5.7-9.4-6.8-14.9L532.4,406.1z M537.3,413.9c1.3,1.1,2.7,2.1,4.3,2.7l-5.7,19.3c-5.3-1.9-10-4.9-13.8-8.9    L537.3,413.9z M545.6,417.8c0.8,0.1,1.7,0.2,2.5,0.2s1.7-0.1,2.5-0.2l5.7,19.3c-2.6,0.6-5.4,0.9-8.2,0.9c-2.8,0-5.6-0.3-8.2-0.9    L545.6,417.8z M560.3,435.9l-5.7-19.3c1.6-0.7,3-1.6,4.3-2.7l15.2,13.1C570.3,430.9,565.6,434,560.3,435.9z M576.9,423.8    l-15.2-13.1c0.9-1.4,1.6-3,2.1-4.6l19.9,2.9C582.6,414.5,580.2,419.5,576.9,423.8z M584.4,401.7c0,1-0.1,2.1-0.1,3.1l-19.9-2.9    c0-0.1,0-0.1,0-0.2c0-1.7-0.3-3.3-0.7-4.8l18.3-8.3C583.5,392.6,584.4,397.1,584.4,401.7z M588.3,320.6l45.1-45.1v45.1H588.3z     M611.9,353.3c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4h177.8c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4H611.9z"/>
    </svg>
  );
};

Image.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Image.defaultProps = {
  size: '180'
};

export default Image;
