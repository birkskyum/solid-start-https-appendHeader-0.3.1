
export async function GET({ request }: { request: Request }) {
  // const navigate = useNavigate();

  const body = `<html>
  <head>
    <meta http-equiv="refresh" content="0;" />
  </head>
  <body></body>
</html>`;

  return new Response(body,{
      headers: {
        "Set-Cookie": 'test',
      },
    }
  );
}
