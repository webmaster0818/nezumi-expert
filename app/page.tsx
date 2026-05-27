import Link from "next/link";
import { ARTICLES } from "./lib/articles";
import { getTopProviders, PROVIDERS } from "./lib/providers";
import { ComparisonTable } from "./components/ComparisonTable";
import { RankingTable } from "./components/RankingTable";
import { RegionList } from "./components/RegionList";
import { CTAButton, PhoneCTA } from "./components/CTAButton";
import { FAQ, FaqJsonLd, FaqItem } from "./components/FAQ";

const faqs: FaqItem[] = [
  {
    question: "ネズミ駆除の費用はいくらかかりますか？",
    answer:
      "一軒家のネズミ駆除は被害規模で7万〜20万円が中心帯です。マンションの戸単独施工は2万〜10万円、共用部の一括施工は管理組合での見積もりが必要です。飲食店は月額契約の防除（1〜5万円/月）が一般的で、HACCPの食品衛生管理要件にも対応します。被害状況と建物種別により大きく変動するため、複数社で見積もりを取るのが安全です。",
  },
  {
    question: "ネズミを自分で駆除できますか？",
    answer:
      "粘着シート・殺鼠剤・侵入口の応急封鎖はホームセンターで購入できる道具で対応可能です。ただし、ネズミは繁殖が早く侵入経路が複数あるため、自己駆除だけでは根本解決が難しい場合が多いのが実情です。捕獲しても侵入口が残っていれば再侵入されるため、建築的封鎖は専門業者に依頼するのが効率的です。",
  },
  {
    question: "天井裏でカサカサ音がします。ネズミですか？",
    answer:
      "夜間に天井裏で軽快な走行音（カサカサ・トトト）が聞こえる場合はネズミ（特にクマネズミ）の可能性が高いです。ハクビシンやイタチはドタドタとした重い音、コウモリは羽音や鳴き声が特徴です。音の重さ・速さ・時間帯で動物を判別できますが、確実な判定は天井裏の糞や侵入口の確認が必要です。",
  },
  {
    question: "飲食店でのネズミ駆除はどう違いますか？",
    answer:
      "飲食店ではHACCP（食品衛生管理）の必須項目として、定期的なネズミ防除が義務付けられています。一般的には月次の防除契約（モニタリング・捕獲・侵入口封鎖）で、年間契約で12〜60万円程度が相場です。保健所監査時にはモニタリングシートと施工記録の提出が求められます。",
  },
  {
    question: "ネズミによる感染症リスクはありますか？",
    answer:
      "ネズミは糞・尿・体表のノミ・ダニを介してサルモネラ症、レプトスピラ症、ハンタウイルス感染症などを媒介する可能性があります。糞清掃時は必ずマスク・手袋・防護メガネを着用し、塩素系消毒液で消毒してください。乳幼児・高齢者がいる家庭では、清掃を専門業者に依頼するのが安全です。",
  },
];

const persona = [
  {
    title: "天井裏・床下の音で困っている家庭の方",
    desc: "深夜のカサカサ音や走行音はネズミの可能性が高く、繁殖力の高さから早期対応が重要です。",
    link: "/articles/nezumi-tenjouura-oto/",
    cta: "天井裏音の判定を読む",
  },
  {
    title: "飲食店・店舗オーナーの方",
    desc: "HACCP対応の月次防除契約、保健所監査対応、モニタリングシートの作り方を整理しています。",
    link: "/articles/nezumi-inshokuten-haccp/",
    cta: "HACCP対応を確認する",
  },
  {
    title: "マンション管理組合・理事の方",
    desc: "共用部一括施工の費用按分、住民総会議案書テンプレート、業者選定の手順を実務目線で解説。",
    link: "/articles/nezumi-mansion-kanrikumiai/",
    cta: "管理組合向け解説を見る",
  },
];

