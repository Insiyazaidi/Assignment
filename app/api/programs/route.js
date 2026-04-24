import { NextResponse } from 'next/server'

const programs = [
  {
    id: '1',
    title: 'PG in Data Science & AI',
    university: 'IIT Guwahati',
    duration: '11 months',
    format: 'Live Online',
    category: 'Data & AI',
    level: 'Advanced',
    learners: '2,400+',
    badge: 'Most Popular',
    badgeColor: 'blue',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'MLOps'],
    description: 'Master data science with IIT-quality curriculum and industry mentorship.',
  },
  {
    id: '2',
    title: 'Executive Program in ML & AI',
    university: 'IIM Lucknow',
    duration: '6 months',
    format: 'Live Online',
    category: 'Leadership',
    level: 'Executive',
    learners: '1,800+',
    badge: 'Trending',
    badgeColor: 'orange',
    skills: ['AI Strategy', 'Data Leadership', 'Product AI', 'Ethics in AI'],
    description: 'Equip leaders with AI strategy and decision-making capabilities.',
  },
  {
    id: '3',
    title: 'Product Management Program',
    university: 'IIT Roorkee',
    duration: '6 months',
    format: 'Live Online',
    category: 'Product',
    level: 'Intermediate',
    learners: '3,200+',
    badge: 'New Batch',
    badgeColor: 'green',
    skills: ['Product Strategy', 'User Research', 'Agile', 'Roadmapping'],
    description: 'Become a product leader with structured mentorship from top PMs.',
  },
  {
    id: '4',
    title: 'Senior Management Program',
    university: 'XLRI Jamshedpur',
    duration: '12 months',
    format: 'Blended',
    category: 'Leadership',
    level: 'Executive',
    learners: '900+',
    badge: 'Premium',
    badgeColor: 'purple',
    skills: ['Strategy', 'Finance', 'People Management', 'Operations'],
    description: 'Accelerate into senior leadership with XLRI\'s rigorous curriculum.',
  },
  {
    id: '5',
    title: 'Full Stack Development',
    university: 'IIT Kanpur',
    duration: '9 months',
    format: 'Live Online',
    category: 'Engineering',
    level: 'Intermediate',
    learners: '5,100+',
    badge: 'High Demand',
    badgeColor: 'blue',
    skills: ['React', 'Node.js', 'System Design', 'Cloud'],
    description: 'Build scalable software with IIT-grade engineering fundamentals.',
  },
  {
    id: '6',
    title: 'Business Analytics Program',
    university: 'IIM Trichy',
    duration: '5 months',
    format: 'Live Online',
    category: 'Analytics',
    level: 'Beginner-Friendly',
    learners: '4,000+',
    badge: '',
    badgeColor: '',
    skills: ['SQL', 'Power BI', 'Excel', 'Statistics'],
    description: 'Turn business data into strategic insights with hands-on analytics.',
  },
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  let filtered = programs
  if (category && category !== 'All') {
    filtered = programs.filter((p) => p.category === category)
  }

  return NextResponse.json({ programs: filtered, total: filtered.length })
}
