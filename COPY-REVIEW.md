# Thinking Labs website — copy for Titan review

Status: **NOT LIVE.** Branch `copy/titan-review-intake-twin` (based on local commit ae0c4ff). Preview-only Vercel deploy: https://thinking-labs-site-6h13sihrh-nghiemrobert1.vercel.app (behind Vercel login). Production (thinkinglabsinc.com) is unchanged.

Required CKD Twin statement (verbatim): "CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled."

## 1. Changed passages (before → after)

| # | Where | Before | After |
|---|---|---|---|
| 1 | Site title (all pages, default `<title>`) | Thinking Labs — Educational CKD twin dashboards | Thinking Labs — CKD Twin dashboards for cardio-kidney-metabolic care |
| 2 | Site meta description | Thinking Labs, Inc. builds educational cardio-kidney-metabolic twin dashboards for patients and clinicians. Not a medical device. Doctor decides. | Thinking Labs, Inc. builds CKD Twin, cardio-kidney-metabolic twin dashboards for patients and clinicians. CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled. |
| 3 | Meta keywords | … "not a medical device" | … "clinician-supervised monitoring", "Intake Twin" |
| 4 | OpenGraph + Twitter title | Thinking Labs — Educational CKD twin dashboards | Thinking Labs — CKD Twin dashboards |
| 5 | OpenGraph + Twitter description | Educational patient + clinician twin dashboards. Not a medical device. Doctor decides. | Patient + clinician CKD twin dashboards for clinician-supervised monitoring. Not FDA cleared or approved; the treating clinician makes all care decisions. |
| 6 | Home hero paragraph | We build clear patient and clinician views that help people explore CKD-related trajectories together—with the doctor deciding what happens next. Learning tools first. Not a device. Not a diagnosis. | We build clear patient and clinician views that help people explore CKD-related trajectories together—with the doctor deciding what happens next. Built for clinician-supervised monitoring and care coordination. |
| 7 | Home notice box | Thinking Labs software is for education and demonstration. It is **not** FDA-cleared, **not** a medical device, and **not** a substitute for clinical judgment. | CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled. |
| 8 | Home hero illustration caption | Abstract educational twin — not clinical data · not a device | Abstract illustration — not clinical data |
| 9 | Product page meta description | CKD Twin educational dual dashboards from Thinking Labs — patient and clinician views. Not a medical device. | CKD Twin dual dashboards from Thinking Labs — patient and clinician views for clinician-supervised monitoring. Not FDA cleared or approved. |
| 10 | Product page notice | **Not a medical device.** Not cleared or approved by the FDA for diagnosis, treatment, or independent clinical decision-making. Outputs are educational. Your clinician decides. | **CKD Twin is not FDA cleared or approved.** It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled. |
| 11 | Product page demo band | …It carries the same non-device, non-diagnostic framing. Marketing site and demo app are separate. | …It carries the same framing: not FDA cleared or approved, and the treating clinician makes all care decisions. Marketing site and demo app are separate. |
| 12 | Safety page notice | Current software is intended for **education and demonstration**. It is not FDA-cleared or approved as a medical device. | CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled. |
| 13 | Safety checklist | Educational / demonstrator framing · Not a medical device (current) · Not FDA-cleared (current) · Doctor decides · HIPAA/BAA when clinics enroll for PHI workflows | CKD Twin: not FDA cleared or approved · Clinician-supervised monitoring and care coordination · The treating clinician makes all care decisions · Predictive features are not enabled · HIPAA/BAA when clinics enroll for PHI workflows |
| 14 | Footer (all pages) | Educational cardio-kidney-metabolic twin dashboards. Not a medical device. Not for diagnosis or treatment decisions alone. | CKD Twin supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. See Safety & compliance for regulatory status. |
| 15 | Footer bottom line | © {year} Thinking Labs, Inc. Educational / demonstrator software. | © {year} Thinking Labs, Inc. Healthcare software. |
| 16 | Mobile menu footnote | Educational twin dashboards · Not a medical device | CKD Twin · Intake Twin — by Thinking Labs |
| 17 | 404 page | …Educational twin dashboards live on the pages below—not a medical device. | …Our products live on the pages below. |
| 18 | Nav | Home · Product · How it works · Safety · About | Home · CKD Twin · Intake Twin · How it works · Safety · About |
| 19 | Footer "Product" column | CKD Twin · How it works | CKD Twin · Intake Twin · How it works |
| 20 | sitemap.xml | — | adds /intake-twin |

