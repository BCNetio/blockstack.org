const data = [
  {
    speaker: 'Ryan Shea',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@ryaneshea',
    day: 'March 2',
    time: '9:07 AM',
    talkTitle: 'Blockstack, Web 3, and Decentralized Apps',
  },
  {
    speaker: 'Dr. Muneeb Ali',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@muneeb',
    day: 'March 2',
    time: '9:24 AM',
    talkTitle: 'From Cloud Computing to Decentralized Computing',
  },
  {
    speaker: 'Ken Seiff',
    company: 'Blockchange Ventures',
    jobTitle: 'Managing Partner',
    twitter: '@seiff',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
  },
  {
    speaker: 'Melanie Shapiro',
    company: 'Token',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@melshapiro',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
  },
  {
    speaker: 'Dr. Jutta Steiner',
    company: 'Parity Tech',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@jutta_steiner ‏',
    day: 'March 2',
    time: '9:58 AM',
    talkTitle: 'Web3 and the Decentralized Internet',
  },
  {
    speaker: 'Santiago Siri',
    company: 'The Democracy Earth Foundation',
    jobTitle: 'Founder',
    twitter: '@santisiri',
    day: 'March 2',
    time: '10:10 AM',
    talkTitle: 'Crypto Politics: Beyond the Nation-State',
  },
  {
    speaker: 'Dr. Steven "Seven" Waterhouse',
    company: 'Orchid Labs',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@deseventral',
    day: 'March 2',
    time: '10:22 AM',
    talkTitle: 'Building a Censorship and Surveillance Free Internet',
  },
  {
    speaker: 'Andy Bromberg',
    company: 'CoinList',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@andy_bromberg',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
  },
  {
    speaker: 'Ari Paul',
    company: 'BlockTower Capital',
    jobTitle: 'Co-Founder and CIO',
    twitter: '@AriDavidPaul',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
  },
  {
    speaker: 'Brittany Laughlin',
    company: 'Lattice Ventures',
    jobTitle: 'Partner',
    twitter: '@br_ttany',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
  },
  {
    speaker: 'Richard Muirhead',
    company: 'Fabric Ventures and OpenOcean',
    jobTitle: 'Fabric Ventures, Founding Partner & OpenOcean, General Partner',
    twitter: '@richardmuirhead',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
  },
  {
    speaker: 'William Mougayar',
    company: 'Self',
    jobTitle: 'Author: "The Business Blockchain." Technology Futurist',
    twitter: '@wmougayar',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
  },
  {
    speaker: 'Larry Salibra',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@larrysalibra',
    day: 'March 1',
    time: '11:05 AM',
    talkTitle: 'Blockstack Identity & Authentication',
  },
  {
    speaker: 'Nick Szabo',
    company: 'Self',
    jobTitle: 'Blockchain, Cryptocurrency & Smart Contracts Pioneer',
    twitter: '@NickSzabo4',
    day: 'March 2',
    time: '11:20 AM',
    talkTitle: 'Social Scalability and Blockchains',
  },
  {
    speaker: 'Jude Nelson',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@JudeCNelson',
    day: 'March 1',
    time: '11:25 AM',
    talkTitle: 'Subdomains',
  },
  {
    speaker: 'Elizabeth Stark',
    company: 'Lightning Labs',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@starkness',
    day: 'March 2',
    time: '11:42 AM',
    talkTitle: 'Building the Future of Layer 2',
  },
  {
    speaker: 'Ken Liao',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '',
    day: 'March 1',
    time: '11:45 AM',
    talkTitle: 'Building a Blockstack App',
  },
  {
    speaker: '',
    company: '',
    jobTitle: '',
    twitter: '',
    day: '',
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
  },
  {
    speaker: 'Nader Al-Naji',
    company: 'Basecoin',
    jobTitle: 'Founder, CEO',
    twitter: '@nadertheory',
    day: 'March 2',
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
  },
  {
    speaker: 'Aaron Blankstein',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@AaronBlankstein',
    day: 'March 1',
    time: '12:05 PM',
    talkTitle: 'Gaia Storage',
  },
  {
    speaker: 'Chase Wackerfuss',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@vockerfoos',
    day: 'March 1',
    time: '12:55 PM',
    talkTitle: 'Blockstack.js Storage Strategies',
  },
  {
    speaker: 'Brett Sun',
    company: 'Aragon',
    jobTitle: 'EVM',
    twitter: '@sohkai',
    day: 'March 1',
    time: '1:15 PM',
    talkTitle:
      'Approaching Infinity: Governance & The Case for Experimentation',
  },
  {
    speaker: 'Edward Snowden',
    company: 'Self',
    jobTitle: 'Former U.S. Intelligence Officer and Whistleblower',
    twitter: '@Snowden',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
  },
  {
    speaker: 'Peter Van Valkenburgh',
    company: 'Coin Center',
    jobTitle: 'Director of Research',
    twitter: '@valkenburgh',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
  },
  {
    speaker: 'Xan Ditkoff',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@XanDitkoff ‏',
    day: 'March 1',
    time: '1:35 PM',
    talkTitle: 'Resources for Building Apps on Blockstack',
  },
  {
    speaker: 'Albert Wenger',
    company: 'Union Square Ventures',
    jobTitle: 'General Partner',
    twitter: '@albertwenger',
    day: 'March 2',
    time: '2:17 PM',
    talkTitle: 'Privacy',
  },
  {
    speaker: 'George Gilder',
    company: 'Self',
    jobTitle: 'Book: "Life After Google." Information Theorist',
    twitter: '@ScandalOfMoney',
    day: 'March 2',
    time: '2:34 PM',
    talkTitle: 'Life After Google',
  },
  {
    speaker: 'Patrick Stanley',
    company: 'Blockstack',
    jobTitle: 'N/A',
    twitter: '@PatrickWStanley',
    day: 'March 2',
    time: '3:00 PM',
    talkTitle: 'Intro to Blockstack App - Casa',
  },
  {
    speaker: 'Jeremy Welch',
    company: 'Casa',
    jobTitle: 'Founder',
    twitter: '@jeremyrwelch',
    day: 'March 2',
    time: '3:02 PM',
    talkTitle: 'Casa - Launching the Best Key System on the Planet',
  },
  {
    speaker: '',
    company: '',
    jobTitle: '',
    twitter: '',
    day: '',
    time: '3:14 PM',
    talkTitle: "Intro to Blockstack Live App Demo's",
  },
  {
    speaker: 'Justin Carter',
    company: 'Misthos',
    jobTitle: 'N/A',
    twitter: '',
    day: 'March 2',
    time: '3:18 PM',
    talkTitle: 'Misthos App Demo',
  },
  {
    speaker: 'Bill Hessert',
    company: 'DotPodcast',
    jobTitle: 'N/A',
    twitter: '@BillHessert',
    day: 'March 2',
    time: '3:28 PM',
    talkTitle: 'DotPodcast App Demo',
  },
  {
    speaker: 'Aneela Qureshi',
    company: 'Symmitree',
    jobTitle: 'N/A',
    twitter: '',
    day: 'March 2',
    time: '3:37 PM',
    talkTitle: 'Symmitree App Demo',
  },
  {
    speaker: 'Ryan Wells',
    company: 'Health Here',
    jobTitle: 'N/A',
    twitter: '',
    day: 'March 2',
    time: '3:46 PM',
    talkTitle: 'Health Here App Demo',
  },
  {
    speaker: 'Thomas Osmonson',
    company: 'Coins',
    jobTitle: 'N/A',
    twitter: '@aulneau_',
    day: 'March 2',
    time: '3:55 PM',
    talkTitle: 'Coins App Demo',
  },
  {
    speaker: 'Aron Beierschmitt',
    company: 'Postly',
    jobTitle: 'N/A',
    twitter: '@abearschmitt',
    day: 'March 2',
    time: '4:02 PM',
    talkTitle: 'Postly App Demo',
  },
  {
    speaker: 'Dirk Lueth',
    company: 'The Global Content Network',
    jobTitle: 'N/A',
    twitter: '@DirkLueth',
    day: 'March 2',
    time: '4:11 PM',
    talkTitle: 'Global Content Network App Demo',
  },
  {
    speaker: 'Justin Hunter',
    company: 'Graphite',
    jobTitle: 'N/A',
    twitter: '@jehunter5811',
    day: 'March 2',
    time: '4:20 PM',
    talkTitle: 'Graphite App Demo',
  },
  {
    speaker: 'Adam Breckler',
    company: 'Prism IO',
    jobTitle: 'N/A',
    twitter: '@adambreckler ‏',
    day: 'March 2',
    time: '4:29 PM',
    talkTitle: 'Prism App Demo',
  },
  {
    speaker: 'Matt Moody',
    company: 'Bellwethr',
    jobTitle: 'N/A',
    twitter: '',
    day: 'March 2',
    time: '4:38 PM',
    talkTitle: 'Bellwethr App Demo',
  },
  {
    speaker: 'Chris Burniske',
    company: 'Placeholder',
    jobTitle: 'Partner',
    twitter: '@cburniske',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
  },
  {
    speaker: 'Dieter Shirley',
    company: 'Axiom Zen',
    jobTitle: 'Director of Blockchain Technology',
    twitter: '@dete73',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
  },
  {
    speaker: 'Mik Naayem',
    company: 'Axiom Zen',
    jobTitle: 'Strategic Partnerships',
    twitter: '@Mik_Naayem',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
  },
  {
    speaker: 'Juan Benet',
    company: 'Protocol Labs, Filecoin, IPFS',
    jobTitle: 'CEO and Founder',
    twitter: '@juanbenet',
    day: 'March 2',
    time: '5:15 PM',
    talkTitle: 'Filecoin',
  },
  {
    speaker: 'Felix Petersen',
    company: 'Samsung NEXT Europe',
    jobTitle: 'Managing Director',
    twitter: '@fiahless',
    day: 'March 2',
    time: '5:32 PM',
    talkTitle: 'Berlin Eco-System & What the Future Holds...',
  },
];