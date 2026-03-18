import { getPayloadClient } from "@/lib/payload";
import NegotiationSimulationsClient, { type NegotiationSimulation } from "./NegotiationSimulationsClient";

function WorkInProgress() {
  return (
    <section className="min-h-[60vh] px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block text-black">
          Negotiation Simulations
        </h1>
        <p className="text-lg text-gray-700 mt-6">Negotiation simulations are a work in progress. Check back soon.</p>
      </div>
    </section>
  );
}

export default async function NegotiationSimulationsPage() {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "negotiation-simulations",
      where: {
        published: {
          equals: true,
        },
      },
      sort: "sortOrder",
      limit: 100,
      depth: 1,
    });

    const events: NegotiationSimulation[] = result.docs
      .map((doc) => {
        const image =
          doc.image && typeof doc.image === "object" && "url" in doc.image && doc.image.url
            ? {
                url: doc.image.url,
                alt:
                  (typeof doc.image.alt === "string" && doc.image.alt) ||
                  `Negotiation simulation image for ${doc.title}`,
              }
            : null;

        return {
          id: doc.id,
          title: doc.title,
          description: doc.description,
          image,
        };
      })
      .filter((event): event is NegotiationSimulation => event.image !== null);

    if (events.length === 0) {
      return <WorkInProgress />;
    }

    return <NegotiationSimulationsClient events={events} />;
  } catch {
    return <WorkInProgress />;
  }
}
