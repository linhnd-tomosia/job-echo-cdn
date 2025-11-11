// version 1.0.1

(function () {
  const data = {"@type":"JobPosting","@context":"https://schema.org/","directApply":false,"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","addressCountry":"JP"}},"employmentType":"FULL_TIME","jobLocationType":"ONSITE","hiringOrganization":{"@type":"Organization"}};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();