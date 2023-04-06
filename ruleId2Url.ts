type ruleId2UrlT = {
  [key: string]: { url: string | undefined };
};

const ruleId2Url: ruleId2UrlT = {
  "ja-technical-writing/no-doubled-joshi": {
    url: "https://github.com/textlint-ja/textlint-rule-no-doubled-joshi",
  },
};

export const getUrl = (ruleId: string) => {
  return ruleId2Url[ruleId] || { url: undefined };
};
