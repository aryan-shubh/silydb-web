import {
  Activity,
  ArrowRight,
  BarChart3,
  GitBranch,
  Map,
  ShieldCheck,
} from "lucide-react";

import { queueLaunchRequest } from "./actions";

const regionSeries = [
  {
    code: "iad",
    label: "N. Virginia",
    loadClass: "w-[84%]",
    latency: 18,
  },
  { code: "fra", label: "Frankfurt", loadClass: "w-[68%]", latency: 28 },
  { code: "sin", label: "Singapore", loadClass: "w-[74%]", latency: 32 },
  { code: "syd", label: "Sydney", loadClass: "w-[46%]", latency: 41 },
];

const signalSeries = [
  { key: "s01", heightClass: "h-[22%]" },
  { key: "s02", heightClass: "h-[28%]" },
  { key: "s03", heightClass: "h-[24%]" },
  { key: "s04", heightClass: "h-[39%]" },
  { key: "s05", heightClass: "h-[43%]" },
  { key: "s06", heightClass: "h-[38%]" },
  { key: "s07", heightClass: "h-[52%]" },
  { key: "s08", heightClass: "h-[61%]" },
  { key: "s09", heightClass: "h-[57%]" },
  { key: "s10", heightClass: "h-[72%]" },
  { key: "s11", heightClass: "h-[68%]" },
  { key: "s12", heightClass: "h-[81%]" },
  { key: "s13", heightClass: "h-[78%]" },
  { key: "s14", heightClass: "h-[88%]" },
];

const chartPresets = [
  { name: "StratChain", tone: "bg-[#1f9a8a]", value: "91%" },
  { name: "ChartScale", tone: "bg-[#d97706]", value: "64ms" },
  { name: "Region Fanout", tone: "bg-[#6d5dfc]", value: "12x" },
];

