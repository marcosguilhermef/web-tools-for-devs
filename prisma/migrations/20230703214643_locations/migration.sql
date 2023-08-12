-- CreateTable
CREATE TABLE "Locations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lat" REAL,
    "lon" REAL,
    "alt" REAL,
    "rotulo" TEXT
);
