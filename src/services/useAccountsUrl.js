import * as React from "react";
import s5Client from "./s5Client";

export default function useAccountsUrl() {
  const [url, setUrl] = React.useState("");
  const createAccountsUrl = React.useCallback((path = "") => url && new URL(path, url).toString(), [url]);

  React.useEffect(() => {
    (async function resolve() {
      const portalUrl = new URL(await s5Client.portalUrl());

      portalUrl.host = `account.${portalUrl.host}`;

      setUrl(portalUrl.toString());
    })();
  }, [setUrl]);

  return createAccountsUrl;
}
