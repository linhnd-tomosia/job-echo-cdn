// version 1.0.0

(function () {
  const data = {"@type":"JobPosting","title":"Webデザイナー Test","skills":"必須：Photoshop, Illustrator, HTML, CSS\n歓迎：Figma, Adobe XD, JavaScript, React","@context":"https://schema.org/","workHours":"9:00〜18:00（休憩1時間）","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","maxValue":500000,"minValue":300000,"unitText":"MONTH"},"currency":"JPY"},"datePosted":"2025-11-10","description":"当社でWebデザイナーとして、クライアントのブランディングやユーザー体験の向上を目的としたデザイン業務をお任せします。主な業務内容は以下の通りです：\n\n・WebサイトのUI/UXデザイン\n・バナーやグラフィックの作成\n・デザインシステムの構築\n・クライアントとのコミュニケーション\n\n必須スキル：Photoshop, Illustrator, HTML/CSS, JavaScript\n歓迎スキル：Figma, Adobe XD, React\n\n勤務地は渋谷駅から徒歩5分。リモートワークも可能です。","directApply":true,"jobBenefits":"社会保険完備、交通費全額支給、リモートワーク可、書籍購入補助","jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"150-0041","addressRegion":"東京都","streetAddress":"1-2-3","addressCountry":"JP","addressLocality":"渋谷区"}},"validThrough":"2025-12-31","employmentType":"FULL_TIME","jobLocationType":"ONSITE","hiringOrganization":{"name":"株式会社Javion","@type":"Organization"}};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();