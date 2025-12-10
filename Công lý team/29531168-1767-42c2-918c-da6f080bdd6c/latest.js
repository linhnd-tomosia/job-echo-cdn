// version 1.0.3

(function () {
  const data = {"@type":"JobPosting","title":"Ninja rùa!","@context":"https://schema.org/","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","value":24444,"unitText":"MONTH"},"currency":"USD"},"datePosted":"2025-12-10","description":"(Minimum 100 characters required)\nPlease include specific job responsibilities, ideal candidate profile, work style, etc.(Minimum 100 characters required)\nPlease include specific job responsibilities, ideal candidate profile, work style, etc.","directApply":false,"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"111-1111","addressRegion":"Aza","addressCountry":"US","addressLocality":"Skiu"}},"jobStartDate":"2025-12-10","validThrough":"2026-12-10","employmentType":"OTHER","salaryCurrency":"USD","jobImmediateStart":false,"applicationContact":{"name":"Takeore","@type":"ContactPoint","telephone":"09995555","contactType":"Phone"},"hiringOrganization":{"name":"Công lý team Anh hai lúa! Có thể không thấy đươợc tận mắtt!","@type":"Organization"},"experienceInPlaceOfEducation":false};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();