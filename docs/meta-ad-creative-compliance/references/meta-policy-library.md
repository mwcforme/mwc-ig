# Meta Ad Creative Policy References

Research date: September 20, 2026.

This reference maps Meta’s official rules and guidance for checking ad creatives. It includes the policies linked from the live Advertising Standards index, relevant Business Help Center explanations, review guidance, creative specifications, and supplemental terms.

## What can actually check an ad?

**Use a policy-based preflight assessment, followed by Meta’s own review when ready to submit.** I did not find a publicly documented Meta tool that accepts an arbitrary creative and guarantees that it complies with every policy before submission.

- **Preflight assessment, recommended approach:** Review the image or video, on-screen text, spoken audio, captions, primary text, headline, description, call to action, destination page, lead form, audience restrictions, and any required advertiser authorization. This scope reflects the components Meta says its review can examine, plus a practical breakdown of the creative itself. [Meta: About ads in review](https://www.facebook.com/business/help/204798856225114)
- **Actual Meta review before delivery:** Meta says a submitted ad with a future scheduled start goes through review but does not begin delivering until that start date. This is an actual advertising submission, not a private sandbox test or an offline creative checker. [Meta: About ads in review](https://www.facebook.com/business/help/204798856225114)
- **Approval is not a permanent compliance certificate:** Meta says an ad may not be reviewed against all policies before delivering impressions and can be reviewed again at any time, including after launch. [Meta: About ads in review](https://www.facebook.com/business/help/204798856225114)
- **Creative Hub is for mockups and previews:** Its documented functions include assembling creative, previewing placements, collaborating, and sending mockups to Ads Manager; the documentation reviewed does not establish a comprehensive compliance certification. [Meta: Creative Hub best practices](https://www.facebook.com/business/help/147101346040613/)

No ads were created, edited, scheduled, or submitted during this research.

### Suggested output for a creative checker

The following is a proposed review format, not a Meta-defined standard:

| Field | What the checker should return |
|---|---|
| Finding | Likely violation, potential risk, no issue identified, or unable to assess |
| Evidence | Exact copy, image region, video timestamp, or landing-page passage |
| Policy | Exact official policy title and URL |
| Reason | Explanation tied to the cited rule, not an invented banned-word list |
| Missing context | Targeting, location, product classification, permissions, or rights needed to decide |
| Proposed fix | Smallest change that addresses the identified issue |
| Confidence | Confidence in this finding, not a probability of Meta approval |
| Version | Review date and policy retrieval date |

For automation, I recommend keeping “policy violation,” “creative-quality recommendation,” “technical specification,” and “missing account authorization” as separate finding types. A single pass/fail score would hide important distinctions.

## Start with these official references

| Reference | Why use it |
|---|---|
| [Advertising Standards: master index](https://transparency.meta.com/policies/ad-standards/) | Primary entry point for ad-content rules, advertiser behavior, and related requirements. |
| [Advertising Standards: Facebook entry point](https://www.facebook.com/policies_center/ads) | Alternate entry point; useful when the Transparency Center page does not render fully. |
| [Community Standards](https://transparency.meta.com/policies/community-standards/) | Baseline content rules, including AI-generated content, across the covered Meta technologies. |
| [Advertising Policy Basics Checklist](https://www.facebook.com/business/help/757209948405699) | Practical starting checklist; Meta explicitly says it is not exhaustive. |
| [Ads Review Policy for Businesses](https://www.facebook.com/business/ads/review-policy-guidelines/) | Explains review scope, common rejection areas, and review requests. |
| [About ads in review](https://www.facebook.com/business/help/204798856225114) | Review timing, scheduling, reviewed components, changes that trigger review, and re-review limitations. |
| [Advertising Standards and Community Standards lesson](https://www.facebook.com/business/learn/lessons/advertising-standards-best-practices) | Meta’s educational explanation of common policy issues and examples. |

## High-priority creative guidance

These pages are especially useful for health, wellness, weight-loss, sexual-health, or prescription-related advertising, but several apply to all advertisers.

| Subject | Official references | What to check |
|---|---|---|
| Personal attributes | [Detailed policy](https://transparency.meta.com/en-gb/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/) · [Explanation and examples](https://www.facebook.com/business/help/2557868957763449/) | Direct or implied statements about the viewer’s health, age, disability, or other protected personal attributes; private-information requests. |
| Health and wellness | [Detailed policy](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/) · [Explanation and examples](https://www.facebook.com/business/help/2489235377779939) | Negative self-perception, appearance-based messaging, health claims, age requirements, and sexual/reproductive-health versus sexual-pleasure positioning. |
| Drugs and pharmaceuticals | [Detailed policy](https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/drugs-pharmaceuticals/) · [Unsafe substances explanation](https://www.facebook.com/business/help/432240224665596) | Product eligibility, unsafe substances, prescription-related conditions, and applicable targeting or permission requirements. |
| Prescription-drug authorization | [Prescription Drugs advertising policy explanation](https://www.facebook.com/business/help/263390265553560) | Whether the ad promotes prescription drugs, whether the advertiser qualifies, and whether required authorization and targeting conditions are satisfied. |
| Ad and landing-page quality | [Best practices to improve ad quality and performance](https://www.facebook.com/business/help/1767120243598011) | Low-quality creative and post-click experiences; distinguish quality concerns from explicit policy violations. |
| Landing-page and creative basics | [Advertising Policy Basics Checklist](https://www.facebook.com/business/help/757209948405699) | Functioning, relevant destinations; misleading claims; fake interface functionality; inappropriate or disruptive content. |
| Copyright and trademarks | [Copyrights and Trademarks](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/copyright-and-trademarks) | Rights to visual assets and trademarks, counterfeit content, and use of Meta marks. |
| Meta brand use | [Brand Usage in Ads](https://transparency.meta.com/en-gb/policies/ad-standards/intellectual-property-infringement/brand-usage/) | Limited permitted references to Facebook or Instagram and restrictions on modifying Meta brand assets. |
| Music | [Music Guidelines](https://www.facebook.com/legal/music_guidelines) | Commercial or non-personal use requires appropriate licenses. |
| Branded or creator content | [Branded Content Policies](https://www.facebook.com/business/help/221149188908254) · [Branded Content advertising policy](https://transparency.meta.com/policies/ad-standards/product-format-specific-policies/branded-content/) | Exchange-of-value content, required tagging, disclosures, and category restrictions. |
| Special Ad Category | [How to choose a Special Ad Category](https://www.facebook.com/business/help/298000447747885) | Whether category-specific declaration, targeting, or authorization requirements apply. |
| Lead forms | [Product and format-specific policies](https://transparency.meta.com/policies/ad-standards/#product-and-format-specific) · [Lead Ad Terms](https://www.facebook.com/legal/leadgen/tos) | Restricted questions and lead-data collection or use requirements. |

### Important interpretation cautions

- **“You” is not universally banned:** Meta says “you” and “your” can be used when the ad does not reference prohibited personal attributes and otherwise complies with its standards. [Personal attributes explanation](https://www.facebook.com/business/help/2557868957763449/)
- **Before-and-after imagery is not a universal prohibition:** Meta’s detailed health guidance includes category-specific allowances and restrictions; do not build a blanket ban from a simplified checklist. [Health and wellness explanation](https://www.facebook.com/business/help/2489235377779939)
- **Medical-service advertising and prescription-drug promotion are not interchangeable:** Meta’s prescription guidance defines authorization requirements and exemptions, including ads that only generally promote telehealth services. The actual offer and destination need assessment; this is not a blanket exemption for every clinic or treatment ad. [Prescription Drugs explanation](https://www.facebook.com/business/help/263390265553560)
- **Simplified guidance can omit exceptions:** The basics checklist broadly warns against prescription-drug promotion, while the detailed prescription article describes eligible, authorized promotion. Consult the subject-specific requirements instead of treating a checklist line as the entire rule. [Basics checklist](https://www.facebook.com/business/help/757209948405699) · [Prescription Drugs explanation](https://www.facebook.com/business/help/263390265553560)

## Complete linked policy directory from the live advertising index

The following directory covers the individual advertising policy destinations extracted from Meta’s live master index during this research, excluding duplicate navigation links and a malformed duplicate link. The grouping and policy names can be cross-checked against [Meta’s master Advertising Standards page](https://www.facebook.com/policies_center/ads).

Verification key:

- **Read:** The destination returned substantive policy content in retrieval.
- **Index-linked:** The exact URL was present on Meta’s live index, but automated retrieval was blocked or did not return substantive content. This confirms the official directory reference, not a full review of the destination’s current wording.
- **Alternate read:** The index’s exact destination could not be read, but a locale or trailing-slash variant returned content. A supplementary URL is provided elsewhere in this file where applicable.

### Baseline and commercial practices

| Policy | Verification |
|---|---|
| [Community Standards requirement for ads](https://transparency.meta.com/policies/ad-standards/community-standards/) | Index-linked; general Community Standards hub read separately |
| [Prohibited Commercial Practices](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-commercial-practices/) | Index-linked |

### Unacceptable content

| Policy | Verification |
|---|---|
| [Child Sexual Exploitation, Abuse, and Nudity](https://transparency.meta.com/policies/ad-standards/objectionable-content/child-sexual-exploitation-abuse-nudity/) | Index-linked |
| [Coordinating Harm and Promoting Crime](https://transparency.meta.com/policies/ad-standards/unacceptable-content/coordinating-harm-and-promoting-crime/) | Index-linked |
| [Dangerous Organizations and Individuals](https://transparency.meta.com/policies/ad-standards/unacceptable-content/dangerous-orgs-individuals/) | Index-linked |
| [Discriminatory Practices](https://transparency.meta.com/policies/ad-standards/unacceptable-content/discriminatory-practices/) | Index-linked |
| [Hateful Conduct](https://transparency.meta.com/policies/ad-standards/unacceptable-content/hateful-conduct/) | Index-linked |
| [Human Exploitation](https://transparency.meta.com/policies/ad-standards/unacceptable-content/human-exploitation/) | Index-linked |
| [Locally Illegal Content, Products or Services](https://transparency.meta.com/policies/ad-standards/unacceptable-content/locally-illegal-products-services/) | Index-linked |
| [Misinformation](https://transparency.meta.com/policies/ad-standards/unacceptable-content/misinformation/) | Read |
| [Vaccine Discouragement](https://transparency.meta.com/policies/ad-standards/unacceptable-content/vaccine-discouragement/) | Index-linked |

### Restricted goods and services

| Policy | Verification |
|---|---|
| [Alcohol](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/alcohol/) | Index-linked |
| [Commercial Exploitation of Crises and Controversial Events](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/commercial-exploitation-of-crises-and-controversial-events/) | Index-linked |
| [Dating Ads](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/dating-ads/) | Index-linked |
| [Hazardous Goods and Materials](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/hazardous-goods-materials/) | Index-linked |
| [Health and Wellness](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/) | Read |
| [Historical Artifacts](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/historical-artifacts/) | Index-linked |
| [Sale of Human Body Parts and Bodily Fluids](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/bodily-parts-and-fluid/) | Index-linked |
| [Sale of Non-Endangered Animals and Endangered Species](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/live-endangered-nonendangered-animals/) | Index-linked |
| [Tobacco and Related Products](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/tobacco-related-products/) | Index-linked |
| [Weapons, Ammunition or Explosives](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/) | Index-linked |
| [Drugs and Pharmaceuticals](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/drugs-pharmaceuticals/) | Alternate read |
| [Drug and Alcohol Addiction Treatment](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/drug-alcohol-addiction-treatment/) | Index-linked |
| [Financial and Insurance Products and Services](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services/) | Index-linked |
| [Cryptocurrency Products and Services](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/cryptocurrency-products-and-services/) | Index-linked |
| [Online Gambling and Games](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/gambling-games/) | Index-linked |
| [Prohibited Documents and Financial Services](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/prohibited-documents-and-financial-services/) | Index-linked |

### Objectionable content

| Policy | Verification |
|---|---|
| [Adult Nudity and Sexual Activity](https://transparency.meta.com/policies/ad-standards/objectionable-content/adult-nudity-and-sexual-activity/) | Index-linked |
| [Adult Sexual Exploitation](https://transparency.meta.com/policies/ad-standards/objectionable-content/adult-sexual-exploitation/) | Index-linked |
| [Adult Sexual Solicitation and Sexually Explicit Language](https://transparency.meta.com/policies/ad-standards/objectionable-content/adult-sexual-solicitation-and-sexually-explicit-language/) | Index-linked |
| [Bullying and Harassment](https://transparency.meta.com/policies/ad-standards/objectionable-content/bullying-harassment/) | Index-linked |
| [Profanity](https://transparency.meta.com/policies/ad-standards/objectionable-content/profanity/) | Index-linked |
| [Privacy Violations and Personal Attributes](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/) | Alternate read |
| [Violent and Graphic Content](https://transparency.meta.com/policies/ad-standards/objectionable-content/violent-graphic-content/) | Read |
| [Suicide, Self-Injury, and Eating Disorders](https://transparency.meta.com/policies/ad-standards/objectionable-content/suicide-selfinjury-eating-disorders/) | Read |

### Intellectual property and political advertising

| Policy | Verification |
|---|---|
| [Third-Party Intellectual Property Infringement](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/third-party-infringement/) | Index-linked |
| [Using Meta Intellectual Property Licenses](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/Using-Meta-Intellectual-Property-Licenses/) | Index-linked |
| [Ads about Social Issues, Elections or Politics](https://transparency.meta.com/policies/ad-standards/SIEP-advertising/SIEP/) | Index-linked |

### Business assets

| Policy | Verification |
|---|---|
| [Account Integrity](https://transparency.meta.com/policies/ad-standards/business-assets/account-integrity/) | Index-linked |
| [Cybersecurity](https://transparency.meta.com/policies/ad-standards/business-assets/Cybersecurity/) | Index-linked |
| [Inauthentic Behavior](https://transparency.meta.com/policies/ad-standards/business-assets/inauthentic-behavior/) | Read |
| [Spam](https://transparency.meta.com/policies/ad-standards/business-assets/spam/) | Index-linked |
| [User Requests](https://transparency.meta.com/policies/ad-standards/business-assets/user-requests/) | Index-linked |

### Rules embedded in the main index

These subjects also appear as sections of the main standards rather than necessarily having a distinct link for every sub-rule. The sections were identified on the live index and their content was retrieved through the [alternate master page](https://www.facebook.com/policies_center/ads).

| Section | Coverage |
|---|---|
| [Product and format-specific policies](https://transparency.meta.com/policies/ad-standards/#product-and-format-specific) | Video ads, lead ads, and targeting requirements |
| [Advertising policies affecting business assets](https://transparency.meta.com/policies/ad-standards/#business-assets) | Account and business-asset policy requirements |
| [Data use restrictions](https://transparency.meta.com/policies/ad-standards/#data-use-restrictions) | Restrictions on advertising data use |
| [Things you should know](https://transparency.meta.com/policies/ad-standards/#things-to-know) | Additional advertiser responsibilities and conditions |
| [EU Digital Services Act transparency requirements](https://transparency.meta.com/policies/ad-standards/#transparency-requirements) | Advertising-transparency requirements |

## Supplemental official policy pages still discoverable

These official pages returned content, except where marked as search-only, but were not separate destinations in the live master index extracted during this research. Keep them as supplemental references; do not assume an older standalone page name represents the current policy organization or overrides newer, more specific guidance.

| Reference | Subject |
|---|---|
| [Understanding our Advertising Standards](https://transparency.meta.com/policies/ad-standards/understanding-our-advertising-standards) | Overview; discovered through search, not separately fetched |
| [Fraud, Scams and Deceptive Practices](https://transparency.meta.com/en-gb/policies/ad-standards/fraud-scams/fraud-scams-deceptive-practices/) | Deception, exaggerated claims, and misleading practices |
| [Unacceptable Business Practices](https://transparency.meta.com/en-gb/policies/ad-standards/fraud-scams/unacceptable-business-practices/) | Deceptive offers and business practices |
| [Unrealistic Outcomes](https://transparency.meta.com/en-gb/policies/ad-standards/deceptive-content/unrealistic-outcomes/) | Unrealistic health, weight-loss, and economic claims |
| [Circumventing Systems](https://transparency.meta.com/policies/ad-standards/deceptive-content/circumventing-systems) | Disguising creative or landing pages to bypass review |
| [Evading Enforcement](https://transparency.meta.com/policies/ad-standards/business-assets/evading-enforcement) | Attempts to evade review and enforcement actions |
| [Copyrights and Trademarks](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/copyright-and-trademarks) | Third-party rights and Meta intellectual property |
| [Brand Usage in Ads](https://transparency.meta.com/en-gb/policies/ad-standards/intellectual-property-infringement/brand-usage/) | Meta brand references and assets |
| [Branded Content](https://transparency.meta.com/policies/ad-standards/product-format-specific-policies/branded-content/) | Paid or otherwise compensated creator integrations |

## Creative specifications and preview guidance

These are useful for production checks but should not be confused with a complete policy pass/fail test.

| Reference | Purpose |
|---|---|
| [Meta Ads Guide](https://www.facebook.com/business/ads-guide/update) | Format and placement specifications, including dimensions, file sizes, and character limits |
| [Creative best practices for text in ads](https://www.facebook.com/business/help/223409425500940?locale=en_GB) | Text length, truncation, placement customization, and generated or modified copy |
| [Create a mockup in Meta Creative Hub](https://www.facebook.com/business/help/378498582482544) | Build and preview creative before using it in an ad |
| [Creative Hub best practices](https://www.facebook.com/business/help/147101346040613/) | Preview, collaboration, and Ads Manager handoff |

## Contractual terms and data rules

These are not all creative-content rules, but they are part of the broader advertising compliance reference set. Meta identifies several of these as terms that can apply to advertisers depending on the products they use. [Meta’s compliance overview](https://www.facebook.com/business/data-privacy/compliance)

| Reference | Applies to |
|---|---|
| [Meta Terms of Service](https://www.facebook.com/terms/) | Use of covered Meta products |
| [Commercial Terms](https://www.facebook.com/legal/commercial_terms) | Commercial or business use |
| [Self-Serve Ad Terms](https://www.facebook.com/legal/self_service_ads_terms) | Advertising interfaces, APIs, and ad orders |
| [Lead Ad Terms](https://www.facebook.com/legal/leadgen/tos) | Lead-generation features and handling submitted data |
| [About Lead Ads Terms and security](https://www.facebook.com/business/help/829597887147190) | Practical explanation of lead-ad terms and security |
| [Business Tools Terms](https://www.facebook.com/legal/technology_terms) | Business Tool Data, measurement, targeting, and related data obligations |
| [Customer List Custom Audiences Terms](https://www.facebook.com/legal/terms/customaudience) | Customer-list audience rights, permissions, sensitive-data restrictions, and opt-outs |
| [Music Guidelines](https://www.facebook.com/legal/music_guidelines) | Music rights for posted, shared, or promoted content |
| [Ad Creative Generative AI Terms](https://www.facebook.com/legal/terms/ad_creative_generative_ai_terms) | Meta’s generative creative features in advertising interfaces and Marketing API |
| [About prohibited information](https://www.facebook.com/business/help/361948878201809) | Sensitive information that must not be sent through Meta Business Tools |
| [Privacy and data-use best practices](https://www.facebook.com/business/help/PrivacyBestPractices) | Practical Business Tools data guidance |
| [Ads Privacy and Data Security compliance overview](https://www.facebook.com/business/data-privacy/compliance) | Orientation to applicable advertiser data terms |

## Rejection and enforcement references

| Reference | Verification and use |
|---|---|
| [About ads in review](https://www.facebook.com/business/help/204798856225114) | Read; includes requesting another review through Business Support Home |
| [Ads Review Policy for Businesses](https://www.facebook.com/business/ads/review-policy-guidelines/) | Read; explains corrections, review requests, and restrictions |
| [What to do if an ad is rejected or a business asset is restricted](https://transparency.meta.com/policies/ad-standards/#ad-rejected) | Official master-index section |
| [Advertising restrictions on business assets](https://www.facebook.com/business/help/975570072950669?id=434838534925385) | Exact link verified in live index; article content unavailable in retrieval |
| [Request a review](https://www.facebook.com/business/help/422289316306981?id=434838534925385) | Exact link verified in live index; automated retrieval blocked |

## Scope and verification limitations

This is a comprehensive map of the core official advertising-policy corpus and the supporting references identified in this research, not a claim to have enumerated every Meta help article, localization, historical revision, developer page, or country-specific rule. The live master index is the best starting point for maintaining the collection as Meta changes its policy structure. [Advertising Standards](https://transparency.meta.com/policies/ad-standards/)

Many exact policy destinations blocked automated retrieval even though their links appeared in the live index. Those entries are explicitly marked; indexed or cached content may also lag the live page, so a high-stakes review should reopen the applicable policy and confirm its current wording.

Some simplified help articles and independently accessible policy pages use different names or levels of detail. My recommendation is to preserve the exact URL, retrieval date, wording, and any apparent conflict rather than silently merging them into a supposedly definitive rule.
