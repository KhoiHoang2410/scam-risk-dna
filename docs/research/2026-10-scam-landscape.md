# Consumer Scam Landscape, October 2026

Research for updating the scam categories in `src/data/archetypes.json`.
Researched 2026-10-11. All URLs were checked on that date.

## How to read this

- **[Primary]** means I read the number in the owner's own document (FBI, FTC, UK Finance, Singapore Police, and so on).
- **[Primary, via search]** means the owner's page blocked direct download, so the figure comes from the search engine's extract of that official page. Treat it as likely correct, but recheck before you publish a specific number.
- **[Secondary]** means a news outlet reporting an official figure. I could not open the original.
- **[Unverified]** means I could not trace the claim back to its owner.
- **[Analysis]** means my own reasoning, not a sourced fact.

Timing: the newest full-year data is for **2025**, released between February and June 2026. Full-year 2026 numbers will not exist until early 2027. The only official 2026 data I found is Singapore's first-half 2026 brief and some Vietnamese police warnings.

---

## 1. What the latest data says

### 1.1 United States

**FBI IC3, 2025 Internet Crime Report** (released April 2026) [Primary]: https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf

- 1,008,597 complaints, $20.877 billion in losses, up 26% on 2024.
- Crypto was involved in $11.37 billion of losses. Crypto investment fraud alone was $7.2 billion.
- People aged 60+ filed 201,266 complaints (up 37%) and lost $7.7 billion (up 59%).

Top 5 by **losses**, with change from 2024:

| Type | 2025 losses | 2024 losses | Change |
|---|---|---|---|
| Investment | $8.65B | $6.57B | +32% |
| Business email compromise (fake boss or supplier emails) | $3.05B | $2.77B | +10% |
| Tech or customer support | $2.13B | $1.46B | +46% |
| Personal data breach | $1.31B | $1.45B | -10% |
| Confidence or romance | $929M | $672M | +38% |

Top 5 by **complaint count**: phishing or spoofing (191,561), extortion (89,129), investment (72,984), personal data breach (67,456), non-payment or non-delivery (56,478).

Fastest growing from 2024 to 2025 (my own calculation from the IC3 three-year table):

- Government impersonation: complaints +87% (17,367 to 32,424), losses +97% ($406M to $798M).
- Phishing or spoofing losses roughly tripled ($70M to $216M), even though complaint numbers stayed flat.
- Investment complaints +52%.
- Employment (job) scam losses +37% ($264M to $363M).
- Falling: non-payment or non-delivery losses -36%, SIM swap losses -33%.

Other IC3 2025 figures worth using:

- Recovery scams (a second scam that targets people who already lost money): 10,516 complaints, $1.4 billion.
- Account takeover by fake bank support staff: about 4,700 complaints, $359.7 million.
- "Gold courier" scams, where a courier collects cash or gold from victims of fake tech support or government scams: about 725 complaints, $311.8 million.
- Sextortion: more than 75,000 submissions.
- Complaints that mention AI: 22,364, with $893 million in losses. Distress scams using cloned voices of family members cost over $5 million. Investment complaints with an AI link cost over $632 million. These include AI-made videos of celebrities and executives. The FBI notes that many victims probably don't realise AI was used.

**FTC Consumer Sentinel, 2025 data** [Primary]: testimony to Congress, March 2026, https://www.ftc.gov/system/files/ftc_gov/pdf/ftc-testimony-jec-hearing-on-the-rising-scam-economy.pdf

- 3 million fraud reports and $15.9 billion lost, up from 2.6 million reports and over $12 billion in 2024.
- Imposter scams were the most reported category, with over 1 million reports and over $3.5 billion lost.
- Investment scams had the highest losses, at over $7.9 billion, which is about half of all reported losses. The average loss was over $10,000.
- Text messages were the most reported way scammers first made contact. Social media led on losses, at over $2 billion in FY2025.
- Bank transfers caused the largest total losses, followed by cryptocurrency.

**FTC imposter release, June 2026** [Primary]: https://ftc.gov/news-events/news/press-releases/2026/06/ftc-data-show-people-reported-losing-3-point-5-billion-imposter-scams-2025

- Business impersonators: nearly $1 billion. Bank impersonators caused the highest losses.
- Government impersonators: about $920 million.
- The release says people are "convinced to move money to 'protect' it". It adds that "some of the costliest impersonation scams start with a fake security alert, often from a bank."

### 1.2 United Kingdom

**UK Finance, Annual Fraud Report 2026** (2025 data) [Primary]: https://www.ukfinance.org.uk/system/files/2026-06/UK%20Finance%20Fraud%20Report%202026.pdf

APP fraud is fraud where the victim is tricked into sending the payment themselves. 2025 losses by type:

| Type | Losses | Change on 2024 | Note |
|---|---|---|---|
| Investment | £221.5m | +40% | Highest ever. 38% of all APP losses. Driven by fake adverts and social posts. |
| Purchase | £118.1m | +20% | Highest ever. 71% of all APP cases. Includes fake car, phone, concert ticket and holiday rental listings. |
| Advance fee | £58.4m | +65% | Highest ever. Driven by deposits for cars and holiday rentals that don't exist. |
| Romance | £39.2m | +23% | Highest ever. Average of 9.7 payments per scam. |
| Bank or police impersonation | £55.5m | down | Lowest since 2020 |
| CEO fraud | £5.6m | -53% | |

