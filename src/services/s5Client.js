import { S5Client } from "s5-client-js";

export default new S5Client(process.env.GATSBY_API_URL);
