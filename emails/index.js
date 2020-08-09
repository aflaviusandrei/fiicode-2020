import { renderEmail } from 'react-html-email';
import Reset from './Reset';
import Verify from './Verify';
import fs from 'fs';
import path from 'path';

const RENDERED_DIR = path.resolve('./emails/rendered');

if (!fs.existsSync(RENDERED_DIR)) {
  fs.mkdirSync(RENDERED_DIR);
}
const templates = [
  {
    title: 'Reset',
    component: Reset
  },
  {
    title: 'Verify',
    component: Verify
  }
];

for (let { title, component } of templates) {
  fs.writeFileSync(`${RENDERED_DIR}/${title}.html`, renderEmail(component));
}
