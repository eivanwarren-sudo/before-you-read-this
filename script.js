/* ==========================================================
   Before You Read This… 😭❤️
   Vanilla JS. No backend, no tracking, answers live in memory only.
   ========================================================== */

(function () {
  "use strict";

  var QUESTIONS = [
    {
      q: "First things first… how's your day going?",
      answers: [
        { label: "Good!", reaction: "Nice! Sana all days choose to be on your side HAHAHAHA." },
        { label: "Could be better.", reaction: "Respect. Hope the rest of it decides to behave itself." },
        { label: "I'm surviving HAHAHA.", reaction: "Surviving counts as a win. That's a passing grade in my book." },
        { label: "Why do you wanna know? 👀", reaction: "No hidden agenda, promise. Chika lang, curious lang ako HAHAHA." }
      ]
    },
    {
      q: "Be honest. Did you expect a whole website from me?",
      answers: [
        { label: "Absolutely not.", reaction: "HAHAHAHA fair. Some people send a simple hi. I apparently chose web development." },
        { label: "What is wrong with you? 😭", reaction: "A lot, honestly. And one of those things turned into this website." },
        { label: "Lowkey impressive.", reaction: "Lowkey? I'm taking that as highkey praise. Salamat po HAHAHA." },
        { label: "I'm concerned.", reaction: "Same. But you're already here, so might as well see where this goes." }
      ],
      after: "Bro really made a website instead of communicating normally."
    },
    {
      q: "Guess what took more courage?",
      answers: [
        { label: "Making this website.", reaction: "Not gonna lie, all three are final-boss-level difficulty for me. 💀" },
        { label: "Sending a message.", reaction: "Sending takes two seconds. Overthinking it takes three business days." },
        { label: "Starting a conversation.", reaction: "Real. My brain rehearses 'hi' like it's a graduation speech." }
      ]
    },
    {
      q: "If we talked sometime, what do you think the conversation would be like?",
      answers: [
        { label: "Normal and chill.", reaction: "Lowkey the dream. Normal lang, walang script, walang panic." },
        { label: "Awkward at first.", reaction: "Oh 100%. Expect two people pretending they know what to say HAHAHAHA." },
        { label: "We'd laugh at random stuff.", reaction: "I'd like to think I'm funny, pero disclaimer: my humor is inconsistent." },
        { label: "Depends on the topic.", reaction: "Fair. Get me on the right topic and I will not stop talking." }
      ],
      after: "Side quest completed."
    },
    {
      q: "What's your preferred conversation vibe?",
      answers: [
        { label: "Funny and random.", reaction: "Say less. My brain runs on random tangents 24/7." },
        { label: "Deep talks.", reaction: "Respect. Those are the conversations you didn't plan but ended up needing." },
        { label: "A mix of both.", reaction: "Ah, the balanced diet of conversations. Taste HAHAHAHA." },
        { label: "Depends on the person.", reaction: "Reasonable. Some people bring out the chaotic side, some bring out the life questions." }
      ]
    },
    {
      q: "Important question: if someone said hi to you at school, what would happen?",
      answers: [
        { label: "I'd say hi back.", reaction: "Simple, clean, no drama. Ganda non." },
        { label: "I'd probably smile.", reaction: "A smile is lowkey powerful. It randomly stays in someone's head for the rest of the day." },
        { label: "I'd be confused for a second.", reaction: "The two-second buffering before saying hi back. Relatable HAHAHAHA." },
        { label: "Depends on the timing.", reaction: "Valid. Wrong timing can ruin even the simplest hi." }
      ],
      after: "Whoever invented eye contact owes shy people an apology."
    },
    {
      q: "What's a green flag you appreciate in someone?",
      answers: [
        { label: "Kindness", reaction: "Kindness to everyone, not just to the people they're trying to impress. That one hits different." },
        { label: "Honesty", reaction: "Same. I'd rather hear the plain truth than a polished version of it." },
        { label: "A good sense of humor", reaction: "A good sense of humor can carry an entire friendship. Source: trust me." },
        { label: "Respect", reaction: "Big one. How someone treats people when no one is watching is basically the whole test." }
      ]
    },
    {
      q: "What's something small that can make your day better?",
      answers: [
        { label: "A funny conversation", reaction: "Same. One good laugh can delete an entire bad morning." },
        { label: "A thoughtful message", reaction: "The 'I saw this and thought of you' type. Doesn't cost anything, pero it hits." },
        { label: "Spending time with friends", reaction: "Solid. Walang kapalit yung chill lang with people you're comfortable with." },
        { label: "A simple act of kindness", reaction: "Someone saving you a seat or holding the door. Small thing, big effect." }
      ]
    },
    {
      q: "What's your kind of conversation?",
      answers: [
        { label: "Random jokes that make no sense.", reaction: "Finally, a place for my jokes that only work at 1% battery." },
        { label: "Deep talks about life.", reaction: "Those are dangerously good at 12 midnight when you're supposed to be asleep." },
        { label: "A little bit of everything.", reaction: "The full meal of conversations. Sabaw, ulam, dessert, everything." },
        { label: "Depends on my mood.", reaction: "Honest. A mood-based conversation selector. I respect that." }
      ],
      after: "Developer's note: this website was built with courage, questionable decisions, and a suspicious amount of overthinking."
    },
    {
      q: "Do you think being shy makes starting a conversation harder?",
      answers: [
        { label: "Definitely.", reaction: "THANK YOU. Finally, someone understands the struggle. 😭" },
        { label: "Sometimes.", reaction: "Sometimes is accurate. Some days hi is easy, some days it's a whole boss fight." },
        { label: "Not really.", reaction: "Teach me your ways. Genuinely, I'm taking notes." },
        { label: "Depends on the person.", reaction: "True. Different person, different difficulty level, apparently." }
      ]
    },
    {
      q: "What's most important when getting to know someone?",
      answers: [
        { label: "Feeling comfortable", reaction: "Top tier answer. If you can be weird without explaining yourself, that's the goal." },
        { label: "Being able to laugh together", reaction: "Laughing at the same random thing is basically a compatibility test." },
        { label: "Honesty", reaction: "Honesty, even the awkward kind. It keeps everything simple." },
        { label: "Taking things slowly", reaction: "Agreed. Walang rush. Good things don't need a deadline." }
      ],
      after: "Current status: trying to act nonchalant."
    },
    {
      q: "Okay, real talk. Are you open to getting to know someone new?",
      answers: [
        { label: "Sure, why not?", reaction: "Appreciate the openness. No pressure from me either way, promise." },
        { label: "Maybe, let's see.", reaction: "That's honestly the most reasonable answer. Take your time." },
        { label: "I'd rather take things slowly.", reaction: "Completely fair. Slow is still a direction." },
        { label: "I'm not sure yet.", reaction: "Totally okay. Unsure is a valid answer, hindi kasalanan HAHAHA." }
      ]
    },
    {
      q: "If you could choose, how would you prefer a conversation to start?",
      answers: [
        { label: "A simple hello.", reaction: "The classic. No script, no intro, just hi. Clean." },
        { label: "A random funny question.", reaction: "Okay so like, if a pineapple wears a hat, is it formal? Something like that." },
        { label: "A casual conversation.", reaction: "The natural route: hello, small talk, then friendship. Solid plan." },
        { label: "Just let it happen naturally.", reaction: "Agreed. The best convos kinda just show up unannounced." }
      ],
      after: "Okay, enough yapping. Next question. 😭"
    },
    {
      q: "Okay, last question before I disappear from embarrassment. 😭",
      sub: "Can I tell you something I've been wanting to say?",
      answers: [
        { label: "Go ahead.", reaction: "Brave. Okay, here goes nothing. ❤️" },
        { label: "I'm listening.", reaction: "That's all I needed to hear. See you on the other side. 😭" },
        { label: "Okay, now I'm curious.", reaction: "Curiosity brought you here, so heads up: it gets a little sincere after this. HAHAHA." }
      ]
    }
  ];

  var TOTAL = QUESTIONS.length;
  var answers = new Array(TOTAL).fill(null);
  var flow = [];
  var pos = 0;

  var progress = document.getElementById("progress");
  var progressFill = document.getElementById("progressFill");
  var progressLabel = document.getElementById("progressLabel");

  var qCount = document.getElementById("qCount");
  var qText = document.getElementById("qText");
  var answersEl = document.getElementById("answers");
  var reaction = document.getElementById("reaction");
  var reactionText = document.getElementById("reactionText");
  var backBtn = document.getElementById("btnBack");
  var nextBtn = document.getElementById("btnNext");

  var interText = document.getElementById("interText");
  var interBack = document.getElementById("interBack");
  var interNext = document.getElementById("interNext");

  var whyBox = document.getElementById("whyBox");
  var openingBtns = document.getElementById("openingBtns");

  var envelope = document.getElementById("envelope");
  var envHint = document.getElementById("envHint");
  var envBack = document.getElementById("envBack");
  var letterReveal = document.getElementById("letterReveal");
  var toEnding = document.getElementById("toEnding");

  var endingMain = document.getElementById("endingMain");
  var closingMsg = document.getElementById("closingMsg");
  var btnReplay = document.getElementById("btnReplay");
  var btnClose = document.getElementById("btnClose");
  var btnBackEnding = document.getElementById("btnBackEnding");

  /* ---------------- Flow ---------------- */
  function buildFlow() {
    flow = [{ type: "opening" }];
    QUESTIONS.forEach(function (q, i) {
      flow.push({ type: "question", i: i });
      if (q.after) flow.push({ type: "intermission", i: i, text: q.after });
    });
    flow.push({ type: "preletter" });
    flow.push({ type: "envelope" });
    flow.push({ type: "ending" });
  }

  function goTo(newPos) {
    if (newPos < 0 || newPos >= flow.length) return;
    pos = newPos;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showScreen(name) {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle("active", screens[i].getAttribute("data-screen") === name);
    }
  }

  function render() {
    var step = flow[pos];
    showScreen(step.type);
    updateProgress(step);

    if (step.type === "question") renderQuestion(step.i);
    else if (step.type === "intermission") interText.textContent = step.text;
    else if (step.type === "envelope") resetEnvelope();
  }

  function updateProgress(step) {
    if (step.type === "opening") {
      progress.classList.add("is-hidden");
      return;
    }
    progress.classList.remove("is-hidden");

    var done = 0;
    var label = "";

    if (step.type === "question") {
      var i = step.i;
      done = answers[i] !== null ? i + 1 : i;
      label = "Question " + (i + 1) + " of " + TOTAL;
    } else if (step.type === "intermission") {
      done = step.i + 1;
      label = "Question " + (step.i + 1) + " of " + TOTAL;
    } else {
      done = TOTAL;
      label = step.type === "ending" ? "Done. Thank you. ❤️" : "Almost there";
    }

    progressFill.style.width = Math.round((done / TOTAL) * 100) + "%";
    progressLabel.textContent = label;
  }

  /* ---------------- Question ---------------- */
  function renderQuestion(i) {
    var q = QUESTIONS[i];
    qCount.textContent = "Question " + (i + 1) + " of " + TOTAL;
    qText.textContent = q.sub ? q.q + " " + q.sub : q.q;

    answersEl.innerHTML = "";
    q.answers.forEach(function (a, ai) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.textContent = a.label;
      if (answers[i] === ai) {
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.setAttribute("aria-pressed", "false");
      }
      btn.addEventListener("click", function () { selectAnswer(i, ai); });
      answersEl.appendChild(btn);
    });

    if (answers[i] !== null) {
      showReaction(q.answers[answers[i]].reaction);
      nextBtn.disabled = false;
    } else {
      hideReaction();
      nextBtn.disabled = true;
    }

    backBtn.disabled = false;
  }

  function selectAnswer(i, ai) {
    answers[i] = ai;
    var buttons = answersEl.querySelectorAll(".answer");
    for (var b = 0; b < buttons.length; b++) {
      var isSel = b === ai;
      buttons[b].classList.toggle("selected", isSel);
      buttons[b].setAttribute("aria-pressed", isSel ? "true" : "false");
    }
    showReaction(QUESTIONS[i].answers[ai].reaction);
    nextBtn.disabled = false;
    updateProgress({ type: "question", i: i });
  }

  function showReaction(text) {
    reactionText.textContent = text;
    reaction.hidden = false;
    reaction.style.animation = "none";
    void reaction.offsetWidth;
    reaction.style.animation = "";
  }

  function hideReaction() {
    reaction.hidden = true;
    reactionText.textContent = "";
  }

  /* ---------------- Envelope ---------------- */
  function resetEnvelope() {
    envelope.classList.remove("opened");
    envelope.disabled = false;
    envHint.hidden = false;
    envBack.hidden = false;
    letterReveal.hidden = true;
    letterReveal.classList.remove("is-visible");
  }

  function openEnvelope() {
    if (envelope.classList.contains("opened")) return;
    envelope.classList.add("opened");
    envHint.hidden = true;
    envBack.hidden = true;

    window.setTimeout(function () {
      letterReveal.hidden = false;
      void letterReveal.offsetWidth;
      letterReveal.classList.add("is-visible");
      window.setTimeout(function () {
        letterReveal.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }, 620);
  }

  /* ---------------- Reset / Replay ---------------- */
  function resetExperience() {
    answers = new Array(TOTAL).fill(null);
    pos = 0;
    hideReaction();
    openingBtns.hidden = false;
    whyBox.hidden = true;
    endingMain.hidden = false;
    closingMsg.hidden = true;
    resetEnvelope();
    progressFill.style.width = "0%";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- Wiring ---------------- */
  document.getElementById("btnStart").addEventListener("click", function () {
    goTo(pos + 1);
  });

  document.getElementById("btnWhy").addEventListener("click", function () {
    openingBtns.hidden = true;
    whyBox.hidden = false;
  });

  document.getElementById("btnWhyContinue").addEventListener("click", function () {
    goTo(pos + 1);
  });

  nextBtn.addEventListener("click", function () {
    goTo(pos + 1);
  });

  backBtn.addEventListener("click", function () {
    goTo(pos - 1);
  });

  interNext.addEventListener("click", function () {
    goTo(pos + 1);
  });

  interBack.addEventListener("click", function () {
    goTo(pos - 1);
  });

  document.getElementById("preNext").addEventListener("click", function () {
    goTo(pos + 1);
  });

  document.getElementById("preBack").addEventListener("click", function () {
    goTo(pos - 1);
  });

  envBack.addEventListener("click", function () {
    goTo(pos - 1);
  });

  envelope.addEventListener("click", openEnvelope);

  toEnding.addEventListener("click", function () {
    goTo(pos + 1);
  });

  btnReplay.addEventListener("click", resetExperience);

  btnClose.addEventListener("click", function () {
    endingMain.hidden = true;
    closingMsg.hidden = false;
  });

  btnBackEnding.addEventListener("click", function () {
    closingMsg.hidden = true;
    endingMain.hidden = false;
  });

  /* ---------------- Init ---------------- */
  buildFlow();
  render();
})();
