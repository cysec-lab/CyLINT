type ruleId2UrlT = {
  [key: string]: string | undefined;
};

const ruleId2Url: ruleId2UrlT = {
  "ja-technical-writing/no-invalid-control-character":
    "https://github.com/textlint-rule/textlint-rule-no-invalid-control-character",
  "ja-technical-writing/no-unmatched-pair":
    "https://github.com/textlint-rule/textlint-rule-no-unmatched-pair",
  "ja-technical-writing/no-nfd":
    "https://github.com/textlint-ja/textlint-rule-no-nfd",
  "ja-technical-writing/no-doubled-joshi":
    "https://github.com/textlint-ja/textlint-rule-no-doubled-joshi",
  "ja-technical-writing/sentence-length":
    "https://github.com/textlint-rule/textlint-rule-sentence-length",
  "ja-technical-writing/no-doubled-conjunction":
    "https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction",
  "ja-technical-writing/no-doubled-conjunctive-particle-ga":
    "https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga",
  "ja-technical-writing/no-dropping-the-ra":
    "https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra",
  "ja-technical-writing/no-double-negative-ja":
    "https://github.com/textlint-ja/textlint-rule-no-double-negative-ja",
  "ja-technical-writing/max-kanji-continuous-len":
    "https://github.com/textlint-ja/textlint-rule-max-kanji-continuous-len",
  "ja-technical-writing/ja-unnatural-alphabet":
    "https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet",
  "ja-technical-writing/ja-no-redundant-expression":
    "https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression",
  "ja-technical-writing/ja-no-abusage":
    "https://github.com/textlint-ja/textlint-rule-ja-no-abusage",
  "ja-technical-writing/ja-no-successive-word":
    "https://github.com/textlint-ja/textlint-rule-ja-no-successive-word",
  "ja-technical-writing/ja-no-weak-phrase":
    "https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase",
  "ja-technical-writing/ja-no-mixed-period":
    "https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period",
  "ja-technical-writing/no-mix-dearu-desumasu":
    "https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu",

  "ja-engineering-paper/ja-hiragana-fukushi":
    "https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi",
  "ja-engineering-paper/ja-hiragana-keishikimeishi":
    "https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi",
  "ja-engineering-paper/ja-hiragana-hojodoushi":
    "https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi",
  "ja-engineering-paper/no-synonyms":
    "https://github.com/textlint-ja/textlint-rule-no-synonyms",
  "ja-engineering-paper/prh":
    "https://github.com/textlint-rule/textlint-rule-prh",
  "ja-engineering-paper/unify-kuten-and-touten":
    "https://github.com/kn1cht/textlint-rule-preset-ja-engineering-paper?tab=readme-ov-file#unify-kuten-and-touten",
  "ja-engineering-paper/use-si-units":
    "https://github.com/kn1cht/textlint-rule-use-si-units",
};

type ruleId2PluginT = {
  [key: string]: string | undefined;
};
const ruleId2Plugin: ruleId2PluginT = {
  "ja-technical-writing": "https://github.com/textlint-ja",
  "jtf-style": "https://github.com/textlint-ja/textlint-rule-preset-jtf-style",
  "ja-spacing":
    "https://github.com/textlint-ja/textlint-rule-preset-ja-spacing",
  "ja-engineering-paper":
    "https://github.com/kn1cht/textlint-rule-preset-ja-engineering-paper",
  japanese: "https://github.com/textlint-ja/textlint-rule-preset-japanese",
};

export const getUrl = (ruleId: string) => {
  const idUrl = ruleId2Url[ruleId];
  if (idUrl) {
    return idUrl;
  }

  const pluginId = ruleId.split("/")[0];
  const pluginUrl = ruleId2Plugin[pluginId];
  if (pluginUrl) {
    return pluginUrl;
  } else {
    return undefined;
  }
};
