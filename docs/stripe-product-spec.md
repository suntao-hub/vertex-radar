# Vertex Radar — Stripe Product Spec (Phase 2)

Written spec only — I don't have access to Suntao's Stripe account, so this isn't created yet. Set this up directly in the Stripe Dashboard (Product catalog → + Add product), or hand this doc to whoever does.

## Product

- **Name:** Vertex Radar — Connected
- **Description:** Daily inventory aging alerts for the Vertex Radar Google Sheets Add-on. Get emailed the moment a SKU crosses into Liquidate or Dead, instead of finding out at month-end close.
- **Statement descriptor:** `VERTEX RADAR`

## Prices

Two recurring Price objects on the same Product:

| Interval | Suggested price | Notes |
|---|---|---|
| Monthly | **$9/mo** (placeholder) | Primary price shown |
| Annual | **$79/yr** (placeholder — ~2 months free vs. monthly) | Optional, secondary CTA |

**This price is a placeholder, not a researched number** — the roadmap's Phase 1 Etsy checkpoint is the actual demand signal. Revisit once Etsy sales + any beta-tester conversations give real willingness-to-pay data. $9/mo lines up with the low end of typical micro-SaaS pricing for a single-purpose tool sold to solo Amazon/e-commerce sellers, but it hasn't been validated.

## Trial

- 14-day free trial on both prices. Rationale: buyer already paid once for the static tracker (Etsy) or is upgrading from it, so the risk in offering a trial is low, and it removes friction for the "is this worth a subscription" hesitation the roadmap flags as the entire pitch of Phase 6.

## Checkout flow

_Assumes vertexradar.com gets registered — confirmed available as of 2026-07-16 but not yet purchased._

- Stripe Checkout (hosted), not Elements — no need to build custom payment UI for a single-tier subscription.
- `success_url`: `https://vertexradar.com/connected/success`
- `cancel_url`: `https://vertexradar.com/connected` (back to the pricing section)
- Collect the customer's **Google account email** at checkout (the same address `Session.getEffectiveUser().getEmail()` returns in the Add-on) — this is the join key the Phase 3 license-check endpoint will use to look up subscription status. Either:
  - Pre-fill Checkout's `customer_email` if the landing page already collected it, or
  - Add a required custom field in Checkout asking "Google account email used with the Add-on" if it might differ from the billing email.

## Webhook (feeds Phase 3's license endpoint)

Subscribe to at minimum:
- `checkout.session.completed` — mark the email active
- `customer.subscription.updated` — catch plan changes / past_due
- `customer.subscription.deleted` — mark the email inactive

The Phase 3 license-check function looks up by this email, not by Stripe customer ID, since that's all the Add-on can identify the user by.

## What this doesn't cover

- Actual Stripe account/product creation (do this yourself in the Dashboard — I can't create billing objects without account access)
- The license-check endpoint itself (Phase 3 — separate task)
- Final pricing (pending Etsy/Phase 1 signal)
