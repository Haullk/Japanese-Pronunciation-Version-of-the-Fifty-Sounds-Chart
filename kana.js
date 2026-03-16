const baseRows = [
  {
    label: "あ行",
    hiragana: ["あ", "い", "う", "え", "お"],
    katakana: ["ア", "イ", "ウ", "エ", "オ"],
    romaji: ["a", "i", "u", "e", "o"],
  },
  {
    label: "か行",
    hiragana: ["か", "き", "く", "け", "こ"],
    katakana: ["カ", "キ", "ク", "ケ", "コ"],
    romaji: ["ka", "ki", "ku", "ke", "ko"],
  },
  {
    label: "さ行",
    hiragana: ["さ", "し", "す", "せ", "そ"],
    katakana: ["サ", "シ", "ス", "セ", "ソ"],
    romaji: ["sa", "shi", "su", "se", "so"],
  },
  {
    label: "た行",
    hiragana: ["た", "ち", "つ", "て", "と"],
    katakana: ["タ", "チ", "ツ", "テ", "ト"],
    romaji: ["ta", "chi", "tsu", "te", "to"],
  },
  {
    label: "な行",
    hiragana: ["な", "に", "ぬ", "ね", "の"],
    katakana: ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    romaji: ["na", "ni", "nu", "ne", "no"],
  },
  {
    label: "は行",
    hiragana: ["は", "ひ", "ふ", "へ", "ほ"],
    katakana: ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    romaji: ["ha", "hi", "fu", "he", "ho"],
  },
  {
    label: "ま行",
    hiragana: ["ま", "み", "む", "め", "も"],
    katakana: ["マ", "ミ", "ム", "メ", "モ"],
    romaji: ["ma", "mi", "mu", "me", "mo"],
  },
  {
    label: "や行",
    hiragana: ["や", "", "ゆ", "", "よ"],
    katakana: ["ヤ", "", "ユ", "", "ヨ"],
    romaji: ["ya", "", "yu", "", "yo"],
  },
  {
    label: "ら行",
    hiragana: ["ら", "り", "る", "れ", "ろ"],
    katakana: ["ラ", "リ", "ル", "レ", "ロ"],
    romaji: ["ra", "ri", "ru", "re", "ro"],
  },
  {
    label: "わ行",
    hiragana: ["わ", "", "", "", "を"],
    katakana: ["ワ", "", "", "", "ヲ"],
    romaji: ["wa", "", "", "", "wo"],
  },
  {
    label: "ん",
    hiragana: ["", "", "", "", "ん"],
    katakana: ["", "", "", "", "ン"],
    romaji: ["", "", "", "", "n"],
  },
];

const voicedRows = [
  {
    label: "浊音（が行）",
    hiragana: ["が", "ぎ", "ぐ", "げ", "ご"],
    katakana: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
    romaji: ["ga", "gi", "gu", "ge", "go"],
  },
  {
    label: "浊音（ざ行）",
    hiragana: ["ざ", "じ", "ず", "ぜ", "ぞ"],
    katakana: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
    romaji: ["za", "ji", "zu", "ze", "zo"],
  },
  {
    label: "浊音（だ行）",
    hiragana: ["だ", "ぢ", "づ", "で", "ど"],
    katakana: ["ダ", "ヂ", "ヅ", "デ", "ド"],
    romaji: ["da", "di", "du", "de", "do"],
  },
  {
    label: "浊音（ば行）",
    hiragana: ["ば", "び", "ぶ", "べ", "ぼ"],
    katakana: ["バ", "ビ", "ブ", "ベ", "ボ"],
    romaji: ["ba", "bi", "bu", "be", "bo"],
  },
  {
    label: "半浊音（ぱ行）",
    hiragana: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
    katakana: ["パ", "ピ", "プ", "ペ", "ポ"],
    romaji: ["pa", "pi", "pu", "pe", "po"],
  },
];

const yoonRows = [
  {
    label: "拗音（きゃ・しゃ）",
    hiragana: ["きゃ", "きゅ", "きょ", "しゃ", "しゅ"],
    katakana: ["キャ", "キュ", "キョ", "シャ", "シュ"],
    romaji: ["kya", "kyu", "kyo", "sha", "shu"],
  },
  {
    label: "拗音（しょ・ちゃ）",
    hiragana: ["しょ", "ちゃ", "ちゅ", "ちょ", "にゃ"],
    katakana: ["ショ", "チャ", "チュ", "チョ", "ニャ"],
    romaji: ["sho", "cha", "chu", "cho", "nya"],
  },
  {
    label: "拗音（にゅ・ひゃ）",
    hiragana: ["にゅ", "にょ", "ひゃ", "ひゅ", "ひょ"],
    katakana: ["ニュ", "ニョ", "ヒャ", "ヒュ", "ヒョ"],
    romaji: ["nyu", "nyo", "hya", "hyu", "hyo"],
  },
  {
    label: "拗音（びゃ・ぴゅ）",
    hiragana: ["びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ"],
    katakana: ["ビャ", "ビュ", "ビョ", "ピャ", "ピュ"],
    romaji: ["bya", "byu", "byo", "pya", "pyu"],
  },
  {
    label: "拗音（ぎゃ・ぴょ）",
    hiragana: ["ぎゃ", "ぎゅ", "ぎょ", "ぴょ", "じゃ"],
    katakana: ["ギャ", "ギュ", "ギョ", "ピョ", "ジャ"],
    romaji: ["gya", "gyu", "gyo", "pyo", "ja"],
  },
];

