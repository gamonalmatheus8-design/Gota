# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated (the user had no preference): Astro, as a static site. Astro gives reusable components and built-in image optimization, which matters on a photo-heavy site, and ships almost no JavaScript. Deploy target not decided yet (Vercel is a natural fit).

## Users

People who want to buy or order artisanal cookies from By Gota: customers who visit the physical store and customers who order through WhatsApp. They usually arrive from Instagram or a shared link, most often on a phone, and decide on impulse from how the product looks.

Further audience details (age range, gifting or corporate orders) are not confirmed.

## Product Purpose

The website for By Gota, a shop that specializes in cookies. It exists to make visitors want the product right away and to turn that desire into a visit to the store or a WhatsApp order. Success means visitors reach the WhatsApp order or the store directions after seeing the cookies.

## Positioning

A premium, artisanal cookie brand with a strong identity of its own: a boutique patisserie crossed with a modern lifestyle brand, not a generic bakery or e-commerce shop. What makes the product itself different (recipe, process, ingredients) is not confirmed yet.

## Operating Context

- Sales channels: the physical store and orders through WhatsApp.
- No online cart or checkout on the site.
- Instagram (@by.gota) is the brand's existing photo source and the main entry point for visitors; its highlights include horários, club (a loyalty or subscription program, details unknown), cardápio and reviews.

## Capabilities and Constraints

- The site must link to WhatsApp ordering and show how to find the physical store.
- Store address (from Instagram bio): Rua Santo Antônio, 765 - Centro, Juiz de Fora - MG. The kiosk's sidewalk sign reads "R. Santo Antônio, 705": the number is unconfirmed.
- Orders: WhatsApp link (wa.me/553..., full number not captured yet).
- Menu (Instagram "cardápio" story, 3 June; see `docs/referencias/cardapio-story.jpg`), every cookie R$ 14:
  - Tradicional: "o clássico", vanilla dough with lots of chocolate chips.
  - Nutella: "queridinho de muitos", vanilla dough, chocolate chips, Nutella filling.
  - Kinder (Kinder Bueno): "um sucesso", vanilla dough, lots of white and milk chocolate, Kinder filling with toasted hazelnut.
  - Pistache: "trending", vanilla dough with pistachio crumble, white chocolate, toasted pistachio filling with white chocolate ganache.
  - Chocolate Triplo.
  - Red Velvet: "atemporal", red velvet dough, white chocolate, caramelized Ninho filling with cream cheese.
  - Caramelo Salgado.
  - Especial da Semana (rotating).
  - Special prices: 4 unidades R$ 54, 5 unidades R$ 65, 6 unidades R$ 77.
- Undecided / missing (must not be invented): descriptions for Chocolate Triplo and Caramelo Salgado, opening hours (an Instagram highlight "horários" exists), full WhatsApp number, brand story.
- Until those facts arrive, copy uses clearly marked placeholders (`[a confirmar]`).

## Brand Commitments

- Name: **By Gota** (written "BY GOTA" in the brief); Instagram @by.gota, profile name "GOTA", bio "seus doces favoritos".
- Existing identity on Instagram (incumbent brand, see screenshot in `docs/referencias/instagram-by-gota.jpg`): a script "Gota" wordmark in coral red on a light blue circle; highlight covers in coral red, baby blue, cream and dark chocolate, with hand-printed textures (cookie prints, checkerboard, dots, stripes); boxes printed with coral/blue/cream polka dots. Decision (client, 2026-11-01): the website uses the coral and baby-blue identity of the kiosk and Instagram, over the brief's chocolate/caramel palette. Chocolate stays as the dark accent and text color. The storefront kiosk (see `src/assets/fotos/fachada.jpg`) has a blue and cream striped awning with a scalloped edge, cream panels, and the red script "Gota" wordmark.
- Instagram flavor stories: each flavor named in a large monoline script in butter yellow, over chocolate checkerboard, coral stripes, or pale yellow-green with cookie-print texture; a short uppercase caption with a one-word label ("O CLÁSSICO", "TRENDING", "ATEMPORAL").
- Voice on Instagram: playful and self-aware humor (e.g. "o que eu quero: corpo definido / cookie de kinder ..."), close to the customer.
- The client supplied a binding visual direction brief, kept verbatim at `docs/direcao-visual.md`. It pins the aesthetic (contemporary artisanal patisserie, sophisticated minimalism), the palette family (chocolate brown, cream, buttery beige, caramel, cocoa), a display-plus-sans type pairing, photography as the lead element, layout language, personality, and an explicit avoid list. Visual decisions follow that file; DESIGN.md will turn it into a system.
- Personality: cozy, high quality, creative, exclusive, flavorful, authentic. Young without being childish, sophisticated without being cold, handmade without being amateur.
- Language: Brazilian Portuguese.

## Evidence on Hand

- Photo crops from the client's story screenshots (low resolution, about 900 px wide; replace with the originals): `esbocos/fotos/` holds tradicional, nutella, kinder-bueno, pistache, red-velvet.
- Photography: the client asked to use photos from the brand's Instagram (@by.gota, 156 posts). This environment cannot download from Instagram, so the image files must be sent by the client. Posts show chunky stuffed cookies, filled cookies with chocolate pieces, the polka-dot boxes, and people eating cookies (UGC-style videos).
- Social proof that exists: about 11 thousand Instagram followers; a "reviews" highlight (content not captured).
- No testimonials, press, customer counts, awards, or prices are on hand. Do not fabricate any of them.

## Product Principles

1. The product sells itself through the photos: every surface puts real cookies first.
2. Every page leads to an order: WhatsApp and the store's location are always close at hand.
3. Premium through restraint and craft, never through decoration.
4. Only real facts about the shop: no invented flavors, prices, reviews, or claims.

## Accessibility & Inclusion

No product-specific requirement established. Baseline WCAG 2.2 AA applies, with special care for text contrast on photos and cream backgrounds.
