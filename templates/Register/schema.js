export default {
  userInfo: {
    phone: {
      required: true,
      type: String,
      label: 'Numar de telefon',
      placeholder: 'Numar de telefon',
    },
    age: {
      required: true,
      type: Number,
      label: 'Varsta',
      placeholder: 'Varsta',
    },
    tshirt: {
      required: true,
      type: Object,
      label: 'Marime tricou',
      placeholder: 'Marime tricou',
      options: [
        { key: 'M', title: 'M' },
        { key: 'XS', title: 'XS' },
        { key: 'S', title: 'S' },
        { key: 'L', title: 'L' },
        { key: 'XL', title: 'XL' },
        { key: 'XXL', title: 'XXL' },
      ],
      default: 'M',
    },
    country: {
      required: true,
      type: String,
      label: 'Tara',
      placeholder: 'Tara',
    },
    city: {
      required: true,
      type: String,
      label: 'Oras',
      placeholder: 'Oras',
    },
    school: {
      required: true,
      type: String,
      label: 'Facultate/Scoala',
      placeholder: 'Facultate/Scoala',
    },
  },
  links: {
    facebook: {
      required: true,
      type: String,
      label: 'Cont facebook',
      placeholder: 'Cont facebook',
    },
    csacademy: {
      required: true,
      type: String,
      label: 'Link CSAcademy',
      placeholder: 'Link CSAcademy',
    },
    github: {
      required: true,
      type: String,
      label: 'Github Repo',
      placeholder: 'Github Repo',
    },
    userCount: {
      required: true,
      type: 'Radio',
      label: 'Numar membri',
      options: [
        { key: 2, title: 2 },
        { key: 3, title: 3 },
        { key: 4, title: 4 },
      ],
      default: 2,
    },
  },
  accountDetails: {
    name: {
      required: true,
      type: String,
      label: 'Nume si Prenume',
      placeholder: 'Nume si Prenume',
    },
    email: {
      required: true,
      type: 'Email',
      label: 'Email',
      placeholder: 'cineva@gmail.com',
    },
    password: {
      required: true,
      type: 'Password',
      placeholder: 'Parola',
      label: 'Parola',
    },
    confirmPassword: {
      required: true,
      type: 'Password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
    },
    terms: {
      required: true,
      type: Boolean,
      label: 'Sunt de acord cu prelucrarea datelor.',
    },
  },
  team: {
    name: {
      required: true,
      type: String,
      label: 'Nume si prenume Membru',
    },
    email: {
      required: true,
      type: 'Email',
      label: 'Email membru',
    },
    phone: {
      required: true,
      type: String,
      label: 'Numar telefon membru',
    },
    tshirt: {
      required: true,
      type: Object,
      label: 'Marime tricou Membru',
      placeholder: 'Marime tricou',
      options: [
        { key: 'M', title: 'M' },
        { key: 'XS', title: 'XS' },
        { key: 'S', title: 'S' },
        { key: 'L', title: 'L' },
        { key: 'XL', title: 'XL' },
        { key: 'XXL', title: 'XXL' },
      ],
      default: 'M',
    },
    facebook: {
      type: String,
      label: 'Link facebook Membru',
    },
  },
};
