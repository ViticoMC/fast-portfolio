import { PROJECTSEN, PROJECTSES } from "@/assets/mock/mockProjects";
import { useTranslation } from "react-i18next";

export function useGetAllprojects() {
  const { i18n } = useTranslation();

  const langauje = i18n.language;
  let PROJECTS;

  if (langauje === "en") {
    PROJECTS = PROJECTSEN;
  } else {
    PROJECTS = PROJECTSES;
  }

  return {
    PROJECTS,
  };
}
