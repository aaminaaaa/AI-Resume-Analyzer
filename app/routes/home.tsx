import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuScan AI" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-10">
          <h2 className="font-bold">
            Track your Applications & Resume Ratings
          </h2>
          <h3>Review your submissions and get AI powered feedback!</h3>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
