import { useRouter } from "next/router";

export default function QueryRoute() {
  const router = useRouter();
  const { nome } = router.query;

  return <div>Olá {nome}</div>;
}
