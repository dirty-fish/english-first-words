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
      { en: "run", ru: "бегать", ipa: "/rʌn/", hint: "ран", picture: "RUN" },
      { en: "jump", ru: "прыгать", ipa: "/dʒʌmp/", hint: "джамп", picture: "JUMP" },
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
  },
  objects: {
    title: "Предметы",
    words: [
      { en: "cup", ru: "чашка", ipa: "/kʌp/", hint: "кап", picture: "CUP" },
      { en: "spoon", ru: "ложка", ipa: "/spuːn/", hint: "спун", picture: "SPOON" },
      { en: "ball", ru: "мяч", ipa: "/bɔːl/", hint: "бол", picture: "BALL" },
      { en: "box", ru: "коробка", ipa: "/bɑːks/", hint: "бокс", picture: "BOX" },
      { en: "window", ru: "окно", ipa: "/ˈwɪndoʊ/", hint: "уин-доу", picture: "WINDOW" }
    ]
  },
  toys: {
    title: "Игрушки",
    words: [
      { en: "doll", ru: "кукла", ipa: "/dɑːl/", hint: "дал", picture: "DOLL" },
      { en: "car", ru: "машинка", ipa: "/kɑːr/", hint: "кар", picture: "CAR" },
      { en: "robot", ru: "робот", ipa: "/ˈroʊbɑːt/", hint: "роу-бот", picture: "ROBOT" },
      { en: "blocks", ru: "кубики", ipa: "/blɑːks/", hint: "блокс", picture: "BLOCKS" },
      { en: "kite", ru: "воздушный змей", ipa: "/kaɪt/", hint: "кайт", picture: "KITE" }
    ]
  },
  school: {
    title: "Школа",
    words: [
      { en: "pen", ru: "ручка", ipa: "/pen/", hint: "пэн", picture: "PEN" },
      { en: "pencil", ru: "карандаш", ipa: "/ˈpensəl/", hint: "пэн-сэл", picture: "PENCIL" },
      { en: "bag", ru: "сумка", ipa: "/bæɡ/", hint: "бэг", picture: "BAG" },
      { en: "ruler", ru: "линейка", ipa: "/ˈruːlər/", hint: "ру-лэр", picture: "RULER" },
      { en: "notebook", ru: "тетрадь", ipa: "/ˈnoʊtbʊk/", hint: "ноут-бук", picture: "NOTEBOOK" }
    ]
  },
  adjectives: {
    title: "Признаки",
    words: [
      { en: "big", ru: "большой", ipa: "/bɪɡ/", hint: "биг", picture: "BIG" },
      { en: "small", ru: "маленький", ipa: "/smɔːl/", hint: "смол", picture: "SMALL" },
      { en: "good", ru: "хороший", ipa: "/ɡʊd/", hint: "гуд", picture: "GOOD" },
      { en: "bad", ru: "плохой", ipa: "/bæd/", hint: "бэд", picture: "BAD" },
      { en: "hot", ru: "горячий", ipa: "/hɑːt/", hint: "хат", picture: "HOT" },
      { en: "cold", ru: "холодный", ipa: "/koʊld/", hint: "коулд", picture: "COLD" },
      { en: "fast", ru: "быстрый", ipa: "/fæst/", hint: "фэст", picture: "FAST" },
      { en: "slow", ru: "медленный", ipa: "/sloʊ/", hint: "слоу", picture: "SLOW" }
    ]
  },
  prepositions: {
    title: "Предлоги",
    words: [
      { en: "in", ru: "внутри", ipa: "/ɪn/", hint: "ин", picture: "IN" },
      { en: "on", ru: "на", ipa: "/ɑːn/", hint: "ан", picture: "ON" },
      { en: "under", ru: "под", ipa: "/ˈʌndər/", hint: "ан-дэр", picture: "UNDER" },
      { en: "near", ru: "рядом", ipa: "/nɪr/", hint: "нир", picture: "NEAR" },
      { en: "behind", ru: "за", ipa: "/bɪˈhaɪnd/", hint: "би-хайнд", picture: "BEHIND" }
    ]
  }
};

