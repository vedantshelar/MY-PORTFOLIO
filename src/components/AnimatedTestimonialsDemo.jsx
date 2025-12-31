import { AnimatedTestimonials } from "./animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Bachelor of Engineering (B.E.), Information Technology",
      name: "Manjara Charitable Trusts Rajiv Gandhi Institute of Technology",
      designation: "(2025 – Present)",
      src: "/rgit.webp",
    },
    {
        quote:
        "Diploma , Information Technology",
      name: "Kala Vidya Mandir Institute of Technology, Mumbai",
      designation: "(2022 – 2025)",
      src: "/kvmit.jpg",
    },
    {
      quote:
        "12th (HSC – Commerce)",
      name: "Kirti M. Doongursee College, Mumbai",
      designation: "(2020 – 2022)",
      src: "/kirticlg.jpg",
    },
    {
        quote:
        "10th (SSC)",
      name: "Sharadashram Vidyamandir Boys High School & Junior College of Commerce, Mumbai",
      designation: "(2019 – 2020)",
      src: "/svm.avif",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
