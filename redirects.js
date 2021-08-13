const targetOrigin = "https://spec.smarthealth.cards";

const remaps = [
  {"page": "", "id": "health-card", "target": `${targetOrigin}/vocabulary`},
  {"page": "", "id": "covid19", "target": `${targetOrigin}/vocabulary`},
  {"page": "", "id": "laboratory", "target": `${targetOrigin}/vocabulary`},
  {"page": "", "id": "immunization", "target": `${targetOrigin}/vocabulary`},
  {"page": "", "id": "overview"}, 
  {"page": "", "id": "status"}, 
  {"page": "", "id": "contributing"}, 
  {"page": "", "id": "introduction"}, 
  {"page": "", "id": "conceptual-model"}, 
  {"page": "", "id": "design-goals"}, 
  {"page": "", "id": "start-small-think-big"}, 
  {"page": "", "id": "user-experience"}, 
  {"page": "", "id": "demo"}, 
  {"page": "", "id": "design-considerations"}, 
  {"page": "", "id": "data-flow"}, 
  {"page": "", "id": "connecting-health-wallet-to-issuer-optional"}, 
  {"page": "", "id": "getting-credentials-into-health-wallet"}, 
  {"page": "", "id": "presenting-credentials-to-verifier"}, 
  {"page": "", "id": "trust"}, 
  {"page": "", "id": "which-issuers-can-participate"}, 
  {"page": "", "id": "privacy"}, 
  {"page": "", "id": "data-minimization"}, 
  {"page": "", "id": "granular-sharing"}, 
  {"page": "", "id": "future-considerations"}, 
  {"page": "", "id": "data-model"}, 
  {"page": "", "id": "protocol-details"}, 
  {"page": "", "id": "generating-and-resolving-cryptographic-keys"}, 
  {"page": "", "id": "signing-health-cards"}, 
  {"page": "", "id": "determining-keys-associated-with-an-issuer"}, 
  {"page": "", "id": "certificates"}, 
  {"page": "", "id": "key-management"}, 
  {"page": "", "id": "issuer-generates-results"}, 
  {"page": "", "id": "health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws"}, 
  {"page": "", "id": "health-cards-are-small"}, 
  {"page": "", "id": "user-retrieves-health-cards"}, 
  {"page": "", "id": "via-file-download"}, 
  {"page": "", "id": "via-qr-print-or-scan"}, 
  {"page": "", "id": "via-fhir-health-cards-issue-operation"}, 
  {"page": "", "id": "presenting-health-cards-to-a-verifier"}, 
  {"page": "", "id": "every-health-card-can-be-embedded-in-a-qr-code"}, 
  {"page": "", "id": "creating-a-qr-code-or-a-set-of-qr-codes-from-a-health-card-jws"}, 
  {"page": "", "id": "chunking"}, 
  {"page": "", "id": "encoding-chunks-as-qr-codes"}, 
  {"page": "", "id": "faq"}, 
  {"page": "", "id": "can-a-smart-health-card-be-used-as-a-form-of-identification"}, 
  {"page": "", "id": "which-clinical-data-should-be-considered-in-decision-making"}, 
  {"page": "", "id": "how-can-we-share-conclusions-like-a-safe-to-fly-pass-instead-of-sharing-clinical-results"}, 
  {"page": "", "id": "what-testing-tools-are-available-to-validate-smart-health-cards-implementations"}, 
  {"page": "", "id": "potential-extensions"}, 
  {"page": "", "id": "standardized-presentation-workflows"}, 
  {"page": "", "id": "references"}, 
  {"page": "credential-modeling", "id": ""}, 
  {"page": "credential-modeling", "id": "verifiable-clinical-information-in-fhir"}, 
  {"page": "credential-modeling", "id": "content-definition"}, 
  {"page": "credential-modeling", "id": "modeling-a-health-card"}, 
  {"page": "credential-modeling", "id": "mapping-into-the-w3c-vc-data-model"}, 
  {"page": "credential-modeling", "id": "health-card-examples"}, 
  {"page": "vocabulary", "id": ""}, 
  {"page": "vocabulary", "id": "verifiable-credential-vc-types"}, 
  {"page": "vocabulary", "id": "more-granular-sub-types"}, 
  {"page": "examples", "id": ""}, 
  {"page": "examples", "id": "example-resources"}, 
  {"page": "examples", "id": "example-0"}, 
  {"page": "examples", "id": "example-1"}, 
  {"page": "examples", "id": "example-2"}, 
  {"page": "examples/example-00-a-fhirBundle.json"},
  {"page": "examples/example-00-b-jws-payload-expanded.json"},
  {"page": "examples/example-00-c-jws-payload-minified.json"},
  {"page": "examples/example-00-d-jws.txt"},
  {"page": "examples/example-00-e-file.smart-health-card"},
  {"page": "examples/example-00-f-qr-code-numeric-value-0.txt"},
  {"page": "examples/example-00-g-qr-code-0.svg"},
  {"page": "examples/example-01-a-fhirBundle.json"},
  {"page": "examples/example-01-b-jws-payload-expanded.json"},
  {"page": "examples/example-01-c-jws-payload-minified.json"},
  {"page": "examples/example-01-d-jws.txt"},
  {"page": "examples/example-01-e-file.smart-health-card"},
  {"page": "examples/example-01-f-qr-code-numeric-value-0.txt"},
  {"page": "examples/example-01-g-qr-code-0.svg"},
  {"page": "examples/example-02-a-fhirBundle.json"},
  {"page": "examples/example-02-b-jws-payload-expanded.json"},
  {"page": "examples/example-02-c-jws-payload-minified.json"},
  {"page": "examples/example-02-d-jws.txt"},
  {"page": "examples/example-02-e-file.smart-health-card"},
  {"page": "examples/example-02-f-qr-code-numeric-value-0.txt"},
  {"page": "examples/example-02-f-qr-code-numeric-value-1.txt"},
  {"page": "examples/example-02-f-qr-code-numeric-value-2.txt"},
  {"page": "examples/example-02-g-qr-code-0.svg"},
  {"page": "examples/example-02-g-qr-code-1.svg"},
  {"page": "examples/example-02-g-qr-code-2.svg"},
  {"page": "artifacts/operation-patient-i-health-cards-issue.json"},
  {"page": "changelog", "id": "changelog"}, 
  {"page": "changelog", "id": "045"}, 
  {"page": "changelog", "id": "044"}, 
  {"page": "changelog", "id": "043"}, 
  {"page": "changelog", "id": "042"}, 
  {"page": "changelog", "id": "041"}, 
  {"page": "changelog", "id": "031"}, 
  {"page": "changelog", "id": "030"}, 
  {"page": "changelog", "id": "020"}, 
  {"page": "changelog", "id": "011"}, 
  {"page": "changelog", "id": "010"}, 
  {"page": "changelog", "id": "0012"}, 
  {"page": "changelog", "id": "0011"}, 
  {"page": "changelog", "id": "0010"}, 
  {"page": "changelog", "id": "009"}, 
  {"page": "changelog", "id": "008"}, 
  {"page": "changelog", "id": "007"}, 
  {"page": "changelog", "id": "006"}, 
  {"page": "changelog", "id": "005"}, 
  {"page": "changelog", "id": "004"}, 
  {"page": "changelog", "id": "003"}, 
  {"page": "changelog", "id": "002"},
  {"page": "ial"},
];

const path = window.location.pathname.replace(/(^\/|\/$)/g, "");
const hash = window.location.hash.slice(1);
const needRedirect = remaps.filter(({page, id}) => (!page || page === path) && (!id || id === hash));

if (needRedirect.length > 0) {
  if (needRedirect[0].target) {
     window.location.href = needRedirect[0].target;
  } else {
    window.location.href = `${targetOrigin}${window.location.pathname}${window.location.hash}`;
  }
}
