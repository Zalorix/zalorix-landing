import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RMark } from '../RMark'

describe('RMark', () => {
  it('renders an svg with the monogram shapes', () => {
    const { container } = render(<RMark />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('viewBox')).toBe('0 0 100 100')
    expect(container.querySelectorAll('rect').length).toBe(4)
    expect(container.querySelectorAll('polygon').length).toBe(1)
  })
})