type HomeProps = {
  searchParams: Promise<{ queued?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const queued = (await searchParams).queued === "true";

  return (
    <main className="min-h-svh bg-[#f7f5ed] text-[#151515]">
      <section className="relative isolate overflow-hidden border-b border-[#151515]/10">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="h-full w-full bg-[linear-gradient(#d9d3c5_1px,transparent_1px),linear-gradient(90deg,#d9d3c5_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="mx-auto flex min-h-svh w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between border-b border-[#151515]/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-md bg-[#151515] text-[#f7f5ed]">
                <BarChart3 className="size-5" aria-hidden="true" />
              </div>
              <span className="text-base font-semibold">SiliDB</span>
            </div>
            <a
              href="#intake"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-[#151515]/15 bg-white/70 px-3 text-sm font-medium hover:bg-white"
            >
              Start
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#151515]/15 bg-white/80 px-3 py-2 text-sm font-medium">
                <Activity
                  className="size-4 text-[#1f9a8a]"
                  aria-hidden="true"
                />
                Data operations for chart-led launches
              </div>
              <h1 className="text-5xl leading-[0.95] font-semibold text-balance sm:text-6xl lg:text-7xl">
                Parallel-region analytics from the first request.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d4a43]">
                SiliDB shapes intake data into chart presets, region fanout, and
                launch signals that can scale with the product.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#intake"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-[#151515] px-4 text-sm font-semibold text-white hover:bg-[#2a2824]"
                >
                  Join the build queue
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#model"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-[#151515]/15 bg-white px-4 text-sm font-semibold hover:bg-[#fffbf0]"
                >
                  View model
                  <GitBranch className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-md border border-[#151515]/10 bg-[#151515] p-4 text-white shadow-2xl shadow-[#151515]/15">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <div>
                    <p className="text-sm text-white/60">StratChain signal</p>
                    <p className="text-2xl font-semibold">88.4%</p>
                  </div>
                  <div className="rounded-md bg-[#1f9a8a]/20 px-3 py-2 text-sm text-[#6ee7d2]">
                    +14.2
                  </div>
                </div>

                <div className="mt-5 flex h-48 items-end gap-2">
                  {signalSeries.map((signal) => (
                    <div
                      className={`min-w-0 flex-1 rounded-t-sm bg-[#f2c14e] ${signal.heightClass}`}
                      key={signal.key}
                    />
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {chartPresets.map((preset) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/5 p-3"
                      key={preset.name}
                    >
                      <div className={`mb-3 h-1.5 rounded ${preset.tone}`} />
                      <p className="text-sm text-white/55">{preset.name}</p>
                      <p className="mt-1 text-xl font-semibold">
                        {preset.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-[#151515]/10 bg-white p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    <Map className="size-4 text-[#6d5dfc]" aria-hidden="true" />
                    Parallel regions
                  </div>
                  <div className="space-y-3">
                    {regionSeries.map((region) => (
                      <div key={region.code}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span>{region.label}</span>
                          <span className="text-[#6c665c]">
                            {region.latency}ms
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-[#ece6d8]">
                          <div
                            className={`h-2 rounded-full bg-[#6d5dfc] ${region.loadClass}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-[#151515]/10 bg-white p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    <GitBranch
                      className="size-4 text-[#d97706]"
                      aria-hidden="true"
                    />
                    Signal path
                  </div>
                  <div className="space-y-3 text-sm text-[#4d4a43]">
                    <p>Intake</p>
                    <p>Preset review</p>
                    <p>Region plan</p>
                  </div>
                  <div className="mt-5 rounded-md bg-[#f4efe2] p-3 text-sm">
                    The web flow stays decoupled from storage details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="model"
        className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-[#151515] px-3 py-2 text-sm font-medium text-white">
            <GitBranch className="size-4" aria-hidden="true" />
            Launch model
          </div>
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
            The first web surface is ready for intake, presets, and regions.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Intake",
              "Capture every web inquiry with chart stack and data sources.",
            ],
            [
              "Chart presets",
              "Store reusable ChartScale-style configuration blocks.",
            ],
            [
              "Regional planning",
              "Track active regions, load share, and latency.",
            ],
          ].map(([name, body]) => (
            <div
              className="rounded-md border border-[#151515]/10 bg-white p-5"
              key={name}
            >
              <p className="font-semibold">{name}</p>
              <p className="mt-3 text-sm leading-6 text-[#5d574e]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="intake"
        className="border-t border-[#151515]/10 bg-[#151515] px-5 py-16 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium">
              <ShieldCheck
                className="size-4 text-[#6ee7d2]"
                aria-hidden="true"
              />
              Launch intake
            </div>
            <h2 className="max-w-xl text-3xl leading-tight font-semibold sm:text-5xl">
              Capture the first launch request directly from the page.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
              Submissions return a queued state while the storage layer is kept
              out of this build.
            </p>
            {queued ? (
              <p className="mt-5 rounded-md border border-[#6ee7d2]/30 bg-[#6ee7d2]/10 px-4 py-3 text-sm text-[#b9fff3]">
                Request queued.
              </p>
            ) : null}
          </div>

          <form
            action={queueLaunchRequest}
            className="grid gap-4 rounded-md border border-white/10 bg-white/[0.06] p-5"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm" htmlFor="email">
                Email
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  aria-label="Email"
                  className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                  placeholder="you@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm" htmlFor="company">
                Company
                <input
                  id="company"
                  name="company"
                  aria-label="Company"
                  className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                  placeholder="Studio / team"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label
                className="grid gap-2 text-sm md:col-span-1"
                htmlFor="role"
              >
                Role
                <input
                  id="role"
                  name="role"
                  aria-label="Role"
                  className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                  placeholder="Founder"
                />
              </label>
              <label
                className="grid gap-2 text-sm md:col-span-1"
                htmlFor="chartStack"
              >
                Chart stack
                <select
                  id="chartStack"
                  name="chartStack"
                  defaultValue="stratchain"
                  aria-label="Chart stack"
                  className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                >
                  <option value="stratchain">StratChain</option>
                  <option value="chartscale">ChartScale</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </label>
              <label
                className="grid gap-2 text-sm md:col-span-1"
                htmlFor="regionCount"
              >
                Regions
                <input
                  required
                  id="regionCount"
                  name="regionCount"
                  type="number"
                  min="1"
                  max="32"
                  defaultValue="8"
                  aria-label="Regions"
                  className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm" htmlFor="dataSources">
              Data sources
              <input
                required
                id="dataSources"
                name="dataSources"
                aria-label="Data sources"
                className="h-11 rounded-md border border-white/15 bg-white px-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                placeholder="Stripe, Segment, Sheets"
              />
            </label>

            <label className="grid gap-2 text-sm" htmlFor="useCase">
              Use case
              <textarea
                required
                id="useCase"
                name="useCase"
                rows={4}
                aria-label="Use case"
                className="resize-none rounded-md border border-white/15 bg-white p-3 text-[#151515] outline-none focus:border-[#6ee7d2]"
                placeholder="What should the first dashboard prove?"
              />
            </label>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f2c14e] px-4 text-sm font-semibold text-[#151515] hover:bg-[#ffd86a]"
            >
              Queue request
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
