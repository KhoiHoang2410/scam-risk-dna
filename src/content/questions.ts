import type { Question } from "@/lib/quiz/model"

export const questions: Question[] = [
  {
    id: "q01",
    axis: "social",
    mode: "calm",
    prompt: "A free Saturday, nothing planned. What sounds best?",
    options: [
      { pole: "OUT", text: "Texting friends to see who's around" },
      { pole: "IN", text: "A whole day to myself, finally" },
    ],
  },
  {
    id: "q02",
    axis: "trust",
    mode: "calm",
    prompt: "Picking a place to eat in a new city. You go with...",
    options: [
      { pole: "FAC", text: "The one with the best reviews" },
      { pole: "GUT", text: "The one that just feels right" },
    ],
  },
  {
    id: "q03",
    axis: "heart",
    mode: "calm",
    prompt: "A friend shows you their new business idea. It has a big flaw.",
    options: [
      { pole: "HAR", text: "I start with what I like about it" },
      { pole: "LOG", text: "I point out the flaw. Better now than later." },
    ],
  },
  {
    id: "q04",
    axis: "pace",
    mode: "calm",
    prompt: "When you start something new, you'd rather...",
    options: [
      { pole: "SPO", text: "Jump in and learn as I go" },
      { pole: "STR", text: "Understand it properly before I begin" },
    ],
  },
  {
    id: "q05",
    axis: "social",
    mode: "calm",
    prompt: "Which one bothers you more?",
    options: [
      { pole: "IN", text: "People checking on me all the time" },
      { pole: "OUT", text: "Seeing a group photo I wasn't in" },
    ],
  },
  {
    id: "q06",
    axis: "trust",
    mode: "calm",
    prompt: "A friend swears a new supplement changed their life. Your first thought?",
    options: [
      { pole: "GUT", text: "If it worked for them, it's worth a try" },
      { pole: "FAC", text: "What does the research actually say?" },
    ],
  },
  {
    id: "q07",
    axis: "heart",
    mode: "calm",
    prompt: "Which feels worse?",
    options: [
      { pole: "LOG", text: "Losing money on a bad decision" },
      { pole: "HAR", text: "Losing a friend over an argument" },
    ],
  },
  {
    id: "q08",
    axis: "pace",
    mode: "calm",
    prompt: "Planning a trip with friends, you're the one who...",
    options: [
      { pole: "STR", text: "Makes the plan and the checklist" },
      { pole: "SPO", text: "Books the flight and figures out the rest later" },
    ],
  },
  {
    id: "q09",
    axis: "social",
    mode: "calm",
    prompt: "Something big just happened in your life. Who hears first?",
    options: [
      { pole: "OUT", text: "The group chat, right away" },
      { pole: "IN", text: "Nobody yet. I sit with it first." },
    ],
  },
  {
    id: "q10",
    axis: "trust",
    mode: "calm",
    prompt: "Someone you just met seems really genuine. You...",
    options: [
      { pole: "GUT", text: "Trust them. I'm a good judge of people." },
      { pole: "FAC", text: "Wait and see. People show who they are over time." },
    ],
  },
  {
    id: "q11",
    axis: "heart",
    mode: "calm",
    prompt: "Someone you like asks for a favour you don't have time for.",
    options: [
      { pole: "HAR", text: "I say yes and make it work somehow" },
      { pole: "LOG", text: "I say no, kindly but clearly" },
    ],
  },
  {
    id: "q12",
    axis: "pace",
    mode: "calm",
    prompt: "Something you've wanted for ages goes on sale. Ends tonight.",
    options: [
      { pole: "SPO", text: "Buy it now. That's what I was waiting for." },
      { pole: "STR", text: "Compare prices first, even if I miss it" },
    ],
  },
  {
    id: "q13",
    axis: "social",
    mode: "stress",
    prompt: "After a really rough week, what do you need most?",
    options: [
      { pole: "IN", text: "To be left alone so I can recharge" },
      { pole: "OUT", text: "My people around me, even just for noise" },
    ],
  },
  {
    id: "q14",
    axis: "trust",
    mode: "stress",
    prompt: "You're exhausted and have to choose fast. You go with...",
    options: [
      { pole: "FAC", text: "The safe option I know works" },
      { pole: "GUT", text: "Whatever feels right in the moment" },
    ],
  },
  {
    id: "q15",
    axis: "heart",
    mode: "stress",
    prompt: "You're stressed, and someone close to you is upset with you. You...",
    options: [
      { pole: "LOG", text: "Stick to the facts until it's sorted" },
      { pole: "HAR", text: "Do whatever calms things down, even if I lose out" },
    ],
  },
  {
    id: "q16",
    axis: "pace",
    mode: "stress",
    prompt: "You're swamped and one more decision lands on you. You...",
    options: [
      { pole: "SPO", text: "Decide now and move on. One less thing." },
      { pole: "STR", text: "Park it until I can think clearly" },
    ],
  },
  {
    id: "q17",
    axis: "social",
    mode: "stress",
    prompt: "When you're worried about something, you usually...",
    options: [
      { pole: "OUT", text: "Talk it through with someone straight away" },
      { pole: "IN", text: "Keep it to myself until I've handled it" },
    ],
  },
  {
    id: "q18",
    axis: "trust",
    mode: "stress",
    prompt: "You're tired, and someone confident tells you exactly what to do. You...",
    options: [
      { pole: "GUT", text: "Go along with it. They seem to know." },
      { pole: "FAC", text: "Still check it myself first" },
    ],
  },
  {
    id: "q19",
    axis: "heart",
    mode: "stress",
    prompt: "Money is tight, and a friend asks to borrow some.",
    options: [
      { pole: "HAR", text: "I help anyway. Saying no would feel awful." },
      { pole: "LOG", text: "Not right now. I have to look after myself." },
    ],
  },
  {
    id: "q20",
    axis: "pace",
    mode: "stress",
    prompt: "When you're overwhelmed, your to-do list...",
    options: [
      { pole: "STR", text: "Gets even more organised" },
      { pole: "SPO", text: "Gets ignored. I react to whatever's loudest." },
    ],
  },
]
