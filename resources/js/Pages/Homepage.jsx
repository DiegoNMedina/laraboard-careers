import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Front from "@/Layouts/Front";
import JobCard from "@/Components/JobCard";
import { usePage } from "@inertiajs/inertia-react";
import JobFilters from "@/Components/JobFilters";
import t from "@/Hooks/useTranslate";

export default function Homepage({
    jobs,
    departments,
    contractTypes,
    locations,
    lang,
}) {
    const { images } = usePage().props;

    return (
        <Front>
            <Head title="LaraBoard" />
            <div className="home-header mb-5">
                <div className="max-w-screen-xl mx-auto lg:flex items-center space-20 px-3">
                    <div className="md:w-2/3">
                        <h1 className="font-semibold text-6xl text-blue-800">
                            LaraBoard Careers
                        </h1>
                        <h2 className="text-3xl mt-10 text-zinc-700 leading-snug">
                            Check our available positions - we are always
                            looking for great people to join our company
                        </h2>
                    </div>
                    <div className="md:w-3/3 pt-10 lg:pt-0">
                        <img
                            src={images.homepageHeaderImage}
                            alt=""
                            className="max-h-[450px]"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto md:flex space-20 px-3">
                <div className="md:w-2/3">
                    {jobs?.data.length > 0
                        ? jobs.data.map((job) => (
                              <JobCard key={job.id} job={job} />
                          ))
                        : t("No open positions", lang)}

                    <div className="mt-5 mb-10">
                        {jobs?.prev_page_url && (
                            <Link
                                href={jobs.prev_page_url}
                                className="rounded border-2 px-4 py-1.5 font-medium text-neutral-500 border-neutral-400 hover:border-blue-500 hover:text-blue-500"
                            >
                                {t("Previous", lang)}
                            </Link>
                        )}
                        {jobs?.next_page_url && (
                            <Link
                                href={jobs.next_page_url}
                                className="rounded border-2 px-4 py-1.5 font-medium text-neutral-500 border-neutral-400 hover:border-blue-500 hover:text-blue-500"
                            >
                                {t("Next", lang)}
                            </Link>
                        )}
                    </div>
                </div>

                <div className="md:w-1/3 pt-10 md:pt-0">
                    <JobFilters
                        lang={lang}
                        departments={departments}
                        contractTypes={contractTypes}
                        locations={locations}
                    />
                </div>
            </div>
        </Front>
    );
}
