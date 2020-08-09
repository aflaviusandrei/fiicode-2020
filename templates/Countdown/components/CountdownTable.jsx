import React from 'react';
import styled from 'styled-components';

const CountdownTable = styled.table`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    background: transparent;
    border: 1px solid rgb(212, 192, 192)212, 192, 192);
    padding: 2vw;
    box-shadow: 0 0 5px 3px #bbb;
    border-spacing: 3vw;
`;

const TimerRow = styled.tr`
    font-size: 7vw;
    -webkit-text-stroke: 0.5vw;
`;

const TableDataWithPadding = styled.td`
    padding: 0 0.3vw 0 0.3vw;
    color: white;
`;

const RegularRow = styled.tr`
`;


const CountdownTable = () => {

    const CountdownDate = new Date("Dec 4, 2019").getTime();
    var days,hours,minutes,seconds;
    
    const tick = () => {

        let now =new Date().getTime();
        let distance = CountdownDate - now;
    
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        days=(days<10) ? "0" + days : days;
        hours=(hours<10) ? "0" + hours : hours;
        minutes=(minutes<10) ? "0" + minutes : minutes;
        seconds=(seconds<10) ? "0" + seconds : seconds;
    
        if (distance < 0) {
    
            clearInterval(Update);
            days= "00";
            hours= "00";
            minutes= "00";
            seconds= "00";
        }
    };
    setInterval(tick,1000);

    return(
    <div>
        <CountdownTable>
            <TimerRow>
                <TableDataWithPadding>${days}</TableDataWithPadding>
                <TableDataWithPadding>:</TableDataWithPadding>
                <TableDataWithPadding>${hours}</TableDataWithPadding>
                <TableDataWithPadding>:</TableDataWithPadding>
                <TableDataWithPadding>${minutes}</TableDataWithPadding>
                <TableDataWithPadding>:</TableDataWithPadding>
                <TableDataWithPadding>${seconds}</TableDataWithPadding>
            </TimerRow>

            <RegularRow>
            <TableDataWithPadding>DAYS</TableDataWithPadding>
                <TableDataWithPadding></TableDataWithPadding>
                <TableDataWithPadding>HOURS</TableDataWithPadding>
                <TableDataWithPadding></TableDataWithPadding>
                <TableDataWithPadding>MINUTES</TableDataWithPadding>
                <TableDataWithPadding></TableDataWithPadding>
                <TableDataWithPadding>SECONDS</TableDataWithPadding>
            </RegularRow>

        </CountdownTable>
    </div>
    );
};

export default CountdownTable;