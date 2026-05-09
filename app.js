const lessons = {
  animals: {
    title: "Животные",
    words: [
      { en: "cat", ru: "кошка", ipa: "/kæt/", hint: "кэт", picture: "CAT" },
      { en: "dog", ru: "собака", ipa: "/dɔːɡ/", hint: "дог", picture: "DOG" },
      { en: "bird", ru: "птица", ipa: "/bɜːrd/", hint: "бёрд", picture: "BIRD" },
      { en: "fish", ru: "рыба", ipa: "/fɪʃ/", hint: "фиш", picture: "FISH" },
      { en: "bear", ru: "медведь", ipa: "/ber/", hint: "бэа", picture: "BEAR" }
    ]
  },
  family: {
    title: "Семья",
    words: [
      { en: "mom", ru: "мама", ipa: "/mɑːm/", hint: "мам", picture: "MOM" },
      { en: "dad", ru: "папа", ipa: "/dæd/", hint: "дэд", picture: "DAD" },
      { en: "baby", ru: "малыш", ipa: "/ˈbeɪbi/", hint: "бэй-би", picture: "BABY" },
      { en: "sister", ru: "сестра", ipa: "/ˈsɪstər/", hint: "сис-тэр", picture: "SIS" },
      { en: "brother", ru: "брат", ipa: "/ˈbrʌðər/", hint: "бра-зэр", picture: "BRO" }
    ]
  },
  food: {
    title: "Еда",
    words: [
      { en: "milk", ru: "молоко", ipa: "/mɪlk/", hint: "милк", picture: "MILK" },
      { en: "apple", ru: "яблоко", ipa: "/ˈæpəl/", hint: "эп-л", picture: "APPLE" },
      { en: "bread", ru: "хлеб", ipa: "/bred/", hint: "брэд", picture: "BREAD" },
      { en: "water", ru: "вода", ipa: "/ˈwɔːtər/", hint: "уо-тэр", picture: "WATER" },
      { en: "egg", ru: "яйцо", ipa: "/eɡ/", hint: "эг", picture: "EGG" }
    ]
  },
  colors: {
    title: "Цвета",
    words: [
      { en: "red", ru: "красный", ipa: "/red/", hint: "рэд", picture: "RED" },
      { en: "blue", ru: "синий", ipa: "/bluː/", hint: "блу", picture: "BLUE" },
      { en: "green", ru: "зеленый", ipa: "/ɡriːn/", hint: "грин", picture: "GREEN" },
      { en: "yellow", ru: "желтый", ipa: "/ˈjeloʊ/", hint: "йел-оу", picture: "YELLOW" },
      { en: "black", ru: "черный", ipa: "/blæk/", hint: "блэк", picture: "BLACK" }
    ]
  },
  body: {
    title: "Тело",
    words: [
      { en: "hand", ru: "рука", ipa: "/hænd/", hint: "хэнд", picture: "HAND" },
      { en: "eye", ru: "глаз", ipa: "/aɪ/", hint: "ай", picture: "EYE" },
      { en: "ear", ru: "ухо", ipa: "/ɪr/", hint: "иэр", picture: "EAR" },
      { en: "nose", ru: "нос", ipa: "/noʊz/", hint: "ноуз", picture: "NOSE" },
      { en: "mouth", ru: "рот", ipa: "/maʊθ/", hint: "маус", picture: "MOUTH" }
    ]
  },
  actions: {
    title: "Действия",
    words: [
      { en: "sleep", ru: "спать", ipa: "/sliːp/", hint: "слип", picture: "SLEEP" },
      { en: "eat", ru: "есть", ipa: "/iːt/", hint: "ит", picture: "EAT" },
      { en: "drink", ru: "пить", ipa: "/drɪŋk/", hint: "дринк", picture: "DRINK" },
      { en: "cry", ru: "плакать", ipa: "/kraɪ/", hint: "край", picture: "CRY" },
      { en: "smile", ru: "улыбаться", ipa: "/smaɪl/", hint: "смайл", picture: "SMILE" },
      { en: "look", ru: "смотреть", ipa: "/lʊk/", hint: "лук", picture: "LOOK" },
      { en: "listen", ru: "слушать", ipa: "/ˈlɪsən/", hint: "ли-сэн", picture: "LISTEN" },
      { en: "go", ru: "идти", ipa: "/ɡoʊ/", hint: "гоу", picture: "GO" },
      { en: "come", ru: "приходить", ipa: "/kʌm/", hint: "кам", picture: "COME" },
      { en: "play", ru: "играть", ipa: "/pleɪ/", hint: "плэй", picture: "PLAY" },
      { en: "wash", ru: "мыть", ipa: "/wɑːʃ/", hint: "уош", picture: "WASH" },
      { en: "help", ru: "помогать", ipa: "/help/", hint: "хэлп", picture: "HELP" },
      { en: "hug", ru: "обнимать", ipa: "/hʌɡ/", hint: "хаг", picture: "HUG" },
      { en: "love", ru: "любить", ipa: "/lʌv/", hint: "лав", picture: "LOVE" },
      { en: "say", ru: "говорить", ipa: "/seɪ/", hint: "сэй", picture: "SAY" },
      { en: "ask", ru: "спрашивать", ipa: "/æsk/", hint: "эск", picture: "ASK" },
      { en: "open", ru: "открывать", ipa: "/ˈoʊpən/", hint: "оу-пэн", picture: "OPEN" },
      { en: "close", ru: "закрывать", ipa: "/kloʊz/", hint: "клоуз", picture: "CLOSE" },
      { en: "give", ru: "давать", ipa: "/ɡɪv/", hint: "гив", picture: "GIVE" },
      { en: "take", ru: "брать", ipa: "/teɪk/", hint: "тэйк", picture: "TAKE" },
      { en: "sit", ru: "сидеть", ipa: "/sɪt/", hint: "сит", picture: "SIT" },
      { en: "stand", ru: "стоять", ipa: "/stænd/", hint: "стэнд", picture: "STAND" }
    ]
  },
  feelings: {
    title: "Чувства",
    words: [
      { en: "happy", ru: "счастливый", ipa: "/ˈhæpi/", hint: "хэ-пи", picture: "HAPPY" },
      { en: "sad", ru: "грустный", ipa: "/sæd/", hint: "сэд", picture: "SAD" },
      { en: "tired", ru: "уставший", ipa: "/ˈtaɪərd/", hint: "тай-эрд", picture: "TIRED" },
      { en: "scared", ru: "испуганный", ipa: "/skerd/", hint: "скэрд", picture: "SCARED" },
      { en: "angry", ru: "сердитый", ipa: "/ˈæŋɡri/", hint: "энг-гри", picture: "ANGRY" },
      { en: "calm", ru: "спокойный", ipa: "/kɑːm/", hint: "кам", picture: "CALM" }
    ]
  },
  home: {
    title: "Дом",
    words: [
      { en: "bed", ru: "кровать", ipa: "/bed/", hint: "бэд", picture: "BED" },
      { en: "bath", ru: "ванна", ipa: "/bæθ/", hint: "бэс", picture: "BATH" },
      { en: "door", ru: "дверь", ipa: "/dɔːr/", hint: "дор", picture: "DOOR" },
      { en: "chair", ru: "стул", ipa: "/tʃer/", hint: "чэа", picture: "CHAIR" },
      { en: "table", ru: "стол", ipa: "/ˈteɪbəl/", hint: "тэй-бл", picture: "TABLE" },
      { en: "book", ru: "книга", ipa: "/bʊk/", hint: "бук", picture: "BOOK" }
    ]
  },
  nature: {
    title: "Природа",
    words: [
      { en: "sun", ru: "солнце", ipa: "/sʌn/", hint: "сан", picture: "SUN" },
      { en: "moon", ru: "луна", ipa: "/muːn/", hint: "мун", picture: "MOON" },
      { en: "tree", ru: "дерево", ipa: "/triː/", hint: "три", picture: "TREE" },
      { en: "flower", ru: "цветок", ipa: "/ˈflaʊər/", hint: "флау-эр", picture: "FLOWER" },
      { en: "rain", ru: "дождь", ipa: "/reɪn/", hint: "рэйн", picture: "RAIN" },
      { en: "snow", ru: "снег", ipa: "/snoʊ/", hint: "сноу", picture: "SNOW" }
    ]
  },
  clothes: {
    title: "Одежда",
    words: [
      { en: "hat", ru: "шапка", ipa: "/hæt/", hint: "хэт", picture: "HAT" },
      { en: "shirt", ru: "рубашка", ipa: "/ʃɜːrt/", hint: "шёрт", picture: "SHIRT" },
      { en: "pants", ru: "штаны", ipa: "/pænts/", hint: "пэнтс", picture: "PANTS" },
      { en: "shoes", ru: "обувь", ipa: "/ʃuːz/", hint: "шуз", picture: "SHOES" },
      { en: "coat", ru: "пальто", ipa: "/koʊt/", hint: "коут", picture: "COAT" }
    ]
  },
  numbers: {
    title: "Числа",
    words: [
      { en: "one", ru: "один", ipa: "/wʌn/", hint: "уан", picture: "ONE" },
      { en: "two", ru: "два", ipa: "/tuː/", hint: "ту", picture: "TWO" },
      { en: "three", ru: "три", ipa: "/θriː/", hint: "сри", picture: "THREE" },
      { en: "four", ru: "четыре", ipa: "/fɔːr/", hint: "фор", picture: "FOUR" },
      { en: "five", ru: "пять", ipa: "/faɪv/", hint: "файв", picture: "FIVE" }
    ]
  }
};