export default function Home() {
  const top = getTopProviders();

  return (
    <>
      <FaqJsonLd items={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2e4f7a 0px, #2e4f7a 1px, transparent 1px, transparent 24px)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
          <p className="text-accent-light text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Nezumi Expert Navi 2026
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
            ネズミ駆除を、
            <br />
            <span className="text-accent-light">用途別に最適化</span>する。
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            家庭・飲食店（HACCP対応）・マンション管理組合まで、ネズミ被害の用途別に必要な情報を網羅。種類別対策・感染症リスク・保健所連携まで、実務に直結する情報を集約しました。
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <CTAButton
              href="/articles/nezumi-kuchu-hiyou/"
              variant="accent"
            >
              駆除費用の相場を見る
            </CTAButton>
            <CTAButton
              href="/articles/nezumi-tenjouura-oto/"
              variant="outline"
              className="bg-white/10 text-white border-white/40 hover:bg-white/20"
            >
              天井裏の音を判定する
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-muted-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-foreground/80">
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">01</span>
              <p>家庭・飲食店・マンションを用途別に解説</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">02</span>
              <p>HACCP・保健所監査対応の実務ガイド</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">03</span>
              <p>感染症リスクと安全な清掃手順</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">04</span>
              <p>実在業者のみを厳選紹介</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          ネズミ駆除おすすめ業者ランキング
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          対応エリア・保証期間・施工方式の3軸で厳選した、公式情報を確認済みの専門業者です
        </p>
        <RankingTable providers={top} />
        <div className="text-center mt-8">
          <CTAButton href="/articles/nezumi-kuchu-hiyou/" variant="primary">
            駆除費用と業者比較を見る
          </CTAButton>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted-bg py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
            主要6社の対応エリア・保証 一覧
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            気になる業者を素早く比較できます
          </p>
          <ComparisonTable providers={PROVIDERS} />
        </div>
      </section>

      {/* Persona */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          あなたの状況から、必要な記事へ
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          家庭・飲食店・集合住宅、それぞれの被害シーンに合わせてご案内します
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {persona.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-md p-6 flex flex-col"
            >
              <h3 className="font-display text-lg font-bold text-primary-dark mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>
              <CTAButton href={p.link} variant="outline" className="w-full">
                {p.cta}
              </CTAButton>
            </div>
          ))}
        </div>
      </section>

      {/* All articles */}
      <section className="bg-muted-bg py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
            記事カテゴリ一覧
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            全{ARTICLES.length}本の専門記事を公開しています
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}/`}
                className="block bg-white border border-border rounded-sm px-5 py-4 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap mt-0.5">
                    {a.category}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-primary-dark leading-snug mb-1">
                      {a.shortTitle}
                    </p>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy summary */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          47都道府県の補助金 確認マップ
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          衛生害虫対策の補助は市区町村ごとに制度が異なるため、地域の窓口を一覧で確認できます
        </p>
        <RegionList variant="summary" />
        <div className="text-center mt-8">
          <CTAButton href="/articles/nezumi-hojo-kin-zenkoku/" variant="primary">
            47都道府県の詳細を見る
          </CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted-bg py-10">
        <FAQ items={faqs} />
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            まずは現地調査・見積もり無料の業者へ
          </h2>
          <p className="text-white/85 mb-8 text-sm md:text-base leading-relaxed">
            ネズミは繁殖が早く、被害が拡大する前の初動が重要です。
            <br className="hidden md:inline" />
            無料相談で被害状況を共有することからはじめましょう。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton
              href="https://house-protect.net/"
              external
              sponsored
              variant="accent"
            >
              ハウスプロテクト公式
            </CTAButton>
            <PhoneCTA phone="0120-987-282" label="ハウスプロテクトに電話" />
          </div>
          <p className="text-white/55 text-[10px] mt-6">
            ※業者の対応エリア・料金は2026-05-28時点の公式サイト確認情報です。最新情報は各公式をご確認ください。
          </p>
        </div>
      </section>
    </>
  );
}
