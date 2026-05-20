// Lecture 12 — Gatekeeper Questions
// Source: Gatekeeper DB entries 12-1 through 12-5
const questions = [
  {
    id: "12-1",
    title: "Question 1",
    text: "In Lecture 11, you saw that choosing the right coordinate for a constrained system can make constraint forces (like normal forces and tensions) disappear from the equations. Before that method was introduced, what did Newton's method require you to do?",
    choices: [
      "Ignore constraint forces completely, since they do no work",
      "Write constraint forces as explicit unknowns, solve for them, and then eliminate them to get the equation of motion",
      "Replace constraint forces with potential energy terms before applying F = ma",
      "Apply F = ma only in the direction of motion and ignore all other directions"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 12-1: Newton's Method and Constraint Forces",
    supplementaryText:
      "In Newton's method, every force — including constraint forces like normal forces and string tensions — must appear explicitly in the free-body diagram and the equations of motion. For a block on a slope, you write N as an unknown, solve two force equations, and then eliminate N to get the acceleration. N never appears in the final answer, but you had to find it anyway. Lecture 11 introduced the principle of virtual work, which makes constraint forces disappear before you start — not by ignoring them, but because they do no work through any allowed displacement. Lecture 12 builds on this to produce systematic equations of motion from a single scalar function. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_12-1.mp4"
  },
  {
    id: "12-2",
    title: "Question 2",
    text: "The kinetic energy of a particle moving in a plane is T = ½m(ẋ² + ẏ²), with units of joules [J = kg·m²/s²]. If you differentiate T with respect to the velocity ẋ (units: m/s), what are the units of the result ∂T/∂ẋ?",
    choices: [
      "J (joules)",
      "kg·m/s (the same as linear momentum)",
      "kg·m²/s² (the same as kinetic energy)",
      "m/s² (acceleration)"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 12-2: Generalized Momentum from Energy Derivatives",
    supplementaryText:
      "Differentiating T = ½m(ẋ² + ẏ²) with respect to ẋ gives ∂T/∂ẋ = mẋ. The units are kg × (m/s) = kg·m/s, which is exactly the units of linear momentum. This is not a coincidence — it is a preview of how Lecture 12 connects energy derivatives to momentum. The quantity ∂L/∂q̇ (where L is a scalar energy function and q̇ is a velocity) is called the generalized momentum. When q̇ = ẋ, this gives linear momentum; when q̇ = θ̇ (angular velocity), differentiating gives angular momentum. The units always follow from the same rule: [energy] / [velocity units of q̇]. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_12-2.mp4"
  },
  {
    id: "12-3",
    title: "Question 3",
    text: "A planet orbits the Sun under gravity. The gravitational force is always directed toward the Sun (a central force). Which quantity is conserved, and why?",
    choices: [
      "Linear momentum, because the planet moves at constant speed",
      "Angular momentum about the Sun, because the gravitational force produces no torque about the Sun",
      "Kinetic energy, because gravity does no work",
      "Total momentum of the Sun-planet system, because the Sun does not move"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 12-3: Symmetry and Conservation of Angular Momentum",
    supplementaryText:
      "The torque of a force about a point equals r × F. For a central force (F directed toward the Sun), F is collinear with r — specifically anti-parallel to it, since r points away from the Sun while F points toward it. Because F and r are collinear, r × F = 0. With zero net torque, angular momentum H = r × mv is conserved: dH/dt = ΣM = 0. This is why planets sweep equal areas in equal times (Kepler's second law). Kinetic energy is not conserved — it exchanges with potential energy as the planet speeds up near the Sun and slows down far away. In Lecture 12, this connection between symmetry (the force has no angular dependence) and conservation law (angular momentum) emerges automatically from the mathematics, without needing to compute torques explicitly. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_12-3.mp4"
  },
  {
    id: "12-4",
    title: "Question 4",
    text: "Fermat's principle states that light takes the path that minimizes travel time between two points — which is why light bends at a glass-air interface. Which of the following is the closest mechanical analogue of Fermat's principle: an optimization problem that also minimizes travel time, but for a particle moving under a physical force rather than for light?",
    choices: [
      "Finding the path of minimum distance between two points in a plane (a straight line)",
      "Finding the path of minimum distance between two points on a sphere (a great circle)",
      "Finding the path along which a bead slides from A to B in the shortest time under gravity (the brachistochrone problem)",
      "All of the above are equivalent to Fermat's principle"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 12-4: Calculus of Variations and Hamilton's Principle",
    supplementaryText:
      "Options A and B minimize geometric distance — a purely spatial question with no time involved. Fermat's principle minimizes travel time between fixed points in space. The brachistochrone (option C) also minimizes travel time, but for a mechanical system under gravity — this is the closest analogy to Fermat's principle in mechanics. The answer is not a straight line: a curved path allows the bead to gain speed faster early on, reducing total time. In Lecture 12, Hamilton's principle uses the same mathematical framework (calculus of variations) as all of these problems, but applies it to a different quantity called action — which is neither distance nor time, but an integral involving both kinetic and potential energy. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_12-4.mp4"
  },
  {
    id: "12-5",
    title: "Question 5",
    text: "Newton's second law for a spring-mass system gives mẍ + kx = 0 — a single second-order differential equation in x(t). Suppose instead you define a new variable p = mẋ (momentum) and rewrite the system as two equations: ẋ = p/m and ṗ = −kx. Which statement about these two formulations is correct?",
    choices: [
      "The two-equation system has more unknowns, so it is harder to solve",
      "The two formulations describe the same physics — one second-order equation is equivalent to two first-order equations",
      "The two-equation system is only valid when the spring force is linear",
      "The second-order equation contains more information than the two first-order equations"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 12-5: Lagrangian and Hamiltonian Formulations",
    supplementaryText:
      "One second-order differential equation in x(t) is mathematically equivalent to two first-order equations in x(t) and p(t). You can always convert between them: differentiate p = mẋ to get ṗ = mẍ, then substitute ṗ = −kx to recover mẍ + kx = 0. The physics is identical — the same trajectories, the same solutions. The two-equation form simply treats position and momentum as two equal, independent variables. This is not harder — it is a different mathematical structure that turns out to have useful geometric properties. In Lecture 12, this reformulation is the basis of Hamiltonian mechanics, where the state of the system is described by (x, p) together rather than x alone. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/supplementary_video_12-5.mp4"
  }
];
