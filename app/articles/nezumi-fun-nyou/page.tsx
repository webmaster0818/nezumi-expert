import type { Metadata } from "next";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("nezumi-fun-nyou")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

const faqs: FaqItem[] = [
  {
    question: "糞のサイズでネズミの種類が分かりますか？",
    answer:
      "はい。クマネズミ6〜10mm（細長い・両端尖る）、ドブネズミ10〜20mm（太い・両端丸い）、ハツカネズミ4〜7mm（米粒状）と、サイズと形で種類判別が可能です。糞の分布と量からは巣の位置も推定できます。",
  },
  {
    question: "ネズミの糞は危険ですか？",
    answer:
      "糞にはサルモネラ菌・大腸菌などの病原体が含まれるリスクがあります。乾燥した糞を素手で扱うと粉塵を吸引してハンタウイルス感染症のリスクもあります。必ずマスク・手袋・防護メガネを着用し、塩素系消毒液で処理してください。",
  },
  {
    question: "糞を見つけたらどう掃除すればよいですか？",
    answer:
      "（1）窓を開けて換気、（2）使い捨て手袋・マスクを着用、（3）糞にウェットティッシュをかけ拭き取り、（4）二重ビニール袋に密閉して廃棄、（5）糞があった場所を塩素系消毒液で消毒、の手順を守ってください。掃除機の使用は粉塵拡散のため厳禁です。",
  },
  {
    question: "尿の臭いがする場合は？",
    answer:
      "ネズミの尿はアンモニア臭が強く、長期滞在の証拠です。尿のシミは紫外線ライトで青白く光るため、被害範囲の特定に活用できます。広範囲に尿臭がする場合は専門業者の清掃・消毒が必要です。",
  },
  {
    question: "糞の量から被害規模が分かりますか？",
    answer:
      "1頭のネズミは1日あたり50〜100個の糞を排出します。糞が大量・広範囲に分布している場合は、複数頭が定着している可能性が高く、被害規模も大きいと推定されます。同じ場所に糞が集中している場合は、巣の近くである可能性があります。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <FaqJsonLd items={faqs} />
      <p>
        ネズミの糞・尿は<strong>侵入の最も確実な証拠</strong>であり、種類判別・巣の位置推定・被害規模の把握に役立つ重要な情報源です。本記事では3種別の糞の特徴と、安全な掃除手順を整理します。
      </p>

      <div className="warning-box">
        <p className="font-bold text-danger mb-1">糞清掃時の安全対策</p>
        <p className="text-sm leading-relaxed mb-0">
          ネズミの糞にはサルモネラ菌・大腸菌などの病原体が含まれるリスクがあります。乾燥糞の粉塵を吸引するハンタウイルス感染症のリスクもあるため、必ず防護具を着用し、掃除機での吸引は避けてください。
        </p>
      </div>

      <h2>3種別の糞の特徴</h2>
      <h3>クマネズミの糞</h3>
      <ul>
        <li><strong>サイズ</strong>：6〜10mm</li>
        <li><strong>形状</strong>：細長く、両端が尖る</li>
        <li><strong>色</strong>：茶褐色〜黒褐色</li>
        <li><strong>分布</strong>：天井裏・高所・配線周りに散在</li>
        <li><strong>1日の排出量</strong>：50〜80個</li>
      </ul>

      <h3>ドブネズミの糞</h3>
      <ul>
        <li><strong>サイズ</strong>：10〜20mm（最大級）</li>
        <li><strong>形状</strong>：太く、両端が丸い</li>
        <li><strong>色</strong>：黒色〜茶褐色</li>
        <li><strong>分布</strong>：床下・地下・水回り周辺</li>
        <li><strong>1日の排出量</strong>：50個前後</li>
      </ul>

      <h3>ハツカネズミの糞</h3>
      <ul>
        <li><strong>サイズ</strong>：4〜7mm（最小）</li>
        <li><strong>形状</strong>：米粒状、両端が尖る</li>
        <li><strong>色</strong>：黒色</li>
        <li><strong>分布</strong>：物陰・引き出し・倉庫内に散在</li>
        <li><strong>1日の排出量</strong>：50〜80個</li>
      </ul>

      <h2>糞のサイズ比較表</h2>
      <table>
        <thead>
          <tr><th>種類</th><th>サイズ</th><th>形状</th><th>主な発見場所</th></tr>
        </thead>
        <tbody>
          <tr><td>クマネズミ</td><td>6〜10mm</td><td>細長い・両端尖る</td><td>天井裏・高所</td></tr>
          <tr><td>ドブネズミ</td><td>10〜20mm</td><td>太い・両端丸い</td><td>床下・水回り</td></tr>
          <tr><td>ハツカネズミ</td><td>4〜7mm</td><td>米粒状</td><td>物陰・倉庫</td></tr>
        </tbody>
      </table>

      <h2>糞から推定できる情報</h2>
      <h3>1. 種類の特定</h3>
      <p>
        サイズ・形状・分布場所から、3種のうちどのネズミかを推定できます。複数種が混在することは少ないため、糞の特徴から優先対策の種類を絞り込めます。
      </p>
      <h3>2. 巣の位置</h3>
      <p>
        糞が特に集中している場所の近くに巣がある可能性が高いです。天井裏で糞が集中している箇所、床下の隅などを重点的に調査します。
      </p>
      <h3>3. 個体数の推定</h3>
      <p>
        1頭あたり1日50〜100個の糞を排出するため、数日間で発見される糞の総量から個体数を推定できます。100個程度なら1〜2頭、500個以上なら複数頭の定着が考えられます。
      </p>
      <h3>4. 活動の鮮度</h3>
      <p>
        新鮮な糞は黒色で湿っており、古い糞は茶褐色で乾燥しています。新鮮糞の存在は活動中のサイン、古い糞のみなら過去の被害の可能性があります。
      </p>

      <h2>尿の特徴と確認方法</h2>
      <h3>尿の特徴</h3>
      <ul>
        <li><strong>臭い</strong>：強いアンモニア臭</li>
        <li><strong>色</strong>：黄色〜茶褐色のシミ</li>
        <li><strong>形状</strong>：糞と一緒に排出されることが多い</li>
        <li><strong>紫外線反応</strong>：UVライトで青白く光る</li>
      </ul>
      <h3>尿の検出方法</h3>
      <p>
        紫外線ライト（ブラックライト）で照らすと、尿のシミが青白く光ります。これは被害範囲の特定や、清掃後の確認に役立つ手法です。専門業者も紫外線ライトを使った点検を行うことがあります。
      </p>

      <h2>安全な糞清掃の手順</h2>
      <ol>
        <li><strong>準備</strong>：使い捨て手袋・マスク（N95推奨）・防護メガネ・長袖長ズボンを着用</li>
        <li><strong>換気</strong>：窓を開けて換気を確保（粉塵拡散防止）</li>
        <li><strong>湿らせる</strong>：糞にウェットティッシュや薄めた消毒液をかけて湿らせる（粉塵防止）</li>
        <li><strong>拭き取り</strong>：使い捨てクロスで糞を拭き取り、二重ビニール袋に密閉</li>
        <li><strong>消毒</strong>：糞があった場所と周辺を塩素系消毒液（次亜塩素酸ナトリウム500ppm程度）で消毒</li>
        <li><strong>廃棄</strong>：二重ビニール袋を自治体の指示に従って一般ごみとして廃棄</li>
        <li><strong>手洗い</strong>：作業後は石鹸で手をよく洗う</li>
      </ol>

      <div className="notice-box">
        <p className="font-bold text-primary-dark mb-1">掃除機の使用は厳禁</p>
        <p className="text-sm leading-relaxed mb-0">
          掃除機で糞を吸うと、病原体が排気で空気中に拡散し、ハンタウイルス感染症などの吸入感染リスクが高まります。必ず湿らせて拭き取る方式で清掃してください。
        </p>
      </div>

      <h2>糞清掃後の対策</h2>
      <p>
        糞を発見した場所の周辺は、ネズミの活動エリアです。清掃後は以下の追加対策を実施してください。
      </p>
      <ol>
        <li><strong>侵入経路の調査</strong>：糞の分布から侵入口を特定</li>
        <li><strong>粘着シート・捕獲器の設置</strong>：糞の集中場所周辺に設置</li>
        <li><strong>侵入口の封鎖</strong>：見つけた穴・隙間を金網・モルタル等で塞ぐ</li>
        <li><strong>食品の保管見直し</strong>：誘引源となる食品を密閉容器に</li>
        <li><strong>専門業者への相談</strong>：糞の量が多い・継続発見される場合</li>
      </ol>

      <h2>家族が触れる前にやるべきこと</h2>
      <ul>
        <li>子ども・ペットの立ち入り禁止区域を設定</li>
        <li>食品を一時的に冷蔵庫・密閉容器に避難</li>
        <li>糞の発見場所を写真記録（業者依頼時の情報共有用）</li>
        <li>家族で症状（発熱・下痢・腹痛など）が出ていないか確認</li>
      </ul>

      <h2>まとめ：糞は重要な情報源</h2>
      <p>
        ネズミの糞は侵入の確実な証拠であり、<strong>種類判別・巣の位置推定・被害規模の把握</strong>に役立ちます。発見時は安全な清掃手順を守りつつ、写真記録で専門業者への情報共有を準備しましょう。糞の量が多い場合・継続的に発見される場合は、専門業者の現地調査を強く推奨します。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
