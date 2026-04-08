// Lecture 6 — Gatekeeper Questions
// Source: Gatekeeper DB entries 6-1 through 6-5
const questions = [
  {
    id: "6-1",
    title: "Question 1",
    text: "A rigid body undergoes pure translation (no rotation). Which statement is correct?",
    choices: [
      "All points rotate about the center of mass",
      "Every point on the body has exactly the same velocity",
      "The angular velocity ω increases over time",
      "There is no acceleration anywhere in the body"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 6-1: Pure Translation — All Points Share the Same Velocity",
    supplementaryText:
      "You confused translation with rotation. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/6-1.mp4"
  },
  {
    id: "6-2",
    title: "Question 2",
    text: "General plane motion of a rigid body is best described as:",
    choices: [
      "Pure rotation about a single fixed axis",
      "Pure translation with no rotation component",
      "Translation of a reference point A plus rotation about A",
      "Motion confined to a horizontal plane only"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-2: General Plane Motion = Translation + Rotation",
    supplementaryText:
      "You missed the decomposition of general plane motion. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/6-2.mp4"
  },
  {
    id: "6-3",
    title: "Question 3",
    text: "What defines the Instantaneous Center of Rotation (ICR) of a rigid body at a given instant?",
    choices: [
      "The point on the body (or its extension) that has zero velocity at that instant",
      "The geometric center of mass of the body",
      "The point on the body with the maximum velocity",
      "The fixed pivot point about which the body always rotates"
    ],
    answer: 0,
    supplementaryTitle: "Supplementary Video 6-3: The Instantaneous Center of Rotation — Definition and Use",
    supplementaryText:
      "You missed the key property of the ICR. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/6-3.mp4"
  },
  {
    id: "6-4",
    title: "Question 4",
    text: "For a rigid body in general plane motion, the relative velocity v_B/A (velocity of B relative to A) is always:",
    choices: [
      "Parallel to the line segment connecting A and B",
      "In the same direction as the angular velocity vector ω",
      "Perpendicular to the line segment AB",
      "Equal in magnitude to v_A"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-4: Relative Velocity Is Always Perpendicular to the Link",
    supplementaryText:
      "You missed the geometric constraint that v_B/A ⊥ AB for a rigid body. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/6-4.mp4"
  },
  {
    id: "6-5",
    title: "Question 5",
    text: "For a rigid body rotating about its Instantaneous Center of Rotation (ICR), how does the speed of a point depend on its distance from the ICR?",
    choices: [
      "All points have the same speed regardless of distance",
      "Points closer to the ICR move faster",
      "Points farther from the ICR move faster (speed = ω × distance)",
      "Speed is unrelated to distance from the ICR"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-5: Speed Distribution Around the ICR",
    supplementaryText:
      "You missed that speed is proportional to distance from the ICR. Watch this short video, then continue.",
    supplementaryVideo: "videos/supplementary/6-5.mp4"
  }
];
