import * as React from "react";
import { DomainName } from "../components/DomainName";
import { Section } from "../components/Layout";

const P = ({ className, ...props }) => <p className={`my-4 leading-relaxed ${className}`} {...props} />;

const PrivacyPolicyPage = () => (
  <>
    <Section className="bg-white">
      <h1 className="capitalize">
        <DomainName /> Privacy Policy
      </h1>
      <P className="text-palette-300">Last Updated: December 23, 2022</P>
      <P>
        We are committed to protecting your privacy. That is because we base our business on trust you place in us. This
        policy describes our practices regarding personal and account information collected through our website.
      </P>
    </Section>
  </>
);

export default PrivacyPolicyPage;
