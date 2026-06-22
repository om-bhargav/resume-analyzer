import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import {
  UploadCloud,
  File,
  LoaderCircle,
  CircleDashed,
  Gauge,
  ShieldCheckIcon,
  ShieldX,
  CircleFadingArrowUp,
  SpellCheck,
  SquarePen,
  CircleCheck,
  CircleX,
  CircleArrowUp,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
} from "@radix-ui/react-accordion";
const SubmitButton = ({
  setFileName,
  setFile,
  fileName,
  results,
  setResults,
}: {
  setFileName: Function;
  setFile: Function;
  fileName: string;
  results: any;
  setResults: Function;
}) => {
  const { pending: loading } = useFormStatus();
  return (
    <>
      <div className="border-2 flex justify-center items-center border-[var(--foreground)] border-dashed rounded min-h-[300px]">
        <label htmlFor="resume" className="flex flex-col items-center">
          {fileName === "" ? (
            <>
              <UploadCloud
                size={40}
                className="cursor-pointer hover:scale-115 hover:-translate-y-1 transition-all duration-300ms"
              />
              <div>Select File</div>
            </>
          ) : (
            <>
              <File
                size={40}
                className={`${loading && "pointer-events-none cursor-not-allowed!"} cursor-pointer hover:scale-115 hover:-translate-y-1 transition-all duration-300ms`}
              />
              <div>{fileName}</div>
            </>
          )}
        </label>
      </div>
      <input
        disabled={loading}
        onChange={(e: any) => {
          setFileName(e.target.files[0].name);
          setFile(e.target.files[0]);
        }}
        type="file"
        accept=".pdf"
        id="resume"
        className="hidden"
      />
      <Button type="submit" disabled={fileName === "" || loading}>
        {loading ? (
          <LoaderCircle size={50} className="animate-spin" />
        ) : (
          "Analyze Now"
        )}
      </Button>
      {results && (
        <div className="grid">
          {loading ? (
            <CircleDashed
              className="animate-spin [animation-duration:_2s] mx-auto my-10"
              size={50}
            />
          ) : (
            <div className="grid">
              <div className="text-2xl md:text-left text-center my-5 font-semibold">
                Results
              </div>
              <div className="font-semibold p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl shadow items-center dark:shadow-white flex flex-col md:flex-row justify-between rounded">
                <div className="flex items-center gap-2 uppercase">
                  <Gauge size={35} /> Ats Score
                </div>
                <div>
                  <div>{results["ats_score"]} out of 100</div>
                </div>
              </div>
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem
                  value="item-1"
                  className="p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl gap-3 shadow dark:shadow-white flex flex-col rounded"
                >
                  <AccordionTrigger className="group font-semibold flex items-center justify-between uppercase">
                    <div className="text-green-300 flex gap-2 items-center">
                      <ShieldCheckIcon size={35} /> Strengths
                    </div>
                    <span>
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="group-data-[state=closed]:hidden" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="md:pl-10 pl-5 space-y-2 text-lg">
                      {results["strengths"].map(
                        (strength: string, ind: number) => (
                          <li key={ind} className="flex gap-2 items-start">
                            <CircleCheck
                              size={20}
                              className="text-green-300 mt-[6px]"
                            />
                            <div className="flex-1">{strength}</div>
                          </li>
                        )
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl gap-3 shadow dark:shadow-white flex flex-col rounded"
                >
                  <AccordionTrigger className="group font-semibold flex items-center justify-between uppercase">
                    <div className="text-red-500 flex gap-2 items-center">
                      <ShieldX size={35} /> Weaknesses
                    </div>
                    <span>
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="group-data-[state=closed]:hidden" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="md:pl-10 pl-5 space-y-2 text-lg">
                      {results["weaknesses"].map(
                        (weakness: string, ind: number) => (
                          <li key={ind} className="flex gap-2 items-start">
                            <CircleX
                              size={20}
                              className="text-red-500 mt-[6px]"
                            />
                            <div className="flex-1">{weakness}</div>
                          </li>
                        )
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl gap-3 shadow dark:shadow-white flex flex-col rounded"
                >
                <AccordionTrigger className="group font-semibold flex items-center justify-between uppercase">
                    <div className="text-teal-300 flex gap-2 items-center">
                      <CircleFadingArrowUp size={35} /> Recommendations
                    </div>
                    <span>
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="group-data-[state=closed]:hidden" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="md:pl-10 pl-5 space-y-2 text-lg">
                      {results["recommendations"].map(
                        (recommendation: string, ind: number) => (
                          <li key={ind} className="flex gap-2 items-start">
                            <CircleCheck
                              size={20}
                              className="text-teal-500 mt-[6px]"
                            />
                            <div className="flex-1">{recommendation}</div>
                          </li>
                        )
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl gap-3 shadow dark:shadow-white flex flex-col rounded"
                >
                <AccordionTrigger className="group font-semibold flex items-center justify-between uppercase">
                    <div className="text-emerald-500 flex gap-2 items-center">
                      <SpellCheck size={35} /> Grammar
                    </div>
                    <span>
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="group-data-[state=closed]:hidden" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-lg md:px-3">{results["grammar"]}</div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="p-5 mb-5 shadow-[1px_1px_0px_2px] text-xl gap-3 shadow dark:shadow-white flex flex-col rounded"
                >
                  <AccordionTrigger className="group font-semibold flex items-center justify-between uppercase">
                    <div className="text-slate-400 flex gap-2 items-center">
                      <SquarePen size={35} /> Summary
                    </div>
                    <span>
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="group-data-[state=closed]:hidden" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-lg md:px-3">{results["summary"]}</div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SubmitButton;
