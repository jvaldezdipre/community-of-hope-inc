// Shared types, styles, and constants for the Hope House application form.

export const TOTAL_STEPS = 7;
export const ease = [0.25, 0.1, 0.25, 1] as const;
export const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

// ─── Shared input styles ─────────────────────────────────────
export const inputBase =
  "w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors";

export const inputFont = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.95rem",
  fontWeight: 300,
} as const;

export const labelStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 400,
} as const;

export const labelClass = "block text-[#1A1A1A] mb-2";

// ─── Form data type ─────────────────────────────────────────
export type ApplicationFormData = {
  // Step 1 — Contact & Worker Info
  firstName: string;
  lastName: string;
  homePhone: string;
  cellPhone: string;
  workerName: string;
  workerPhone: string;
  workerExt: string;
  caseManagerName: string;
  caseManagerAgency: string;
  caseManagerPhone: string;
  projectedReleaseDate: string;
  isDefiniteDate: string;
  pickUpTime: string;
  facilityAddress: string;
  mainGoal: string;
  // Step 2 — Personal Info & Living Situation
  middleInitial: string;
  dateOfBirth: string;
  insuranceNumber: string;
  huskyD: string;
  cashAssistance: string;
  inClinicalTreatment: string;
  treatmentProviders: string;
  currentAddress: string;
  livingSituationDuration: string;
  lastPermanentAddress: string;
  // Step 3 — Family Info
  maritalStatus: string;
  liveWithParents: string;
  siblings: string;
  spouseName: string;
  children: string;
  childrenLivingArrangements: string;
  familyReunification: string;
  familySupportive: string;
  familyInfluence: string;
  familyNotes: string;
  // Step 4 — Substance Abuse History & Medical
  alcoholLastUse: string;
  cocaineLastUse: string;
  crackLastUse: string;
  hallucinogensLastUse: string;
  inhalantsLastUse: string;
  opiatesLastUse: string;
  rxDrugsLastUse: string;
  sedativesLastUse: string;
  overCounterLastUse: string;
  otherDrugLastUse: string;
  drugOfChoice: string;
  ageOfFirstUse: string;
  dailyConsumption: string;
  mentalHealthDiagnosis: string;
  mentalHealthDetails: string;
  mentalHealthMedications: string;
  medicalProblems: string;
  medicalDetails: string;
  medicalMedications: string;
  allMedications: string;
  spiritualLife: string;
  conditionsContributing: string; // comma-separated list of checked conditions
  conditionsConsequences: string; // comma-separated list of conditions marked as consequences
  // Step 5 — Treatment History
  currentlyInTreatment: string;
  facilityName: string;
  facilityCityState: string;
  dateAdmitted: string;
  dateCompletion: string;
  treatmentCaseManager: string;
  treatmentCounselor: string;
  projectedCommencementDate: string;
  housingOptionsBesidesCOH: string;
  completedProgram: string;
  whereAfterLeaving: string;
  sobrietyDuration: string;
  whatWentWrong: string;
  // Step 6 — Legal, Education & Employment
  outstandingWarrants: string;
  everArrested: string;
  chargesConvictions: string;
  arrestDate: string;
  sentence: string;
  paroleTime: string;
  paroleOfficer: string;
  paroleConditions: string;
  paroleEndDate: string;
  arrestHistory: string;
  disciplinaryReports: string;
  disciplinaryDetails: string;
  lastGradeCompleted: string;
  otherEducation: string;
  significantJobs: string;
  futurePlans: string;
  workingPartTime: string;
  partTimeEmployer: string;
  workingFullTime: string;
  fullTimeEmployer: string;
  pastJob1: string;
  pastJob2: string;
  incomeSources: string; // comma-separated list of checked income sources
  // Step 7 — Personal Statement & Affirmation
  strengths: string;
  weaknesses: string;
  triggers: string;
  difficulties: string;
  whatGotYouHere: string;
  goalsWhileHere: string;
  plansAfterLeaving: string;
  dreams: string;
  affirmation: string; // "yes" when checkbox is checked
};