const verbTenses = {
  sleep: { present: ["I sleep", "я сплю"], past: ["I slept", "я спал"], future: ["I will sleep", "я буду спать"] },
  eat: { present: ["I eat", "я ем"], past: ["I ate", "я ел"], future: ["I will eat", "я буду есть"] },
  drink: { present: ["I drink", "я пью"], past: ["I drank", "я пил"], future: ["I will drink", "я буду пить"] },
  cry: { present: ["I cry", "я плачу"], past: ["I cried", "я плакал"], future: ["I will cry", "я буду плакать"] },
  smile: { present: ["I smile", "я улыбаюсь"], past: ["I smiled", "я улыбался"], future: ["I will smile", "я буду улыбаться"] },
  look: { present: ["I look", "я смотрю"], past: ["I looked", "я смотрел"], future: ["I will look", "я буду смотреть"] },
  listen: { present: ["I listen", "я слушаю"], past: ["I listened", "я слушал"], future: ["I will listen", "я буду слушать"] },
  go: { present: ["I go", "я иду"], past: ["I went", "я шел"], future: ["I will go", "я пойду"] },
  come: { present: ["I come", "я прихожу"], past: ["I came", "я пришел"], future: ["I will come", "я приду"] },
  play: { present: ["I play", "я играю"], past: ["I played", "я играл"], future: ["I will play", "я буду играть"] },
  wash: { present: ["I wash", "я мою"], past: ["I washed", "я мыл"], future: ["I will wash", "я буду мыть"] },
  help: { present: ["I help", "я помогаю"], past: ["I helped", "я помогал"], future: ["I will help", "я буду помогать"] },
  hug: { present: ["I hug", "я обнимаю"], past: ["I hugged", "я обнимал"], future: ["I will hug", "я буду обнимать"] },
  love: { present: ["I love", "я люблю"], past: ["I loved", "я любил"], future: ["I will love", "я буду любить"] },
  say: { present: ["I say", "я говорю"], past: ["I said", "я сказал"], future: ["I will say", "я скажу"] },
  ask: { present: ["I ask", "я спрашиваю"], past: ["I asked", "я спросил"], future: ["I will ask", "я спрошу"] },
  open: { present: ["I open", "я открываю"], past: ["I opened", "я открыл"], future: ["I will open", "я открою"] },
  close: { present: ["I close", "я закрываю"], past: ["I closed", "я закрыл"], future: ["I will close", "я закрою"] },
  give: { present: ["I give", "я даю"], past: ["I gave", "я дал"], future: ["I will give", "я дам"] },
  take: { present: ["I take", "я беру"], past: ["I took", "я взял"], future: ["I will take", "я возьму"] },
  sit: { present: ["I sit", "я сижу"], past: ["I sat", "я сидел"], future: ["I will sit", "я сяду"] },
  stand: { present: ["I stand", "я стою"], past: ["I stood", "я стоял"], future: ["I will stand", "я встану"] }
};

