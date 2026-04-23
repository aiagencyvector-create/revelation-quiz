export const screens = [
  // SCREEN 1 - Entry / Symptoms
  {
    id: 1,
    type: 'single',
    tag: 'SYMPTOM CHECK',
    title: 'In the last 6 months, have you caught yourself thinking any of these?',
    options: [
      { label: 'A', text: '"The war in the Middle East feels different this time."' },
      { label: 'B', text: '"Something about the global economy feels like it\'s about to break."' },
      { label: 'C', text: '"AI is moving too fast — this can\'t end well."' },
      { label: 'D', text: '"These natural disasters are becoming impossible to ignore."' },
      { label: 'E', text: '"I\'ve read Revelation — but I never connected it to right now."' },
      { label: 'F', text: 'I\'ve thought more than 1 of these' },
      { label: 'G', text: 'Honestly, I\'ve thought all of them' },
    ],
  },
  // SCREEN 2 - Demographic Segmentation
  {
    id: 2,
    type: 'single',
    tag: 'YOUR PROFILE',
    title: 'How would you describe yourself right now?',
    subtitle: 'There\'s no wrong answer — this shapes your personalized assessment.',
    options: [
      { label: 'A', text: 'Committed Christian — actively attending church' },
      { label: 'B', text: 'Used to be religious — stepped away but still believe' },
      { label: 'C', text: 'Spiritually curious — open-minded, seeking answers' },
      { label: 'D', text: 'Skeptic — but the news keeps sending me back to the Bible' },
    ],
  },
  // SCREEN 3 - Prior Diagnosis
  {
    id: 3,
    type: 'single',
    tag: 'PRIOR AWARENESS',
    title: 'Have you ever seen a direct, evidence-based connection drawn between Biblical prophecy and current world events?',
    subtitle: 'Not just "signs of the times" preaching — but actual geopolitical, scientific, and economic data matched to Scripture.',
    options: [
      { label: 'A', text: 'Yes — and it shook me.' },
      { label: 'B', text: 'No — I didn\'t know that existed.' },
      { label: 'C', text: 'I\'ve seen attempts, but nothing rigorous or convincing.' },
    ],
  },
  // SCREEN 4 - Depth of Study
  {
    id: 4,
    type: 'single',
    tag: 'DEPTH OF STUDY',
    title: 'How familiar are you with these prophetic events described in Revelation?',
    options: [
      { label: 'A', text: 'Less than 6 months of study' },
      { label: 'B', text: '1 to 3 years of personal research' },
      { label: 'C', text: '3 to 10 years — it\'s a serious interest' },
      { label: 'D', text: 'Over 10 years — prophecy is central to my faith' },
    ],
  },
  // SCREEN 5 - Knowledge Gap Checkboxes
  {
    id: 5,
    type: 'multi',
    tag: 'KNOWLEDGE GAPS',
    title: 'Which of these connections have you never seen explained with real evidence?',
    subtitle: 'Select all that apply — this builds your personalized prophecy map.',
    options: [
      { label: 'A', text: 'The rise of a global economic control system — and Revelation 13' },
      { label: 'B', text: 'Artificial Intelligence, surveillance, and the Mark of the Beast' },
      { label: 'C', text: 'Middle East geopolitics and the alignment of Gog and Magog (Ezekiel 38)' },
      { label: 'D', text: 'Climate catastrophes matching the Trumpet judgments — scientifically' },
      { label: 'E', text: 'The collapse of Western institutions and the rise of a global government' },
      { label: 'F', text: 'Why post-tribulation is the only view Scripture consistently supports' },
    ],
  },
  // SCREEN 6 - Prior Behavior
  {
    id: 6,
    type: 'single',
    tag: 'RESEARCH HISTORY',
    title: 'Have you ever researched Bible prophecy using sources outside the church — history, geopolitics, science?',
    options: [
      { label: 'A', text: 'No — I only have church teaching as reference.' },
      { label: 'B', text: 'Yes — and it raised more questions than it answered.' },
      { label: 'C', text: 'Yes — and what I found was unsettling.' },
    ],
  },
  // SCREEN 7-9 - Editorial Social Proof
  {
    id: 7,
    type: 'editorial',
    tag: 'INTELLIGENCE BRIEFING',
    warning: 'Before you see your results — read this carefully:',
    headline: '"Economists, Military Strategists, and Climate Scientists Are Describing Revelation — They Just Don\'t Know It Yet"',
    paragraphs: [
      'In 2022, the Bank for International Settlements published a report outlining a framework for a fully traceable, programmable global digital currency — where transactions could be blocked based on behavior.',
      'In 2023, the World Economic Forum presented a roadmap for a unified global governance structure to manage "existential risks" — including pandemics, climate, and AI.',
      'In 2024, NATO war-game simulations began modeling a multi-front conflict centered on Israel, Iran, Russia, and China — a geographic alignment that reads like a commentary on Ezekiel 38.',
      'None of these institutions referenced the Bible. None of them are Christian organizations.',
      'And yet — a first-century exile named John, writing from the island of Patmos in 95 A.D., described a world where no one could buy or sell without a mark, where a coalition of nations from the north would descend on Israel, where the entire global economic and political system would be centralized under one authority.',
    ],
    closingBold: 'The question is no longer whether these things are possible. The question is: how close are we — and are you prepared to go through it?',
    cta: 'I want to understand this',
  },
  // SCREEN URGENCY - Villain Revealed
  {
    id: 8,
    type: 'editorial',
    tag: 'THE MISSING PIECE',
    warning: "Here's what most churches never told you:",
    paragraphs: [
      'The dominant prophecy view taught in American evangelical churches for the last 100 years — pre-tribulation rapture — has no clear precedent in Scripture before the 1830s. It was systematized by John Nelson Darby and popularized by the Scofield Reference Bible.',
      'Before that, for 1,800 years of Church history, believers prepared to endure — not escape.',
      'The result of the pre-trib model: millions of Christians are psychologically and spiritually unprepared for tribulation — because they were told they\'d never face it.',
      'History, Scripture, and current events tell a different story.',
    ],
    scripture: '"He who endures to the end will be saved." — Matthew 24:13',
    cta: 'Continue',
  },
  // SCREEN 10 - Ideological Agreement
  {
    id: 9,
    type: 'single',
    tag: 'ASSESSMENT',
    title: 'Do you agree that if Christians are going to go through the tribulation — rather than be raptured before it — then most believers are dangerously underprepared for what\'s already beginning?',
    subtitle: 'Please be honest.',
    options: [
      { label: 'A', text: 'I completely agree — and it concerns me deeply.' },
      { label: 'B', text: "I'm not sure about the timing, but I agree preparation matters." },
    ],
  },
  // SCREEN 11 - Awareness of Gravity
  {
    id: 10,
    type: 'single',
    tag: 'REVELATION\'S PURPOSE',
    title: 'Are you aware that Revelation was written not to frighten believers — but to prepare a persecuted Church to endure, resist, and overcome?',
    subtitle: 'Revelation 1:3  /  Matthew 24:13  /  Revelation 12:11\n\nAnd that "overcoming" requires understanding — not just faith?',
    options: [
      { label: 'A', text: 'Yes — and I feel the weight of not being prepared.' },
      { label: 'B', text: 'I never saw it that way. I need to understand this now.' },
    ],
  },
  // SCREEN 12 - Authority Audio
  {
    id: 11,
    type: 'audio',
    tag: 'EXPERT ANALYSIS',
    title: 'Listen to this 60-second explanation',
    subtitle: 'Tap the audio if it doesn\'t start automatically.',
    authority: {
      name: 'Dr. Thomas E. Hargrove',
      title: 'Professor of Biblical Eschatology and International Relations — 31 years of research',
    },
    quote: '"What I\'m about to share connects three data points — a 2023 IMF report, a passage in Revelation 13, and a declassified Pentagon document. When I first put these together, I had to sit down. Because John described it first — in 95 A.D."',
  },
  // SCREEN 13 - Visual Proof + Testimonial
  {
    id: 12,
    type: 'comparison',
    tag: 'YOUR TRANSFORMATION',
    title: 'This is what changes in 14 days:',
    before: [
      'Revelation feels symbolic and distant',
      "Can't explain the timeline to anyone",
      'Anxiety about the future — even as a believer',
      'Avoids the topic in conversation',
      'Waiting to be raptured out',
    ],
    after: [
      'Every chapter maps to a verifiable current event',
      'Clear timeline — peace in knowing the ending',
      'Can connect Scripture to geopolitics, AI & economics',
      'Ready to guide family through what\'s coming',
      'Prepared to endure, resist, and overcome',
    ],
    testimonial: {
      name: 'David R. — Austin, TX',
      title: 'Former Intelligence Analyst, 19 years U.S. Army',
      quote: "I spent two decades analyzing global threats for a living. When I retired and started reading Revelation seriously — with geopolitical eyes — I couldn't sleep for a week.\n\nThe economic control architecture described in Revelation 13 is not theoretical anymore. I've seen the documents. I've sat in the briefings. John described it in 95 A.D.\n\nThis guide was the first resource I found that didn't sanitize the data. It connected the prophecy to the evidence — and then told me what to do about it. For the first time, I'm not just informed. I'm prepared.",
    },
  },
  // SCREEN 14 - Micro-Offer
  {
    id: 13,
    type: 'offer',
    tag: 'YOUR PROTOCOL',
    title: 'Based on your profile, you qualify for the full 14-Day Revelation Intelligence Protocol.',
    subtitle: "Here's exactly what you receive:",
    items: [
      { title: 'THE REVELATION INTELLIGENCE GUIDE', desc: '163-page illustrated PDF — prophecy meets geopolitics, science, and economics' },
      { title: 'The Complete Prophetic Timeline', desc: 'Visual, printable, wall-ready. Every seal, trumpet, and bowl — mapped to historical and current events.' },
      { title: 'Chapter: Wars & Geopolitics', desc: 'How Ezekiel 38, Daniel 2, and Revelation 16 map to Russia, Iran, China, and Israel — today.' },
      { title: 'Chapter: The Global Economic System', desc: 'CBDCs, the BIS framework, and Revelation 13:17 — "no one may buy or sell."' },
      { title: 'Chapter: Artificial Intelligence & The Mark', desc: 'Biometric surveillance, digital identity systems, and what Scripture actually says about the Mark.' },
      { title: 'Chapter: Climate, Disasters & The Trumpets', desc: 'How the Trumpet judgments in Revelation 8-9 align with documented environmental data.' },
      { title: 'Chapter: The Post-Tribulation Case', desc: '18 centuries of Church history + 14 key Scripture passages — why the Church was always meant to endure.' },
      { title: '"Am I Prepared?" Readiness Checklist', desc: 'Printable — spiritual, practical, relational.' },
      { title: '14-Day Reading Plan', desc: '20 minutes per day. One revelation per chapter. At your own pace.' },
    ],
    options: [
      { label: 'A', text: 'Yes — I want the Revelation Intelligence Guide.' },
      { label: 'B', text: "I'm interested — but I have a few questions first." },
    ],
  },
  // SCREEN 15 - Final Commitment
  {
    id: 14,
    type: 'final',
    tag: 'YOUR DECISION',
    title: 'Will you commit 20 minutes a day for 14 days — to finally understand what\'s happening in the world, why it\'s happening, and what you\'re called to do about it?',
    subtitle: 'The timeline is already moving. The data is already public. The Word already described it. All that\'s missing is someone to connect the dots — clearly, honestly, and without fear.',
    options: [
      { label: 'A', text: "Yes — I'm ready to understand. Let's begin." },
      { label: 'B', text: "I'll give it my best. I'm in." },
    ],
  },
];