Notes for the reviewer:
- Footer (#14) intentionally does **not** contain "FDA" because the footer also renders on the Intake Twin page, where FDA must not appear. The full FDA statement is on Home, Product and Safety.
- Unchanged and kept as-is: homepage H1 "Educational twin dashboards for cardio-kidney-metabolic care", stages/CKM scope, About page, How it works page, Safety "Educational intent" card.
- **Open question for Titan:** the Safety page "FDA / TEMPO path" card (unchanged) says TEMPO is a possible *future* step ("if product features move beyond educational demonstration… may include early programs such as FDA's TEMPO-related efforts… That work is future-facing"). Since the SOI is already submitted, this may need rewording. Also unchanged: Product page "Is not: Diagnostic software" and Safety "not intended to diagnose, treat, cure, or prevent disease on their own." Please advise.

## 2. Intake Twin page — full text (/intake-twin)

Page title: Intake Twin · Thinking Labs
Meta description: Intake Twin by Thinking Labs: administrative workflow software for medical offices. Reads incoming faxes and scans, sorts documents, checks insurance eligibility, and files to DrChrono after staff confirm.
OG/Twitter: "Intake Twin — by Thinking Labs" / "Administrative workflow software for medical offices. Care for patients, not paperwork."

**Intake Twin**
Care for patients, not paperwork. Intake Twin takes the incoming fax and scan pile off your front desk.

> Administrative workflow software for medical offices. Intake Twin is not a medical device and does not provide clinical decision support.

WHAT IT DOES
- **Reads incoming faxes and scans** — Intake Twin reads the faxes and scanned documents that arrive at your office, so staff don't have to retype them.
- **Splits and sorts** — Multi-page packets are split by patient and sorted by document type: notes, labs, and imaging.
- **Extracts demographics and insurance** — Name, date of birth, contact details, and insurance information are pulled into a form for staff to confirm.
- **Checks insurance eligibility** — Coverage is checked against the payer so the front desk knows where things stand before the visit.
- **Files to DrChrono after staff confirm** — Once staff confirm, documents are filed to the right patient chart in DrChrono. Nothing is filed without a person approving it.
- **Sends signed notes back** — After staff review, signed notes are sent back to the referring provider's office.

STAFF STAY IN CONTROL — **People confirm every step**
Intake Twin handles the paperwork. Your staff confirm what gets filed and what gets sent. It works with DrChrono.

Interested in Intake Twin? Contact us →

(Plus site-wide header/footer. Verified: rendered /intake-twin HTML contains no "FDA", "TEMPO", "ACCESS", "triage", "diagnos", "abnormal", "urgent", "outcome".)

## 3. Grep of built site (.next/server/app/*.html, visible text + meta)
Terms: device, triage, diagnos, abnormal, FDA, TEMPO. "device-width" hits are the viewport meta tag, not copy. Zero hits for "triage" and "abnormal".

```
### /_not-found
-  [meta: width=device-width, initial-scale=1] [meta: noindex] [meta: ] Thinking Labs — CKD Twin dashb
- o-kidney-metabolic twin dashboards for patients and clinicians. CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coord
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
### /about
-  [meta: width=device-width, initial-scale=1] [meta: ] About · Thinking Labs [meta: About Thinking La
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
- ent’s own licensed providers. What we avoid Cure or outcome guarantees Implying FDA clearance we do not have Presenting advisory relationships as employment or cli
### /contact
-  [meta: width=device-width, initial-scale=1] [meta: ] Contact · Thinking Labs [meta: Contact Thinkin
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
### /how-it-works
-  [meta: width=device-width, initial-scale=1] [meta: ] How it works · Thinking Labs [meta: Patient en
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
### /index
-  [meta: width=device-width, initial-scale=1] [meta: ] Thinking Labs — CKD Twin dashboards for cardio
- o-kidney-metabolic twin dashboards for patients and clinicians. CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coord
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
- t view Clinician view Abstract illustration — not clinical data CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coord
### /intake-twin
-  [meta: width=device-width, initial-scale=1] [meta: ] Intake Twin · Thinking Labs [meta: Intake Twin
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
- inistrative workflow software for medical offices. Intake Twin is not a medical device and does not provide clinical decision support. What it does Reads incoming fax
### /product
-  [meta: width=device-width, initial-scale=1] [meta: ] Product · Thinking Labs [meta: CKD Twin dual d
- ing Labs — patient and clinician views for clinician-supervised monitoring. Not FDA cleared or approved.] [meta: Thinking Labs] [meta: Thinking Labs, Inc.] [meta: 
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
- ducational dual dashboards — not clinical data · doctor decides CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coord
- n look at the same story Doctor (or licensed clinician) decides all care Is not Diagnostic software A treatment or cure product A substitute for clinical judgment Opti
-  educational demo may be available separately. It carries the same framing: not FDA cleared or approved, and the treating clinician makes all care decisions. Marke
### /safety
-  [meta: width=device-width, initial-scale=1] [meta: ] Safety & compliance · Thinking Labs [meta: Edu
- cational intent, FDA/TEMPO path in plain words, and HIPAA/BAA when clinics enroll — Thinking Labs.] [meta:
- [OG/Twitter description, site-wide — not on /intake-twin]
- [OG/Twitter description, site-wide — not on /intake-twin]
- ics enroll. Educational twin Patient · Clinician Doctor decides CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coord
- ans explore cardio-kidney-metabolic concepts together. They are not intended to diagnose, treat, cure, or prevent disease on their own. Licensed clinicians retain full
-  responsibility for care. FDA / TEMPO path We are not claiming clearance today . Longer term, if product features mov
- an appropriate U.S. regulatory pathway—which may include early programs such as FDA’s TEMPO-related efforts for digital health innovation, followed by the clearanc
-  intended use. That work is future-facing. Nothing on this site implies present FDA clearance. HIPAA & BAAs When clinics or health systems enroll for workflows tha
- ing pages are not clinic enrollment. At a glance Safety checklist CKD Twin: not FDA cleared or approved Clinician-supervised monitoring and care coordination The t
```
(Above grep was run before the Intake Twin OG/Twitter override; after the override, /intake-twin no longer carries the site-wide OG/Twitter FDA description. Re-verified: 0 hits on /intake-twin.)