let topicKey = "animals";
let wordIndex = 0;
let quizWord = lessons.animals.words[0];
let hintVisible = false;
const learned = new Set(JSON.parse(localStorage.getItem("learnedWords") || "[]"));

const elements = {
  learnedCount: document.querySelector("#learnedCount"),
  picture: document.querySelector("#picture"),
  topicName: document.querySelector("#topicName"),
  englishWord: document.querySelector("#englishWord"),
  translation: document.querySelector("#translation"),
  ipa: document.querySelector("#ipa"),
  russianHint: document.querySelector("#russianHint"),
  tensePanel: document.querySelector("#tensePanel"),
  presentExample: document.querySelector("#presentExample"),
  presentRu: document.querySelector("#presentRu"),
  pastExample: document.querySelector("#pastExample"),
  pastRu: document.querySelector("#pastRu"),
  futureExample: document.querySelector("#futureExample"),
  futureRu: document.querySelector("#futureRu"),
  speakBtn: document.querySelector("#speakBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  knownBtn: document.querySelector("#knownBtn"),
  newQuizBtn: document.querySelector("#newQuizBtn"),
  quizPrompt: document.querySelector("#quizPrompt"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  topics: document.querySelectorAll(".topic")
};

function currentWords() {
  return lessons[topicKey].words;
}

function currentWord() {
  return currentWords()[wordIndex];
}

function renderWord() {
  const word = currentWord();
  const tenses = verbTenses[word.en];
  elements.picture.textContent = word.picture;
  elements.topicName.textContent = lessons[topicKey].title;
  elements.englishWord.textContent = word.en;
  elements.translation.textContent = word.ru;
  elements.ipa.textContent = word.ipa;
  elements.russianHint.textContent = hintVisible ? word.hint : "Подсказка";
  elements.russianHint.classList.toggle("revealed", hintVisible);
  elements.russianHint.setAttribute("aria-expanded", String(hintVisible));
  elements.knownBtn.textContent = learned.has(word.en) ? "Уже знаю" : "Знаю";
  elements.learnedCount.textContent = learned.size;

  elements.tensePanel.hidden = !tenses;
  if (tenses) {
    elements.presentExample.textContent = tenses.present[0];
    elements.presentRu.textContent = tenses.present[1];
    elements.pastExample.textContent = tenses.past[0];
    elements.pastRu.textContent = tenses.past[1];
    elements.futureExample.textContent = tenses.future[0];
    elements.futureRu.textContent = tenses.future[1];
  }
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    elements.feedback.textContent = "В этом браузере нет озвучивания.";
    return;
  }

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.78;
  speechSynthesis.speak(utterance);
}

function move(delta) {
  const words = currentWords();
  wordIndex = (wordIndex + delta + words.length) % words.length;
  hintVisible = false;
  renderWord();
}

function allWords() {
  return Object.values(lessons).flatMap((lesson) => lesson.words);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildQuiz() {
  const pool = allWords();
  quizWord = shuffle(pool)[0];
  const wrongAnswers = shuffle(pool.filter((word) => word.en !== quizWord.en)).slice(0, 2);
  const answers = shuffle([quizWord, ...wrongAnswers]);

  elements.quizPrompt.textContent = `Как будет «${quizWord.ru}» по-английски?`;
  elements.feedback.textContent = "";
  elements.answers.replaceChildren();

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer.en;
    button.addEventListener("click", () => checkAnswer(button, answer));
    elements.answers.append(button);
  });
}

