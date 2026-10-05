/**
 * Public company facts for Thinking Labs, Inc. marketing pages.
 * Keep both Irvine mailing addresses — do not drop either.
 */

export const COMPANY_LEGAL_NAME = "Thinking Labs, Inc.";

/** Marconi address — show first on public pages. */
export const COMPANY_MAILING_ADDRESS_MARCONI =
  "15 Marconi Ste A, Irvine, CA 92618";

/** Existing Irvine Blvd mailing address (keep; show below Marconi). */
export const COMPANY_MAILING_ADDRESS_IRVINE_BLVD =
  "3943 Irvine Blvd Ste 513, Irvine, CA 92602";

/** Both addresses: Marconi on top, then Irvine Blvd. */
export const COMPANY_MAILING_ADDRESSES = [
  COMPANY_MAILING_ADDRESS_MARCONI,
  COMPANY_MAILING_ADDRESS_IRVINE_BLVD,
] as const;

export const COMPANY_CONTACT_EMAIL = "robert@thinkinglabsinc.com";
export const COMPANY_CONTACT_TITLE = "President";
