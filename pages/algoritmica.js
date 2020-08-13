import React from 'react';
import Fields from 'templates/Fields/Fields';
import { algo } from 'config/fields/fields';
import { withTranslation } from 'translations';
import FrontWrapper from '../templates/FrontWrapper/FrontWrapper';
import i18next from 'i18next';

const Algo = ({ i18n }) => {
  if (i18next.language == "en-US") {
    return(<FrontWrapper>
      <Fields config={algo[i18n.language]} extra={
      <div>
        <h2>Final Round</h2>
        <p>Due to the current situations, the final will be held in an online format, between 28 and 30 August 2020. 
</p>
        <p>The list of finalists for the algorithmic section can be found here: <a href="https://docs.google.com/spreadsheets/d/12i9uDx80-QTbgJSq8RGEZKgfFPEEVZxkc9ShLy5SMrU/edit#gid=2117297329">https://docs.google.com/spreadsheets/d/12i9uDx80-QTbgJSq8RGEZKgfFPEEVZxkc9ShLy5SMrU/edit#gid=2117297329</a></p>
        <p>Check theInternational Romanian sheet for the respective list of participants</p>
        <p>In order to ease the communication between the organisers and participants, we have created a discord server, which we highly encourage you to join: <a href="https://discord.gg/7U8mWKT">https://discord.gg/7U8mWKT</a></p>
        <p>You will find there important information, such as the schedule of the events or useful links.</p>
      </div>
      }></Fields>
    </FrontWrapper>);
  }
  else {
    return(<FrontWrapper>
      <Fields config={algo[i18n.language]} extra={
      <div>
        <h2>Anunt proba finala</h2>
        <p>Din cauza situațiilor curente, finala va fi susținută online, între 28 și 30 August 2020.</p>
        <p>Lista finaliștilor de la secțiunea de algoritmică poate fi văzută aici: <a href="https://docs.google.com/spreadsheets/d/12i9uDx80-QTbgJSq8RGEZKgfFPEEVZxkc9ShLy5SMrU/edit#gid=2117297329">https://docs.google.com/spreadsheets/d/12i9uDx80-QTbgJSq8RGEZKgfFPEEVZxkc9ShLy5SMrU/edit#gid=2117297329</a></p>
        <p>Verificați sheet-ul International Romanian pentru listele respective de participanți.</p>
        <p>Pentru a ușura comunicarea între participanți și organizatori, am creat un server Discord, pe care vă încurajăm să intrați: <a href="https://discord.gg/7U8mWKT">https://discord.gg/7U8mWKT</a></p>
        <p>Acolo vor fi postate informații importante, precum programul evenimentelor sau alte link-uri utile.</p>
      </div>
      }></Fields>
    </FrontWrapper>);
  }
}
export default withTranslation('fields')(Algo);
