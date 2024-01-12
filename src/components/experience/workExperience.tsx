import { experience } from '../../hooks/Ilanguage'

interface IWorkExperience {
    experience : experience
}

export const WorkExperience = ({ experience } : IWorkExperience) => {
  const { text, time, title } = experience

  return (
    <div className='px-2 pl-4 pb-4 border-l-2 greatSection relative'>
      <p className='text-lt-color-blue-100'>{time}</p>
      <h3 className='text-xl font-semibold text-lt-color-green-100'>{title}</h3>
      <p>{text}</p>
      <span className='mkTime pulsationShape' />
    </div>
  )
}

interface IWorkExperiences {
    experiences : experience[]
}

export const WorkExperiences = ({ experiences } : IWorkExperiences) => {
  return (
    <section className='grid grid-cols-1 px-4 py-2 lg:grid-cols-2 gap-x-6 gap-y-3'>
      {
        experiences.map(experience => <WorkExperience key={experience.title} experience={experience} />)
      }
    </section>
  )
}
