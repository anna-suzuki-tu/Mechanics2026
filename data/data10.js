// Lecture 10 — Gatekeeper Questions
// Source: Gatekeeper DB entries 10-1 through 10-5
const questions = [
  {
    id: "10-1",
    title: "Question 1",
    text: "A spring with spring constant k = 400 N/m is stretched by x = 0.1 m from its equilibrium position. What is the restoring force F?",
    choices: [
      "F = k/x = 4000 N",
      "F = (1/2)kx = 20 N",
      "F = kx = 40 N",
      "F = kx² = 4 N"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 10-1: Physics of Natural Frequency",
    supplementaryText:
      "Hooke's law gives F = kx = 400 × 0.1 = 40 N. This proportionality between force and displacement is the basis of SHM. Substituting into F = ma yields the equation of motion mẍ + kx = 0, from which ω_n = √(k/m) is derived. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_10-1.mp4"
  },
  {
    id: "10-2",
    title: "Question 2",
    text: "If the frequency of oscillation doubles, what happens to the period?",
    choices: [
      "It doubles",
      "It stays the same",
      "It becomes half",
      "It becomes four times larger"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 10-2: Period, Frequency, and Angular Frequency",
    supplementaryText:
      "Period and frequency are reciprocals: T = 1/f. If frequency doubles, the period becomes half. As frequency increases, the period becomes shorter. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_10-2.mp4"
  },
  {
    id: "10-3",
    title: "Question 3",
    text: "In simple harmonic motion (SHM), at what moment is the speed maximum?",
    choices: [
      "When the displacement is maximum (at the end points)",
      "When the displacement is zero (at the equilibrium point)",
      "When the acceleration is maximum",
      "It is always constant"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 10-3: Velocity and Displacement in Simple Harmonic Motion",
    supplementaryText:
      "At the equilibrium point (x = 0), kinetic energy is maximum and potential energy is zero — so speed is maximum. At the end points (x = ±A), all energy is potential and speed is zero. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_10-3.mp4"
  },
  {
    id: "10-4",
    title: "Question 4",
    text: "A system is subjected to a periodic external force. As the forcing frequency is slowly varied, the amplitude becomes dramatically large at a particular frequency. What best explains this?",
    choices: [
      "The forcing frequency is much higher than the natural frequency",
      "The forcing frequency matches the system's natural frequency",
      "The forcing frequency is close to zero",
      "The forcing frequency is unrelated to the natural frequency"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 10-4: The Danger of Resonance",
    supplementaryText:
      "This is resonance — it occurs when the forcing frequency matches ω_n. The external force keeps adding energy in sync with the system's natural rhythm, so amplitude grows without bound in the undamped case. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_10-4.mp4"
  },
  {
    id: "10-5",
    title: "Question 5",
    text: "An ideal mass–spring system (no friction, no energy loss) is released from an initial displacement. What happens to its motion afterward?",
    choices: [
      "It immediately returns to equilibrium and stops",
      "It oscillates with gradually decreasing amplitude and eventually stops",
      "It keeps oscillating with constant amplitude",
      "It keeps speeding up with increasing velocity"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 10-5: Classification of Damping",
    supplementaryText:
      "With no energy loss (no damping), kinetic and potential energy keep converting into each other, so amplitude stays constant and motion continues forever. This is the ideal SHM model. In reality, damping causes amplitude to decrease — underdamped, critically damped, or overdamped. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_10-5.mp4"
  }
];
