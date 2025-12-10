// version 1.0.0

(function () {
  const data = {"@type":"JobPosting","title":"Webデザイナー","@context":"https://schema.org/","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","value":45000,"unitText":"MONTH"},"currency":"JPY"},"datePosted":"2025-09-10","identifier":{"name":"Job Posting ID","@type":"PropertyValue","value":"JOB001"},"description":"\"当社でWebデザイナーとして、クライアントのブランディングやユーザー体験の向上を目的としたデザイン業務をお任せします。主な業務内容は以下の通りです：\n\n・WebサイトのUI/UXデザイン\n・バナーやグラフィックの作成\n・デザインシステムの構築\n・クライアントとのコミュニケーション\n\n必須スキル：Photoshop, Illustrator, HTML/CSS, JavaScript\n歓迎スキル：Figma, Adobe XD, React\n\n勤務地は渋谷駅から徒歩5分。リモートワークも可能です。\"","directApply":false,"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"150-0041","addressRegion":"東京都","streetAddress":"神南","addressCountry":"JP","addressLocality":"渋谷区"}},"jobStartDate":"2025-08-01","validThrough":"2025-12-01","employmentType":"FULL_TIME, CONTRACTOR","salaryCurrency":"JPY","employerOverview":"株式会社Javionはテクノロジーソリューションを提供する企業です。","jobImmediateStart":false,"applicationContact":{"name":"人事部 田中太郎","@type":"ContactPoint","email":"careers@techcorp.jp","contactType":"Email"},"hiringOrganization":{"logo":"https://javion.co.jp/logo.png","name":"株式会社Javion","@type":"Organization","sameAs":"https://javion.co.jp"},"experienceInPlaceOfEducation":false};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();