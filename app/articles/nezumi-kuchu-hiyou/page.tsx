import type { Metadata } from "next";
import { ArticleLayout } from "../../components/ArticleLayout";
import { ComparisonTable } from "../../components/ComparisonTable";
import { RankingTable } from "../../components/RankingTable";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { PROVIDERS, getTopProviders } from "../../lib/providers";
import { getArticle } from "../../lib/articles";

const meta = getArticle("nezumi-kuchu-hiyou")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

const faqs: FaqItem[] = [
  {
    question: "一軒家のネズミ駆除費用はいくらですか？",
    answer:
      "一軒家のネズミ駆除は被害規模で7万〜20万円が中心帯です。軽度（捕獲・忌避剤設置中心）で7〜10万円、中度（侵入口封鎖・清掃込み）で10〜15万円、重度（建築的封鎖・大規模清掃）で15〜20万円が目安です。建物の築年数、床下構造、侵入口の数で変動します。",
  },
  {
    question: "マンションの戸単独で頼めますか？",
    answer:
      "戸単独の施工も可能で、2万〜10万円程度が相場です。ただし隣戸や共用部からの再侵入が起こりやすいため、根本解決には管理組合での共用部一括施工が効果的です。戸単独施工は応急対応として位置付け、長期的には管理組合への相談を検討してください。",
  },
  {
    question: "飲食店の月額契約の相場は？",
    answer:
      "飲食店のHACCP対応防除契約は月額1〜5万円程度が一般的で、年間契約で12〜60万円が相場です。店舗規模・業態（フードコート/単独店/セントラルキッチン）・モニタリングシートの提出頻度で変動します。複数社の見積もりで比較してください。",
  },
  {
    question: "見積もり時に確認すべきことは？",
    answer:
      "（1）施工範囲（捕獲・封鎖・清掃・消毒の範囲）、（2）侵入口封鎖の対象箇所、（3）追加費用の発生条件、（4）保証期間と再発時の対応、（5）使用薬剤・捕獲器の種類、（6）アフター点検の有無、の6点を必ず書面で確認してください。",
  },
  {
    question: "ネズミ駆除に補助金は出ますか？",
    answer:
      "ネズミ駆除単独の補助金は限定的ですが、衛生害虫対策や老朽住宅対策の一環として補助制度を運用する自治体があります。お住まいの市区町村の生活衛生課・環境課でご確認ください。中央区・港区など独自制度を持つ自治体もあります。",
  },
];

