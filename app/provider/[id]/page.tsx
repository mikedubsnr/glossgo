import { allProviders } from "@/lib/data";
import ProviderProfileClient from "@/components/ProviderProfileClient";

export function generateStaticParams() {
  return allProviders.map((provider) => ({
    id: provider.id.toString(),
  }));
}

export default async function ProviderProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const provider = allProviders.find((p) => p.id === Number(id)) || allProviders[0];
  return <ProviderProfileClient provider={provider} />;
}
