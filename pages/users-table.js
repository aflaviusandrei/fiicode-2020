import React from 'react';
import UsersTable from '../templates/Dashboard/Components/UsersTable/UsersTable';
import Dashboard from '../templates/Dashboard/Dashboard';
import Router from 'next/router';

const usersBoiler = [
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Moscu',
    prenume: 'George',
    mail: 'moscugeorge@gmail.com',
    telefon: '0756431923',
    tricou: 'L',
    arie: 'GameDev',
    id: 2
  },
  {
    nume: 'Ciobaca',
    prenume: 'Stefan',
    mail: 'sciobaca@info.uaic.ro',
    telefon: '0753571901',
    tricou: 'S',
    arie: 'Algo',
    id: 3
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Ciobaca',
    prenume: 'Stefan',
    mail: 'sciobaca@info.uaic.ro',
    telefon: '0753571901',
    tricou: 'S',
    arie: 'Algo',
    id: 3
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Ciobaca',
    prenume: 'Stefan',
    mail: 'sciobaca@info.uaic.ro',
    telefon: '0753571901',
    tricou: 'S',
    arie: 'Algo',
    id: 3
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  },
  {
    nume: 'Agrigoroaei',
    prenume: 'Flavius',
    mail: 'aflaviusandrei@gmail.com',
    telefon: '0757571903',
    tricou: 'XL',
    arie: 'Web',
    id: 1
  }
];

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
      <Dashboard>
        <UsersTable users={JSON.stringify(usersBoiler)} />
      </Dashboard>
    );
  }
}
