interface workItemType {
  key: number
  title: string
  desc: string
  link?: string
  source?: string
  tags: Array<string>
  learn?: boolean
  note?: string
  numImages?: number
  position?: string
}

const relevantWork: { [id: string]: workItemType } = {
  earnr: {
    key: 0,
    title: 'Earnr',
    desc: '',
    link: '/earnr',
    numImages: 3,
    position: 'Software Engineer Intern',
    tags: ['React', 'TypeScript', 'NextJS', 'GraphQL', 'AWS', 'TailwindCSS']
  },
  neuro: {
    key: 1,
    title: 'Neural Stimulator',
    desc: '',
    link: '/neural',
    tags: ['C/C++', 'Python', 'Kivy', 'FreeRTOS', 'BLE', 'DAC', 'ADC'],
  }
}

const fullList: { [id: string]: workItemType } = {
  portfolio: {
    key: 0,
    title: 'Portfolio',
    desc: 'This portfolio website',
    source: 'https://github.com/SubratShrestha/portfolio-next',
    link: '/',
    tags: ['React', 'NextJS', 'TypeScript', 'ChakraUI', 'Framer motion']
  },
  earnr: {
    key: 1,
    title: 'Earnr',
    desc: 'Software Engineer Intern at Earnr',
    link: '/earnr',
    tags: [
      'React',
      'NextJS',
      'TypeScript',
      'GraphQL',
      'AWS AppSync',
      'AWS Cloudformation',
      'DynamoDB',
      'TailwindCSS'
    ]
  },
  neuro: {
    key: 2,
    title: 'Neural Stimulator',
    desc: 'A Neural Stimulator as part of UNSW VIP program',
    link: '/neural',
    source: 'https://github.com/SubratShrestha/Neural-Stimulator-Firmware',
    tags: ['C/C++', 'Python', 'Kivy', 'FreeRTOS', 'BLE', 'DAC', 'ADC']
  },
  dsa: {
    key: 3,
    title: 'Data Structures and Algorithms',
    desc: 'Collection of useful data structures and algorithms for competitive programming',
    source: 'https://github.com/SubratShrestha/dsa/',
    tags: ['C++', 'Data structures', 'Algorithms']
  },
  keylogger: {
    key: 4,
    title: 'Keylogger',
    desc: 'Keylogger written in Python that hides itself and emails recorded logs, security project',
    source: 'https://github.com/SubratShrestha/Python-keylogger',
    tags: ['Python', 'Powershell', 'Batchfile'],
    learn: true
  },
  autosplash: {
    key: 5,
    title: 'Autosplash',
    desc: 'App in Flutter to display the trending page of Unsplash and set a random wallpaper automatically',
    source: 'https://github.com/SubratShrestha/AutoSplash',
    tags: ['Dart', 'Flutter'],
    learn: true
  },
  shell2perl: {
    key: 6,
    title: 'Shell2Perl',
    desc: 'A transpiler that converts UNIX shell code (Debian Almquist Shell) to Perl code using REGEX',
    tags: ['Perl', 'Regex'],
    note: 'Link not available/public as this is a University assignment',
  },
  hex2mips: {
    key: 7,
    title: 'Hex2MIPS',
    desc: 'A tool that converts 32 bit instructions in hex to MIPS instructions',
    tags: ['C', 'MIPS'],
    note: 'Link not available/public as this is a University assignment',
  },
  flavoury: {
    key: 8,
    title: 'Flavoury',
    link: 'https://subratshrestha.github.io/Flavoury/',
    desc: 'A Landing page for a concept food delivery service (for learning purposes)',
    tags: ['JavaScript', 'HTML', 'CSS'],
    learn: true
  },
  shrug: {
    key: 9,
    title: 'SHRUG',
    desc: 'Implementation of a subset of Git (add, commit, rm, branch, diff, merge, rebase) in POSIX shell',
    tags: ['Shell', 'Git'],
    note: 'Link not available/public as this is a University assignment',
  },
  allowance: {
    key: 10,
    title: 'Allowance',
    link: 'https://subratshrestha.github.io/Allowance/',
    source: 'https://github.com/SubratShrestha/Allowance',
    desc: 'A budget tracker tool for the web',
    tags: ['JavaScript', 'HTML', 'CSS'],
    learn: true
  },
  riskDice: {
    key: 11,
    title: 'RiskDice',
    source: 'https://github.com/SubratShrestha/RiskDice',
    desc: 'A risk based dice game',
    learn: true,
    tags: ['JavaScript', 'HTML', 'CSS']
  }
}
export { relevantWork, fullList }
