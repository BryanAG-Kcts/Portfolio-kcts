import { section, sections } from '../../hooks/Iheader'

interface ISection {
    section : section
}
export const Sections = ({ section } : ISection) => {
  const { sections, title } = section
  return (
    <div className='hoverToModal border-b flex-1 relative cursor-pointer'>
      <p>{title}</p>

      <div className='modalsection boxCol hidden cardContentDarkmode z-50'>
        {sections.map(section => <Section key={section.name} sections={section} />)}
      </div>
    </div>
  )
}

interface ISections {
    sections : sections
}

export const Section = ({ sections } : ISections) => {
  const { link, name } = sections
  return (
    <a className='py-2 hover:bg-dk-color-gray-100 hover:rounded hover:opacity-75' href={link}>{name}</a>
  )
}
