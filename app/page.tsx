"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/dark-theme";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useTheme } from "next-themes";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import FormFieldsHandler from "@/components/SubmitFieldsHandler";
export default function Home() {
  const { theme } = useTheme();
  const [fileName,setFileName] = useState<string>("");
  const [file,setFile] = useState<File|null>(null);
  const [results,setResults] = useState<{}|null>(null);
  const router = useRouter();
  const handleSubmission = async (form_data:FormData) => {
    const arrayBuffer:any = await file?.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer).toString("base64");
    const response = await fetch("/api/generate-results",{
          method:"POST",
          body:JSON.stringify({file:buffer}),
          headers:{
            "Content-Type":"application/json"
          }
    });
    const result:string = (await response.json()).data || "";
    const st = result.indexOf("{");
    const en = result.lastIndexOf("}");
    const data:JSON = JSON.parse(result.substring(st,en+1));
    setResults(data);
    toast.success("Results Generated Successfully");
  }
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/*Navbar Section*/}
      <div className="flex w-full justify-between items-center p-4 border-b border-b-gray-700 text-[var(--foreground)] text-2xl">
        <div className="font-bold">TalentScan AI</div>
        <ModeToggle />
      </div>

      <div className="w-full relative">
        <Particles
          className="absolute inset-0 z-0 w-full"
          quantity={100}
          ease={80}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          refresh
        />
        <div className="flex flex-col gap-8 p-5 w-full md:max-w-[1200px] mx-auto">
          {/*Hero Section*/}
          <div className="relative flex flex-col gap-5 items-center p-5 my-5">
            <div className="text-center text-xl md:text-2xl font-semibold md:max-w-[800px] leading-relaxed tracking-widest">
              TalentScan AI Is A Website Measures Your ATS Score, Provides You
              Some Insights Into It And Generates Analysis For Your Resume For
              Free
            </div>
            <div className="flex flex-col w-full md:w-auto md:flex-row gap-5">
              <Button onClick={()=>router.push("#analyze")}>Calculate Now</Button>
              <Button variant={"outline"}>Learn More</Button>
            </div>
          </div>
          {/* Features Section */}
          <div className="flex flex-col gap-4">
            <div className="text-xl font-semibold text-center md:text-start">Features</div>
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="p-5 text-center ">
                <CardTitle className="flex-1">
                  Resume Parsing & Information Extraction
                </CardTitle>
                <CardDescription className="text-justify line-clamp-6 ">
                  The resume parsing feature automatically reads and interprets
                  resumes in various formats, including PDF, DOCX, and text
                  files. Using natural language processing, it extracts key
                  information such as personal details, work experience,
                  education history, skills, certifications, and project
                  highlights.
                </CardDescription>
                <Button>Learn More</Button>
              </Card>

              <Card className="p-5 text-center ">
                <CardTitle className="flex-1">
                  Resume Parsing & Information Extraction
                </CardTitle>
                <CardDescription className="text-justify line-clamp-6 ">
                  The resume parsing feature automatically reads and interprets
                  resumes in various formats, including PDF, DOCX, and text
                  files. Using natural language processing, it extracts key
                  information such as personal details, work experience,
                  education history, skills, certifications, and project
                  highlights.
                </CardDescription>
                <Button>Learn More</Button>
              </Card>

              <Card className="p-5 text-center ">
                <CardTitle className="flex-1">
                  AI-Powered Resume Feedback
                </CardTitle>
                <CardDescription className="text-justify line-clamp-6 ">
                  This feature provides personalized feedback aimed at improving
                  the overall quality of a candidate’s resume. The AI reviews
                  grammar, clarity, and formatting while also assessing the
                  strength of bullet points, action verbs used, and keyword
                  presence for ATS optimization. It offers suggestions to
                  enhance readability, highlight achievements more effectively,
                  and align content with industry standards.
                </CardDescription>
                <Button>Learn More</Button>
              </Card>
            </div>
          </div>
          
          {/* Resume Section */}
          <div className="flex flex-col gap-4 scroll-mt-5" id="analyze">
            <div className="font-semibold text-xl text-center md:text-start">Check Your ATS Score And Analysis Now</div>
            
              <form action={handleSubmission} className="w-full grid gap-4">

              <FormFieldsHandler results={results} setResults={setResults} fileName={fileName} setFile={setFile} setFileName={setFileName}/>
            </form>
          </div>

          {/* Frequently Asked Questions */}
          <div className="flex flex-col gap-4 my-5">
            <div className="text-xl font-semibold text-center md:text-start">
              Frequently Asked Questions
            </div>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-b-gray-600 py-3"
              >
                <AccordionTrigger className="font-semibold">
                  What does the Resume Analyzer app do?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  The Resume Analyzer app evaluates your resume using AI to
                  measure how well it matches a specific job description. It
                  provides a detailed score, identifies missing skills,
                  highlights strengths, and suggests improvements to help you
                  create a more competitive and ATS-friendly resume.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-b-gray-600 py-3"
              >
                <AccordionTrigger className="font-semibold">
                  How does the app calculate the match score?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  The match score is generated using AI models that compare your
                  resume’s skills, experience, and keywords with the job
                  description. It analyzes relevance, depth of experience, and
                  key industry terms to determine how closely your resume aligns
                  with the job.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-b-gray-600 py-3"
              >
                <AccordionTrigger className="font-semibold">
                  Is my resume data stored or shared?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  Your resume data is processed securely and never shared with
                  third parties. If you’re using the cloud version, data is
                  stored temporarily for analysis and can be deleted at any
                  time. In offline or local mode, nothing is uploaded to any
                  server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-b-gray-600 py-3">
                <AccordionTrigger className="font-semibold">
                  What formats of resumes does the app support?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  The app supports PDF, DOCX, and TXT formats. You can upload
                  resumes in any of these formats, and the AI automatically
                  extracts and analyzes the content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border-b border-b-gray-600 py-3">
                <AccordionTrigger className="font-semibold text-start">
                  Can the app suggest improvements for my resume?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  Yes. The Resume Analyzer provides AI-powered recommendations
                  such as enhancing bullet points, optimizing keywords,
                  improving structure, correcting grammar, and making your
                  resume more ATS-friendly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="border-b border-b-gray-600 py-3">
                <AccordionTrigger className="font-semibold">
                  Do I need a job description to use the analyzer?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  A job description is not mandatory, but it helps generate a
                  more accurate match score. Without it, you still get a general
                  skill, structure, and grammar analysis, but with it, the
                  recommendations and scoring become more precise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7" className="py-3">
                <AccordionTrigger className="font-semibold">
                  Can I analyze multiple resumes?
                </AccordionTrigger>
                <AccordionContent className="py-3">
                  Yes, you can upload and analyze multiple resumes. The app also
                  allows you to compare different versions so you can choose the
                  strongest and most optimized one.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="border-t w-full border-t-gray-700 py-8">
         <div className="flex flex-col text-center gap-4 items-center md:items-start mx-auto px-5 pb-3">
          <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="font-semibold text-2xl">TalentScan AI</div>
          <div className="flex flex-col md:flex-row gap-5">
            <ul className="uppercase md:text-start">
              <li>services</li>
              <li>theme tweak</li>
              <li>showcase</li>
            </ul>
            <ul className="uppercase md:text-start">
              <li>weebly themes</li>
              <li>pre-sales faqs</li>
              <li>submit a ticket</li>
            </ul>
            <ul className="uppercase md:text-start">
              <li>support</li>
              <li>widget</li>
            </ul>
          </div>
          </div>

          <div className="bg-gray-400 h-[3px] w-full"></div>
         </div>
          <div className="text-center mt-5">&copy;Copyright. All Copyrights Reserved.</div>
      </div>
    </div>
  );
}
