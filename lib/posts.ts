export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'why-ai-in-education',
    title: 'Why AI Matters in Modern Education',
    date: '2024-06-01',
    excerpt:
      'Artificial intelligence is transforming the classroom by personalizing learning experiences and providing real-time feedback.',
    content: [
      'Artificial intelligence (AI) is no longer science fiction for schools. From adaptive quizzes to smart tutoring systems, AI gives teachers new insights into how every student learns best.',
      'When used thoughtfully, AI can free educators from repetitive tasks and let them focus on mentoring students. Parents also benefit from a clearer view of their child\'s progress.',
      'SlateMate uses AI to recommend resources, monitor well-being and keep parents connected — creating a safer, more engaging digital learning environment.'
    ]
  },
  {
    slug: 'protecting-kids-online',
    title: 'Protecting Kids on the Internet',
    date: '2024-06-05',
    excerpt:
      'Giving children freedom online is important, but so is guiding them toward healthy digital habits. Here are simple ways to keep them safe.',
    content: [
      'The internet opens up a world of knowledge, yet it also exposes children to distractions and inappropriate content. Clear boundaries and open communication are key.',
      'Tools like content filters, screen-time limits and real‑time activity reports empower parents to stay involved without constant surveillance.',
      'Our platform balances independence with oversight so kids can explore, learn and grow while parents remain confident about their online safety.'
    ]
  },
  {
    slug: 'personalized-learning-journey',
    title: 'A Personalized Learning Journey for Every Child',
    date: '2024-06-10',
    excerpt:
      'No two children learn exactly alike. Personalized learning tailors lessons to each student\'s strengths and challenges.',
    content: [
      'Traditional one-size-fits-all lessons can leave some students bored and others struggling. Personalized learning adapts material to suit a child\'s pace and interests.',
      'With SlateMate, parents and teachers get data-driven insights that help them provide timely support or extra challenges when needed.',
      'When kids feel both supported and motivated, they develop confidence and a lifelong love of learning.'
    ]
  }
]
