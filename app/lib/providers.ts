// 実在業者の公式情報（2026-05-28 時点で公式サイトを確認済み）
// 価格目安は公式記載がない場合「公式問い合わせ」と明記し、推測を含めないこと。

export type Provider = {
  slug: string;
  name: string;
  url: string;
  operator: string;
  tagline: string;
  features: string[];
  areas: string;
  fee: string;
  warranty: string;
  phone: string;
  highlight: string;
  recommendedFor: string;
  sourceConfirmed: string;
};

export const PROVIDERS: Provider[] = [
  {
    slug: "house-protect",
    name: "ハウスプロテクト",
    url: "https://house-protect.net/",
    operator: "株式会社GROWTH",
    tagline: "Google口コミ4.7点・リフォーム会社母体の総合ネズミ駆除",
    features: [
      "Google口コミ評価4.7点・5,000件以上（公式記載）",
      "リフォーム会社母体で侵入口封鎖の施工品質が高い",
      "捕獲・封鎖・除菌消臭・忌避剤設置をワンストップ",
    ],
    areas: "関東・関西・東海・中四国・九州（一部都道府県）／公式で要確認",
    fee: "現地調査・見積もり無料／追加料金原則なしを明記",
    warranty: "業界最長クラスの保証期間（築年数・施工内容で変動）",
    phone: "0120-987-282（24時間受付）",
    highlight: "リフォーム会社母体で侵入口封鎖の建築技術が高い",
    recommendedFor: "戸建てで長期保証と建築的封鎖を重視したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "gaiju-buzz",
    name: "害獣BUZZ",
    url: "https://gaiju-buzz.com/",
    operator: "株式会社リブシー",
    tagline: "最長10年保証・24時間受付のネズミ駆除専門対応",
    features: [
      "最長10年保証（公式記載／施工内容・築年数で変動）",
      "協会認定の専用薬剤を使用",
      "捕獲・清掃・消毒・封鎖をワンストップ",
    ],
    areas: "関東・関西・東海・中四国・九州の広域（公式記載）",
    fee: "現地調査・見積もり無料／予算に応じたプラン提案",
    warranty: "最長10年（施工内容により変動）",
    phone: "0120-987-601（24時間年中無休）",
    highlight: "広域対応かつ業界最長クラスの保証",
    recommendedFor: "保証期間の長さを最優先したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "gaiju-110",
    name: "害獣駆除110番",
    url: "https://www.sharing-tech.co.jp/gaiju/",
    operator: "シェアリングテクノロジー株式会社",
    tagline: "全国47都道府県・24時間365日対応のマッチング型",
    features: [
      "全国47都道府県の加盟店ネットワーク（公式記載）",
      "24時間365日・年中無休受付",
      "ネズミ・ハクビシン・コウモリ等の害獣全般",
    ],
    areas: "全国47都道府県（地域により対応加盟店が異なる）",
    fee: "見積もり無料／加盟店により価格は異なる",
    warranty: "「保証あり/なし」で加盟店を絞り込み可（加盟店により異なる）",
    phone: "0120-949-085 ／ 0120-949-405",
    highlight: "地方も含めて電話一本で対応可能",
    recommendedFor: "全国どこでもすぐ相談したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "nezumi-110",
    name: "ねずみ110番",
    url: "https://www.sharing-tech.co.jp/nezumi/",
    operator: "シェアリングテクノロジー株式会社（東証上場）",
    tagline: "ネズミ駆除に特化したマッチング型・全国対応",
    features: [
      "ネズミ駆除に特化した加盟店ネットワーク",
      "全国47都道府県・24時間受付",
      "捕獲器設置・侵入口封鎖・清掃消毒に対応",
    ],
    areas: "全国47都道府県",
    fee: "公式問い合わせ／加盟店により価格は異なる",
    warranty: "加盟店により保証内容が異なる",
    phone: "0120-588-220（24時間365日）",
    highlight: "ネズミ専門の問い合わせ窓口を持つマッチング型",
    recommendedFor: "ネズミ駆除を専門的に相談したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "curama",
    name: "くらしのマーケット",
    url: "https://curama.jp/",
    operator: "株式会社みんなのマーケット",
    tagline: "口コミ評価で個人事業者を比較できるマッチングプラットフォーム",
    features: [
      "全国のネズミ駆除事業者を口コミ・写真で比較可能",
      "ハウスクリーニング等と並ぶ大手マッチング",
      "料金が事前掲載で明朗（事業者ごとに異なる）",
    ],
    areas: "全国（出店事業者の対応地域に依存）",
    fee: "事業者により異なる（事前掲載／要事前見積もり）",
    warranty: "事業者により異なる（プラン詳細で要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "口コミ件数の多さと料金の明朗さ",
    recommendedFor: "口コミ・写真をじっくり比較したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "meetsmore",
    name: "ミツモア",
    url: "https://meetsmore.com/services/rat-control",
    operator: "ミツモア株式会社",
    tagline: "最大5社の見積もりを一括取得できる相見積もり型",
    features: [
      "1分の質問入力で最大5社から見積もり取得（公式記載）",
      "全国47都道府県の事業者が登録",
      "ネズミ駆除カテゴリを公式に提供",
    ],
    areas: "全国47都道府県",
    fee: "事業者ごとに異なる（公式で相場帯を提示）",
    warranty: "事業者ごとに異なる（個別プランで要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "一括見積もりで相場感を素早く把握できる",
    recommendedFor: "複数社の料金を効率よく比較したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
];

// TOPに掲載するランキング上位3社（保証・専門性・実績で選定）
export const TOP_PROVIDERS: string[] = ["house-protect", "gaiju-buzz", "nezumi-110"];

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

export function getTopProviders(): Provider[] {
  return TOP_PROVIDERS.map((slug) => getProvider(slug)).filter(
    (p): p is Provider => p !== undefined,
  );
}
