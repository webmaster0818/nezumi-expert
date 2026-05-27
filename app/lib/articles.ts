export type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "費用" | "症状" | "識別" | "対策" | "法律" | "補助金" | "比較" | "健康" | "BtoB" | "集合住宅";
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "nezumi-kuchu-hiyou",
    shortTitle: "駆除費用",
    title: "ネズミ駆除費用の相場｜一軒家・マンション・飲食店別",
    description:
      "ネズミ駆除費用は一軒家で7万〜20万円、マンションで2万〜10万円、飲食店で月額契約型が主流です。被害規模・建物種別・継続対応の有無で大きく変動するため、業者選びと見積もりのポイントを整理しました。",
    category: "費用",
  },
  {
    slug: "nezumi-jibun-de",
    shortTitle: "自分で駆除",
    title: "ネズミを自分で駆除する方法｜罠・殺鼠剤・侵入口封鎖",
    description:
      "ネズミ駆除はDIYで対応可能な範囲もありますが、本格被害は専門業者の領域です。粘着シート・殺鼠剤・侵入口封鎖の正しい使い方と、業者依頼が必要なラインを実例で整理しました。",
    category: "対策",
  },
  {
    slug: "nezumi-shurui",
    shortTitle: "ネズミ種類見分け方",
    title: "ネズミの種類見分け方｜クマネズミ・ドブネズミ・ハツカネズミ",
    description:
      "日本の家屋に侵入するネズミ3種（クマネズミ・ドブネズミ・ハツカネズミ）は体長・色・行動範囲が異なり、対策方法も変わります。糞のサイズ・侵入経路・好む環境で判別する方法を整理しました。",
    category: "識別",
  },
  {
    slug: "nezumi-fun-nyou",
    shortTitle: "糞・尿の見分け方",
    title: "ネズミの糞・尿の見分け方｜形・大きさ・場所の特徴",
    description:
      "ネズミの糞は種類によって形と大きさが異なります。クマネズミ6〜10mm、ドブネズミ10〜20mm、ハツカネズミ4〜7mm。糞の分布と量で巣の位置を推定する方法、安全な掃除手順を整理しました。",
    category: "識別",
  },
  {
    slug: "nezumi-tenjouura-oto",
    shortTitle: "天井裏の音判定",
    title: "ネズミの天井裏音判定ガイド｜カサカサ・ドタドタの正体",
    description:
      "深夜に天井裏から聞こえる音は、ネズミ・ハクビシン・イタチで特徴が異なります。カサカサ・ドタドタ・キーキーといった音と時間帯、走行パターンで動物を判別する方法を整理しました。",
    category: "識別",
  },
  {
    slug: "nezumi-inshokuten-haccp",
    shortTitle: "飲食店向け(HACCP)",
    title: "飲食店のネズミ駆除｜HACCP対応と保健所監査のポイント",
    description:
      "飲食店のネズミ駆除はHACCP（食品衛生管理）の必須項目です。月次防除契約・モニタリングシート・保健所監査対応まで、店舗運営に必要な防除体制を整理しました。",
    category: "BtoB",
  },
  {
    slug: "nezumi-mansion-kanrikumiai",
    shortTitle: "マンション管理組合",
    title: "マンション管理組合のネズミ対策｜住民総会議案書テンプレ",
    description:
      "マンションのネズミ被害は共用部一括施工が効果的です。管理組合での予算化、住民総会議案書の作り方、費用按分の考え方、専門業者選定の手順を実務目線で整理しました。",
    category: "集合住宅",
  },
  {
    slug: "nezumi-kansenshou",
    shortTitle: "感染症リスク",
    title: "ネズミによる感染症リスク｜サルモネラ・レプトスピラ症ほか",
    description:
      "ネズミは糞・尿・体表ノミ・ダニを介して様々な感染症を媒介します。サルモネラ症・レプトスピラ症・ハンタウイルス感染症など、家族の健康を守るための清掃・消毒手順を厚労省情報をもとに整理しました。",
    category: "健康",
  },
  {
    slug: "nezumi-hokenjo-taiou",
    shortTitle: "保健所対応",
    title: "ネズミ駆除と保健所対応｜通報・相談・補助制度",
    description:
      "ネズミ被害が深刻な場合、保健所や市町村の生活衛生課への相談が有効です。集団被害時の調査依頼、悪臭・衛生面の指導、補助制度の確認、近隣住民との調整など、行政連携のポイントを整理しました。",
    category: "対策",
  },
  {
    slug: "nezumi-hojo-kin-zenkoku",
    shortTitle: "47都道府県補助金",
    title: "ネズミ駆除の補助金一覧｜47都道府県の助成制度",
    description:
      "ネズミ駆除への補助金は、衛生害虫対策や老朽住宅対策の一環として運用される場合があります。市町村単位の制度のため、自治体の生活衛生課・環境課への確認推奨ポイントを47都道府県別に整理しました。",
    category: "補助金",
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
