import React from 'react';

const TabButton = props => {
    
    if( props.isCurrent ) {
        return(
            <svg width={333.352} height={60} {...props}>
                <path d="M27.228 0h304.124v60H27.228L0 30.076z" fill={props.areaColor} />
                <g fill="none">
                    <path d="M29.228 4h304.124v52H29.228L6.386 29.927z" />
                    <path
                        d="M30.132 6L9.048 29.93 30.135 54h301.217V6H30.132m-.904-2h304.124v52H29.228L6.386 29.927 29.228 4z"
                        fill="#e4e2c5"
                    />
                </g>
                <path
                d="M38.106 24.234l-1.665 3.384-3.735.545a.818.818 0 00-.452 1.4l2.7 2.633-.638 3.715a.818.818 0 001.19.861l3.341-1.756 3.341 1.756a.818.818 0 001.186-.861l-.643-3.72 2.7-2.633a.818.818 0 00-.452-1.4l-3.733-.54-1.669-3.384a.819.819 0 00-1.471 0z"
                fill="#e4e2c5"
                />
            </svg>
        );
    }
    else {
        <svg width={333.352} height={60} {...props}>
            <g fill="#d6ccb2">
                <path d="M27.228 0h304.124v60H27.228L0 30.076z" />
                <path d="M332.352 55H29.682L7.717 29.929 29.68 5h302.672v50z" />
                <path
                    d="M30.132 6L9.048 29.93 30.135 54h301.217V6H30.132m-.904-2h304.124v52H29.228L6.386 29.927 29.228 4z"
                    fill="#e4e2c5"
                />
            </g>
        </svg>
    }
}

CalendarRibbon.defaultProps = {
    areaColor: "#193c46",
    isCurrent: false
}
export default TabButton;
