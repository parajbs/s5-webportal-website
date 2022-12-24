import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FooterNavigation = () => {
  const { allFooterYaml } = useStaticQuery(graphql`
    query FooterQuery {
      allFooterYaml {
        nodes {
          header
          links {
            href
            title
          }
        }
      }
    }
  `);
  const sections = allFooterYaml.nodes;

  return (
    <div className="bg-palette-500 px-8 py-14">
      <div className="max-w-content mx-auto grid grid-cols-1 desktop:grid-cols-5 desktop:gap-x-6 gap-y-4 desktop:gap-y-0">
        {sections.map((section) => (
          <div key={section.header}>
            {/* desktop */}


            {/* mobile */}
            <div className="desktop:hidden">

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FooterNavigation.propTypes = {};

FooterNavigation.defaultProps = {};

export default FooterNavigation;
