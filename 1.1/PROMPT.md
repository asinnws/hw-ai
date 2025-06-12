1) Hello. Lets imagine that you're a Senior Frontend Developer who is mainly using React and TailwindCSS in your projects. I need your help to implement this feature (image attached):



There is a list of pricing cards, 3 in this case.

Goal

Recreate the UI as a single React function component (PricingCard.tsx) using TypeScript and TailwindCSS.

Props must be align with the interface below:

{ plan: string

price: string

features: string[]

isFeatured?: boolean

}

Behaviour: stack vertically < 640 px, hover elevation on desktop, full keyboard focus ring.

No inline styles; use Tailwind only.

Get just the TSX inside tsx fences.



It means, that you need to stack it in a column if screen (or container) width is less than 640px, otherwise it should be in a row WITHOUT any gaps. Consider to use the same colors and sizes for texts, margins and paddings. Also please consider to user position relative and z-index to fix possible elevation glitch issue.



Please help me to create a React (ts) project using vite and tailwind@3

2) all is fine except focus state, z-indexing and cards heights and the title. please add the title; the heights must be the same if not hovered, so please delete scale on hover. also please use focus-within instead on tabindex (it means that if I'm focusing on a button, the card should have a ring). about z-indexing: it is not a big deal but elements are stacked and are partially blocked by next adjacent element

3) add please hover state to scale a bit the hovered card