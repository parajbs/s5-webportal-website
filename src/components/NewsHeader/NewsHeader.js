import * as React from "react";
import Link from "../Link";
import { ArrowRight, DiscordSmall } from "../Icons";

const NewsHeader = () => {
  const link = null;
  const title = null;

  if (!link) return null;

  return (
    <div className="bg-palette-500 px-8 p-3">
      <div className="max-w-layout mx-auto">
        <div className="flex justify-between">
          <Link
            {...link}
            className="text-palette-300 font-content leading-8 overflow-hidden text-base hover:opacity-90 transition-opacity duration-200"
          >
            <ArrowRight className="mr-2 flex-shrink-0 fill-current text-primary" />
            <span className="truncate">{title}</span>
          </Link>

          <div className="ml-auto items-center pl-8 hidden desktop:block">
            <Link
              href="https://discord.gg/8qUbps4sC9"
              className="text-palette-300 leading-8 font-content flex items-center flex-shrink-0 whitespace-nowrap hover:text-palette-200 transition-colors duration-200 space-x-2"
            >
              <DiscordSmall className="fill-current" />
              <span>Join S5 Network Discord</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsHeader.propTypes = {};

NewsHeader.defaultProps = {};

export default NewsHeader;
