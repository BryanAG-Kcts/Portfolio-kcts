import { informationBody, informationKeyNamesType } from '../../constants/information'

export const informationNames : Record<informationKeyNamesType, string> = {
  name: 'Nombre',
  email: 'Email',
  github: 'Github',
  linkedin: 'LinkedIn',
  located: 'Ubicando en',
  university: 'Universidad'
}

export const information = {
  name: 'Información',
  infos: Object.values(informationBody).map(info => {
    return {
      ...info,
      name: informationNames[info.keyName]
    }
  })
}
