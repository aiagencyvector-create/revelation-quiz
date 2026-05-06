export const screens = [
  // SCREEN 1 - Entry / Symptoms
  {
    id: 1,
    type: 'single',
    tag: 'SYMPTOM CHECK',
    title: 'In the last 6 months, have you caught yourself thinking any of these?',
    options: [
      { label: 'A', text: '"The war in the Middle East feels different this time."' },
      { label: 'B', text: '"The global economy feels like it\'s about to break."' },
      { label: 'C', text: '"AI is moving too fast — this can\'t end well."' },
      { label: 'D', text: '"These natural disasters are impossible to ignore."' },
      { label: 'E', text: '"I\'ve read Revelation — but never connected it to right now."' },
      { label: 'F', text: 'Honestly, I\'ve thought all of them.' },
    ],
  },
  // SCREEN 2 - Profile
  {
    id: 2,
    type: 'single',
    tag: 'YOUR PROFILE',
    title: 'How would you describe yourself right now?',
    options: [
      { label: 'A', text: 'Committed Christian — actively attending church' },
      { label: 'B', text: 'Used to be religious — stepped away but still believe' },
      { label: 'C', text: 'Spiritually curious — open-minded, seeking answers' },
      { label: 'D', text: 'Skeptic — but the news keeps sending me back to the Bible' },
    ],
  },
  // SCREEN 3 - Prior Awareness (merged with Research History)
  {
    id: 3,
    type: 'single',
    tag: 'PRIOR AWARENESS',
    title: 'Have you ever seen Biblical prophecy connected to real geopolitical, scientific, or economic data?',
    options: [
      { label: 'A', text: 'Yes — and it shook me.' },
      { label: 'B', text: 'No — I didn\'t know that existed.' },
      { label: 'C', text: 'I\'ve seen attempts, but nothing convincing.' },
    ],
  },
  // SCREEN 4 - Depth of Study
  {
    id: 4,
    type: 'single',
    tag: 'DEPTH OF STUDY',
    title: 'How familiar are you with the prophetic events described in Revelation?',
    options: [
      { label: 'A', text: 'Less than 6 months of study' },
      { label: 'B', text: '1 to 3 years of personal research' },
      { label: 'C', text: '3 to 10 years — a serious interest' },
      { label: 'D', text: 'Over 10 years — prophecy is central to my faith' },
    ],
  },
  // SCREEN 5 - Knowledge Gaps (multi)
  {
    id: 5,
    type: 'multi',
    tag: 'KNOWLEDGE GAPS',
    title: 'Which of these have you never seen explained with real evidence?',
    subtitle: 'Select all that apply.',
    options: [
      { label: 'A', text: 'Global economic control & Revelation 13' },
      { label: 'B', text: 'AI, surveillance & the Mark of the Beast' },
      { label: 'C', text: 'Middle East geopolitics & Ezekiel 38' },
      { label: 'D', text: 'Climate catastrophes & the Trumpet judgments' },
      { label: 'E', text: 'Global government & the collapse of the West' },
      { label: 'F', text: 'Post-tribulation — why Scripture supports it' },
    ],
  },
  // SCREEN 6 - Editorial: Intelligence Briefing
  {
    id: 6,
    type: 'editorial',
    tag: 'INTELLIGENCE BRIEFING',
    warning: 'Before you see your results — read this:',
    headline: 'Economists, generals, and scientists are describing Revelation — they just don\'t know it yet.',
    paragraphs: [
      'In 2022, the BIS outlined a programmable global digital currency where transactions could be blocked by behavior. In 2023, the WEF presented a roadmap for unified global governance. In 2024, NATO began modeling a multi-front conflict centered on Israel, Iran, Russia, and China.',
      'None of these institutions reference the Bible. None are Christian organizations.',
      'And yet — a first-century exile named John, writing from Patmos in 95 A.D., described a world where no one could buy or sell without a mark, where a coalition from the north would descend on Israel, and where the entire system would be centralized under one authority.',
    ],
    closingBold: 'The question is no longer whether these things are possible. It\'s how close are we — and are you prepared?',
    cta: 'I want to understand this',
  },
  // SCREEN 7 - Editorial: The Missing Piece
  {
    id: 7,
    type: 'editorial',
    tag: 'THE MISSING PIECE',
    warning: "Here's what most churches never told you:",
    paragraphs: [
      'The pre-tribulation rapture view — taught for the last 100 years — has no clear precedent in Scripture before the 1830s. For 1,800 years before that, believers prepared to endure, not escape.',
      'The result: millions of Christians today are unprepared for tribulation, because they were told they\'d never face it.',
    ],
    scripture: '"He who endures to the end will be saved." — Matthew 24:13',
    cta: 'Continue',
  },
  // SCREEN 8 - Final Decision
  {
    id: 8,
    type: 'final',
    tag: 'YOUR DECISION',
    title: 'Are you ready to finally understand what\'s happening in the world — and why?',
    subtitle: 'The timeline is moving. The data is public. The Word already described it. All that\'s missing is someone to connect the dots.',
    options: [
      { label: 'A', text: "Yes — show me my results." },
      { label: 'B', text: "Not yet — I need more time." },
    ],
  },
];
