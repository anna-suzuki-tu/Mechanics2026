// Lecture 11 — Gatekeeper Questions
// Source: Gatekeeper DB entries 11-1 through 11-5
const questions = [
  {
    id: "11-1",
    title: "Question 1",
    text: "A mass is attached to a rigid rod of length L, pinned to a fixed point on a wall. The mass moves in a vertical plane. How many independent numbers do you need to completely specify the position of the mass at any instant?",
    choices: [
      "3 (x, y, z coordinates)",
      "2 (x and y coordinates)",
      "1 (the angle of the rod)",
      "0 (the mass is fixed)"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 11-1: Degrees of Freedom and Generalized Coordinates",
    supplementaryText:
      "Once you know the angle of the rod from the vertical, you know exactly where the mass is — x and y follow from x = L sinθ, y = −L cosθ. The constraint (rod length = L) links x and y, so only one independent number is needed. This is the starting point for Lecture 11. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_11-1.mp4"
  },
  {
    id: "11-2",
    title: "Question 2",
    text: "A small bead is threaded onto a curved wire fixed in space. The bead can slide freely along the wire but cannot leave it. Which of the following best describes the directions in which the bead can move?",
    choices: [
      "Any direction in 3D space, because forces can act in any direction",
      "Only along the wire — forward or backward",
      "Perpendicular to the wire, because the wire pushes it outward",
      "The bead cannot move at all once it is on the wire"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 11-2: Constraints and Allowed Displacements",
    supplementaryText:
      "The wire restricts the bead to a specific path. The only motion consistent with the constraint is along the wire itself. The wire exerts a force perpendicular to itself — so the constraint force and the allowed motion are always perpendicular. Constraint forces therefore do no work along allowed displacements. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_11-2.mp4"
  },
  {
    id: "11-3",
    title: "Question 3",
    text: "A block slides down a smooth inclined plane. To find its acceleration using Newton's second law, what must you do that you would not need to do if you only cared about the motion along the slope?",
    choices: [
      "Nothing extra — F = ma along the slope gives the answer directly",
      "You must also write an equation perpendicular to the slope to find the normal force, even though the normal force does not affect the acceleration along the slope",
      "You must use energy methods instead, because F = ma does not work on inclined planes",
      "You must find the friction force first before applying F = ma"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 11-3: Newton's Method and Constraint Forces",
    supplementaryText:
      "To apply F = ma correctly, you resolve forces in two directions: along the slope (giving the acceleration) and perpendicular (giving N = mg cosβ). The normal force is needed to complete the system even though it does not appear in the final answer. This extra step — finding a force you never care about — is the central inefficiency of Newton's method for constrained systems. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_11-3.mp4"
  },
  {
    id: "11-4",
    title: "Question 4",
    text: "In Lectures 9 and 10, you used energy conservation (T + V = constant) to analyze motion without drawing free-body diagrams. Which of the following is the key reason this works?",
    choices: [
      "Energy methods only work for problems with no forces",
      "When a force is always perpendicular to the motion, it does no work and does not appear in the energy equation",
      "Energy conservation replaces Newton's second law and is always easier to use",
      "Energy methods require knowing all forces including constraint forces"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 11-4: Virtual Work and Constraint Forces",
    supplementaryText:
      "When a force is perpendicular to the velocity at every instant — like a normal force from a smooth surface — it does no work: W = F·v = 0. Because it does no work, it does not appear in the energy equation. Lecture 11 generalizes this: constraint forces do no work along any displacement consistent with the constraint, so they disappear from the equations automatically. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_11-4.mp4"
  },
  {
    id: "11-5",
    title: "Question 5",
    text: "A system of particles is in static equilibrium. Which of the following is the correct condition for equilibrium?",
    choices: [
      "The kinetic energy is zero",
      "The velocity of every particle is zero",
      "The net force on every particle is zero",
      "The potential energy is at its maximum value"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 11-5: Conditions for Static Equilibrium",
    supplementaryText:
      "Static equilibrium requires ΣF = 0 on every particle — no particle accelerates. Kinetic energy = 0 and velocity = 0 are consequences of being at rest, not conditions for equilibrium (a particle momentarily at rest can still have a net force acting on it). Stable equilibrium corresponds to a minimum — not maximum — of potential energy. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_11-5.mp4"
  }
];
