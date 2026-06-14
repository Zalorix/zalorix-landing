import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service · Rozalix',
  description:
    'The terms and conditions that govern your use of the Rozalix website and our web design and development services.',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 15, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Rozalix
        (&ldquo;Rozalix,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) website and
        any services we provide. By using our website or engaging our services, you agree to these
        Terms.
      </p>

      <h2>Our services</h2>
      <p>
        Rozalix provides web design and development services, including strategy, design,
        development, and related support. Specific deliverables, timelines, and pricing are defined
        in a written proposal or agreement for each project.
      </p>

      <h2>Quotes &amp; project scope</h2>
      <p>
        Prices shown on our website are starting points and may vary based on scope. Every
        engagement begins with a consultation, and your final quote depends on the agreed scope of
        work. Work outside the agreed scope may require a separate quote.
      </p>

      <h2>Payments</h2>
      <p>
        Payment terms — including deposits, milestones, and final balances — are set out in your
        project proposal. Unless otherwise agreed, work begins after the initial deposit is received,
        and final deliverables are released once full payment is made.
      </p>

      <h2>Client responsibilities</h2>
      <p>You agree to provide, in a timely manner:</p>
      <ul>
        <li>Content, assets, and feedback needed to complete the project;</li>
        <li>Accurate information and necessary approvals;</li>
        <li>Confirmation that any materials you supply do not infringe third-party rights.</li>
      </ul>

      <h2>Revisions</h2>
      <p>
        The number of design revisions included is specified in your project tier or proposal.
        Additional revisions beyond that may be billed separately.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Upon receipt of full payment, ownership of the final deliverables transfers to you, except
        for any third-party assets (such as fonts, libraries, or stock media) which remain subject to
        their own licenses. We may showcase non-confidential project work in our portfolio unless we
        agree otherwise in writing.
      </p>

      <h2>Warranties &amp; disclaimers</h2>
      <p>
        We provide our services with professional care. However, our website and services are
        provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied,
        including fitness for a particular purpose, to the fullest extent permitted by law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Rozalix shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of our website or services. Our
        total liability for any claim shall not exceed the amount you paid for the services giving
        rise to the claim.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate a project as described in the project agreement. Fees for work
        completed up to the date of termination remain payable.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which Rozalix operates, without
        regard to conflict-of-law principles.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of our website or services after
        changes are posted constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms? Contact us at{' '}
        <a href="mailto:hello@rozalix.com">hello@rozalix.com</a>.
      </p>
    </LegalLayout>
  )
}
