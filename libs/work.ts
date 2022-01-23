interface workType {
  key: number
  title: string
  link: string
  start?: string
  end?: string
  intro?: string
  tags?: Array<{ value: string; color: string; textColor: string }>
  numImages?: number
  position?: string
}
const works: { [id: string]: workType } = {
  earnr: {
    key: 0,
    title: 'Earnr',
    link: 'earnr',
    start: 'February 2021',
    end: 'August 2021',
    numImages: 3,
    position: "Software Engineer Intern",
    tags: [
      { value: 'React', color: '#61DAFB', textColor: 'white' },
      { value: 'TypeScript', color: '#2D79C7', textColor: 'white' },
      { value: 'NextJS', color: '#111111', textColor: 'white' },
      { value: 'GraphQL', color: '#E00097', textColor: 'white' },
      { value: 'AWS', color: '#FE9900', textColor: 'white' },
      { value: 'TailwindCSS', color: '#38BDF8', textColor: 'white' }
    ]
  },
  neuro: {
    key: 1,
    title: 'Neural Stimulator',
    link: 'neural',
    start: 'February 2021',
    end: 'December 2021',
    intro: '',
  },
  csesoc: {
    key: 2,
    title: 'CSESoc',
    link: 'csesoc',
  }
}

export default works
