import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ZMark } from '../ZMark'

describe('ZMark', () => {
  it('renders an svg with the three monogram shapes', () => {
    const { container } = render(<ZMark />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('viewBox')).toBe('0 0 100 100')
    expect(container.querySelectorAll('rect').length).toBe(2)
    expect(container.querySelectorAll('polygon').length).toBe(1)
  })
})
