import { Inter, Space_Grotesk, JetBrains_Mono, Newsreader, DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' })
export const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk' })
export const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains' })
export const newsreader = Newsreader({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-newsreader-f' })
export const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-dmserif-f' })
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-jakarta-f' })

export const fontVariables = [inter, spaceGrotesk, jetbrains, newsreader, dmSerif, jakarta].map((f) => f.variable).join(' ')
