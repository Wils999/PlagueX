import type { Metadata } from "next"
import AchievementsList from "@/components/achievements/AchievementsList"

export const metadata: Metadata = {
  title: "Achievements",
  description: "View your achievements and progress on plagueX",
}

export default function AchievementsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">🏆 Achievements</h1>
          <p className="text-muted-foreground">
            Track your progress and unlock achievements as you engage with the plagueX community.
          </p>
        </div>

        <AchievementsList />
      </div>
    </main>
  )
}
