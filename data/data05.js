// Lecture 5 — Gatekeeper Questions
// Source: Gatekeeper DB entries 5-1 through 5-5
const questions = [
  {
    id: "5-1",
    title: "Question 1",
    text: "In a system of particles, what is the vector sum of all internal forces?",
    choices: [
      "Equal to the net external force on the system",
      "Always zero — internal forces cancel in Newton's third law pairs",
      "Equal to the total weight of all particles",
      "Non-zero only during collisions or explosions"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 5-1: Internal Forces Always Cancel",
    supplementaryText:
      "You missed that every internal force has an equal and opposite reaction partner. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_5-1.mp4"
  },
  {
    id: "5-2",
    title: "Question 2",
    text: "A fireworks shell is launched and explodes at the peak of its trajectory. What happens to the trajectory of the mass center (G) after the explosion?",
    choices: [
      "G stops immediately because the explosion is an internal event",
      "G changes direction because the fragments fly in different directions",
      "G continues on the same parabolic trajectory as before the explosion",
      "G accelerates upward due to the explosion energy"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 5-2: The Mass Center Cannot Be Moved by Internal Forces",
    supplementaryText:
      "You missed that internal forces cannot change the trajectory of the mass center. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_5-2.mp4"
  },
  {
    id: "5-3",
    title: "Question 3",
    text: "Under what condition is the total linear momentum of a particle system conserved?",
    choices: [
      "When all internal forces between particles are zero",
      "When the net external force on the system is zero (ΣF_ext = 0)",
      "Whenever the system is in contact with a flat surface",
      "Only during perfectly elastic collisions"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 5-3: Condition for Linear Momentum Conservation",
    supplementaryText:
      "You missed the external force condition for momentum conservation. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_5-3.mp4"
  },
  {
    id: "5-4",
    title: "Question 4",
    text: "The total kinetic energy of a system of particles equals:",
    choices: [
      "KE of the mass center + KE of all particles relative to the mass center",
      "The sum of each particle's mass times speed (not ½mv²)",
      "The kinetic energy of the heaviest particle alone",
      "The KE of the mass center alone (particle motions are ignored)"
    ],
    answer: 0,
    supplementaryTitle: "Supplementary Video 5-4: Decomposing Kinetic Energy — CM and Relative Terms",
    supplementaryText:
      "You missed that total KE splits into a mass-center term and a relative-motion term. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_5-4.mp4"
  },
  {
    id: "5-5",
    title: "Question 5",
    text: "If no net external force acts on a system of particles (ΣF_ext = 0), how does the mass center move?",
    choices: [
      "It remains stationary at all times",
      "It accelerates in the direction of internal forces",
      "It moves in a straight line at constant velocity",
      "It follows the average path of all particles in the system"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 5-5: Motion of the Mass Center with No External Force",
    supplementaryText:
      "You missed Newton's first law applied to the mass center. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_5-5.mp4"
  }
];
