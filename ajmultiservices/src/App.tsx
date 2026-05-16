import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Star, Menu, X, Check, FileText, Home, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useForm, Watch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { projects, reviews, services } from "@/data/data";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const QuoteSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a bit about the project"),
});
type QuoteInput = z.infer<typeof QuoteSchema>;

const ReviewSchema = z.object({
  name: z.string().min(2, "Name is required"),
  rating: z.number().min(1).max(5),
  text: z.string().min(4, "Please write a short review"),
});
type ReviewInput = z.infer<typeof ReviewSchema>;

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
  ];
  return (
    <header className="w-full sticky top-0 z-50 bg-[#F5F2F2]/70 backdrop-blur">
      <div className="w-full flex items-center justify-between px-2 pr-6 lg:px-8 lg:py-0 lg:h-32">
        <a href="#" className="flex items-center min-w-0">
          <div className="flex items-center gap-1">
            <img src="/logo.png" alt="AJ logo" className="h-22 lg:h-32 opacity-75 block" />
            <div>
              <div className="text-[32px] lg:text-[40px] font-extrabold leading-none text-[#2B2A2A]">Multiservices</div>
              <div className="text-sm lg:text-[18px] tracking-widest text-[#2B2A2A] text-center">Interior & Exterior Painting</div>
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-4 h-full lg:flex ">
          {links.map(l => <a key={l.href} className="h-32 w-[98px] flex justify-center items-center text-md font-semibold text-[#2B2A2A] bg-transparent transition-all duration-300 ease-in-out hover:bg-[#2B2A2A]/7 hover:text-[#000000]" href={l.href}>{l.label}</a>)}
        </nav>

        <div className="w-[450px] flex justify-center">
          <Button variant="accent" asChild className="hidden lg:flex lg:min-w-2xs lg:min-h-14"><a href="#quote">Get a free quote</a></Button>
        </div>

        <button className="lg:hidden rounded hover:cursor-pointer" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[--line] bg-white">
          <div className="container-edge grid gap-3 py-4">
            {links.map(l => <a key={l.href} className="text-sm font-semibold text-slate-700" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
            <Button variant="accent" asChild><a href="#quote" onClick={() => setOpen(false)}>Get a free quote</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (

    <section className="hero">
      <div className="hero-inner -mt-[104px] lg:-mt-32 flex lg:min-h-screen items-center justify-center px-4 py-50">
        <div className=" flex justify-center items-center w-full max-w-6xl">
          <div className="gap-12 lg:gap-20 flex flex-col lg:flex-row m-auto w-full h-full bg-white/15 p-8 lg:p-16 py-20 text-white/80 backdrop-blur-sm justify-between">
            {/* Left: centered-ish text */}
            <div className="text-center lg:text-left lg:max-w-lg ">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Professional painters
              </p>

              <h1 className="mt-4 text-balance text-[34px] font-extrabold text-white sm:text-5xl lg:text-5xl">
                Quality painting for <br className="hidden sm:block" />
                homes & businesses
              </h1>

              <p className="hidden lg:block mx-auto mt-8 max-w-xl text-[15px] leading-7 text-white/80 lg:mx-0">
                A “done-right” crew for interior and exterior projects. We prep carefully,
                protect your space, and finish clean — so the result looks great and lasts.
              </p>


              {/* Checklist */}
              <div className="hidden lg:grid mt-8 gap-3 grid-cols-2">
                {[
                  "Neat & respectful crew",
                  "Surface prep + repairs",
                  "High-quality materials",
                  "Satisfaction walk-through",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-white/85">
                    <span className="mt-[5px] inline-block h-2 w-2 rounded-full bg-[#ffffff]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: “Need pricing fast?” card */}
            <div>
              <p className="text-md font-bold">Need pricing fast?</p>
              <p className="mt-1 text-sm text-white/75">
                Call or send a request—same-day response.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href="tel:+14075550123"
                  className=" bg-[#eeec7e] px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:opacity-85"
                >
                  Call (407) 555-0123
                </a>
                <a
                  href="mailto:quotes@ajmultiservices.com"
                  className=" border border-white/25 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Email quotes@ajmultiservices.com
                </a>
              </div>

              <div className="mt-16 border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-bold">Service area</p>
                <p className="mt-2 text-sm text-white/75">
                  Orlando • Winter Park • Kissimmee • Lake Nona • Altamonte Springs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  {
    icon: FileText,
    label: "Free Estimates",
    description: "No obligations. Get a clear, detailed quote before we start.",
  },
  {
    icon: Home,
    label: "Residential Painting",
    description: "Professional care for every room in your home, inside and out.",
  },
  {
    icon: Layers,
    label: "Interior & Exterior",
    description: "Complete painting solutions — walls, trim, ceilings, and facades.",
  },
  {
    icon: ShieldCheck,
    label: "Reliable Local Service",
    description: "Orlando-based professionals you can trust.",
  },
];

function TrustBar() {
  // 4 repeats ensures the track is always wider than any viewport
  const REPEATS = 4;
  const band = Array.from({ length: REPEATS }, () => trustItems).flat();

  const x = useMotionValue(0);
  const speed = useRef(40);
  const hovered = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const singleSetWidth = useRef(0);

  // Measure after mount (guaranteed scrollWidth) and on resize
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        singleSetWidth.current = trackRef.current.scrollWidth / REPEATS;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    const BASE_SPEED = window.innerWidth >= 1024 ? 55 : 40;
    const target = hovered.current ? 0 : BASE_SPEED;
    speed.current += (target - speed.current) * 0.04;

    const wrap = singleSetWidth.current;
    if (!wrap) return; // wait until measured
    const next = x.get() - speed.current * (delta / 1000);
    x.set(next <= -wrap ? next + wrap : next);
  });

  return (
    <section
      className="bg-slate-900 py-10"
      style={{ overflow: "hidden" }}
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
    >
      <motion.div ref={trackRef} style={{ x, display: "flex", width: "max-content" }}>
        {band.map(({ icon: Icon, label, description }, i) => (
          <div
            key={`${label}-${i}`}
            className="group flex flex-col items-center text-center gap-3 shrink-0 w-[260px] lg:w-[25vw] p-8 border-r border-white/20 transition-all duration-300 cursor-default bg-slate-900 hover:bg-white/4 hover:shadow-lg hover:-translate-y-1 box-border"
          >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/11 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:ring-4 group-hover:ring-white/10">
              <Icon className="h-12 w-12 text-blue-300 transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
            </div>
            <p className="text-[15px] font-bold text-white tracking-tight whitespace-nowrap transition-colors duration-300 group-hover:text-blue-300">
              {label}
            </p>
            <p className="text-[13px] leading-relaxed text-slate-400 max-w-[80%] opacity-85">
              {description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#F5F2F2_48%,#d7e3f7_100%)] py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#5A7ACD_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="container-edge-freewidth relative z-1 flex flex-col items-center px-4">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-1 text-2xl sm:text-3xl">Painting services we offer</h2>
          <p className="p mt-4">From single rooms to full exteriors—our process is built around prep, protection, and clean finishing.</p>

        </div>

        <div className="mt-12 flex w-full flex-col gap-6 sm:mt-14 sm:gap-7 lg:mt-16 lg:flex-row lg:justify-center lg:gap-12">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="w-full lg:max-w-md"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <Card className="group mx-auto my-0 flex items-center justify-center h-full w-full border border-white/70 bg-linear-to-br from-white/95 to-slate-100/85 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5A7ACD]/30 hover:shadow-xl hover:shadow-slate-900/12 sm:p-7 lg:mx-0 lg:max-w-120 lg:p-8">
                  <div className="flex flex-row items-center gap-6 sm:gap-8 lg:flex lg:flex-row lg:items-center lg:gap-10">
                    <div className="flex shrink-0 items-center justify-center lg:order-2 lg:min-w-36">
                      <CardContent className="m-0 flex min-h-28 min-w-28 items-center justify-center p-0 sm:min-h-32 sm:min-w-32">
                        <div className="rounded-full flex items-center justify-center bg-[#5A7ACD]/10 p-5 ring-1 ring-[#5A7ACD]/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5A7ACD]/20 group-hover:ring-4 group-hover:ring-[#5A7ACD]/10 sm:p-6 lg:p-6">
                          <Icon className="h-12 w-12 text-[#5A7ACD] transition-colors duration-300  lg:h-24 lg:w-24" />
                        </div>
                      </CardContent>
                    </div>
                    <CardHeader className="min-w-0 flex-1 px-0 py-1 lg:py-0 lg:text-left">
                      <CardTitle className="text-lg leading-snug lg:text-[22px]">{s.title}</CardTitle>
                      <CardDescription>
                        <ul className="mt-4 grid gap-2.5 lg:gap-4">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 lg:gap-3">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#5A7ACD]" /> {b}
                            </li>
                          ))}
                        </ul>
                      </CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 w-full max-w-6xl sm:mt-14 lg:mt-18">
          <div className="relative overflow-hidden bg-linear-to-br from-[#1f3158] via-[#304875] to-[#5A7ACD] px-6 py-10 text-white shadow-[0_26px_80px_rgba(31,49,88,0.26)] sm:px-9 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.18),transparent_32%)]" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Ready to transform your space?</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/78">Send us a few details and we'll follow up with clear next steps.</p>
              </div>
              <Button
                variant="outline"
                asChild
                className="group h-[52px] w-full  border border-white/55 bg-white/95 px-7 text-[15px] font-bold text-[#26385f] shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#eeec7e] hover:bg-[#eeec7e] hover:text-[#1e2a4b] hover:shadow-[0_20px_42px_rgba(15,23,42,0.24)] active:translate-y-0 sm:w-auto sm:min-w-56"
              >
                <a href="#quote" className="inline-flex items-center justify-center gap-2">
                  Get a free quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-[#5A7ACD] border-y border-[--line]">
      <div className="container-edge grid gap-32 lg:grid-cols-2 lg:items-center">
        <div className="text-[#fffcf2] ">
          <p className="kicker">About</p>
          <h2 className="h2 mt-1">A simple, professional process</h2>
          <p className=" mt-3">
            We focus on doing the basics extremely well: prep the surface properly, protect floors and furniture, apply durable coatings,
            and finish with a clean site. You get a job that looks sharp — and stays sharp.
          </p>
          <div className="mt-6 grid gap-3">
            {["1) Quick estimate", "2) Prep & protect", "3) Paint & finish", "4) Final walk-through"].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-[--brand]" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[--radius] bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1604649418977-675d4b6320e6?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Painting work in progress" className="h-[320px] w-full rounded-[--radius] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section bg-[#5A7ACD]">
      <div className="container-edge text-[#fffcf2]">
        <div className="max-w-2xl">
          <p className="kicker">Gallery</p>
          <h2 className="h2 mt-1">Recent work</h2>
          <p className=" mt-3">Gotta swap these for the real before/after</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <a key={p.id} href="#quote" className="group block">
              <div className="overflow-hidden rounded-[--radius] border border-[--line] bg-white shadow-sm">
                <img src={p.image} alt={p.title} className="lg:h-80 h-40 w-full object-cover transition-transform group-hover:scale-[1.10]" />
                <div className="p-3 text-sm font-semibold text-slate-800">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section bg-[#F5F2F2]">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="kicker">Reviews</p>
          <h2 className="h2 mt-1">What clients say</h2>
          <p className="p mt-3">A few highlights—add more as you collect them.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <CardTitle className="text-base">{r.name}</CardTitle>
                <CardDescription>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={"h-4 w-4 " + (i < r.rating ? "" : "opacity-30")} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-[15px] leading-7 text-slate-700">{r.text}</p>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteInput>({
    resolver: zodResolver(QuoteSchema),
  });

  const onSubmit = async (data: QuoteInput) => {
    console.log("Quote request:", data);
    await new Promise((r) => setTimeout(r, 500));
    alert("Thanks! We'll reach out shortly.");
    reset();
  };

  return (
    <section id="quote" className="section border-t border-[--line] bg-[#5A7ACD]">
      <div className="container-edge-freewidth w-[95%] lg:w-[65%] grid gap-10 lg:grid-cols-2">
        <div className="text-[#fffcf2] flex flex-col items-left justify-center">
          <p className="kicker">Get a free quote</p>
          <h2 className="text-5xl font-extrabold spacing mt-1">Tell us about your project</h2>
          <p className="text-md mt-4">Include room sizes, surfaces, and your timeline. If you have photos, mention it and we’ll request them.</p>
          <div className="mt-8 grid gap-3 text-sm">
            <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="tel:+14075550123"><Phone className="h-4 w-4" /> (407) 555-0123</a>
            <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="mailto:quotes@ajmultiservices.com"><Mail className="h-4 w-4" /> quotes@ajmultiservices.com</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Orlando, FL</span>
          </div>
        </div>

        <div className="rounded-[--radius] border border-[--line] bg-white p-6 shadow-sm">
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Name</label>
              <Input placeholder="Your name" {...register("name")} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
              <Input type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Phone (optional)</label>
              <Input placeholder="(###) ###-####" {...register("phone")} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Project details</label>
              <Textarea placeholder="Interior/exterior, surfaces, repairs needed, timeframe…" {...register("message")} />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <Button type="submit" variant="accent" disabled={isSubmitting}>Send request</Button>
            <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your project.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[--line] bg-[#F5F2F2]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-[#63584b]">
        <div className="flex lg:flex-row justify-between">
          <div>
            <div className="text-base font-extrabold text-[--ink]">AJ Multiservices</div>
            <p className="mt-2">Interior & Exterior Painting</p>
            <p className="mt-2">Central Florida</p>
          </div>
          <div className="hidden lg:inline">
            <div className="font-bold text-[--ink]">Quick links</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:text-[--ink]" href="#services">Services</a>
              <a className="hover:text-[--ink]" href="#reviews">Reviews</a>
              <a className="hover:text-[--ink]" href="#quote">Get a Quote</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-[--ink]">Contact</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:text-[--ink]" href="tel:+14075550123">(407) 555-0123</a>
              <a className="hover:text-[--ink]" href="mailto:quotes@ajmultiservices.com">quotes@ajmultiservices.com</a>
              <span>Orlando, FL</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[--line] pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} AJ Multiservices. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function LeaveReview() {
  const { token } = useParams();

  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting }, } = useForm<ReviewInput>({
    resolver: zodResolver(ReviewSchema),
  });

  const reviewText = watch("text", "");

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ReviewInput) => {
    console.log("Review submitted:", data, token);
    const res = await fetch(`/api/reviews/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if (!res.ok) {
      //const err = await res.json();
      alert(response.error || "Submission failed");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F2F2] px-4">
      <div className="w-full max-w-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-extrabold text-[--ink]">
          Leave a review
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          We appreciate your feedback.
        </p>

        <form className={`mt-6 grid gap-4 ${submitted ? "opacity-75" : ""}`} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-semibold">Your name</label>
            <Input {...register("name")}
              disabled={submitted}
              className={submitted ? "bg-slate-100/60" : ""}
            />
            {errors?.name && <p className="text-sm text-red-600">{String(errors.name.message)}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold">Rating</label>
            <div className="mt-2 flex">
              {[1, 2, 3, 4, 5].map((n) => {
                const active =
                  hoverRating !== null ? n <= hoverRating : n <= selectedRating;

                return (
                  <button
                    key={n}
                    type="button"
                    disabled={submitted}
                    className={`flex focus:outline-none w-10 items-center justify-center ${submitted ? "cursor-default pointer-events-none" : "cursor-pointer"}`}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => {
                      setSelectedRating(n);
                      setValue("rating", n, { shouldValidate: true });
                    }}
                    aria-label={`Rate ${n} stars`}
                  >
                    <Star
                      className={`h-7 w-7 transition-all duration-150 ${active ? "text-amber-500 scale-110" : "text-slate-300"}`}
                      fill={active ? "currentColor" : "none"}
                    />
                  </button>
                );
              })}
              {errors.rating && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.rating.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold">Review</label>
            <Textarea {...register("text")}
              disabled={submitted}
              className={submitted ? "bg-slate-100/60" : ""}
            />
            <div className="flex justify-between text-xs mt-1">
              <span className="text-slate-500">
                {reviewText.length} characters
              </span>
            </div>
            {errors?.text && <p className="text-sm text-red-600">{String(errors.text.message)}</p>}
          </div>

          {!submitted && (
            <Button type="submit" variant="accent" disabled={isSubmitting || selectedRating === 0}>
              Submit review
            </Button>
          )}
        </form>
        {submitted && (
          <div className="flex flex-col items-center text-center py-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <Check className="h-7 w-7 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-[--ink]">
              Thank you for your review!
            </h2>
            <p className="mt-2 max-w-sm text-md text-slate-600">
              Your review has been submitted successfully.
            </p>
            <p className="mt-4 text-md text-slate-400">
              You may now close this page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Admin() {
  const [loading, setLoading] = useState(false);
  const [reviewUrl, setReviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);


  const generateLink = async () => {
    setLoading(true);
    setError(null);
    setReviewUrl(null);

    try {
      console.log("reaches");
      const res = await fetch("/api/reviews/create-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          maxUses: 1,
          expiresInDays: 14,
        }),
      });
      console.log("reaches");
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate link");
      }

      const data = await res.json();
      setReviewUrl(data.reviewUrl);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onCopy = () => {
    navigator.clipboard.writeText(reviewUrl);
    setCopied(true);
  }

  return (
    <div className="min-h-screen bg-[#F5F2F2] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-6 shadow-md flex flex-col items-center">
        <div className="w-full ">
          <h1 className="text-2xl font-extrabold text-[--ink]">
            Admin
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Generate review links for clients.
          </p>
        </div>
        <Button
          className="mt-6 w-full"
          variant="accent"
          onClick={generateLink}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Link"}
        </Button>

        {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}

        {reviewUrl && (
          <div className="w-full mt-6 rounded border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">
              Review link
            </p>

            <div className="mt-2 flex items-center gap-2">
              <input
                readOnly
                value={reviewUrl}
                className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
              />
              <Button
                type="button"
                variant="outline"
                onClick={onCopy}
              >
                Copy
              </Button>
            </div>
          </div>
        )}

        {copied && (
          <p className="mt-4 text-sm font-bold justify-end flex text-green-600">
            Link copied to clipboard.
          </p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full">
              <Nav />
              <Hero />
              <TrustBar />
              <Services />
              <Work />
              <Reviews />
              <Quote />
              <Footer />
            </div>
          }
        />
        <Route path="/review/:token" element={<LeaveReview />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
