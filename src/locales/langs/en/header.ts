import { sectionsLink, languages } from '../../constants/header'

export const header = {
  section: {
    title: 'Sections',
    sections: [
      {
        name: 'Home',
        link: sectionsLink.hero
      },
      {
        name: 'Information',
        link: sectionsLink.main
      },
      {
        name: 'Projects',
        link: sectionsLink.projects
      },
      {
        name: 'Contact',
        link: sectionsLink.contact
      }
    ]
  },
  language: {
    title: 'Languages',
    languages
  }
}
