const memberPhoto = [
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Vania Bogorny',
    file: 'vanika.png',
  },
  {
    name: 'Luis Otavio Alvares',
    file: 'luis.png',
  },
  {
    name: 'Mateus Grellert',
    file: 'grellert.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
  {
    name: 'Jônata Tyska',
    file: 'jonata.png',
  },
]

export const getMemberName = fileName => memberPhoto.find(({ file }) => fileName === file)
