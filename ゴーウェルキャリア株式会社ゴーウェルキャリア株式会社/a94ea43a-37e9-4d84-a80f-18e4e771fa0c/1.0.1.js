// version 1.0.1

(function () {
  const data = {"@type":"JobPosting","title":"Edit ★12/8面接会★【26新卒/第二新卒】ホテル内のカフェ接客・通訳のお仕事＠東京","@context":"https://schema.org/","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","value":4500,"unitText":"MONTH"},"currency":"USD"},"datePosted":"2025-12-11","description":"東京都品川区 ※法定による就業場所の変更の範囲の明示：将来的に就業場所が変更される場合があります。詳細は面談時にお伝えします。東京都品川区 ※法定による就業場所の変更の範囲の明示：将来的に就業場所が変更される場合があります。詳細は面談時にお伝えします。","directApply":false,"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"104-0061","addressRegion":"東京都","streetAddress":"銀座","addressCountry":"VN","addressLocality":"中央区"}},"jobStartDate":"2025-12-11","validThrough":"2026-10-01","employmentType":"FULL_TIME, TEMPORARY","salaryCurrency":"USD","jobLocationType":"TELECOMMUTE","jobImmediateStart":false,"applicationContact":{"name":"人事部 田中太郎","@type":"ContactPoint","email":"careers@techcorp.jp","contactType":"Email"},"hiringOrganization":{"name":"ゴーウェルキャリア株式会社ゴーウェルキャリア株式会社","@type":"Organization"},"experienceInPlaceOfEducation":false,"applicantLocationRequirements":[{"name":"JP","@type":"Country"}]};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();