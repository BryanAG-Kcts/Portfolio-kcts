import { informationBody, informationKeyNamesType } from '../../constants/information'

export const informationNames : Record<informationKeyNamesType, string> = {
  name: 'Name',
  email: 'Email',
  github: 'Github',
  linkedin: 'LinkedIn',
  located: 'Located at',
  university: 'University'
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
