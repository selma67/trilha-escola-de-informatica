import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/CoursePage";
import { getCourse } from "@/data/courses";

const course = getCourse("curso-excel-sorocaba");

export const Route = createFileRoute("/curso-excel-sorocaba")({
  component: () => <CoursePage course={course} />,
  head: () => ({
    meta: [
      { title: course.seoTitle },
      { name: "description", content: course.seoDescription },
      { property: "og:title", content: course.seoTitle },
      { property: "og:description", content: course.seoDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `/${course.slug}` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: `${course.title} em Sorocaba`,
        description: course.seoDescription,
        provider: {
          "@type": "EducationalOrganization",
          name: "Trilha Escola de Informática",
          address: { "@type": "PostalAddress", streetAddress: "Rua Assis Machado, 297", addressLocality: "Sorocaba", addressRegion: "SP", addressCountry: "BR" },
        },
      }),
    }],
  }),
});
