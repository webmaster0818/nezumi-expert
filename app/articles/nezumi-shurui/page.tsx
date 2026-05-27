import type { Metadata } from "next";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("nezumi-shurui")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

const faqs: FaqItem[] = [
  {
    question: "日本の家屋にいるネズミは何種類ですか？",
    answer:
      "家屋に侵入する主要ネズミは3種類です。クマネズミ（最も多い、運動能力が高い）、ドブネズミ（湿気を好む、地下・床下中心）、ハツカネズミ（小型、雑食性）。それぞれ行動範囲・好む環境・対策方法が異なります。",
  },
  {
    question: "クマネズミの特徴は？",
    answer:
      "クマネズミは体長14〜20cm（尾が長い）、体色は黒褐色〜灰褐色、運動能力が高く垂直の壁を登れる、天井裏や高所を好みます。家屋に侵入する最も一般的な種で、農薬・殺鼠剤への耐性が出始めています。",
  },
  {
    question: "ドブネズミの特徴は？",
    answer:
      "ドブネズミは体長20〜26cm（最大級）、体色は灰褐色、湿気を好み下水道・床下・地下を中心に活動します。クマネズミより重く泳ぎが得意で、攻撃性が高い特徴があります。飲食店の厨房や床下被害で多く確認されます。",
  },
  {
    question: "ハツカネズミの特徴は？",
    answer:
      "ハツカネズミは体長6〜10cm（最小）、体色は灰褐色、小柄なため小さな隙間からも侵入します。雑食性で、農作物・食品全般を被害源とします。倉庫や穀物保管庫で発生しやすく、繁殖力が非常に高い特徴があります。",
  },
  {
    question: "種類によって対策方法は変わりますか？",
    answer:
      "はい。クマネズミは高所対策（天井裏の点検）、ドブネズミは床下・配管周りの対策、ハツカネズミは小さな隙間の徹底封鎖が中心となります。糞のサイズと侵入経路で種類を特定し、それに応じた対策を取るのが効果的です。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <FaqJsonLd items={faqs} />
      <p>
        日本の家屋に侵入するネズミは主に<strong>クマネズミ・ドブネズミ・ハツカネズミの3種</strong>です。それぞれ体長・体色・行動範囲・好む環境が異なり、効果的な対策方法も変わります。本記事では3種の見分け方と、種類別の対策を整理します。
      </p>

      <h2>家屋に侵入する3種のネズミ</h2>
      <h3>クマネズミ（家屋で最も多い）</h3>
      <ul>
        <li><strong>体長</strong>：14〜20cm（頭胴長）、尾が長く体長より長い</li>
        <li><strong>体色</strong>：黒褐色〜灰褐色、腹部はやや白い</li>
        <li><strong>行動範囲</strong>：天井裏・壁内・高所中心</li>
        <li><strong>運動能力</strong>：垂直の壁を登り、電線も渡る</li>
        <li><strong>好む環境</strong>：乾燥した暖かい場所</li>
        <li><strong>食性</strong>：穀類・果物・植物性食品中心</li>
        <li><strong>繁殖</strong>：年4〜6回、1回6〜8頭</li>
      </ul>
      <p>
        現代の都市部住宅で最も多く確認される種です。高所での活動が中心のため、天井裏での足音や糞の発見が被害の初期サインになります。一部の殺鼠剤への耐性が出始めており、駆除の難易度が上がっている特徴があります。
      </p>

      <h3>ドブネズミ（最大級・床下被害）</h3>
      <ul>
        <li><strong>体長</strong>：20〜26cm（頭胴長）、尾は体長より短い</li>
        <li><strong>体色</strong>：灰褐色、腹部は灰白色</li>
        <li><strong>行動範囲</strong>：床下・下水道・地下中心</li>
        <li><strong>運動能力</strong>：泳ぎが得意、垂直の壁は苦手</li>
        <li><strong>好む環境</strong>：湿気の多い暗い場所</li>
        <li><strong>食性</strong>：雑食、肉・魚・残飯を好む</li>
        <li><strong>繁殖</strong>：年4〜6回、1回8〜12頭</li>
      </ul>
      <p>
        3種の中で最も大型・攻撃性が高く、人を噛むこともあります。下水道経由で侵入することが多く、飲食店の厨房・床下、ビルの地下機械室などで多く確認されます。
      </p>

      <h3>ハツカネズミ（最小・小隙間から侵入）</h3>
      <ul>
        <li><strong>体長</strong>：6〜10cm（頭胴長）、尾は体長と同程度</li>
        <li><strong>体色</strong>：灰褐色〜茶褐色</li>
        <li><strong>行動範囲</strong>：物陰・倉庫・引き出しの中</li>
        <li><strong>運動能力</strong>：小さな隙間を通り抜ける（5mm程度）</li>
        <li><strong>好む環境</strong>：乾燥した狭い場所</li>
        <li><strong>食性</strong>：穀類・種子中心</li>
        <li><strong>繁殖</strong>：年6〜10回、1回4〜7頭（最も繁殖が早い）</li>
      </ul>
      <p>
        最小サイズで、小さな隙間からも容易に侵入します。倉庫・食品保管庫・物置で多く確認され、農作物被害の代表種でもあります。繁殖サイクルが短いため、数頭の侵入から短期間で大規模化します。
      </p>

      <h2>3種の比較表</h2>
      <table>
        <thead>
          <tr><th>項目</th><th>クマネズミ</th><th>ドブネズミ</th><th>ハツカネズミ</th></tr>
        </thead>
        <tbody>
          <tr><td>体長（頭胴長）</td><td>14〜20cm</td><td>20〜26cm</td><td>6〜10cm</td></tr>
          <tr><td>体色</td><td>黒褐色〜灰褐色</td><td>灰褐色</td><td>灰褐色〜茶褐色</td></tr>
          <tr><td>主な活動場所</td><td>天井裏・高所</td><td>床下・地下</td><td>物陰・倉庫</td></tr>
          <tr><td>運動能力</td><td>登攀（高い）</td><td>泳ぎ・走力</td><td>小隙間通過</td></tr>
          <tr><td>糞のサイズ</td><td>6〜10mm</td><td>10〜20mm</td><td>4〜7mm</td></tr>
          <tr><td>糞の形</td><td>細長い・両端尖る</td><td>太い・両端丸い</td><td>米粒状</td></tr>
          <tr><td>主な被害施設</td><td>戸建て住宅</td><td>飲食店・ビル</td><td>倉庫・農地</td></tr>
        </tbody>
      </table>

      <h2>種類別の対策</h2>
      <h3>クマネズミ対策</h3>
      <ul>
        <li><strong>天井裏の点検</strong>：天井点検口から糞・営巣材の確認</li>
        <li><strong>高所の侵入口封鎖</strong>：軒下・屋根の隙間、配管貫通部</li>
        <li><strong>電線・配管経由の侵入対策</strong>：電線への防鼠ガードの設置</li>
        <li><strong>耐性個体への対応</strong>：複数種類の殺鼠剤を併用、捕獲器を活用</li>
      </ul>
      <h3>ドブネズミ対策</h3>
      <ul>
        <li><strong>床下・地下の点検</strong>：床下換気口、配管貫通部の確認</li>
        <li><strong>下水道経由の侵入対策</strong>：排水口の蓋・グレーチングの強化</li>
        <li><strong>湿気対策</strong>：床下換気の改善、漏水の修理</li>
        <li><strong>厨房での衛生管理</strong>：食品保管の徹底、生ごみ管理</li>
      </ul>
      <h3>ハツカネズミ対策</h3>
      <ul>
        <li><strong>小隙間の徹底封鎖</strong>：5mm以下の隙間もすべて塞ぐ</li>
        <li><strong>食品保管の見直し</strong>：密閉容器での保管、開封食品の管理</li>
        <li><strong>倉庫の整理整頓</strong>：物陰を作らない収納方法</li>
        <li><strong>早期駆除</strong>：繁殖サイクルが短いため初期対応が重要</li>
      </ul>

      <h2>侵入経路の特徴</h2>
      <h3>建物別の典型的な侵入経路</h3>
      <ul>
        <li><strong>戸建て住宅</strong>：軒下・屋根の隙間（クマネズミ）、床下換気口（ドブネズミ）</li>
        <li><strong>マンション</strong>：配管貫通部、ベランダの隙間、共用廊下からの侵入</li>
        <li><strong>飲食店</strong>：厨房の床下、排水口、シャッター下、納品口</li>
        <li><strong>倉庫</strong>：扉の隙間、換気口、貨物搬入口</li>
      </ul>

      <h2>種類判別後の対応フロー</h2>
      <ol>
        <li><strong>糞の発見場所・サイズの記録</strong>：写真撮影で種類判別の材料に</li>
        <li><strong>侵入経路の特定</strong>：種類に応じた経路を重点確認</li>
        <li><strong>応急対策の実施</strong>：粘着シート・殺鼠剤の設置</li>
        <li><strong>侵入口封鎖の検討</strong>：建築的対応が必要な場合は業者に依頼</li>
        <li><strong>専門業者への相談</strong>：継続被害・大規模被害の場合は専門業者へ</li>
      </ol>

      <h2>まとめ：種類判別が対策の出発点</h2>
      <p>
        ネズミ駆除は<strong>種類判別から始まる</strong>のが効果的です。糞のサイズ・侵入経路・活動場所で3種を見分け、それぞれに応じた対策を取ることで、効率的な駆除と再発防止につながります。種類判別が難しい場合は専門業者に相談し、現地調査で正確な種類特定と対策方針を立ててもらうのが安全です。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
