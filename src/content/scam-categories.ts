import type { ScamCategory } from "@/lib/quiz/model"

export const scamCategories: ScamCategory[] = [
  {
    id: "investment",
    name: "Fake investments and get-rich groups",
    lever: "Fear of missing out",
    description:
      "A slick ad or a friendly stranger pulls you into a can't-lose investment, often crypto or trading, in a group chat full of fake winners. The app shows profits until you try to withdraw.",
    example:
      "A video of a famous founder sharing his free AI trading bot. You join the group, 200 members post daily wins, and your first deposit doubles on screen.",
    tips: [
      "Never invest through an app or site someone sent you a link to. Check the firm with your financial regulator first.",
      "If you have to pay a fee or tax to withdraw your own money, it is a scam. Stop paying.",
      "Treat every celebrity investment video as fake until proven otherwise. Deepfakes are cheap now.",
      "If you have lost money, ignore anyone offering to recover it for a fee. That is the next scam.",
    ],
  },
  {
    id: "jobs",
    name: "Easy-money jobs and tasks",
    lever: "Small wins that build commitment",
    description:
      "A job you never applied for pays you to like videos or rate products. Small payouts arrive first, then you have to top up your own money to unlock bigger tasks.",
    example:
      "A friendly recruiter on WhatsApp: 15 minutes a day, $100 a day. You get paid for three tasks, then your account freezes until you deposit $500.",
    tips: [
      "Real jobs never ask you to pay to work or to unlock your earnings.",
      "Be suspicious of any job offer by text, WhatsApp or Telegram that you didn't apply for.",
      "Never use your own money or crypto to complete orders or tasks.",
      "Check the company through its official website, not the person in the chat.",
    ],
  },
  {
    id: "officials",
    name: "Fake police, officials and bank staff",
    lever: "Fear plus authority",
    description:
      "Someone posing as police, the tax office or your bank says you are linked to a crime or your account is at risk. They tell you to keep it secret and move your money to a safe account.",
    example:
      "A video call from a man in uniform showing an arrest warrant with your name. He says not to tell anyone and to transfer your savings so they can be checked.",
    tips: [
      "Police, courts and banks never ask you to move money, hand over cash, or share a code by phone.",
      "Hang up and call back on the number on your card or the official website.",
      "There is no such thing as a safe account. Any request to move money to protect it is the scam.",
      "Being told to keep it secret is the biggest red flag. Tell someone you trust.",
    ],
  },
  {
    id: "alerts",
    name: "Urgent alerts, fake links and QR codes",
    lever: "Urgency and autopilot",
    description:
      "A text, email, QR code or search ad that looks like a delivery company, toll road, bank or brand rushes you to fix or claim something, then steals your card details, login or one-time code.",
    example:
      "A text says your parcel can't be delivered and asks for a small redelivery fee within 24 hours. Next, the page asks for the code your bank just sent you.",
    tips: [
      "Don't tap links in unexpected messages. Open the official app or type the address yourself.",
      "Never share a one-time code with anyone, for any reason.",
      "Check for stickers over QR codes and look at the web address before you pay.",
      "Get support numbers from the company's own app or website, not from search ads.",
    ],
  },
  {
    id: "loved-one",
    name: "Fake loved ones and bosses",
    lever: "Love, loyalty and helpfulness",
    description:
      "A call, voice note or message that seems to come from your child, friend or boss asks for urgent money. It uses an AI voice clone, a deepfake video, or their real but hacked account.",
    example:
      "A crying voice that sounds exactly like your daughter says she's in hospital and needs money now. The call drops and a doctor texts you the account number.",
    tips: [
      "Agree a family safe word now and ask for it on any emergency call.",
      "Hang up and call the person back on the number you already have.",
      "Treat any money request in chat as unverified until you've spoken to them on a normal call.",
      "Keep your social accounts private and limit public videos of your voice.",
    ],
  },
  {
    id: "romance",
    name: "Romance and fake relationships",
    lever: "Love and loneliness",
    description:
      "Someone builds a relationship online over weeks, sometimes with AI-written chats and fake photos. Then a crisis, gift, visa or shared investment needs your money. A darker version threatens to leak private images.",
    example:
      "A kind engineer working abroad chats with you every day for two months. He's sending you a gift, but customs needs a fee to release it.",
    tips: [
      "Never send money, gifts or crypto to someone you've only met online, however long you've talked.",
      "Reverse-search their photos and insist on a live video call.",
      "Talk to a friend before you send anything. Scammers push for secrecy.",
      "If someone threatens to leak images, don't pay. Keep the evidence, block them and report it.",
    ],
  },
  {
    id: "shopping",
    name: "Shopping, deposits and marketplace scams",
    lever: "A good deal and scarcity",
    description:
      "A fake seller takes your deposit for tickets, a phone or a holiday rental that never comes. Or a fake buyer sends a fake payment screenshot to get your goods.",
    example:
      "Concert tickets at face value in a fan group, only two left, pay half now to hold them. The seller disappears after the transfer.",
    tips: [
      "Pay through the platform's own checkout, not by direct bank transfer to a stranger.",
      "Check the money has actually arrived in your bank app before you hand anything over. Never trust a screenshot.",
      "Be extra careful with deposits and last-one pressure on popular items.",
      "Search the seller's name, number or account for scam reports.",
    ],
  },
  {
    id: "takeover",
    name: "Phone takeover through apps and remote access",
    lever: "Trust in tech and helpdesks",
    description:
      "You are talked into installing an app from a link, or a screen-sharing tool. It reads your codes or lets the scammer control your phone and empty your bank app.",
    example:
      "A pop-up says your laptop is infected and gives a support number. The friendly agent asks you to install a tool so they can fix it for you.",
    tips: [
      "Only install apps from the official app store. Never from a link, file or QR code someone sends you.",
      "Never let a caller guide you through installing anything or ask you to share your screen.",
      "Refuse apps that ask for accessibility or SMS access unless you know exactly why.",
      "If you installed something suspicious, turn off data and Wi-Fi and call your bank straight away.",
    ],
  },
]
