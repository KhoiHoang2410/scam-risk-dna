import type { StressBlurb } from "@/lib/quiz/model"

export const stressBlurbs: StressBlurb[] = [
  {
    from: "OUT",
    to: "IN",
    title: "Under pressure, you go quiet",
    body: "Normally you talk things through. Stressed, you pull away and handle it alone. That is exactly when a second opinion would save you, and exactly what a scammer wants when they say keep this between us.",
  },
  {
    from: "IN",
    to: "OUT",
    title: "Under pressure, you reach out to anyone",
    body: "Normally you keep your own counsel. Stressed, you grab whoever offers help first. A stranger who sounds kind and in control can feel like a lifeline before you've checked who they are.",
  },
  {
    from: "GUT",
    to: "FAC",
    title: "Under pressure, you cling to proof",
    body: "Normally you trust your instincts. Stressed, you stop listening to them and look for something official to hold on to. A logo, a badge number or a payment screenshot can feel like proof when it is just a picture.",
  },
  {
    from: "FAC",
    to: "GUT",
    title: "Under pressure, you stop checking",
    body: "Normally you want evidence. Tired or rushed, you go with whatever feels right, and a confident voice feels very right. This is the gap most scams are built for.",
  },
  {
    from: "HAR",
    to: "LOG",
    title: "Under pressure, you chase the numbers",
    body: "Normally you put people first. Stressed, you lock onto winning back what you've lost. That makes it hard to walk away from a bad deal, and easy to pay one more fee to get your money out.",
  },
  {
    from: "LOG",
    to: "HAR",
    title: "Under pressure, you give in to keep the peace",
    body: "Normally you hold your ground. Stressed, you'll agree to almost anything to make the tension stop. Scammers turn up the pressure on purpose, because they know a yes is coming.",
  },
  {
    from: "SPO",
    to: "STR",
    title: "Under pressure, you follow the script",
    body: "Normally you improvise. Stressed, you want someone to tell you the steps. A caller who walks you through each tap, calmly and clearly, can feel like help when they are the one in control.",
  },
  {
    from: "STR",
    to: "SPO",
    title: "Under pressure, you skip the checklist",
    body: "Normally you plan and double-check. Overwhelmed, you react to whatever's loudest just to clear it. A message that says act now lands right in that moment.",
  },
]
