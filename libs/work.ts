interface workType {
  key: number
  title: string
  link: string
  start?: string
  end?: string
  intro?: string
  resp: Array<string>
  tags?: Array<{ value: string; color: string, textColor: string }>,
  numImages?: number
}
const works: { [id: string]: workType } = {
  earnr: {
    key: 0,
    title: 'Earnr',
    link: 'earnr',
    start: 'February 2021',
    end: 'August 2021',
    numImages: 3,
    resp: [
      'Reconstructed signup/onboarding application for new investors using <b>Formik</b> to allow for easier addition and modification of onboarding questions',
      'Developed Bonus code functionality to the platform using AWS Appsync and new GraphQL queries',
      'Added investment management functionality to the dashboard application',
      'Developed automated end-to-end tests for the entire frontend',
      'Converted the React landing page into a Webflow project for easier modification'
    ],
    tags: [
      { value: 'React', color: '#61DAFB', textColor: "white"},
      { value: 'TypeScript', color: '#2D79C7', textColor: "white"},
      { value: 'NextJS', color: '#111111', textColor: "white" },
      { value: 'GraphQL', color: '#E00097' , textColor: "white"},
      { value: 'AWS', color: '#FE9900' , textColor: "white"},
      { value: 'TailwindCSS', color: '#38BDF8', textColor: "white"}
    ]
  },
  neuro: {
    key: 1,
    title: 'Neural Stimulator',
    link: 'neural',
    start: 'February 2021',
    end: 'December 2021',
    intro: '',
    resp: [
      'Designed and Developed the firmware and software for a wireless neural stimulator'
    ]
  },
  csesoc: {
    key: 2,
    title: 'CSESoc',
    link: 'csesoc',
    resp: ['content']
  }
}

export default works
