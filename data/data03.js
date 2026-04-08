// Lecture 3 — Gatekeeper Questions
// Source: Gatekeeper DB entries 3-1 through 3-5
const questions = [
  {
    id: "3-1",
    title: "Question 1",
    text: "Which of the following should NOT appear on a Free Body Diagram (FBD)?",
    choices: [
      "Weight (mg) acting downward",
      "Normal force from the surface",
      "The product ma (inertia force)",
      "Friction force from the surface"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 3-1: What Belongs on a Free Body Diagram",
    supplementaryText:
      "You included ma on the FBD. ma is the result of the forces, not a force itself. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_3-1.mp4"
  },
  {
    id: "3-2",
    title: "Question 2",
    text: "When solving for the motion of a block on a 30° inclined plane, what is the most strategic choice of coordinate axes?",
    choices: [
      "Horizontal (x) and vertical (y)",
      "Parallel and perpendicular to the incline surface",
      "Along the direction of the normal force only",
      "It does not matter — any axes give the same equations"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 3-2: Strategic Axis Alignment for Inclined Planes",
    supplementaryText:
      "You missed the benefit of aligning axes with the motion. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_3-2.mp4"
  },
  {
    id: "3-3",
    title: "Question 3",
    text: "A 10 kg block rests on a surface with μ_s = 0.5 (maximum static friction = 49 N). A horizontal push of 30 N is applied. What is the actual friction force acting on the block?",
    choices: [
      "0 N — the block has not moved yet",
      "30 N — friction matches the applied force to maintain equilibrium",
      "49 N — static friction always acts at its maximum value",
      "Cannot be determined without knowing kinetic friction"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 3-3: Static Friction Is Not Always at Its Maximum",
    supplementaryText:
      "You confused maximum static friction with actual static friction. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_3-3.mp4"
  },
  {
    id: "3-4",
    title: "Question 4",
    text: "A car of mass m travels at speed v over the top of a circular hill with radius of curvature ρ. What is the normal force N from the road on the car at the top?",
    choices: [
      "N = mg",
      "N = mg + mv²/ρ",
      "N = mg − mv²/ρ",
      "N = mv²/ρ"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 3-4: Newton's Second Law in Circular Motion — the Normal Force",
    supplementaryText:
      "You missed the direction of the net centripetal force at the top of a hill. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_3-4.mp4"
  },
  {
    id: "3-5",
    title: "Question 5",
    text: "A person pushes a wall with a force of 20 N to the right. By Newton's third law, what force does the wall exert on the person?",
    choices: [
      "0 N — the wall does not move, so it exerts no force",
      "Less than 20 N — the wall is stationary so it resists less",
      "20 N directed to the left",
      "More than 20 N — the wall must overcome the push"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 3-5: Newton's Third Law — Action and Reaction Pairs",
    supplementaryText:
      "You missed the equal-and-opposite nature of Newton's third law. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_3-5.mp4"
  }
];
