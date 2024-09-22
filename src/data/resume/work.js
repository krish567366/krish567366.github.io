/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Freelancer',
    position: 'Executive Artifical Intelligence Specialist',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: '',
    highlights: [
      'Built an AI model which needs 56% less resources as directed by company. A successful attempt of company to reduce its fixed cost.',
      'Worked with various MNCs to deliver best to their clients.',
      'Sold more than 52 AI softwares individually to help clients make up to their needs accordingly.',
    ],
  },
  {
    name: 'Freelancer',
    position: 'Head of CyberSecurity',
    url: '#',
    startDate: '2020-01-01',
    summary: '',
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
    ],
  },
  {
    name: 'Stock Market Research Analyst',
    position: '',
    url: '',
    startDate: '2020-04-01',
    summary: '',
    highlights: [
      'Traded in Stock and options with many firms.',
      'Advise several startups in the fund.',
    ],
  },
];

export default work;
