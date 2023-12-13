import { TailwindColorsTechnolgies } from '../components/projects/colorTechnologie'

export interface header {
    name: string
    link: string
    icon: string
}

export interface hero {
    title: string
    heroName: string
    paragraph: string
}

export interface technologie {
    name: string
    abbr: string
    icon: string
}

export interface skills {
    name: string
    skills: technologie[]
}

export interface project {
    name: string
    technologie: string
    color: TailwindColorsTechnolgies
    linkGitHub: string
    desc: string
    linkWeb?: string
    preview?: string
    technologies: technologie[]
}

export interface projects {
    nameGithub: string
    nameWeb: string
    anchorName: string
    projects: project[]
}

export interface info {
    name: string
    answer: string
    icon: string
    link: string
    select: boolean
}

export interface information {
    name: string
    infos: info[]
}

export interface ILanguage {
    header: header[]
    hero: hero
    skill: skills
    project: projects
    information: information
}
