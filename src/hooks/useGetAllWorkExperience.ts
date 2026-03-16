import { WORK_EXPERIENCES_EN } from "@/assets/mock/workEN";
import { WORK_EXPERIENCES_ES } from "@/assets/mock/workES";
import { useTranslation } from "react-i18next";

export function useGetAllWorkExperience() {
  const { i18n } = useTranslation();

  return {
    WORK_EXPERIENCES:
      i18n.language === "en" ? WORK_EXPERIENCES_EN : WORK_EXPERIENCES_ES,
  };
}