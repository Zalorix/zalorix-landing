import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../page'

describe('landing page', () => {
  it('renders the hero headline', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Enterprise-grade web/i)
  })
})
