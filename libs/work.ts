interface workType {
  key: number
  title: string
  link: string
  start?: string
  end?: string
  intro?: string
  tags?: Array<string>
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
    position: 'Software Engineer Intern',
    tags: ['React', 'TypeScript', 'NextJS', 'GraphQL', 'AWS', 'TailwindCSS']
  },
  neuro: {
    key: 1,
    title: 'Neural Stimulator',
    link: 'neural',
    start: 'February 2021',
    end: 'December 2021',
    tags: ['C/C++', 'Python', 'Kivy', 'FreeRTOS', 'BLE', 'DAC', 'ADC'],
    intro: ''
  },
  csesoc: {
    key: 2,
    title: 'CSESoc',
    link: 'csesoc'
  }
}

export default works
