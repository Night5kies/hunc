import { getPayloadClient } from "@/lib/payload";
import ScheduleClient, { type ScheduleEvent, type ScheduleEventsByMonth } from "./ScheduleClient";

function groupByMonth(events: ScheduleEvent[]): ScheduleEventsByMonth {
  return events.reduce<ScheduleEventsByMonth>((acc, event) => {
    const monthEvents = acc[event.month] || [];
    monthEvents.push({
      date: event.date,
      time: event.time,
      title: event.title,
      type: event.type,
      location: event.location,
      description: event.description,
      image: event.image,
    });
    acc[event.month] = monthEvents;
    return acc;
  }, {});
}

function WorkInProgress() {
  return (
    <section className="min-h-[60vh] px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 inline-block text-black">
          Schedule
        </h1>
        <p className="text-lg text-gray-700 mt-6">Schedule is a work in progress. Check back soon.</p>
      </div>
    </section>
  );
}

export default async function SchedulePage() {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "schedule-events",
      where: {
        published: {
          equals: true,
        },
      },
      sort: "sortOrder",
      limit: 200,
      depth: 1,
    });

    const mappedEvents: ScheduleEvent[] = result.docs.map((doc) => ({
      image:
        doc.image && typeof doc.image === "object" && "url" in doc.image && doc.image.url
          ? {
              url: doc.image.url,
              alt:
                (typeof doc.image.alt === "string" && doc.image.alt) ||
                `Schedule image for ${doc.title}`,
            }
          : undefined,
      month: doc.month as ScheduleEvent["month"],
      date: doc.dateLabel,
      time: doc.time || undefined,
      title: doc.title,
      type: doc.type as ScheduleEvent["type"],
      location: doc.location || undefined,
      description: doc.description || undefined,
    }));

    if (mappedEvents.length === 0) {
      return <WorkInProgress />;
    }

    const events = groupByMonth(mappedEvents);
    return <ScheduleClient eventsByMonth={events} />;
  } catch {
    return <WorkInProgress />;
  }
}
