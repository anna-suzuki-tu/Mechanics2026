// Lecture 6 — Gatekeeper Questions
// Source: Gatekeeper DB entries 6-1 through 6-5
const questions = [
  {
    id: "6-1",
    title: "Question 1",
    text: "When a rigid body undergoes pure translation, what can be said about the velocity vectors of its points?",
    choices: [
      "Points closer to the rotation center move faster",
      "All points have the same velocity vector at any instant",
      "Only the center of mass has velocity",
      "The directions of velocity vectors vary from point to point"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 6-1: Kinematics of Translation",
    supplementaryText:
      "If you miss this, you misunderstand the definition of translation. In translation, all points share the same velocity vector, and there is no rotational component.",
    supplementaryVideo: "videos/supplementary/supplementary_video_6-1.mp4"
  },
  {
    id: "6-2",
    title: "Question 2",
    text: "How can general plane motion of a rigid body be decomposed?",
    choices: [
      "As the sum of two different rotations",
      "As vertical translation plus horizontal translation",
      "As translation of a reference point plus rotation about that point",
      "As a balance of centrifugal and centripetal forces"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-2: General Plane Motion = Translation + Rotation",
    supplementaryText:
      "If you miss this, you do not understand decomposition of plane motion. As in v_B = v_A + ω × r_B/A, plane motion can always be decomposed into translation of a reference point plus rotation about that point.",
    supplementaryVideo: "videos/supplementary/supplementary_video_6-2.mp4"
  },
  {
    id: "6-3",
    title: "Question 3",
    text: "A particle moves at constant speed along a circular path. At any given instant, in which direction does its velocity vector point?",
    choices: [
      "Toward the center of the circle (radial direction)",
      "Tangent to the circle at that point (perpendicular to the radius)",
      "Away from the center (outward radial)",
      "In the direction of the net force"
    ],
    answer: 1,
    supplementaryTitle: "Supplementary Video 6-3: Velocity in Circular Motion",
    supplementaryText:
      "In circular motion, the velocity vector is always tangent to the circle — perpendicular to the radius at that instant. ",
    supplementaryVideo: "videos/supplementary/supplementary_video_6-3.mp4"
  },
  {
    id: "6-4",
    title: "Question 4",
    text: "Point A on a rigid body has velocity v_A = (3, 0) m/s. The relative velocity of B with respect to A is v_B/A = (0, 2) m/s. What is the velocity of point B?",
    choices: [
      "(3, 0) m/s",
      "(0, 2) m/s",
      "(3, 2) m/s",
      "(3, -2) m/s"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-4: Vector Addition of Velocities — Add Components, Don’t Multiply",
    supplementaryText:
      "v_B = v_A + v_B/A = (3, 0) + (0, 2) = (3, 2) m/s. This is the same rule as v_B = v_A + ω × r_B/A in rigid body kinematics.",
    supplementaryVideo: "videos/supplementary/supplementary_video_6-4.mp4"
  },
  {
    id: "6-5",
    title: "Question 5",
    text: "A point moves along a circular arc of radius R = 0.5 m with angular velocity ω = 4 rad/s. What is the speed v of the point?",
    choices: [
      "v = 0.5 / 4 = 0.125 m/s",
      "v = 4 / 0.5 = 8 m/s",
      "v = Rω = 0.5 × 4 = 2 m/s",
      "v = R^2 ω = 1 m/s"
    ],
    answer: 2,
    supplementaryTitle: "Supplementary Video 6-5: Speed in Circular Motion",
    supplementaryText:
      "The relationship v = Rω comes directly from differentiating the arc-length definition s = Rθ with respect to time.",
    supplementaryVideo: "videos/supplementary/supplementary_video_6-5.mp4"
  }
];
