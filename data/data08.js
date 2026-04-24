// Lecture 08 — Gatekeeper Questions
// Source: Gatekeeper DB entries 8-1 through 8-5
const questions = [
  {
    id: "8-1",
    title: "Question 1",
    text: "In planar rigid-body motion, how is Newton's second law for translation written?",
    choices: [
      "ΣF = 0",
      "ΣF = m·a_G (where a_G is the acceleration of the center of mass)",
      "ΣF = I·α",
      "ΣF is proportional to the acceleration of the rotation center"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 8-1: Translating Rigid Body Kinetics",
    supplementaryText:
      "You lack the basics of the equation of motion of the center of mass. For rigid bodies, the translational and rotational equations (ΣF = m·a_G and ΣM_G = I_G·α) are always applied as a pair. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_8-1.mp4"
  },
  {
    id: "8-2",
    title: "Question 2",
    text: "In the rotational equation about the center of mass, ΣM_G = I_G·α, what does I_G represent?",
    choices: [
      "The position coordinates of the center of mass",
      "The total mass of the rigid body",
      "The mass moment of inertia about the center of mass",
      "The radius of gyration of the rigid body"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 8-2: Understanding Mass Moment of Inertia",
    supplementaryText:
      "You do not understand the role of the mass moment of inertia. I_G reflects mass distribution and its relationship to rotational motion — it is the rotational counterpart of mass m in translation. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_8-2.mp4"
  },
  {
    id: "8-3",
    title: "Question 3",
    text: "A disk of radius R = 0.3 m rotates with angular acceleration α = 10 rad/s². What is the tangential acceleration of a point on the rim?",
    choices: [
      "a_t = R/α = 0.03 m/s²",
      "a_t = R·α = 3 m/s²",
      "a_t = R²·α = 0.9 m/s²",
      "a_t = α/R = 33.3 m/s²"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 8-3: Acceleration Constraint for Rolling Without Slipping",
    supplementaryText:
      "The tangential acceleration of a point at radius R is a_t = R·α. This comes from differentiating v = R·ω: dv/dt = R·(dω/dt), so a_t = R·α. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_8-3.mp4"
  },
  {
    id: "8-4",
    title: "Question 4",
    text: "A uniform disk (mass M, radius R) is on a fixed axle; a cord on its rim supports hanging mass m. When released from rest, what are the unknowns needed to solve this system using Newton's method?",
    choices: [
      "Only acceleration a (one unknown)",
      "Acceleration a and cord tension T — two unknowns",
      "Angular acceleration α and moment of inertia I_G — two unknowns",
      "No unknowns — the answer can be read off directly"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 8-4: Parallel-Axis Theorem",
    supplementaryText:
      "Newton's method requires two equations: (1) for the hanging mass: mg − T = ma, and (2) for the disk: T·R = I_G·α. Both a and tension T are unknowns, linked by the constraint a = R·α. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_8-4.mp4"
  },
  {
    id: "8-5",
    title: "Question 5",
    text: "A force F = 10 N acts vertically downward at the right end of a 1.0 m horizontal rod. Calculate the moment about the left end (A) and about the midpoint (B).",
    choices: [
      "M_A = 10 N·m, M_B = 10 N·m (same at both points)",
      "M_A = 10 N·m, M_B = 5 N·m (depends on the chosen point)",
      "M_A = 5 N·m, M_B = 10 N·m",
      "Both are zero because the rod is horizontal"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 8-5: Moment Equation and the Correct Reference Point",
    supplementaryText:
      "The moment depends on the distance from the reference point to the line of action. M_A = 10 × 1.0 = 10 N·m; M_B = 10 × 0.5 = 5 N·m. The same force produces different moments about different points. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_8-5.mp4"
  }
];
