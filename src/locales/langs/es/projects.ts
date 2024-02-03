import { projectsBody } from '../../constants/projects'

export const projectsDesc = {
  tictactoe: 'Un simple juego que a todos nos gusta',
  wapiw: 'Una prueba práctica de como consumir una Api. digita una Ip y observa varios datos de esta',
  button: 'Un click y lo pierdes todo, o un click y luego... otro',
  tsDo: 'Lista tus tareas pendientes',
  kactusKraft: 'Clon de MineCraft',
  infoCountry: 'Selecciona un pais y observa algunas caracteristicas',
  simpleTranslate: 'Traductor minimalista y simple',
  sittingnt: 'Mi primer proyecto universitario. Es una presentación de una aplicación móvil para el seguimiento de las actividades diarias. Está incompleto y próximo a renovar',
  game2048: 'Un juego con una táctica sencilla de analizar pero dificil de dominar, juega, haz puntos y guarda tu mejor record',
  portfolio: '¡Estás aquí 🌵! Bienvenido a mi portafolio personal, encontrarás información sobre mí como de lo que yo hago. Espero que lo disfrutes',
  kctsExpressGenerator: 'Un simple generador de proyectos de expressJs',
  backGame2048: 'Un juego con una táctica sencilla de analizar pero dificil de dominar, juega, haz puntos y guarda tu mejor record',
  kctshort: 'Un acortador de links, simple, rápido y gratuito. ¡No hay anuncios ni tiempo de espera!',
  landing: 'Una simple landing page con un toque 3D ¡Explora y observa cómo se mueve!'
}

export const project = {
  nameGithub: 'Proyectos de GitHub',
  nameWeb: 'Proyectos Web',
  anchorName: 'visitar',

  projects: Object.values(projectsBody).map(project => {
    return {
      ...project,
      desc: projectsDesc[project.keyName] || 'No hay descripción disponible'
    }
  })
}
