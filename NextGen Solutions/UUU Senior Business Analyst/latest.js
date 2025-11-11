// version 1.0.1

(function () {
  const data = {"@type":"JobPosting","title":"UUU Senior Business Analyst","skills":"SQL, Excel, Tableau, Python","@context":"https://schema.org/","workHours":"9:00-18:00 (Mon-Fri)","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","maxValue":500000,"minValue":300000,"unitText":"MONTH"},"currency":"JPY"},"datePosted":"2025-01-15","description":"Lead business transformation projects, analyze requirements...","directApply":false,"jobBenefits":"Health insurance, Paid vacation","jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"123-4567","addressRegion":"Tokyo","streetAddress":"1-2-3 Shinjuku","addressCountry":"JP","addressLocality":"Shinjuku"}},"validThrough":"2025-02-15","employmentType":"FULL_TIME","jobLocationType":"REMOTE","hiringOrganization":{"name":"NextGen Solutions","@type":"Organization"}};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();