- 66% of APP cases start online. 17% start by phone or text but account for 28% of losses.
- The UK "159" service connects you to your bank's real fraud line. 159 never calls you. https://www.stopscamsuk.org.uk/159

**Ofcom**: I found no 2025 or 2026 Ofcom scam survey. The latest is from January 2024: https://www.ofcom.org.uk/online-safety/online-fraud/online-call-and-text-fraud

**Action Fraud, NCSC, CISA**: I did not find new 2025 or 2026 statistics from these that add to the above. Not covered.

### 1.3 Australia

**ACCC and National Anti-Scam Centre, Targeting Scams 2025** (published March 2026) [Primary, via search]. The site blocked direct download.
https://www.accc.gov.au/media-release/continued-action-critical-to-combat-fraud-as-annual-scam-losses-exceed-2-billion and https://www.scamwatch.gov.au/research-and-resources/targeting-scams-report

- A$2.18 billion lost, up 7.8% on 2024. This is still below the 2022 peak of A$3.1 billion.
- Top losses: investment A$837.7m, payment redirection A$166.8m, romance A$139.9m, phishing A$97.6m, remote access A$69.9m.
- Official advice is **Stop. Check. Protect.**: https://www.scamwatch.gov.au/stop-check-protect

### 1.4 Singapore

This is the best official Southeast Asia data, and it includes the first half of 2026.

**Annual Scam and Cybercrime Brief 2025** [Primary]: https://www.police.gov.sg/-/media/SPF/Advisories/Scams/Annual-Scam-and-Cybercrime-Brief-2025.pdf

- 37,308 scam cases (down 27.6%) and S$913.1 million lost (down 17.9%).
- Top by cases: e-commerce 6,703, phishing 6,264, job 5,575, investment 5,462, government official impersonation 3,363.
- Top by losses: investment S$336.2m, government official impersonation S$242.9m, job S$123.5m.
- Government official impersonation cases rose 123.6% and losses rose 60.5%. 91.7% of these cases started with a fake bank call, then a hand-off to a fake officer who accused the victim of money laundering. Victims were told to move money to "safety accounts" or hand over cash, gold or valuables.
- Phishing was mostly victims typing card details and OTPs into fake checkout pages.
- Pokémon cards were the item most often used in e-commerce scams.

**Mid-Year Scam and Cybercrime Brief 2026** (released August 2026) [Primary]: https://www.police.gov.sg/-/media/SPF/Media-Room/Statistics/Mid-Year-Scam-and-Cybercrime-Brief-2026/Mid-Year-Scam-and-Cybercrime-Brief-2026.pdf

- 16,821 scam cases (down 14.4%) and S$410.6 million lost (down 17.9%).
- 80.8% of scams were "self-effected transfers". The victim moved the money themselves after being manipulated, rather than being hacked.
- Investment losses were S$169.8m. A new pattern: ads that fake NUS or moomoo offer "free investment tips", then pull people into WhatsApp "investment learning communities". Fake members in the group praise the "mentor".
- Government official impersonation losses were S$90.8m. A new hand-off chain starts with fake Singtel, YouTrip or Prudential staff, then passes to fake MinLaw, MAS or police officers.
- E-commerce cases rose 19.3%. Pokémon card cases rose 116.8%, driven by pre-orders with delivery "months away".
- Social media impersonation cases rose 47.9%. 66.6% came from hijacked WhatsApp accounts messaging the owner's contacts for an "emergency loan".
- Business email compromise losses rose 193%, to S$57.3m.
- Phishing: fake courier messages arrived by iMessage. Victims typed in their OTP, and the scammers added their card to Apple Pay or Google Pay.
- First contact: messaging apps 27.6%, social media 26.7%, online shopping platforms 11.2%, phone calls 9.7%. Facebook, WhatsApp and Instagram together made up 34.1% of cases.
- Elderly victims lost S$42,347 each on average, the highest of any age group.
- The Cyber Security Agency analysed malicious Android apps (APKs, app files installed from outside the app store) sold "as a service" for scams.
- Singapore's advice is **ACT: Add, Check, Tell**, plus the ScamShield helpline 1799: https://www.scamshield.gov.sg/get-involved/i-can-act-campaign/

### 1.5 Vietnam

Official national statistics are thin and scattered. The figures below come from different bodies, periods and methods, so don't compare them directly.

- **Ministry of Public Security**: over 1,500 online fraud cases and VND1.66 trillion (about US$63m) lost in the first 8 months of 2025 [Secondary]. https://en.vneconomy.vn/vietnam-records-over-1500-online-fraud-cases-in-8m.htm
- **Ministry of Public Security**: losses of over VND6,000 billion in the first 11 months of 2025 [Secondary]. This doesn't match the figure above, so treat both as unverified until you find the original. https://lsvn.vn/mao-danh-cong-an-la-hinh-thuc-lua-dao-pho-bien-nhat-nam-2025-a168055.html
- **National Cybersecurity Association (NCA) survey of 60,300 users** (December 2025) [Secondary]. Same lsvn.vn link as above. This is a survey, not police data.
  - About 1 in 555 people (0.18%) were scammed in 2025, down from 1 in 220 (0.45%) in 2024.
  - Most common scams in 2025: (1) **fake police**, (2) fake prizes and gifts, (3) high-return investment, which dropped from 2nd, (4) fake delivery drivers, (5) romance and friendship.
  - Only 32.12% of victims reported to the authorities.
