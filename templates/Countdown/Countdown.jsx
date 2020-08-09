import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background from 'assets/png/countdownbackground.png';

const PageContainer = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-position: 0% 0%;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Roboto';
`;

const Title = styled.p`
  text-align: center;
  font-size: 3vw;
  color: white;
  -webkit-text-stroke: 0.01vw;
  padding: 5vh 0 0 3vh;
  letter-spacing: 3.4vw;
`;

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

const RegularRow = styled.tr``;

const CountdownPage = () => {
  const [CountdownDate, setCountdownDate] = useState(
    new Date('Dec 15, 2019').getTime()
  );
  const [daysValue, setDays] = useState();
  const [hoursValue, setHours] = useState();
  const [minutesValue, setMinutes] = useState();
  const [secondsValue, setSeconds] = useState();

  useEffect(() => {
    const tick = setInterval(function() {
      var now = new Date().getTime();

      var distance = CountdownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days < 10 ? '0' + days : days;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      //console.log(days,hours,minutes,seconds);

      if (distance < 0) {
        clearInterval(tick);
        days = '00';
        hours = '00';
        minutes = '00';
        seconds = '00';
      }
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <PageContainer>
      <Title>COMING SOON</Title>
      <CountdownTable>
        <TimerRow>
          <TableDataWithPadding>{daysValue}</TableDataWithPadding>
          <TableDataWithPadding>:</TableDataWithPadding>
          <TableDataWithPadding>{hoursValue}</TableDataWithPadding>
          <TableDataWithPadding>:</TableDataWithPadding>
          <TableDataWithPadding>{minutesValue}</TableDataWithPadding>
          <TableDataWithPadding>:</TableDataWithPadding>
          <TableDataWithPadding>{secondsValue}</TableDataWithPadding>
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
    </PageContainer>
  );
};

export default CountdownPage;
