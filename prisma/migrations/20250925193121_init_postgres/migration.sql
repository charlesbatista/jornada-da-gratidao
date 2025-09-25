-- CreateTable
CREATE TABLE "public"."journeys" (
    "id" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "journeys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."days" (
    "id" TEXT NOT NULL,
    "journeyId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "reflection" TEXT,
    "difficulty" TEXT,
    "completedAt" TEXT,

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "days_journeyId_dayNumber_key" ON "public"."days"("journeyId", "dayNumber");

-- AddForeignKey
ALTER TABLE "public"."days" ADD CONSTRAINT "days_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "public"."journeys"("id") ON DELETE CASCADE ON UPDATE CASCADE;