- **NCA survey for 2024**: an estimated VND18.9 trillion (US$744m) lost [Secondary]. https://news.tuoitre.vn/vietnamese-lose-744mn-to-online-scams-in-2024-report-10383436.htm
  - 70.72% of respondents were offered "risk-free" investments.
  - 62.08% got calls from fake police, tax officers or bank staff.
- **Hanoi Police, 9 September 2026**: warned of "25 scam scenarios" in 5 groups [Secondary, newest Vietnamese source]. https://doanhnhan.baophapluat.vn/cong-an-ha-noi-canh-bao-nguoi-dan-canh-giac-truoc-25-kich-ban-lua-dao-tren-khong-gian-mang-nam-2026-7cc6172e.md
  1. Fake police, prosecutors, courts, banks, schools, hospitals, social insurance, power companies or telecoms, plus fake brand-name SMS. They ask for OTPs, passwords or "fines".
  2. AI, deepfake and voice-clone calls from "relatives" or "bosses". Some scammers call just to record your voice.
  3. Investment and job scams. Small early withdrawals build trust, then come large deposits.
  4. Online buying and selling: fake transfer receipts, fake buyers and sellers, deposits.
  5. Data theft and phone takeover through fake links, **malicious QR codes**, malware apps and remote-access apps.
- **Fake VNeID apps** (VNeID is the national digital ID app):
  - Fake police guide people to install a fake VNeID app that can read SMS, steal bank OTPs and take over the phone [Secondary]. https://lsvn.vn/bo-cong-an-canh-bao-thu-doan-lua-dao-cai-ung-dung-vneid-gia-mao-a160066.html
  - In September 2025, Cao Bằng police broke up a Cambodia-based ring with about 400 victims and over VND160 billion stolen [Secondary]. https://news.tuoitre.vn/nearly-400-vietnamese-lose-over-6mn-in-cambodia-based-fake-police-scam-103250916132759731.htm
  - In July and August 2026, provincial police warned of fake officers offering to "activate VNeID for children under 14" or to "update VNeID" over the phone [Secondary]. https://lsvn.vn/canh-bao-mao-danh-cong-an-ho-tro-kich-hoat-vneid-cho-tre-em-de-lua-dao-a175408.html and https://lsvn.vn/canh-giac-thu-doan-gia-danh-can-bo-yeu-cau-cap-nhat-vneid-qua-dien-thoai-mang-xa-hoi-a177417.html
- **Deepfake blackmail**: people's faces are put into fake explicit videos to extort money. One Hanoi student paid VND50m [Secondary]. https://vietnamnews.vn/society/1694933/vietnamese-authorities-warn-of-rising-ai-driven-deepfake-extortion-scams.html
- **Banking controls**:
  - Since 1 July 2024, State Bank Decision 2345 requires a face or fingerprint check for transfers over VND10 million, or over VND20 million in a day [Secondary]. https://luatvietnam.vn/tin-van-ban-moi/tu-2024-chuyen-khoan-tren-10-trieu-dong-phai-xac-thuc-sinh-trac-hoc-186-96491-article.html
  - Scammers adapted by posing as bank staff who "help update biometrics" [Secondary]. https://baolaocai.vn/xuat-hien-chieu-tro-ho-tro-cai-dat-sinh-trac-hoc-de-lua-dao-post386243.html
  - By late 2025, the State Bank's SIMO fraud-warning system had warned over 2.4 million customers and stopped over 776,000 risky transactions [Secondary]. https://en.vietstock.vn/2026/01/financial-scams-surge-ahead-of-tet-37-627977.htm
- **Tết 2026 warnings** from banks and police [Secondary], same Vietstock link: a fake VND400,000 "Tết support payment", fake lookalike bank sites, QR-code phishing, and loan apps that demand an upfront fee.
- **Job and task scams ("việc nhẹ lương cao", or "light work, high pay")**: the "online collaborator" scheme is to pay for e-commerce orders and earn commission. Recent warnings are from 2023 to 2024. I found no 2026 national statistic. https://lsvn.vn/tai-dien-chieu-tro-lua-dao-cong-tac-vien-online-viec-nhe-luong-cao-1709292988.html
- **Where to report in Vietnam**: canhbao.khonggianmang.vn, the 156/5656 short codes for scam calls and texts, the nearest police station, and the NCA's nTrust app for checking numbers and sites. Sources are the Tuoi Tre and lsvn.vn links above. [Secondary]

**Cục An toàn thông tin (NCSC Vietnam)**: I could not reach a dated 2026 weekly bulletin directly. Its older list of 24 scam forms (2023) is superseded by the Hanoi Police 2026 grouping above. [Unverified for 2026]

### 1.6 Global and Europe

