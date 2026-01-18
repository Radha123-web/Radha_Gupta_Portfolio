import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { ProjectData } from "../../data/project-data"
import Script from "next/script"
import { buildProjectGraphMinimal } from "@/config/schemas"

const SimpleProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProjectGraphMinimal(projectData.slug, projectData)),
        }}
      />
      <ProjectHero {...projectData.hero} />
      {projectData.beforeAfter && (
        <BeforeAfterSection
          heroBefore={projectData.beforeAfter.heroBefore}
          heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
          iframe={projectData.beforeAfter.iframe}
          heroAfter={projectData.beforeAfter.heroAfter}
          beforeAltText={projectData.beforeAfter.beforeAltText}
          beforeMobileAltText={projectData.beforeAfter.beforeMobileAltText}
          afterAltText={projectData.beforeAfter.afterAltText}
          hideHeader={projectData.beforeAfter.hideHeader}
        />
      )}
      <ResultsSection analyticCards={projectData.results} />
      <ApproachSection phases={projectData.phases} />
      {/* Removed: LargeReview, MoreProjectsSection, RecruiterContact */}
    </main>
  )
}

export default SimpleProjectDisplay