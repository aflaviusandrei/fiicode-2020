import Account from 'templates/Account/Account';
import FrontWrapper from '../templates/FrontWrapper/FrontWrapper';
import Router from 'next/router';

const algoAccount = {
  arie: 'Algo',
  csc: 'https://github.com/alexcambose/fiicode-2019',
  members: [
    {
      name: 'Flavius Agrigoroaei',
      mail: 'aflaviusandrei@gmail.com',
      fb: 'https://www.facebook.com/aflaviusandrei',
      city: 'Iasi',
      country: 'Romania',
      shirt: 'L',
      phone: '0757 571 903',
      school: 'Liceul Teoretic "Carmen Sylva" Eforie'
    }
  ]
};

const account = {
  arie: 'Web / Mobile',
  repo: 'https://github.com/alexcambose/fiicode-2019',
  members: [
    {
      name: 'Flavius Agrigoroaei',
      mail: 'aflaviusandrei@gmail.com',
      phone: '0757 571 903',
      shirt: 'XL',
      school: 'Licel Teoretic "V. Alecsandri" Iasi',
      fb: 'https://www.facebook.com/aflaviusandrei',
      city: 'Iasi',
      country: 'Romania'
    },
    {
      name: 'Ionut Stancescu',
      mail: 'istancescu@protonmail.com',
      phone: '0757 571 902',
      shirt: 'S',
      school: 'Licel Teoretic "C. Sylva" Eforie',
      fb: 'https://www.facebook.com/aflaviusandrei',
      city: 'Eforie',
      country: 'Constanta'
    },
    {
      name: 'Rada Alin Mihai',
      mail: 'n3gatyv95@gmail.com',
      phone: '0757 571 902',
      shirt: 'S',
      school: 'Licel Teoretic "C. Sylva" Eforie',
      fb: 'https://www.facebook.com/aflaviusandrei',
      city: 'Eforie',
      country: 'Constanta'
    }
  ]
};

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Router.push('/');
  }

  render() {
    return (
      <FrontWrapper>
        <Account account={account} />
      </FrontWrapper>
    );
  }
}
