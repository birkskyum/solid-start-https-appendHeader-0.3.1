import { storage } from "../../components/session.js";

export async function GET({ request }: { request: Request }) {
  
  const session = await storage.getSession();
  session.set("userInfo", "testdata");


  session.set("idToken", "testdata");
  session.set("scope", "testdata");
  session.set("tokenType", "testdata");
  session.set("userInfo", "testdata");
  session.set("userInfo", "testdata");
  session.set("userId", "testdata");


  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  headers.append("Set-Cookie", await storage.commitSession(session));

  const body = `<html>
  <head>
  </head>
  <body></body>
</html>`;

  return new Response(body, { headers });

}