- **GASA and Feedzai, Global State of Scams 2025** (October 2025, 46,000 adults in 42 markets) [Primary]: https://www.gasa.org/post/global-scams-on-the-rise-over-half-of-adults-worldwide-report-scam-encounters
  - 57% of adults experienced a scam in the past year, and 23% lost money.
  - Most common types: shopping (54% of victims), investment (48%), "unexpected money" (48%).
  - 73% feel confident they can spot scams, but common checks are weak: grammar (27%), reviews on the same site (24%).
  - Total losses of about US$442 billion are [Secondary, Feedzai blog]: https://www.feedzai.com/blog/gasa-global-state-of-scams-report/
- **GASA Southeast Asia 2025**: Vietnam and Malaysia had the highest share reporting a scam, about 63% [Unverified]. The full report is for members only.
- **Europol IOCTA 2026** (April 2026, covering 2025) [Secondary]: https://eucrim.eu/news/iocta-2026/ and https://www.europol.europa.eu/cms/sites/default/files/documents/IOCTA-2026.pdf
  - Online fraud is more scalable and personalised. Phishing is still the most common method.
  - Generative AI is used to impersonate bank helpdesks and police, and in CEO fraud.
  - Crypto investment fraud mostly runs on very large online platforms.
  - The figure of US$64.1 billion in 2025 losses comes only from ASIS coverage [Unverified]. I could not open the PDF.

### 1.7 Summary of the trend from 2024 to 2026 [Analysis]