export const initialFormData: ApplicationFormData = {
  firstName: "",
  lastName: "",
  homePhone: "",
  cellPhone: "",
  workerName: "",
  workerPhone: "",
  workerExt: "",
  caseManagerName: "",
  caseManagerAgency: "",
  caseManagerPhone: "",
  projectedReleaseDate: "",
  isDefiniteDate: "",
  pickUpTime: "",
  facilityAddress: "",
  mainGoal: "",
  middleInitial: "",
  dateOfBirth: "",
  insuranceNumber: "",
  huskyD: "",
  cashAssistance: "",
  inClinicalTreatment: "",
  treatmentProviders: "",
  currentAddress: "",
  livingSituationDuration: "",
  lastPermanentAddress: "",
  // Step 3
  maritalStatus: "",
  liveWithParents: "",
  siblings: "",
  spouseName: "",
  children: "",
  childrenLivingArrangements: "",
  familyReunification: "",
  familySupportive: "",
  familyInfluence: "",
  familyNotes: "",
  // Step 4
  alcoholLastUse: "",
  cocaineLastUse: "",
  crackLastUse: "",
  hallucinogensLastUse: "",
  inhalantsLastUse: "",
  opiatesLastUse: "",
  rxDrugsLastUse: "",
  sedativesLastUse: "",
  overCounterLastUse: "",
  otherDrugLastUse: "",
  drugOfChoice: "",
  ageOfFirstUse: "",
  dailyConsumption: "",
  mentalHealthDiagnosis: "",
  mentalHealthDetails: "",
  mentalHealthMedications: "",
  medicalProblems: "",
  medicalDetails: "",
  medicalMedications: "",
  allMedications: "",
  spiritualLife: "",
  conditionsContributing: "",
  conditionsConsequences: "",
  // Step 5
  currentlyInTreatment: "",
  facilityName: "",
  facilityCityState: "",
  dateAdmitted: "",
  dateCompletion: "",
  treatmentCaseManager: "",
  treatmentCounselor: "",
  projectedCommencementDate: "",
  housingOptionsBesidesCOH: "",
  completedProgram: "",
  whereAfterLeaving: "",
  sobrietyDuration: "",
  whatWentWrong: "",
  // Step 6
  outstandingWarrants: "",
  everArrested: "",
  chargesConvictions: "",
  arrestDate: "",
  sentence: "",
  paroleTime: "",
  paroleOfficer: "",
  paroleConditions: "",
  paroleEndDate: "",
  arrestHistory: "",
  disciplinaryReports: "",
  disciplinaryDetails: "",
  lastGradeCompleted: "",
  otherEducation: "",
  significantJobs: "",
  futurePlans: "",
  workingPartTime: "",
  partTimeEmployer: "",
  workingFullTime: "",
  fullTimeEmployer: "",
  pastJob1: "",
  pastJob2: "",
  incomeSources: "",
  // Step 7
  strengths: "",
  weaknesses: "",
  triggers: "",
  difficulties: "",
  whatGotYouHere: "",
  goalsWhileHere: "",
  plansAfterLeaving: "",
  dreams: "",
  affirmation: "",
};

// ─── Step props (shared by all step components) ──────────────
export type StepProps = {
  formData: ApplicationFormData;
  update: (field: keyof ApplicationFormData, value: string) => void;
};

// ─── Step labels ─────────────────────────────────────────────
export function getStepLabel(step: number): string {
  const labels: Record<number, string> = {
    1: "Contact & Worker Info",
    2: "Personal Info",
    3: "Family Info",
    4: "Substance Abuse & Medical",
    5: "Conditions & Treatment",
    6: "Legal, Education & Employment",
    7: "Personal Statement",
  };
  return labels[step] ?? "";
}
