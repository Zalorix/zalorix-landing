import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy · Rozalix',
  description:
    'How Rozalix collects, uses, and protects your information when you use our website and services.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 15, 2026">
      <p>
        This Privacy Policy explains how Rozalix (&ldquo;Rozalix,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your information when
        you visit our website or engage our services. By using our website, you agree to the
        practices described here.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information in two ways:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> When you submit our contact form or get in touch,
          we collect details such as your first and last name, email address, phone number, company,
          project type, budget range, and any project details you share.
        </li>
        <li>
          <strong>Information collected automatically.</strong> Like most websites, we may collect
          basic technical and usage data — such as your browser type, device, pages visited, and
          referring source — through cookies and analytics tools.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and provide quotes or consultations;</li>
        <li>Deliver, maintain, and improve our services;</li>
        <li>Communicate with you about your project or our offerings;</li>
        <li>Understand how our website is used so we can improve it;</li>
        <li>Comply with legal obligations and protect our rights.</li>
      </ul>

      <h2>Cookies &amp; analytics</h2>
      <p>
        We may use cookies and similar technologies to operate our website and understand traffic.
        You can control or disable cookies through your browser settings, though some parts of the
        site may not function as intended without them.
      </p>

      <h2>How we share information</h2>
      <p>
        We do <strong>not</strong> sell your personal information. We may share it only with trusted
        service providers who help us operate our business (for example, hosting, email, or
        analytics providers), and only to the extent needed to perform those services. We may also
        disclose information where required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information only for as long as necessary to fulfill the purposes described in
        this policy, including to respond to inquiries, deliver services, and meet legal or
        accounting requirements.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, or delete your
        personal information, or to object to or restrict certain processing. To make a request,
        contact us at <a href="mailto:hello@rozalix.com">hello@rozalix.com</a>.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect your information. However, no method of transmission
        or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website may link to third-party sites. We are not responsible for the privacy practices
        of those sites and encourage you to review their policies.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Our website and services are not directed to children under 13, and we do not knowingly
        collect personal information from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <a href="mailto:hello@rozalix.com">hello@rozalix.com</a>.
      </p>
    </LegalLayout>
  )
}