export default function Page() {
  const top = getTopProviders();
  return (
    <ArticleLayout meta={meta}>
      <FaqJsonLd items={faqs} />
      <p>
        ネズミ駆除の費用は<strong>建物種別・被害規模・継続対応の有無</strong>で大きく変わります。本記事では一軒家・マンション・飲食店別に相場帯を整理し、後悔しない見積もりの取り方を解説します。
      </p>

      <div className="notice-box">
        <p className="font-bold text-primary-dark mb-1">この記事の確認方針</p>
        <p className="text-sm leading-relaxed mb-0">
          掲載業者はすべて2026年5月時点で公式サイトを確認しています。料金は業界の公開情報・業者公式の記載をもとにレンジで提示し、推測値は使用していません。
        </p>
      </div>

      <h2>建物種別の費用相場</h2>
      <table>
        <thead>
          <tr><th>建物種別</th><th>軽度</th><th>中度</th><th>重度</th><th>契約形態</th></tr>
        </thead>
        <tbody>
          <tr><td>一軒家</td><td>7〜10万円</td><td>10〜15万円</td><td>15〜20万円</td><td>スポット施工</td></tr>
          <tr><td>マンション（戸単独）</td><td>2〜5万円</td><td>5〜8万円</td><td>8〜10万円</td><td>スポット施工</td></tr>
          <tr><td>飲食店</td><td>月1〜2万円</td><td>月3〜4万円</td><td>月5万円〜</td><td>月次契約</td></tr>
          <tr><td>オフィスビル</td><td>月2〜5万円</td><td>月5〜10万円</td><td>月10万円〜</td><td>月次契約</td></tr>
        </tbody>
      </table>
      <p>
        ※上記は業界一般の相場帯です。実際の費用は被害状況・床下構造・侵入口の数で大きく変わるため、必ず現地調査後の見積もりで確認してください。
      </p>

      <h2>費用の内訳：見積書で確認すべき項目</h2>
      <h3>1. 捕獲・駆除費</h3>
      <p>
        粘着シート・捕獲器・殺鼠剤の設置、定期的な見回り・回収の費用です。設置箇所数・回収回数で変動します。
      </p>
      <h3>2. 侵入口封鎖費</h3>
      <p>
        ネズミの侵入経路（配管周り・換気口・基礎の隙間など）を金網・パンチングメタル・モルタル・防鼠ブラシで封鎖する工事費用です。建築的対応のため、リフォーム会社母体の業者が施工品質が高い傾向があります。
      </p>
      <h3>3. 清掃・消毒費</h3>
      <p>
        糞・尿・営巣材の清掃と、サルモネラ菌等への塩素系消毒の費用です。被害範囲の広さで変動します。
      </p>
      <h3>4. アフター点検・保証費</h3>
      <p>
        施工後の再発確認のためのアフター点検と、保証期間中の再発時無償対応の費用です。保証期間と無償対応範囲を必ず確認してください。
      </p>

      <h2>主要業者の比較</h2>
      <div className="not-prose my-6">
        <RankingTable providers={top} />
      </div>

      <h2>全6社の比較表</h2>
      <div className="not-prose my-6">
        <ComparisonTable providers={PROVIDERS} />
      </div>

      <h2>追加費用が発生しやすいケース</h2>
      <ul>
        <li><strong>大規模な営巣・繁殖被害</strong>：複数の巣がある場合、清掃範囲と捕獲期間が長期化します。</li>
        <li><strong>築古住宅で侵入口が多数ある場合</strong>：建築的封鎖の範囲が広がり工事費が上がります。</li>
        <li><strong>食品関連施設での衛生強化対応</strong>：HACCP要件に対応する追加モニタリング費用が発生します。</li>
        <li><strong>マンション共用部からの再侵入</strong>：戸単独施工では根本解決できず、共用部対応が追加で必要になります。</li>
        <li><strong>感染症リスク対応の追加消毒</strong>：糞清掃時のレプトスピラ症等への対策で追加薬剤が必要です。</li>
      </ul>

      <h2>後悔しない見積もりの取り方</h2>
      <ol>
        <li><strong>複数社で見積もりを取得する</strong>。最低でも2〜3社で相見積もりを取ります。</li>
        <li><strong>現地調査後の書面見積もりを基本とする</strong>。電話のみの概算金額は信頼性が低いため、必ず現地調査後の見積もりを依頼してください。</li>
        <li><strong>侵入口封鎖の対象箇所を明記してもらう</strong>。図面と写真で施工箇所を共有できる業者を選びます。</li>
        <li><strong>保証条件を書面で確認する</strong>。保証期間・再発時の対応範囲・対象物を必ず明記してもらいます。</li>
        <li><strong>飲食店は月次契約の解約条件を確認</strong>。年間契約の場合は中途解約の費用負担を約款で確認してください。</li>
      </ol>

      <h2>まとめ：用途と被害規模で適正価格を見極める</h2>
      <p>
        ネズミ駆除費用は建物種別と被害規模で大きく変わるため、<strong>一律の料金表で判断せず</strong>、現地調査後の書面見積もりで判断するのが鉄則です。一軒家ではスポット施工、マンションは管理組合経由の共用部一括、飲食店は月次契約と、適切な契約形態で対応することで長期コストを抑えられます。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
