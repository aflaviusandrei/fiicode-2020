import React from 'react';

const CalendarRibbon = (props) => (
  <svg width={324.319} height={536.371} {...props}>
    <defs>
      <filter
        id="prefix__a"
        x={0}
        y={9.621}
        width={324.319}
        height={526.75}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={1.5} result="b" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#prefix__a)">
      <path
        d="M319.82 9.62v516.25l-165.2-37.725L4.501 525.87V9.62z"
        fill={this.props.areaColor}
      />
    </g>
    <g fill="none">
      <path d="M313.414 0v518.789l-158.765-37.911-144.265 37.911V0z" />
      <path
        d="M310.414 3H13.384v511.899l140.502-36.923.728-.191.732.175 155.068 37.028V3m3-3v518.789l-158.765-37.911-144.265 37.91V0h303.03z"
        fill="#fff"
      />
    </g>
  </svg>
);

CalendarRibbon.defaultProps = {
    areaColor: "#193c46"
}

export default CalendarRibbon;