function checkAnswer(button, answer) {
  const buttons = elements.answers.querySelectorAll(".answer");
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === quizWord.en) item.classList.add("correct");
  });

  if (answer.en === quizWord.en) {
    button.classList.add("correct");
    elements.feedback.textContent = "Верно! Послушай слово еще раз.";
    speak(answer.en);
  } else {
    button.classList.add("wrong");
    elements.feedback.textContent = `Почти. Правильно: ${quizWord.en}.`;
    speak(quizWord.en);
  }
}

elements.topics.forEach((button) => {
  button.addEventListener("click", () => {
    topicKey = button.dataset.topic;
    wordIndex = 0;
    hintVisible = false;
    elements.topics.forEach((topic) => topic.classList.toggle("active", topic === button));
    renderWord();
  });
});

elements.speakBtn.addEventListener("click", () => speak(currentWord().en));
elements.prevBtn.addEventListener("click", () => move(-1));
elements.nextBtn.addEventListener("click", () => move(1));
elements.newQuizBtn.addEventListener("click", buildQuiz);
elements.russianHint.addEventListener("click", () => {
  hintVisible = !hintVisible;
  renderWord();
});

[
  elements.presentExample,
  elements.pastExample,
  elements.futureExample
].forEach((button) => {
  button.addEventListener("click", () => speak(button.textContent));
});

elements.knownBtn.addEventListener("click", () => {
  learned.add(currentWord().en);
  localStorage.setItem("learnedWords", JSON.stringify([...learned]));
  renderWord();
  move(1);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === " ") {
    event.preventDefault();
    speak(currentWord().en);
  }
});

renderWord();
buildQuiz();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      elements.feedback.textContent = "Офлайн-режим не включился в этом браузере.";
    });
  });
}
