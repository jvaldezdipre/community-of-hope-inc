"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TOTAL_STEPS,
  ease,
  initialFormData,
  type ApplicationFormData,
} from "./formConstants";
import { ApplicationLanding } from "./ApplicationLanding";
import { ApplicationProgress } from "./ApplicationProgress";
import { ApplicationNav } from "./ApplicationNav";
import { Step1ContactInfo } from "./steps/Step1ContactInfo";
import { Step2PersonalInfo } from "./steps/Step2PersonalInfo";
import { Step3FamilyInfo } from "./steps/Step3FamilyInfo";
import { Step4SubstanceAbuse } from "./steps/Step4SubstanceAbuse";
import { Step5Conditions } from "./steps/Step5Conditions";
import { Step6Legal } from "./steps/Step6Legal";
import { Step7Statement } from "./steps/Step7Statement";
import { supabase } from "@/lib/supabase";
import { notifyNetlifyForm } from "@/lib/notifyNetlify";

// Reshape the flat form data into the JSONB sub-objects the dashboard expects
function toApplicantRow(d: ApplicationFormData) {
  return {
    contact: {
      firstName: d.firstName,
      lastName: d.lastName,
      homePhone: d.homePhone,
      cellPhone: d.cellPhone,
      workerName: d.workerName,
      workerPhone: d.workerPhone,
      workerExt: d.workerExt,
      caseManagerName: d.caseManagerName,
      caseManagerAgency: d.caseManagerAgency,
      caseManagerPhone: d.caseManagerPhone,
      projectedReleaseDate: d.projectedReleaseDate,
      isDefiniteDate: d.isDefiniteDate,
      pickUpTime: d.pickUpTime,
      facilityAddress: d.facilityAddress,
      mainGoal: d.mainGoal,
    },
    personal: {
      middleInitial: d.middleInitial,
      dateOfBirth: d.dateOfBirth,
      insuranceNumber: d.insuranceNumber,
      huskyD: d.huskyD,
      cashAssistance: d.cashAssistance,
      inClinicalTreatment: d.inClinicalTreatment,
      treatmentProviders: d.treatmentProviders,
      currentAddress: d.currentAddress,
      livingSituationDuration: d.livingSituationDuration,
      lastPermanentAddress: d.lastPermanentAddress,
    },
    family: {
      maritalStatus: d.maritalStatus,
      liveWithParents: d.liveWithParents,
      siblings: d.siblings,
      spouseName: d.spouseName,
      children: d.children,
      childrenLivingArrangements: d.childrenLivingArrangements,
      familyReunification: d.familyReunification,
      familySupportive: d.familySupportive,
      familyInfluence: d.familyInfluence,
      familyNotes: d.familyNotes,
    },
    substance_medical: {
      alcoholLastUse: d.alcoholLastUse,
      cocaineLastUse: d.cocaineLastUse,
      crackLastUse: d.crackLastUse,
      hallucinogensLastUse: d.hallucinogensLastUse,
      inhalantsLastUse: d.inhalantsLastUse,
      opiatesLastUse: d.opiatesLastUse,
      rxDrugsLastUse: d.rxDrugsLastUse,
      sedativesLastUse: d.sedativesLastUse,
      overCounterLastUse: d.overCounterLastUse,
      otherDrugLastUse: d.otherDrugLastUse,
      drugOfChoice: d.drugOfChoice,
      ageOfFirstUse: d.ageOfFirstUse,
      dailyConsumption: d.dailyConsumption,
      mentalHealthDiagnosis: d.mentalHealthDiagnosis,
      mentalHealthDetails: d.mentalHealthDetails,
      mentalHealthMedications: d.mentalHealthMedications,
      medicalProblems: d.medicalProblems,
      medicalDetails: d.medicalDetails,
      medicalMedications: d.medicalMedications,
      allMedications: d.allMedications,
      spiritualLife: d.spiritualLife,
      conditionsContributing: d.conditionsContributing,
      conditionsConsequences: d.conditionsConsequences,
    },
    treatment: {
      currentlyInTreatment: d.currentlyInTreatment,
      facilityName: d.facilityName,
      facilityCityState: d.facilityCityState,
      dateAdmitted: d.dateAdmitted,
      dateCompletion: d.dateCompletion,
      treatmentCaseManager: d.treatmentCaseManager,
      treatmentCounselor: d.treatmentCounselor,
      projectedCommencementDate: d.projectedCommencementDate,
      housingOptionsBesidesCOH: d.housingOptionsBesidesCOH,
      completedProgram: d.completedProgram,
      whereAfterLeaving: d.whereAfterLeaving,
      sobrietyDuration: d.sobrietyDuration,
      whatWentWrong: d.whatWentWrong,
    },
    legal_edu_employment: {
      outstandingWarrants: d.outstandingWarrants,
      everArrested: d.everArrested,
      chargesConvictions: d.chargesConvictions,
      arrestDate: d.arrestDate,
      sentence: d.sentence,
      paroleTime: d.paroleTime,
      paroleOfficer: d.paroleOfficer,
      paroleConditions: d.paroleConditions,
      paroleEndDate: d.paroleEndDate,
      arrestHistory: d.arrestHistory,
      disciplinaryReports: d.disciplinaryReports,
      disciplinaryDetails: d.disciplinaryDetails,
      lastGradeCompleted: d.lastGradeCompleted,
      otherEducation: d.otherEducation,
      significantJobs: d.significantJobs,
      futurePlans: d.futurePlans,
      workingPartTime: d.workingPartTime,
      partTimeEmployer: d.partTimeEmployer,
      workingFullTime: d.workingFullTime,
      fullTimeEmployer: d.fullTimeEmployer,
      pastJob1: d.pastJob1,
      pastJob2: d.pastJob2,
      incomeSources: d.incomeSources,
    },
    personal_statement: {
      strengths: d.strengths,
      weaknesses: d.weaknesses,
      triggers: d.triggers,
      difficulties: d.difficulties,
      whatGotYouHere: d.whatGotYouHere,
      goalsWhileHere: d.goalsWhileHere,
      plansAfterLeaving: d.plansAfterLeaving,
      dreams: d.dreams,
    },
    consents: {
      affirmation: d.affirmation,
    },
  };
}

