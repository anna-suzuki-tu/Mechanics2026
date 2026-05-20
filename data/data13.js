// Lecture 13 — Practice Exercises
// Source: 演習課題 DB #13 — Analytical Mechanics: Method Comparison & Practice
const exercises = [
  {
    id: "13-basic-1",
    category: "basic",
    label: "🟢 Basic 1",
    title: "Simple Pendulum — All Four Methods",
    text: `<p>A point mass m is suspended from a fixed point by a massless rigid rod of length l, swinging in a vertical plane.</p>
<p><strong>Part A:</strong> Derive the equation of motion using all four methods — Newton, Energy, D'Alembert, and Lagrange — and confirm they all give the same result:</p>
<p style="text-align:center; padding:6px 0; font-weight:600; font-size:1.05rem;">θ̈ + (g/l) sinθ = 0</p>
<p><strong>Part B:</strong> In Newton's method, what happens to the rod tension T? In the Lagrange method, at what step does T appear?</p>`,
    answer: `<p><strong>Result (all four methods):</strong> θ̈ + (g/l) sinθ = 0</p>
<ul>
  <li><strong>Newton:</strong> Resolve forces tangentially and radially. Tension T appears in both equations. The radial equation gives T = m(lθ̇² + g cosθ); the tangential equation divided by ml gives the EOM. T is found but then discarded.</li>
  <li><strong>Energy:</strong> E = ½ml²θ̇² − mgl cosθ = const. Differentiate with respect to time: ml²θ̇θ̈ + mgl sinθ · θ̇ = 0 → divide by ml²θ̇ → same EOM. Tension never appears explicitly.</li>
  <li><strong>D'Alembert:</strong> Virtual displacement δθ is tangential (along the arc). Rod tension is radial — perpendicular to δθ — so it does zero virtual work (T · δr = 0). Tension vanishes before any algebra begins.</li>
  <li><strong>Lagrange:</strong> L = ½ml²θ̇² + mgl cosθ → ∂L/∂θ̇ = ml²θ̇, d/dt(·) = ml²θ̈, ∂L/∂θ = −mgl sinθ → ml²θ̈ + mgl sinθ = 0 → same EOM in three lines. Tension never mentioned.</li>
</ul>
<p><strong>Part B answer:</strong> In Newton's method, T is an explicit unknown that must be solved for and then discarded. In the Lagrange method, T is structurally absent — the coordinate θ already encodes the constraint, so the method never needs to introduce T at any step.</p>`
  },
  {
    id: "13-basic-2",
    category: "basic",
    label: "🟢 Basic 2",
    title: "Inclined Plane",
    text: `<p>A particle of mass m slides down a frictionless slope of angle β. Let x be the displacement along the slope (increasing downward).</p>
<p>Apply the Lagrange method: write T and V, form L = T − V, apply the Euler-Lagrange equation to derive the equation of motion.</p>
<p><em>Compare with Newton's method — how many equations are required, and which force never appears in the final answer?</em></p>`,
    answer: `<p><strong>Lagrange method:</strong></p>
<ul>
  <li>T = ½mẋ²</li>
  <li>V = −mgx sinβ &nbsp; (height decreases as x increases)</li>
  <li>L = T − V = ½mẋ² + mgx sinβ</li>
  <li>∂L/∂ẋ = mẋ &nbsp;→&nbsp; d/dt(∂L/∂ẋ) = mẍ</li>
  <li>∂L/∂x = mg sinβ</li>
  <li><strong>EOM: mẍ = mg sinβ &nbsp;→&nbsp; ẍ = g sinβ</strong></li>
</ul>
<p><strong>Newton comparison:</strong> Newton requires two equations — along the slope (mẍ = mg sinβ) and perpendicular (N = mg cosβ). The normal force N is solved for but never enters the final answer. Lagrange requires only one equation; N does no virtual work along δx and is absent from the start.</p>`
  },
  {
    id: "13-basic-3",
    category: "basic",
    label: "🟢 Basic 3",
    title: "Horizontal Mass-Spring System",
    text: `<p>A particle of mass m is attached to a spring (stiffness k, natural length L₀). Let x = displacement from the natural-length position.</p>
<p>Apply the Lagrange method to derive the equation of motion and identify the natural frequency ω_n.</p>
<p><em>Note: V = +½kx² (the spring stores positive energy). Pay careful attention to the sign of ∂L/∂x.</em></p>`,
    answer: `<p><strong>Lagrange method:</strong></p>
<ul>
  <li>T = ½mẋ²</li>
  <li>V = ½kx² &nbsp; (spring stores positive potential energy)</li>
  <li>L = T − V = ½mẋ² − ½kx²</li>
  <li>∂L/∂ẋ = mẋ &nbsp;→&nbsp; d/dt(∂L/∂ẋ) = mẍ</li>
  <li>∂L/∂x = −kx</li>
  <li>EOM: mẍ − (−kx) = 0 &nbsp;→&nbsp; <strong>mẍ + kx = 0</strong></li>
  <li><strong>ω_n = √(k/m)</strong></li>
</ul>
<p><strong>Common error:</strong> Writing L = T + V gives ∂L/∂x = +kx → EOM: mẍ − kx = 0, which has exponentially growing solutions rather than oscillations. The minus sign in L = T − V is essential — L is not the total energy.</p>`
  },
  {
    id: "13-core-1",
    category: "core",
    label: "🟡 Core 1",
    title: "Spring Pendulum (2 DOF)",
    text: `<p>A mass m is connected to a spring (stiffness k, natural length l₀) and swings in a vertical plane. Generalized coordinates: l (current spring length), θ (angle from vertical).</p>
<ol>
  <li>Verify that T = ½m(l̇² + l²θ̇²) and V = −mgl cosθ + ½k(l − l₀)², then form L = T − V</li>
  <li>Apply the Euler-Lagrange equation separately to l and θ</li>
  <li>Write out the two coupled equations of motion</li>
</ol>
<p><em>Note: the term 2l̇θ̇ is the most commonly missed step when using Newton's method in polar coordinates.</em></p>`,
    answer: `<p><strong>Euler-Lagrange for l (spring extension):</strong></p>
<ul>
  <li>∂L/∂l̇ = ml̇ &nbsp;→&nbsp; d/dt(∂L/∂l̇) = ml̈</li>
  <li>∂L/∂l = mlθ̇² + mg cosθ − k(l − l₀)</li>
  <li><strong>ml̈ = mlθ̇² − k(l − l₀) + mg cosθ</strong></li>
</ul>
<p><strong>Euler-Lagrange for θ (angle):</strong></p>
<ul>
  <li>∂L/∂θ̇ = ml²θ̇ &nbsp;→&nbsp; d/dt(∂L/∂θ̇) = ml²θ̈ + 2mll̇θ̇</li>
  <li>∂L/∂θ = −mgl sinθ</li>
  <li><strong>ml²θ̈ + 2mll̇θ̇ + mgl sinθ = 0 &nbsp;→&nbsp; θ̈ = −(2l̇θ̇ + g sinθ)/l</strong></li>
</ul>
<p><strong>Key insight:</strong> The term 2mll̇θ̇ (a Coriolis-like coupling) appears automatically from d/dt(ml²θ̇) = ml²θ̈ + 2mll̇θ̇. In Newton's method using polar coordinates, radial and tangential accelerations contain l̈ − lθ̇² and lθ̈ + 2l̇θ̇ respectively — this 2l̇θ̇ term is the most frequently missed or sign-flipped step, which is why Newton is rated △ for this system.</p>`
  },
  {
    id: "13-core-2",
    category: "core",
    label: "🟡 Core 2",
    title: "Pendulum on a Cart (2 DOF)",
    text: `<p>A cart of mass M slides horizontally without friction (displacement x). A pendulum (mass m, rod length l, angle θ from vertical) hangs from the cart.</p>
<p>The bob's velocity squared is (ẋ + lθ̇ cosθ)² + (lθ̇ sinθ)², giving:</p>
<p style="padding:4px 0 4px 18px; font-weight:500;">T = ½(M+m)ẋ² + mlẋθ̇ cosθ + ½ml²θ̇²</p>
<ol>
  <li>Form L = T − V (where V = −mgl cosθ) and derive the equation of motion for x</li>
  <li>Derive the equation of motion for θ</li>
</ol>
<p><em>The cross term mlẋθ̇ cosθ in T encodes the coupling — it will generate coupling terms in both equations of motion.</em></p>`,
    answer: `<p><strong>L = ½(M+m)ẋ² + mlẋθ̇ cosθ + ½ml²θ̇² + mgl cosθ</strong></p>
<p><strong>Euler-Lagrange for x:</strong></p>
<ul>
  <li>∂L/∂ẋ = (M+m)ẋ + mlθ̇ cosθ</li>
  <li>d/dt(∂L/∂ẋ) = (M+m)ẍ + ml(θ̈ cosθ − θ̇² sinθ)</li>
  <li>∂L/∂x = 0</li>
  <li><strong>(M+m)ẍ + ml(θ̈ cosθ − θ̇² sinθ) = 0</strong></li>
</ul>
<p><strong>Euler-Lagrange for θ:</strong></p>
<ul>
  <li>∂L/∂θ̇ = mlẋ cosθ + ml²θ̇</li>
  <li>d/dt(∂L/∂θ̇) = mlẍ cosθ − mlẋθ̇ sinθ + ml²θ̈</li>
  <li>∂L/∂θ = −mlẋθ̇ sinθ − mgl sinθ</li>
  <li>EOM: mlẍ cosθ − mlẋθ̇ sinθ + ml²θ̈ + mlẋθ̇ sinθ + mgl sinθ = 0</li>
  <li><strong>lθ̈ + ẍ cosθ + g sinθ = 0</strong></li>
</ul>
<p><strong>Newton comparison:</strong> Newton requires forces at the cart-pendulum pivot — tension components in x and y for each body, giving 4 unknowns and 4 force equations. All tension components must be eliminated. In Lagrange, no internal forces are ever introduced: the coupling emerges automatically from the cross term in T, and both EOMs follow from routine differentiation.</p>`
  },
  {
    id: "13-core-3",
    category: "core",
    label: "🟡 Core 3",
    title: "Particle Inside a Vertical Cylinder",
    text: `<p>A particle of mass m moves on the smooth inner surface of a vertical cylinder of radius R. Let θ be the angular position measured from the lowest point.</p>
<p>The particle's height above the lowest point is h = R(1 − cosθ).</p>
<ol>
  <li>Write T = ½mR²θ̇² and V = mgR(1 − cosθ), then form L</li>
  <li>Apply the Euler-Lagrange equation to derive the equation of motion</li>
  <li>Compare the result with the simple pendulum — state the analogy precisely</li>
</ol>
<p><em>The normal force from the cylinder wall is radial — it does no virtual work along δθ and never appears in the Lagrange equation.</em></p>`,
    answer: `<p><strong>Lagrange method:</strong></p>
<ul>
  <li>L = ½mR²θ̇² − mgR(1 − cosθ)</li>
  <li>∂L/∂θ̇ = mR²θ̇ &nbsp;→&nbsp; d/dt(∂L/∂θ̇) = mR²θ̈</li>
  <li>∂L/∂θ = −mgR sinθ</li>
  <li>EOM: mR²θ̈ − (−mgR sinθ) = 0 &nbsp;→&nbsp; <strong>θ̈ + (g/R) sinθ = 0</strong></li>
</ul>
<p><strong>Analogy:</strong> The equation is formally identical to the simple pendulum θ̈ + (g/l)sinθ = 0 with l → R. Any system whose restoring generalized force is proportional to sinθ along a circular arc of radius R produces the same equation of motion. The normal force, which would appear prominently in Newton's method (requiring a radial equation to find N = mR(θ̇² − g cosθ/R)), is absent from the Lagrange solution — absorbed into the coordinate choice, exactly as the rod tension is absent for the pendulum.</p>`
  },
  {
    id: "13-adv-1",
    category: "advanced",
    label: "🔴 Advanced 1 (Optional)",
    title: "Double Pendulum (2 DOF)",
    text: `<p>Two equal masses m on rods of equal length l are connected in series. The upper rod is pinned at the origin. Let θ₁ = angle of upper rod from vertical, θ₂ = angle of lower rod from vertical.</p>
<p>Mass 1 position: (l sinθ₁, −l cosθ₁). Mass 2 position: (l sinθ₁ + l sinθ₂, −l cosθ₁ − l cosθ₂).</p>
<ol>
  <li>Compute the velocity of each mass and write the exact T and V</li>
  <li>Apply the Euler-Lagrange equation to θ₁ and θ₂ and derive both equations of motion</li>
  <li>State what Newton's method requires: how many free-body diagrams, unknown force components, and equations?</li>
</ol>`,
    answer: `<p><strong>Kinetic and potential energy:</strong></p>
<ul>
  <li>v₁² = l²θ̇₁²</li>
  <li>v₂² = l²θ̇₁² + l²θ̇₂² + 2l²θ̇₁θ̇₂ cos(θ₁ − θ₂)</li>
  <li><strong>T = ½ml²(2θ̇₁² + θ̇₂² + 2θ̇₁θ̇₂ cos(θ₁ − θ₂))</strong></li>
  <li><strong>V = −mgl(2 cosθ₁ + cosθ₂)</strong></li>
</ul>
<p><strong>Equations of motion (Euler-Lagrange):</strong></p>
<ul>
  <li>2θ̈₁ + θ̈₂ cos(θ₁ − θ₂) + θ̇₂² sin(θ₁ − θ₂) + 2(g/l) sinθ₁ = 0</li>
  <li>θ̈₂ + θ̈₁ cos(θ₁ − θ₂) − θ̇₁² sin(θ₁ − θ₂) + (g/l) sinθ₂ = 0</li>
</ul>
<p><strong>Newton comparison:</strong> Two free-body diagrams are needed (upper mass, lower mass), each showing tension components in x and y. That gives 4 unknown force components (T₁ₓ, T₁ᵧ, T₂ₓ, T₂ᵧ) and 4 force equations. All 4 tension components must be eliminated algebraically to obtain the 2 EOMs above. The coupling term cos(θ₁ − θ₂) and the centripetal terms θ̇² sin(θ₁ − θ₂) that appear automatically in Lagrange require substantial bookkeeping in Newton's approach.</p>`
  },
  {
    id: "13-adv-2",
    category: "advanced",
    label: "🔴 Advanced 2 (Optional)",
    title: "Rolling Sphere — Lagrange Multiplier for Constraint Force",
    text: `<p>A solid sphere (mass m, radius R, I_G = 2mR²/5) rolls without slipping on a flat surface under applied horizontal force F. Generalized coordinates: x (center position), θ (rotation angle).</p>
<p>The rolling constraint ẋ = Rθ̇ is <strong>holonomic</strong> in this 1D problem — it integrates directly to x = Rθ + const. The standard Lagrangian approach would use this to eliminate one coordinate, reducing the system to 1 DOF. Here, we deliberately retain both coordinates and apply Lagrange multipliers so that the friction force appears explicitly as λ.</p>
<p>The modified Euler-Lagrange equations with multiplier λ are: d/dt(∂L/∂q̇ᵢ) − ∂L/∂qᵢ = λ · aᵢ, where the constraint ẋ − Rθ̇ = 0 gives aₓ = 1 and a_θ = −R.</p>
<ol>
  <li>Write the two modified Euler-Lagrange equations for x and θ</li>
  <li>Use the rolling constraint ẍ = Rθ̈ to solve for ẍ and λ</li>
  <li>Identify what λ represents physically</li>
</ol>`,
    answer: `<p><strong>Modified Euler-Lagrange equations:</strong></p>
<ul>
  <li>L = ½mẋ² + (mR²/5)θ̇² &nbsp; (V = 0 on flat surface)</li>
  <li>For x: &nbsp; mẍ − F = λ · (1) &nbsp;→&nbsp; mẍ = F + λ</li>
  <li>For θ: &nbsp; (2mR²/5)θ̈ = λ · (−R) &nbsp;→&nbsp; (2mR²/5)θ̈ = −λR</li>
</ul>
<p><strong>Solving with ẍ = Rθ̈:</strong></p>
<ul>
  <li>From θ equation: θ̈ = −5λ / (2mR)</li>
  <li>Rolling: ẍ = Rθ̈ = −5λ / (2m)</li>
  <li>Substitute into x equation: −5λ/2 = F + λ &nbsp;→&nbsp; <strong>λ = −2F/7</strong></li>
  <li><strong>ẍ = 5F / (7m)</strong></li>
</ul>
<p><strong>Physical meaning of λ:</strong> The multiplier λ = −2F/7 is the friction force at the contact point — the force that enforces the rolling constraint. It is not a mathematical abstraction. The Lagrange multiplier method recovers the constraint force that the standard Lagrange approach (with constraint absorbed into coordinates) hides. This connects back to the rolling cylinder in Lecture 12, where friction disappeared; here it is explicitly recovered as λ.</p>`
  }
];
