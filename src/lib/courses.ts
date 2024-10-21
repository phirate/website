export let subjects: Record<string, { name: string, icon: string, teaser: string }[]> = {
  Mathematics: [
    {
      name: 'Geometry',
      icon: 'category',
      teaser: 'Pihedron walks you through the world of geometry visually.',
    },
    {
      name: 'Calculus',
      icon: 'function',
      teaser: 'Pihedron gives you a strong foundation in differentiation and integration.',
    },
    {
      name: 'Statistics',
      icon: 'bar_chart',
      teaser: 'Tackle some of the best probability problems.',
    },
  ],
  Biology: [
    {
      name: 'Microbiology',
      icon: 'microbiology',
      teaser: 'Zoom in on how organisms work at the microscopic level.',
    },
    {
      name: 'Genetics',
      icon: 'genetics',
      teaser: 'Learn the programming language of life',
    },
  ],
  Chemistry: [
    {
      name: 'Energetics',
      icon: 'explosion',
      teaser: 'Pihedron reveals the secret to acing energetics questions.',
    },
    {
      name: 'Equilibria',
      icon: 'balance',
      teaser: 'Everything must be balanced.',
    },
    {
      name: 'Organics',
      icon: 'oil_barrel',
      teaser: 'Pihedron breaks down the toughest chemistry topic.',
    },
  ],
  Physics: [
    {
      name: 'Kinematics',
      icon: 'trail_length',
      teaser: 'Apply your calculus and physics knowledge to the real world.',
    },
    {
      name: 'Optics',
      icon: 'flare',
      teaser: 'Learn optics interactively.',
    },
    {
      name: 'Electricity',
      icon: 'bolt',
      teaser: 'Pihedron makes electricity and magnetism easy.',
    },
  ],
  Informatics: [
    {
      name: 'Programming',
      icon: 'code',
      teaser: 'Become a seasoned programmer.',
    },
    {
      name: 'Olympiad',
      icon: 'trophy',
      teaser: 'Pihedron introduces you to competitive programming.',
    },
  ]
}