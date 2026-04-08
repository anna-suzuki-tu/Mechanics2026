// Lecture 2 — Gatekeeper Questions
// Source: Gatekeeper DB entries 2-1 through 2-5
const questions = [
  {
    id: "2-1",
    title: "Question 1",
    text: "A car travels around a circular track at a constant speed of 60 km/h. Which statement about its acceleration is correct?",
    choices: [
      "Since the speed is constant, acceleration is zero",
      "It has only a tangential component (a_t)",
      "It has only a normal (centripetal) component (a_n) directed toward the center",
      "The acceleration is directed away from the center"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 2-1: Intuition of Normal and Tangential Acceleration",
    supplementaryText:
      "You missed the concept of centripetal (normal) acceleration. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/2-1.mp4"
  },
  {
    id: "2-2",
    title: "Question 2",
    text: "In projectile motion (neglect air resistance), what happens to the horizontal component of velocity (v_x) as the object moves?",
    choices: [
      "It increases due to gravity",
      "It decreases until it reaches the peak, then increases",
      "It remains constant because horizontal acceleration is zero (a_x = 0)",
      "It becomes zero at the highest point of the trajectory"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 2-2: Projectile Motion — The Power of Independence",
    supplementaryText:
      "You cannot yet apply independent component analysis for projectile motion. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/2-2.mp4"
  },
  {
    id: "2-3",
    title: "Question 3",
    text: "For two airplanes A and B, which is the correct definition of B's velocity relative to A?",
    choices: [
      "v_B/A = v_A + v_B",
      "v_B/A = v_B − v_A",
      "v_B/A = v_A − v_B",
      "If they fly in the same direction, v_B/A is always zero"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 2-3: Translating Reference Frames and Relative Motion",
    supplementaryText:
      "You missed the vector relationship for relative motion. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/2-3.mp4"
  },
  {
    id: "2-4",
    title: "Question 4",
    text: "For a particle moving along a curved path, if the tangential acceleration a_t = dv/dt is negative, which statement is correct?",
    choices: [
      "The particle is turning left",
      "The particle is turning right",
      "The particle's speed is decreasing",
      "The radius of curvature is decreasing"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 2-4: Deceleration vs. Directional Change",
    supplementaryText:
      "You are confusing tangential acceleration with change in direction. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/2-4.mp4"
  },
  {
    id: "2-5",
    title: "Question 5",
    text: "A train moves at a constant speed. If the track's radius of curvature ρ becomes smaller (the curve becomes sharper), what happens to the normal acceleration a_n?",
    choices: [
      "Decreases",
      "Increases",
      "Does not change because speed is constant",
      "Becomes zero"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 2-5: Geometry of Motion — Curvature and Its Effects",
    supplementaryText:
      "You missed that a_n = v²/ρ, so a smaller ρ makes a_n larger. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/2-5.mp4"
  }
];
