import * as React from "react";
import { DomainName } from "../components/DomainName";
import { Section } from "../components/Layout";
import emails from "../services/emails";

const P = ({ className, ...props }) => <p className={`my-4 leading-relaxed ${className}`} {...props} />;

const TermsPage = () => (
  <>
    <Section className="bg-white">
      <h1 className="capitalize">
        <DomainName /> Terms of Use
      </h1>
      <P className="text-palette-300">Last Updated: December 23, 2022</P>
      <P>
        Welcome to <DomainName />! These terms of use (the "Terms of Use") are a legal agreement between you and S5,
        a Delaware-based corporation ("S5", "we", "us" or "our") setting forth, among other things,
        the terms and conditions for your access and use of the <DomainName /> website, and any related sub-domains,
        operated by S5 (the "Website" or "<DomainName />
        ").
      </P>
      <P>
        <strong>Questions.</strong> If you have any questions regarding the Terms of Use or wish to report any issue
        relating to the Website, its content or the Services you were provided, please contact us by email at{" "}
        <a className="text-primary" href={`mailto:${emails.contact}`}>
          {emails.contact}
        </a>
        .
      </P>
    </Section>
  </>
);

export default TermsPage;
