import { ContentLink } from "@/app/components/content-link";
import { Logo } from "@/app/components/logo";
import { PageSection } from "@/app/components/page-section";
import { getModules, type Module } from "@/app/data/lessons";
import { BookIcon } from "@/app/icons/book-icon";
import { ClockIcon } from "@/app/icons/clock-icon";
import { LessonsIcon } from "@/app/icons/lessons-icon";
import { PlayIcon } from "@/app/icons/play-icon";

export default function CourseHomePage() {
    function formatDuration(seconds: number): string {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);

        return h > 0 ? (m > 0 ? `${h} hr ${m} min` : `${h} hr`) : `${m} min`;
    }

    let modules = getModules();
    let lessons = modules.flatMap(({ lessons }) => lessons);
    let duration = lessons.reduce(
        (sum, { video }) => sum + (video?.duration ?? 0),
        0
    );
    return (
        <div className="relative mx-auto max-w-7xl">
            <div
                className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128"
            >
                <img
                    alt=""
                    src="https://assets.tailwindcss.com/templates/compass/hero-background.png"
                    className="absolute inset-0 h-full w-full mask-l-from-60% object-cover object-center opacity-40"
                />
                <div
                    className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                >
                </div>
            </div>
            <div className="mx-auto max-w-6xl">
                <div className="relative">
                    <div className="px-4 pt-48 pb-12 lg:py-24">
                        <Logo className="h-8 fill-gray-950 dark:fill-white" />
                        <h1 className="sr-only">Course overview</h1>
                        <p
                            className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400"
                        >
                            A comprehensive journey that helps you navigate uncertainty
                            and make choices aligned with your values and goals.
                        </p>
                        <div
                            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white"
                        >
                            <div className="flex items-center gap-1.5">
                                <BookIcon
                                    className="stroke-gray-950/40 dark:stroke-white/40"
                                />
                                {modules.length} modules
                            </div>
                            <span
                                className="hidden text-gray-950/25 sm:inline dark:text-white/25"
                            >
                                &middot;
                            </span>
                            <div className="flex items-center gap-1.5">
                                <LessonsIcon
                                    className="stroke-gray-950/40 dark:stroke-white/40"
                                />
                                {lessons.length} lessons
                            </div>
                            <span
                                className="hidden text-gray-950/25 sm:inline dark:text-white/25"
                            >
                                &middot;
                            </span>
                            <div className="flex items-center gap-1.5">
                                <ClockIcon
                                    className="stroke-gray-950/40 dark:stroke-white/40"
                                />
                                {formatDuration(duration)}
                            </div>
                        </div>
                        <div className="mt-10">
                            <a
                                href={`/${modules[0].lessons[0].id}`}
                                className="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                <PlayIcon className="fill-white" />
                                Start the course
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
                        {
                            modules.map((module: Module, index: number) => (
                                <PageSection
                                    key={module.id}
                                    id={module.id}
                                    title={`Part ${index + 1}`}
                                >
                                    <div className="max-w-2xl">
                                        <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">
                                            {module.title}
                                        </h2>
                                        <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                                            {module.description}
                                        </p>

                                        <ol className="mt-6 space-y-4">
                                            {module.lessons.map((lesson) => (
                                                <li>
                                                    <ContentLink
                                                        title={lesson.title}
                                                        description={lesson.description}
                                                        href={`/${lesson.id}`}
                                                        type="video"
                                                        duration={lesson.video?.duration}
                                                    />
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </PageSection>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