const chunks = {
  cat: ["a cat", "кот", "The cat sleeps.", "Кот спит."],
  dog: ["a dog", "собака", "The dog runs.", "Собака бежит."],
  bird: ["a bird", "птица", "I see a bird.", "Я вижу птицу."],
  fish: ["a fish", "рыба", "The fish swims.", "Рыба плавает."],
  mom: ["my mom", "моя мама", "This is my mom.", "Это моя мама."],
  dad: ["my dad", "мой папа", "Dad drinks water.", "Папа пьет воду."],
  milk: ["some milk", "немного молока", "I drink milk.", "Я пью молоко."],
  apple: ["an apple", "яблоко", "I eat an apple.", "Я ем яблоко."],
  water: ["some water", "немного воды", "I drink water.", "Я пью воду."],
  red: ["red ball", "красный мяч", "It is red.", "Он красный."],
  blue: ["blue cup", "синяя чашка", "It is blue.", "Она синяя."],
  hand: ["my hand", "моя рука", "I wash my hand.", "Я мою руку."],
  sleep: ["I sleep", "я сплю", "The baby sleeps.", "Малыш спит."],
  eat: ["I eat", "я ем", "I eat an apple.", "Я ем яблоко."],
  drink: ["I drink", "я пью", "I drink water.", "Я пью воду."],
  run: ["I run", "я бегу", "The dog runs.", "Собака бежит."],
  jump: ["I jump", "я прыгаю", "I can jump.", "Я умею прыгать."],
  cup: ["a cup", "чашка", "The cup is on the table.", "Чашка на столе."],
  spoon: ["a spoon", "ложка", "I take a spoon.", "Я беру ложку."],
  ball: ["a ball", "мяч", "I see a ball.", "Я вижу мяч."],
  doll: ["a doll", "кукла", "The doll is small.", "Кукла маленькая."],
  car: ["a car", "машинка", "The car is fast.", "Машинка быстрая."],
  pen: ["a pen", "ручка", "I have a pen.", "У меня есть ручка."],
  pencil: ["a pencil", "карандаш", "I see a pencil.", "Я вижу карандаш."],
  big: ["big dog", "большая собака", "The dog is big.", "Собака большая."],
  small: ["small cat", "маленький кот", "The cat is small.", "Кот маленький."],
  hot: ["hot tea", "горячий чай", "It is hot.", "Он горячий."],
  cold: ["cold water", "холодная вода", "The water is cold.", "Вода холодная."],
  in: ["in the box", "в коробке", "The ball is in the box.", "Мяч в коробке."],
  on: ["on the table", "на столе", "The cup is on the table.", "Чашка на столе."],
  under: ["under the bed", "под кроватью", "The ball is under the bed.", "Мяч под кроватью."],
  near: ["near the door", "рядом с дверью", "Mom is near the door.", "Мама рядом с дверью."],
  behind: ["behind the chair", "за стулом", "The cat is behind the chair.", "Кот за стулом."]
};