const kanaSections = [
  {
    rows: baseRows,
  },
  {
    header: "浊音和半浊音",
    note: "浊音和半浊音，\n加上符号，发音就会改变。",
    rows: voicedRows,
  },
  {
    header: "拗音",
    note: "拗音，\n加上小写假名，组成新的音节。",
    rows: yoonRows,
  },
];

const grid = document.getElementById("kanaGrid");
const voiceStatus = document.getElementById("voiceStatus");
const synth = window.speechSynthesis;

let selectedVoice = null;

const vowelLabels = ["あ", "い", "う", "え", "お"];

function announce(text) {
  voiceStatus.textContent = text;
}

function createCard(hiragana, katakana, romaji, rowLabel, columnLabel) {
  const button = document.createElement("button");
  button.className = "kana-card";
  button.setAttribute("type", "button");
  const hasKana = Boolean(hiragana || katakana);
  if (!hasKana) {
    button.setAttribute("aria-disabled", "true");
    button.disabled = true;
    button.textContent = "—";
    return button;
  }
  button.setAttribute("aria-label", `${rowLabel} ${columnLabel} ${hiragana || ""} ${katakana || ""}`);

  const hiraSpan = document.createElement("span");
  hiraSpan.className = "kana-char";
  hiraSpan.textContent = hiragana ?? "";
  const kataSpan = document.createElement("span");
  kataSpan.className = "kana-char";
  kataSpan.textContent = katakana ?? "";
  const romanSpan = document.createElement("span");
  romanSpan.className = "kana-roman";
  romanSpan.textContent = romaji;

  button.append(hiraSpan, kataSpan, romanSpan);

  button.addEventListener("click", () => {
    animatePress(button);
    speak(hiragana ?? katakana, romaji);
  });

  return button;
}

function animatePress(button) {
  button.classList.add("is-pressing");
  if (button._pressTimeout) {
    window.clearTimeout(button._pressTimeout);
  }
  button._pressTimeout = window.setTimeout(() => {
    button.classList.remove("is-pressing");
  }, 220);
}

function speak(text, romaji) {
  if (!text || !synth) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.85;
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  utterance.onstart = () => announce(`正在播放：${text} (${romaji})`);
  utterance.onend = () => announce(`点击任意假名听发音`);
  synth.speak(utterance);
}

function populateGrid() {
  grid.innerHTML = "";
  kanaSections.forEach((section) => {
    if (section.header) {
      grid.append(createSectionHeader(section.header));
      grid.append(createSectionNote(section.note));
    }
    section.rows.forEach((row) => {
      row.hiragana.forEach((kana, index) => {
        const card = createCard(
          kana,
          row.katakana[index],
          row.romaji[index],
          row.label,
          vowelLabels[index]
        );
        grid.append(card);
      });
    });
  });
}

function createSectionHeader(text) {
  const el = document.createElement("div");
  el.className = "kana-section-header";
  el.textContent = text;
  return el;
}

function createSectionNote(text = "") {
  const el = document.createElement("div");
  el.className = "kana-section-note";
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    el.append(line);
    if (index < lines.length - 1) {
      el.append(document.createElement("br"));
    }
  });
  return el;
}

function findVoice() {
  if (!synth) {
    announce("当前浏览器不支持语音合成。");
    return;
  }
  const voices = synth.getVoices();
  if (voices.length) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("ja")) ?? voices[0];
    const voiceName = selectedVoice?.name ?? "默认";
    announce(`语音就绪：${voiceName}（${selectedVoice.lang}）`);
  } else {
    const handler = () => {
      const loaded = synth.getVoices();
      selectedVoice = loaded.find((voice) => voice.lang.startsWith("ja")) ?? loaded[0];
      const voiceName = selectedVoice?.name ?? "默认";
      announce(`语音就绪：${voiceName}（${selectedVoice?.lang ?? "ja-JP"}）`);
      synth.removeEventListener("voiceschanged", handler);
    };
    synth.addEventListener("voiceschanged", handler);
  }
}

populateGrid();
findVoice();
