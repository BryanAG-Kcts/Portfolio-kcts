import { possibleLanguages } from '../scripts/constants/languageInterfaces'

export interface languages {
    name: string
    value: possibleLanguages
}

export interface language {
    title : string
    languages : languages[]
}

export interface sections {
    name: string
    link: string
}

export interface section {
    title : string
    sections : sections[]
}

export interface header {
    section : section
    language : language
}