const verbTenses = {
  sleep: { present: ["I sleep", "я сплю"], past: ["I slept", "я спал"], future: ["I will sleep", "я буду спать"] },
  eat: { present: ["I eat", "я ем"], past: ["I ate", "я ел"], future: ["I will eat", "я буду есть"] },
  drink: { present: ["I drink", "я пью"], past: ["I drank", "я пил"], future: ["I will drink", "я буду пить"] },
  run: { present: ["I run", "я бегу"], past: ["I ran", "я бежал"], future: ["I will run", "я побегу"] },
  jump: { present: ["I jump", "я прыгаю"], past: ["I jumped", "я прыгал"], future: ["I will jump", "я буду прыгать"] },
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
let listeningWord = lessons.animals.words[0];
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
  wordChunk: document.querySelector("#wordChunk"),
  phraseChunk: document.querySelector("#phraseChunk"),
  sentenceChunk: document.querySelector("#sentenceChunk"),
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
  replayListeningBtn: document.querySelector("#replayListeningBtn"),
  nextListeningBtn: document.querySelector("#nextListeningBtn"),
  quizPrompt: document.querySelector("#quizPrompt"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  listeningPrompt: document.querySelector("#listeningPrompt"),
  listeningAnswers: document.querySelector("#listeningAnswers"),
  listeningFeedback: document.querySelector("#listeningFeedback"),
  topics: document.querySelectorAll(".topic")
};

function currentWords() {
  return lessons[topicKey].words;
}

function currentWord() {
  return currentWords()[wordIndex];
}

function articleFor(word) {
  return /^[aeiou]/.test(word.en) ? "an" : "a";
}

function chunkFor(word) {
  const custom = chunks[word.en];
  if (custom) {
    return {
      word: [word.en, word.ru],
      phrase: [custom[0], custom[1]],
      sentence: [custom[2], custom[3]]
    };
  }

  const phrase = `${articleFor(word)} ${word.en}`;
  return {
    word: [word.en, word.ru],
    phrase: [phrase, word.ru],
    sentence: [`This is ${phrase}.`, `Это ${word.ru}.`]
  };
}

function setChunk(button, label, english, russian) {
  button.querySelector("span").textContent = label;
  button.querySelector("strong").textContent = english;
  button.setAttribute("aria-label", `${label}: ${english}. ${russian}`);
}

function renderWord() {
  const word = currentWord();
  const tenses = verbTenses[word.en];
  const chunk = chunkFor(word);
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
  setChunk(elements.wordChunk, "Слово", chunk.word[0], chunk.word[1]);
  setChunk(elements.phraseChunk, "Фраза", chunk.phrase[0], chunk.phrase[1]);
  setChunk(elements.sentenceChunk, "Сцена", chunk.sentence[0], chunk.sentence[1]);

  elements.tensePanel.hidden = !tenses;
  if (tenses) {
    elements.presentExample.textContent = tenses.present[0];
    elements.presentRu.textContent = tenses.present[1];
    elements.pastExample.textContent = tenses.past[0];
    elements.pastRu.textContent = tenses.past[1];
    elements.futureExample.textContent = tenses.future[0];
    elements.futureRu.textContent = tenses.future[1];
  } else {
    elements.presentExample.textContent = "";
    elements.presentRu.textContent = "";
    elements.pastExample.textContent = "";
    elements.pastRu.textContent = "";
    elements.futureExample.textContent = "";
    elements.futureRu.textContent = "";
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

function buildListeningQuiz() {
  const pool = allWords();
  listeningWord = shuffle(pool)[0];
  const wrongAnswers = shuffle(pool.filter((word) => word.en !== listeningWord.en)).slice(0, 2);
  const answers = shuffle([listeningWord, ...wrongAnswers]);

  elements.listeningPrompt.textContent = "Послушай и выбери правильную карточку.";
  elements.listeningFeedback.textContent = "";
  elements.listeningAnswers.replaceChildren();

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer picture-answer";
    button.type = "button";
    button.innerHTML = `<strong>${answer.picture}</strong><span>${answer.ru}</span>`;
    button.addEventListener("click", () => checkListeningAnswer(button, answer));
    elements.listeningAnswers.append(button);
  });
}

function playListeningPrompt() {
  speak(chunkFor(listeningWord).phrase[0]);
}

function checkListeningAnswer(button, answer) {
  const buttons = elements.listeningAnswers.querySelectorAll(".answer");
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.querySelector("strong").textContent === listeningWord.picture) item.classList.add("correct");
  });

  if (answer.en === listeningWord.en) {
    button.classList.add("correct");
    elements.listeningFeedback.textContent = "Да. Можно повторить звук или нажать «Далее».";
  } else {
    button.classList.add("wrong");
    elements.listeningFeedback.textContent = `Почти. Это было: ${chunkFor(listeningWord).phrase[0]}.`;
  }
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
elements.replayListeningBtn.addEventListener("click", playListeningPrompt);
elements.nextListeningBtn.addEventListener("click", buildListeningQuiz);
elements.russianHint.addEventListener("click", () => {
  hintVisible = !hintVisible;
  renderWord();
});

[
  elements.wordChunk,
  elements.phraseChunk,
  elements.sentenceChunk
].forEach((button) => {
  button.addEventListener("click", () => speak(button.querySelector("strong").textContent));
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
buildListeningQuiz();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      elements.feedback.textContent = "Офлайн-режим не включился в этом браузере.";
    });
  });
}