1. **Investment fraud is the largest by money everywhere**: US, UK, Australia, Singapore. It still rose in 2025 in the US (+32%) and UK (+40%).
2. **Government, bank and police impersonation surged in 2025.** IC3 government impersonation losses about doubled. Singapore cases rose 124%. Fake police is Vietnam's most common scam. The UK, where banks must refund victims and "159" exists, is the exception, with impersonation at a record low. In Singapore it fell in the first half of 2026 after heavy countermeasures.
3. **Shopping and deposit scams lead on case count**: Singapore e-commerce, UK purchase scams at 71% of cases, and GASA's top type. Losses per case are low, but almost everyone is exposed.
4. **Job and task scams went from almost nothing to a top-5 type** in the US (losses +37%) and Singapore (#3 by cases and losses).
5. **AI is now an ingredient, not a separate scam.** It makes investment ads, romance chats, voice-clone emergencies and blackmail more convincing.
6. **"Self-effected" payments dominate.** In about 80% of Singapore cases the victim moved the money themselves. So the quiz's core message should be about pausing and checking before you pay, not only about antivirus.
7. **Second-hit scams are real.** US recovery scams cost $1.4B, and Vietnam has fake "get your money back" services posing as the police portal.

---

## 2. Rising vectors (one-line status)

| Vector | Status | Key source |
|---|---|---|
| AI voice clone or deepfake video of family, boss or celebrity | Rising. IC3: 22,364 AI-linked complaints, $893M. Distress calls cost $5M+. Deepfake celebrity investment ads. Hanoi Police group 2. | IC3 2025 report; Hanoi Police 2026 |
| Pig butchering (long-con friendship, then crypto investment) | Biggest single loss type in the US ($7.2B crypto investment). Run by Southeast Asian compounds using trafficked workers (FBI). | IC3 2025 report |
| Task or job scams (like videos, rate products, "optimise" orders) | Rising. FTC task-scam reports went from about 0 (2020) to about 20,000 in the first half of 2024 alone. Singapore #3 by cases. | https://ftc.gov/system/files/ftc_gov/pdf/task-scams-spotlight-2024.pdf ; SPF 2025 |
| Toll or parcel smishing (scam texts) | Persistent. FBI PSA since April 2024. Singapore iMessage courier phishing in 2026. Fake delivery drivers are #4 in Vietnam. | https://www.ic3.gov/PSA/2024/PSA240412 ; SPF 1H2026; NCA |
| QR "quishing" (QR codes that lead to fake sites) | Present: fake stickers on parking meters, QR codes in texts and emails. Hanoi Police list malicious QR codes. No good loss data. | https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information |
| Fake trading or investment apps | Core part of pig butchering. Fake profits shown, then "tax" or "fee" to withdraw. | IC3 2025 report |
| OTP theft or account takeover | Singapore phishing is mostly OTP capture, with cards added to Apple Pay or Google Pay. IC3 ATO $360M. | SPF 1H2026; IC3 |
| SIM swap | Falling in the US (losses -33%, 971 complaints). Low priority for a quiz. | IC3 2025 report |
| Police, government or bank impersonation, "safe account" | Surged in 2025. The "safe or safety account" script is documented by SPF. FTC: "move money to protect it". | SPF 2025; FTC June 2026 |
| Marketplace (fake sellers, pre-orders, fake receipts) | Top by case count. Collectible pre-orders up 117% in Singapore in the first half of 2026. | SPF 1H2026; UK Finance |
| Ticket or holiday rental scams | Included in UK purchase (+20%) and advance fee (+65%) scams | UK Finance 2026 |
| Sextortion and deepfake blackmail | 75,000+ IC3 submissions. Vietnamese police warn about deepfake blackmail. | IC3; Vietnam News |
| AI chatbot romance | IC3: scammers use "scripts produced by AI chat generators". Only $19M was clearly linked to AI. A specific "AI companion app" scam trend is [Unverified]. | IC3 2025 report |
| Fake customer support via search ads | FTC warns that scammers pay to place fake support numbers in search results. IC3 tech and customer support losses were $2.13B (+46%). | FTC consumer guidance on fake support numbers (seen via search only, page URL [Unverified]); IC3 2025 report |
| Malicious APK or remote-access apps (Southeast Asia, Vietnam) | Fake VNeID apps. Singapore CSA found malware-as-a-service APKs. Australia: remote-access scams cost A$69.9M. | Vietnam police; SPF 1H2026; ACCC |
| Recovery scams | $1.4B (IC3). Vietnam has fake police-portal "fund recovery" services. | IC3; https://baolaocai.vn/thu-doan-mao-danh-cong-thong-tin-dien-tu-bo-cong-an-post384033.html |
| Hijacked messaging accounts ("friend" asks for a loan) | Singapore: 391 cases in the first half of 2026 from compromised WhatsApp accounts. The same pattern is common on Zalo and Facebook per Vietnamese warnings. | SPF 1H2026; Vietstock |

---

## 3. Psychological levers [Analysis]

This mapping is my own synthesis. It draws on how the official sources describe each scam script, and on standard persuasion principles: authority, urgency or scarcity, social proof, reciprocity, commitment, liking. It is not a sourced statistic.

| Lever | What it feels like | Scams that use it most |
|---|---|---|
| **Fear plus authority** | "I'm in trouble with the law or my bank and must obey." | Police, government and bank impersonation. Sextortion (fear plus shame). |
| **Urgency or autopilot** | "Quick, just tap and fix it." | Toll and parcel texts, OTP requests, QR codes, fake security alerts |
| **Greed or FOMO, plus social proof** | "Others are getting rich, and the group proves it works." | Investment groups, fake trading apps, celebrity deepfake ads |
| **Reciprocity and small commitments** | "They already paid me, so I'll keep going." | Task and job scams, pig butchering with early small withdrawals |
| **Love or loneliness** | "This person understands me." | Romance, AI chatbot romance, pig-butchering openers |
| **Helpfulness or protectiveness** | "My family or friend needs me now." | Voice-clone emergencies, hijacked Zalo or WhatsApp "loan" requests, fake boss |
| **Bargain-hunting or scarcity** | "Last one, pay the deposit before it's gone." | Marketplace, pre-orders, tickets, rentals |
| **Trust in tech or helpdesks** | "The support agent or app knows best." | Fake customer support, remote-access apps, fake VNeID or "biometric update" apps |
| **Hope or desperation** | "I can get my money back." | Recovery scams |

---

## 4. Proposed categories (8)

Design goals [Analysis]:

- Each category has one main lever, so it maps cleanly to a personality archetype.
- Each one covers a big slice of losses or cases in the 2025 and 2026 data.
- Each one is recognisable to a Vietnamese or Southeast Asian user.

### 1. Fake Investment and "Get Rich" Groups

- **What it is**: Someone you met online, or a slick ad, gets you into a "can't-lose" investment. Usually crypto, gold, stocks or forex, often in a group chat full of fake winners. The app shows profits until you try to withdraw.
- **Main lever**: Greed or FOMO plus social proof.
- **Why it matters**: The top loss type in the US ($8.65B), UK (£221.5m, +40%), Australia (A$837.7m) and Singapore (S$336.2m). #3 in Vietnam.
- **Everyday examples**:
  - A TikTok or Facebook ad shows a famous businessman (actually a deepfake) saying he's sharing his "AI trading bot" free. You fill in your number and get added to a Zalo or WhatsApp group called "Học viện đầu tư 2026", where 200 "members" post screenshots of profits every day.
  - A friendly stranger you met over a wrong-number text, after weeks of chatting, shows you her earnings on a trading app and offers to "guide" you. Your first deposit doubles on screen. When you try to withdraw, you're told to pay a 20% "tax" first.
- **Defence tips**:
  - Never invest through an app or website someone sent you a link to. Check the firm is licensed with the regulator first. In Vietnam that's the State Securities Commission. In Singapore it's the MAS register.
  - Any fee or "tax" to withdraw your own money means it's a scam. Stop paying (IC3 2025).
  - Treat any celebrity endorsement video as fake until proven otherwise (IC3 2025 on AI-made celebrity videos).
  - If you've lost money, don't pay anyone who promises to "recover" it. That's the next scam (IC3 recovery scams).

### 2. Easy-Money Jobs and Tasks

- **What it is**: A "job" that pays you to like videos, rate products or complete orders. You get small payouts at first, then have to top up your own money to "unlock" bigger tasks.
- **Main lever**: Reciprocity and small commitments, plus financial need.
- **Why it matters**: US job scam losses +37%. Singapore #3 by cases and losses. "Light work, high pay" is a long-running Vietnamese pattern.
- **Everyday examples**:
  - A WhatsApp message: "Hi, I'm Linh from Shopee HR. Part-time job, 15 minutes a day liking products, earn 500k-2 triệu/day." You do 3 tasks and get 150k. Then you're told to "pay for a combo order" of 5 triệu to get commission.
  - A Telegram "team leader" shows you a leaderboard of other members finishing "VIP tasks". Your account is "frozen" until you deposit more to finish the set.
- **Defence tips**:
  - Real jobs never ask you to pay to work or to "unlock" your earnings (FTC task-scam spotlight).
  - Be suspicious of any job offer you didn't apply for that arrives by text, WhatsApp, Telegram or Zalo.
  - Never use your own money or crypto to "complete" orders or tasks.
  - Check the company through its official website and HR channels, not the contact in the chat.

### 3. Fake Police, Officials and Bank Staff ("Safe Account" Scams)

- **What it is**: Someone posing as police, a court, tax office or your bank says you're tied to a crime or your account is at risk. They tell you to move money to a "safe" account, hand over cash or gold, or install an app for "verification".
- **Main lever**: Fear plus authority, with forced secrecy.
- **Why it matters**: The #1 most common scam in Vietnam in 2025. IC3 losses about doubled. Singapore cases +124% in 2025, with S$90.8m lost in the first half of 2026. Elderly victims lose the most per case.
- **Everyday examples**:
  - A call: "Đây là Công an quận, CCCD của anh liên quan đến đường dây rửa tiền." A video call follows from a man in uniform showing an "arrest warrant". He tells you not to tell anyone and to transfer your savings to a "tài khoản tạm giữ" (holding account) so it can be checked.
  - A text: "Your bank account will be locked today. Update your biometrics now," with a link. Then a "bank officer" calls to walk you through installing an app.
  - A fake Singtel or telco agent says a number registered in your name was used for fraud. They "transfer" you to an MAS or police officer.
- **Defence tips**:
  - Police, courts and banks never ask you to transfer money, hand over cash, or share OTPs or passwords by phone (Singapore Police; FTC; Hanoi Police).
  - Hang up. Call back on the number on your card or the official website, never one the caller gives you. In the UK, dial 159.
  - There's no such thing as a "safe account". Any request to move money to protect it is the scam (FTC June 2026).
  - Real officials won't do VNeID or biometric updates over the phone or Zalo. Do these only in the official app or in person (Cà Mau Police 2026).

### 4. Urgent Alerts, Fake Links and QR Codes

- **What it is**: A text, email, QR code or search ad that looks like a delivery firm, toll road, bank, prize draw or brand. It rushes you to "fix" something or "claim" something, and steals your card, login or OTP.
- **Main lever**: Urgency and autopilot (acting before thinking).
- **Why it matters**: Phishing is the #1 IC3 complaint type, and its losses tripled. Text is the FTC's #1 first-contact method. Fake prizes are #2 and fake delivery drivers #4 in Vietnam. Singapore #2 by cases.
- **Everyday examples**:
  - An SMS: "VNPost: Đơn hàng của bạn không thể giao do sai địa chỉ. Cập nhật tại vnpost-vn[.]top trong 24h." The page asks for a 15k "redelivery fee", then your OTP. Your card gets added to someone's Apple Pay.
  - A sticker over the parking machine's QR code takes you to a payment page that looks real.
  - You google "Grab hotline" and call the top ad. The "agent" asks you to install an app to process a refund.
  - A Zalo message: "Chúc mừng! Bạn trúng iPhone 17 từ chương trình tri ân khách hàng. Phí vận chuyển 99k."
- **Defence tips**:
  - Don't tap links in unexpected texts. Open the official app or type the website yourself (FBI toll PSA; Singapore Police).
  - Never share an OTP with anyone, for any reason. The OTP message itself says what it authorises (Hanoi Police; Vietnamese banks).
  - Check QR codes for stickers on top, and look at the web address before you pay (FTC QR alert).
  - Get support numbers from the company's own app or website, not from search ads (FTC).

### 5. Voice of a Loved One (Deepfake and Hijacked-Account Emergencies)

- **What it is**: A call, voice note, video call or message that seems to come from your child, parent, friend or boss, asking for urgent money. It uses an AI voice clone, a deepfake video, or their real but hacked account.
- **Main lever**: Helpfulness, love and protectiveness, plus urgency.
- **Why it matters**: IC3 records AI distress scams and AI-assisted business email compromise. Singapore hijacked-WhatsApp cases +47.9% in the first half of 2026. Deepfake and voice-clone calls are Hanoi Police's 2026 group 2.
- **Everyday examples**:
  - A crying voice that sounds exactly like your daughter: "Mẹ ơi con bị tai nạn, đang ở bệnh viện, chuyển gấp 30 triệu cho bác sĩ." The call drops, and a "doctor" texts the account number.
  - Your old school friend's real Zalo or Facebook account messages: "Cho mình mượn 5 triệu, mai trả, tài khoản mình đang bị lỗi." It's a hacked account.
  - A 10-second video call from "your director" asks you to urgently pay a supplier before the end of the day.
- **Defence tips**:
  - Agree a family safe word or phrase now, and ask for it on any emergency call (FBI PSA I-120324).
  - Hang up and call the person back on the number you already have. If you can't reach them, call another family member (FBI; FTC).
  - Treat any money request in chat as unverified until you've spoken to the person on a normal call.
  - Keep social accounts private, and limit public videos and voice clips (FBI PSA I-120324).

### 6. Romance and Fake Relationships

- **What it is**: Someone builds an online relationship over weeks, sometimes with AI-written chats and stolen or AI-made photos. Then a crisis, gift, visa, customs fee or "investment together" needs your money. A darker branch threatens to leak intimate images (sextortion).
- **Main lever**: Love and loneliness. For sextortion: shame and fear.
- **Why it matters**: IC3 romance losses +38% ($929M). UK romance at a record high (£39.2m, +23%). Australia A$139.9m. #5 in Vietnam. IC3 sextortion submissions over 75,000.
- **Everyday examples**:
  - A handsome "engineer working on an oil rig" you met on Facebook chats with you daily for two months. He says he's sending you a gift box with jewellery and dollars, and customs needs 18 triệu to release it.
  - A match on a dating app moves to Telegram, and after a flirty video call says they've recorded you. Pay or they'll send it to your friends.
- **Defence tips**:
  - Never send money, gifts or crypto to someone you've only met online, however long you've talked (FBI PSA I-120324).
  - Reverse-search their photos. Insist on a live video call, and watch for lag or odd faces.
  - Talk to a friend or family member before sending any money. Scammers push for secrecy.
  - If someone is blackmailing you, don't pay. Keep the evidence, block them, and report to the police (Vietnam police advice; FBI).

### 7. Shopping, Deposits and Marketplace Scams

- **What it is**: A fake seller takes your deposit or full payment for something that never arrives: phones, collectibles, concert tickets, holiday rentals, cars. Or a fake buyer sends a fake transfer receipt or "escrow" link to get your goods or your bank details.
- **Main lever**: Bargain-hunting and scarcity. For sellers: politeness and trust in a receipt.
- **Why it matters**: #1 by case count in Singapore and GASA. 71% of UK APP cases. UK advance fee scams (deposits) +65%. Hanoi Police group 4.
- **Everyday examples**:
  - A Facebook group post sells concert tickets cheap: "chỉ còn 2 vé, cọc trước 50% giữ chỗ." The seller vanishes after the transfer.
  - You sell a used phone on Chợ Tốt. The "buyer" sends a screenshot of a transfer that never arrived and says the bank is "processing". Their courier is already at your door.
  - A homestay in Đà Lạt for Tết, booked through a Facebook page with copied photos, asks for a full deposit by bank transfer.
- **Defence tips**:
  - Pay through the platform's own checkout, not by direct bank transfer to a stranger (UK Finance).
  - Check money has actually arrived in your bank app before handing over goods. Never trust a screenshot (Hanoi Police group 4).
  - Be extra careful with pre-orders, deposits and "last one" pressure on popular items (SPF 1H2026).
  - Check the seller's history and search their phone or account number for scam reports.

### 8. Phone Takeover: Malicious Apps and Remote Access

- **What it is**: You're persuaded to install an app from a link (fake VNeID, fake bank, "tax", "electricity bill" or "support" app) or a screen-sharing tool. It reads your OTPs or lets the scammer control your phone and empty your bank app.
- **Main lever**: Trust in tech or helpdesks, usually combined with authority or urgency.
- **Why it matters**: The signature Vietnam and Southeast Asia vector: the fake VNeID ring had about 400 victims and VND160bn stolen, and Singapore CSA found malware-as-a-service APKs. Australia remote-access scams cost A$69.9m. IC3 tech and customer support losses $2.13B (+46%).
- **Everyday examples**:
  - A "phường" (ward) officer on Zalo says your VNeID needs a level-2 upgrade after the ward merger and sends a link to "VNeID.apk". You allow "accessibility" access, and your screen goes black while money leaves your account.
  - A pop-up says your computer is infected and to call "Microsoft support". The agent installs AnyDesk "to help".
  - An "electricity company" SMS says you'll be cut off tonight and to install their app to pay.
- **Defence tips**:
  - Only install apps from the App Store or Google Play. Never from a link, file or QR code someone sends you (Vietnamese Ministry of Public Security on fake VNeID).
  - Never let a caller guide you through installing anything, or ask you to share your screen.
  - If you installed something suspicious: turn off mobile data and Wi-Fi, call your bank to lock your accounts, and report to the police (Cà Mau Police 2026).
  - Refuse any app that asks for "Accessibility" or SMS-reading permission unless you're sure why it needs it.

### Optional sub-themes (not separate categories)

- **Recovery scams**: add as a warning inside category 1, and in general results copy.
- **Sextortion**: kept inside category 6. Split it out only if the quiz targets teenagers (IC3 data shows the 20-29 age group files the most sextortion reports).
- **Fake prizes and "free money" handouts** (Vietnam #2): inside category 4. This could be its own category for the Vietnamese edition.

---

## 5. Mapping from current categories

| Current category | Proposed category | Note |
|---|---|---|
| Investment / Opportunity | 1. Fake Investment | Add pig butchering, groups, deepfake ads, withdrawal fees |
| Triangle | 7. Shopping and Marketplace | Niche. Keep as an example inside 7 |
| Phishing | 4. Urgent Alerts and Links | |
| SMS / Fake Notification | 4. Urgent Alerts and Links | Merge with phishing |
| Romance / Social Engineering | 6. Romance (and 5 for "social engineering of friends") | Split. "Social engineering" is too broad |
| Impersonator | 3. Fake Officials (authorities) and 5. Voice of a Loved One (people you know) | Split by who is faked. The levers differ (fear vs helpfulness) |
| Man-in-the-Middle | 8. Phone Takeover, or drop | Rare for consumers. Invoice redirection is mainly business (UK Finance) |
| Account-Selling | Drop, or fold into 7 | Not in any official top list |
| Cancellation After Payment | 7. Shopping and Marketplace | |
| Fake Receipt / Escrow | 7. Shopping and Marketplace | Still very current in Vietnam (Hanoi Police group 4) |
| Chargeback / Check | Drop, or fold into 7 | Cheques are rare in Vietnam and Southeast Asia. IC3 overpayment is tiny ($23M) |
| Cash-in-Person | 3. Fake Officials (cash or gold couriers) and 7 | The new risk is handing cash or gold to a "courier" for fake officials (IC3; SPF) |
| (missing) | **2. Jobs and Tasks** | New. A top-5 type |
| (missing) | **5. Voice of a Loved One** | New. AI-driven |
| (missing) | **8. Phone Takeover** | New. Key for Vietnam |

Suggested archetype remapping [Analysis, for discussion]. Each archetype gets a primary and secondary category, following each archetype's current lever:

| Archetype | Primary | Secondary |
|---|---|---|
| Commander | 1 Investment | 7 Shopping (deals) |
| Speed Racer | 4 Alerts and Links | 8 Phone Takeover |
| Spark | 6 Romance | 5 Loved One |
| Wildcard | 1 Investment | 2 Jobs and Tasks |
| Empath | 6 Romance | 5 Loved One |
| Peacemaker | 7 Shopping | 3 Fake Officials |
| Dreamer | 1 Investment | 6 Romance |
| Guardian | 5 Loved One | 3 Fake Officials |
| Protector | 3 Fake Officials | 5 Loved One |
| Logician | 7 Shopping | 4 Alerts and Links |
| Executive | 5 Loved One (fake boss) | 3 Fake Officials |
| Tinkerer | 8 Phone Takeover | 4 Alerts and Links |
| Analyst | 1 Investment | 8 Phone Takeover |
| Idealist | 6 Romance | 2 Jobs and Tasks |
| Visionary | 1 Investment | 2 Jobs and Tasks |
| Performer | 2 Jobs and Tasks | 7 Shopping |

Note: five archetypes have Investment as primary. Consider moving one or two to secondary so results are spread more evenly.

---

## 6. Vietnam and Southeast Asia vs global [Analysis, based on sources above]

| Theme | Vietnam and Southeast Asia | US, UK, Australia |
|---|---|---|
| Most common scam | Fake police and officials (Vietnam #1). E-commerce (Singapore #1 by cases). | Imposters by count (FTC). Phishing (IC3). Purchase scams (UK). |
| Biggest losses | Investment (Singapore). Fake police plus phone takeover (Vietnam rings). | Investment everywhere |
| Channels | Zalo, Facebook, WhatsApp, Telegram, TikTok, phone calls, SMS brand names | Text (FTC #1 contact), social media (FTC #1 by loss), email |
| Signature technique | Malicious APKs and fake VNeID, biometric "update" pretexts, fake shippers, fake transfer receipts | Bank transfer and crypto ATMs, gold or cash couriers, search-ad fake support, toll texts |
| Payment rails | Instant bank transfer (VietQR, PayNow), e-wallets | Bank transfer, crypto, gift cards (older adults) |
| Bank countermeasures | Face check over VND10m (Vietnam, since July 2024). Bank-call notifications in apps and passkeys for Singpass (Singapore, 2026). | Mandatory refunds and 159 (UK). Stop. Check. Protect. (Australia). |
| Language for the quiz | Use Vietnamese examples: "chuyển khoản", "OTP", "CCCD", "cọc", "việc nhẹ lương cao", "tài khoản tạm giữ", "Zalo" | English examples |

Practical notes for a Vietnamese audience:

- Copy tips should name the **real reporting routes**: canhbao.khonggianmang.vn, 156/5656, the nearest police station, and calling your bank's hotline to lock your account.
- **Biometric checks give a false sense of safety.** Scammers now get victims to do the face scan themselves on a fake "officer" call. Tips should stress that you must not complete a face scan or approve a transfer while on a call with a stranger.

---

## 7. Gaps and unverified items

- The ACCC 2025 report PDF and NASC pages returned HTTP 403. Australian figures come from search extracts of the official pages.
- Europol IOCTA 2026: secondary coverage only. The US$64.1B figure is unverified.
- The GASA Southeast Asia 2025 figure for Vietnam (63%) is unverified. The report is for members only.
- Vietnam: no official full-year 2025 or 2026 national scam statistics found. Ministry of Public Security figures were only available through the press, and the two figures don't match. No dated 2026 NCSC Vietnam (Cục An toàn thông tin) bulletin was opened directly.
- "AI companion chatbot romance" as a separate trend: unverified. Only the IC3 note that scammers use AI-written scripts is sourced.
- "QR quishing" losses: no reliable figures. The FTC alert gives advice only.
- The 2024 Ofcom survey is the latest Ofcom data found. Nothing new from Action Fraud, NCSC UK or CISA.
- In the section 2 table, the FTC fake customer support search-ad page URL was not confirmed. The advice is from an FTC page seen only through search results.
