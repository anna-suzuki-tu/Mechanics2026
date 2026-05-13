// Lecture 09 — Gatekeeper Questions
// Source: Gatekeeper DB entries 9-1 through 9-5
const questions = [
  {
    id: "9-1",
    title: "Question 1",
    text: "A block of mass m = 3 kg moves at velocity v = 4 m/s. What is its kinetic energy T?",
    choices: [
      "T = mv = 12 J",
      "T = (1/2)mv = 6 J",
      "T = (1/2)mv² = 24 J",
      "T = mv² = 48 J"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 9-1: Total Kinetic Energy of a Rigid Body",
    supplementaryText:
      "Kinetic energy is T = (1/2)mv² = (1/2)(3)(16) = 24 J. In Lecture 9 this extends to rigid bodies: T = (1/2)mv_G² + (1/2)I_G·ω² — a translational term plus a rotational term, both always present. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_9-1.mp4"
  },
  {
    id: "9-2",
    title: "Question 2",
    text: "A constant force F = 20 N is applied in the direction of motion over a displacement d = 3 m. How much work W is done?",
    choices: [
      "W = F + d = 23 J",
      "W = F / d = 6.7 J",
      "W = F × d = 60 J",
      "W = (1/2)Fd = 30 J"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 9-2: Work Done by a Couple",
    supplementaryText:
      "Work done by a constant force along the direction of displacement is W = F × d = 20 × 3 = 60 J. In Lecture 9 this extends to rotational work: a couple M rotating through angle θ does work U = M·θ — the rotational analogue of W = Fd. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_9-2.mp4"
  },
  {
    id: "9-3",
    title: "Question 3",
    text: "The rotational equation of motion is ΣM_G = I_G·α. If the net external moment about G is zero (ΣM_G = 0), what can be concluded about angular acceleration α?",
    choices: [
      "α equals the angular velocity ω",
      "α = 0, so ω remains constant",
      "α becomes very large",
      "Nothing can be concluded without knowing I_G"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 9-3: Condition for Conservation of Angular Momentum",
    supplementaryText:
      "If ΣM_G = 0, then I_G·α = 0. Since I_G > 0 always, α = 0 — angular velocity is not changing. This is exactly when angular momentum H_G = I_G·ω is conserved, since dH_G/dt = ΣM_G = 0. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_9-3.mp4"
  },
  {
    id: "9-4",
    title: "Question 4",
    text: "Two objects collide in an isolated system (no external forces). Which quantity is conserved during the collision?",
    choices: [
      "Kinetic energy only",
      "Total linear momentum p = mv",
      "Neither momentum nor energy — both are lost",
      "Velocity — each object keeps its original speed"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 9-4: Analyzing Eccentric Impact",
    supplementaryText:
      "When ΣF_ext = 0, total linear momentum is conserved. Kinetic energy is generally NOT conserved unless the collision is perfectly elastic (e = 1). In Lecture 9, for eccentric impact at a pivot, linear momentum is NOT conserved (pivot reaction acts), but angular momentum about the pivot IS conserved. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_9-4.mp4"
  },
  {
    id: "9-5",
    title: "Question 5",
    text: "A wheel rolls without slipping on the ground. What is the velocity of the contact point between the wheel and the ground at any given instant?",
    choices: [
      "Equal to the velocity of the wheel's center",
      "Twice the velocity of the wheel's center",
      "Zero",
      "Equal to the angular velocity ω"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 9-5: Work Done by Friction in Rolling Motion",
    supplementaryText:
      "The rolling-without-slipping condition means the contact point has zero velocity — it is the Instantaneous Center of Rotation. Since work = force × displacement, and the contact point has zero velocity, the friction force does zero work. You can therefore apply energy conservation directly to rolling problems. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_9-5.mp4"
  }
];
