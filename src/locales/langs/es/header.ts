import { sectionsLink, languages } from '../../constants/header'

export const header = {
  section: {
    title: 'Secciones',
    sections: [
      {
        name: 'Inicio',
        link: sectionsLink.hero
      },
      {
        name: 'Información',
        link: sectionsLink.main
      },
      {
        name: 'Proyectos',
        link: sectionsLink.projects
      },
      {
        name: 'Contacto',
        link: sectionsLink.contact
      }
    ]
  },
  language: {
    title: 'Lenguajes',
    languages
  }
}
