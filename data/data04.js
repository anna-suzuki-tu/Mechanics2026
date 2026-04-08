// Lecture 4 — Gatekeeper Questions
// Source: Gatekeeper DB entries 4-1 through 4-5
const questions = [
  {
    id: "4-1",
    title: "Question 1",
    text: "Which property defines a conservative force?",
    choices: [
      "It always acts in the direction of motion",
      "The work done by it depends only on the start and end points, not the path",
      "It can only act on stationary objects",
      "Its magnitude is always equal to friction"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 4-1: Conservative Forces and Path Independence",
    supplementaryText:
      "You missed the path-independence property of conservative forces. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/4-1.mp4"
  },
  {
    id: "4-2",
    title: "Question 2",
    text: "A block slides down a ramp with kinetic friction. Why can you NOT use T₁ + V₁ = T₂ + V₂ (conservation of mechanical energy) here?",
    choices: [
      "The block is not a rigid body",
      "Friction is a non-conservative force that converts mechanical energy to heat",
      "The ramp angle must be zero for energy conservation to apply",
      "Mechanical energy is always conserved regardless of friction"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 4-2: When Energy Conservation Fails — Non-Conservative Forces",
    supplementaryText:
      "You missed that friction removes mechanical energy from the system. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/4-2.mp4"
  },
  {
    id: "4-3",
    title: "Question 3",
    text: "What physical quantity does the area under a force-time (F-t) graph represent?",
    choices: [
      "Work done by the force",
      "Power delivered by the force",
      "Impulse, which equals the change in linear momentum (Δmv)",
      "Kinetic energy of the particle"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 4-3: The F-t Graph and the Impulse-Momentum Theorem",
    supplementaryText:
      "You confused the F-t graph with the F-d graph. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/4-3.mp4"
  },
  {
    id: "4-4",
    title: "Question 4",
    text: "Two balls undergo a perfectly inelastic collision (they stick together). Which statement is correct?",
    choices: [
      "Both kinetic energy and momentum are conserved",
      "Kinetic energy is conserved, but momentum is not",
      "Neither kinetic energy nor momentum is conserved",
      "Momentum is conserved, but kinetic energy is lost"
    ],
    answer: 3,
    supplementaryTitle: "Supplementary Video 4-4: Elastic vs. Inelastic Collisions — What Is Conserved?",
    supplementaryText:
      "You confused what is conserved in an inelastic collision. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/4-4.mp4"
  },
  {
    id: "4-5",
    title: "Question 5",
    text: "A motor lifts a load at a constant velocity v by applying tension T = mg. What is the instantaneous power delivered by the motor?",
    choices: [
      "P = T·v",
      "P = T·d (d = total distance lifted)",
      "P = T/v",
      "P = mg·t"
    ],
    answer: 0,
    supplementaryTitle: "Supplementary Video 4-5: Power — Force Times Velocity",
    supplementaryText:
      "You confused power (rate of doing work) with total work. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/4-5.mp4"
  }
];
