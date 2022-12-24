import useSWR from "swr";
import s5Client from "./s5Client";

const fetcher = async (url) => {
  try {
    const portalUrl = await s5Client.portalUrl();
    const portalUrlObject = new URL(portalUrl);

    portalUrlObject.pathname = url;

    const absoluteUrl = portalUrlObject.toString();

    return fetch(absoluteUrl).then((response) => response.json());
  } catch (error) {
    return fetch(url).then((response) => response.json());
  }
};

export default function useAccounts() {
  return useSWR("/__internal/do/not/use/accounts", fetcher);
}
