// =====================================================
// Quiz Engine
// Requires: `questions` array defined in a data file
//           loaded before this script (e.g. data01.js)
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  // If no questions are provided, skip straight to the main video
  if (typeof questions === "undefined" || questions.length === 0) {
    const quizSection = document.getElementById("quiz-section");
    const mainVideoSection = document.getElementById("main-video-section");
    if (quizSection) quizSection.classList.add("hidden");
    if (mainVideoSection) mainVideoSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  let currentIndex = 0;
  let selectedChoice = null;
  let answered = false;

  const progressText        = document.getElementById("progress-text");
  const questionTitle       = document.getElementById("question-title");
  const questionText        = document.getElementById("question-text");
  const choicesContainer    = document.getElementById("choices-container");
  const submitBtn           = document.getElementById("submit-btn");
  const feedback            = document.getElementById("feedback");
  const nextBtnCorrect      = document.getElementById("next-btn-correct");
  const nextBtnWrong        = document.getElementById("next-btn-wrong");
  const suppNextRow         = document.getElementById("supp-next-row");
  const supplementarySection  = document.getElementById("supplementary-section");
  const supplementaryMessage  = document.getElementById("supplementary-message");
  const suppVideo           = document.getElementById("supp-video");
  const suppVideoSource     = document.getElementById("supp-video-source");
  const quizSection         = document.getElementById("quiz-section");
  const mainVideoSection    = document.getElementById("main-video-section");

  if (
    !progressText || !questionTitle || !questionText ||
    !choicesContainer || !submitBtn || !feedback ||
    !nextBtnCorrect || !nextBtnWrong || !suppNextRow ||
    !supplementarySection || !supplementaryMessage ||
    !suppVideo || !suppVideoSource ||
    !quizSection || !mainVideoSection
  ) {
    console.error("Missing required DOM elements. Check HTML IDs.");
    return;
  }

  function renderQuestion() {
    const q = questions[currentIndex];
    selectedChoice = null;
    answered = false;

    progressText.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
    questionTitle.textContent = q.title;
    questionText.textContent  = q.text;

    choicesContainer.innerHTML = "";
    q.choices.forEach((choice, index) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type  = "radio";
      input.name  = "choice";
      input.value = index;

      input.addEventListener("change", () => {
        if (answered) return;
        selectedChoice = Number(input.value);
        document.querySelectorAll(".choice").forEach(el => el.classList.remove("selected"));
        label.classList.add("selected");
      });

      const span = document.createElement("span");
      span.textContent = choice;

      label.appendChild(input);
      label.appendChild(span);
      choicesContainer.appendChild(label);
    });

    feedback.className   = "feedback hidden";
    feedback.textContent = "";
    nextBtnCorrect.classList.add("hidden");
    suppNextRow.classList.add("hidden");
    supplementarySection.classList.add("hidden");

    suppVideo.pause();
    suppVideo.currentTime = 0;
    suppVideoSource.src   = "";
    suppVideo.load();

    submitBtn.disabled = false;
  }

  function lockChoices() {
    choicesContainer.querySelectorAll('input[name="choice"]').forEach(input => {
      input.disabled = true;
    });
  }

  function handleSubmit() {
    if (answered) return;
    if (selectedChoice === null) {
      feedback.textContent = "Choose one answer first.";
      feedback.className   = "feedback incorrect";
      return;
    }

    const q = questions[currentIndex];
    answered = true;
    lockChoices();
    submitBtn.disabled = true;

    if (selectedChoice === q.answer) {
      feedback.textContent = "Correct. Go to the next question.";
      feedback.className   = "feedback correct";
      supplementarySection.classList.add("hidden");
      nextBtnCorrect.classList.remove("hidden");
      suppNextRow.classList.add("hidden");
    } else {
      feedback.textContent = "Incorrect. Watch the supplementary video, then continue.";
      feedback.className   = "feedback incorrect";
      supplementaryMessage.innerHTML = `<strong>${q.supplementaryTitle}</strong><br>${q.supplementaryText}`;
      suppVideoSource.src  = q.supplementaryVideo;
      suppVideo.load();
      supplementarySection.classList.remove("hidden");
      nextBtnCorrect.classList.add("hidden");
      suppNextRow.classList.remove("hidden");
    }
  }

  function handleNext() {
    currentIndex += 1;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      quizSection.classList.add("hidden");
      supplementarySection.classList.add("hidden");
      mainVideoSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  submitBtn.addEventListener("click", handleSubmit);
  nextBtnCorrect.addEventListener("click", handleNext);
  nextBtnWrong.addEventListener("click", handleNext);

  renderQuestion();
});

// =====================================================
// Hero header: phase-based message updates
// =====================================================
(function () {
  var phases = {
    intro: {
      title: "Introduction",
      text:  "Review where we're coming from and what you'll be able to do by the end of this lecture. When you're ready, click <strong>Start Gatekeeper</strong>."
    },
    quiz: {
      title: "Gatekeeper Questions",
      text:  "Answer all questions. If you miss one, watch the short supplementary video before moving on. You must complete all questions to unlock the main lecture."
    },
    main: {
      title: "Main Lecture & Exercises",
      text:  "Great work — you've cleared the gatekeeper! Watch the lecture, then work through the exercises below."
    }
  };

  function setHero(phase) {
    var t = document.getElementById("hero-title");
    var p = document.getElementById("hero-text");
    if (!t || !p || !phases[phase]) return;
    t.textContent = phases[phase].title;
    p.innerHTML   = phases[phase].text;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var startBtn     = document.getElementById("start-quiz-btn");
    var introSection = document.getElementById("intro-section");
    var quizSection  = document.getElementById("quiz-section");

    if (startBtn) {
      startBtn.addEventListener("click", function () {
        introSection.classList.add("hidden");
        quizSection.classList.remove("hidden");
        setHero("quiz");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    var mainSection = document.getElementById("main-video-section");
    if (mainSection && window.MutationObserver) {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.attributeName === "class" && !mainSection.classList.contains("hidden")) {
            setHero("main");
          }
        });
      }).observe(mainSection, { attributes: true });
    }
  });
})();

// =====================================================
// Intro slide: scale .slide-inner to fit .slide-outer
// =====================================================
(function () {
  function scaleSlide() {
    var outer = document.querySelector(".slide-outer");
    var inner = document.querySelector(".slide-inner");
    if (!outer || !inner) return;
    inner.style.transform = "scale(" + (outer.clientWidth / 1280) + ")";
  }

  document.addEventListener("DOMContentLoaded", function () {
    scaleSlide();
    var outer = document.querySelector(".slide-outer");
    if (outer && window.ResizeObserver) {
      new ResizeObserver(scaleSlide).observe(outer);
    } else {
      window.addEventListener("resize", scaleSlide);
    }
  });
})();