export function HopeHouseApplication() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const update = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const nextStep = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    scrollToTop();
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    scrollToTop();
  };

  const handleSubmit = async () => {
    if (formData.affirmation !== "yes") return;
    // Honeypot — silently drop bot submissions
    if (honeypot) {
      setSubmitted(true);
      scrollToTop();
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const { error: insertErr } = await supabase.from("applicants").insert({
        ...toApplicantRow(formData),
        status: "submitted",
        is_new: true,
        created_by: "website",
        pii_class: "phi",
      });
      if (insertErr) throw insertErr;
      void notifyNetlifyForm("hope-house-application", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        cellPhone: formData.cellPhone,
        projectedReleaseDate: formData.projectedReleaseDate,
        mainGoal: formData.mainGoal,
      });
      setSubmitted(true);
      scrollToTop();
    } catch (err) {
      setError(
        "Something went wrong submitting your application. Please try again or call us directly at 860-912-4356."
      );
      console.error("Application form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!started) {
    return <ApplicationLanding onStart={() => { setStarted(true); scrollToTop(); }} />;
  }

  if (submitted) {
    return (
      <main
        className="min-h-screen bg-white pb-24"
        style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
      >
        <div className="max-w-[720px] mx-auto px-6">
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-[#458CFE]/10 flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#458CFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Application received.
            </h2>
            <p
              className="text-[#3D3D3D] mb-2 max-w-[480px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Thank you for completing your application. Our team will review it
              and reach out to schedule an interview.
            </p>
            <p
              className="text-[#3D3D3D] mb-8 max-w-[480px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              If you need to reach us sooner, call{" "}
              <a href="tel:8609124356" className="text-[#458CFE] hover:underline">
                860-912-4356
              </a>
              .
            </p>
            <a
              href="/programs/hope-house"
              className="inline-flex items-center justify-center bg-[#458CFE] text-white px-8 py-3 rounded-full hover:bg-[#3170DE] transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              Back to Hope House
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-white pb-24"
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Honeypot — hidden from humans, bots fill it */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
          <label>
            Website (leave this empty)
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
            />
          </label>
        </div>
        <ApplicationProgress step={step} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease }}
          >
            {step === 1 && <Step1ContactInfo formData={formData} update={update} />}
            {step === 2 && <Step2PersonalInfo formData={formData} update={update} />}
            {step === 3 && <Step3FamilyInfo formData={formData} update={update} />}
            {step === 4 && <Step4SubstanceAbuse formData={formData} update={update} />}
            {step === 5 && <Step5Conditions formData={formData} update={update} />}
            {step === 6 && <Step6Legal formData={formData} update={update} />}
            {step === 7 && <Step7Statement formData={formData} update={update} />}
          </motion.div>
        </AnimatePresence>

        {error && (
          <p
            className="text-center mt-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 400,
              color: "#C53030",
            }}
          >
            {error}
          </p>
        )}

        <ApplicationNav
          step={step}
          onPrev={prevStep}
          onNext={nextStep}
          onBackToOverview={() => { setStarted(false); scrollToTop(); }}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      </div>
    </main>
  );
}
