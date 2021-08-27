set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "accounts" (
	"accountId" serial NOT NULL,
	"userId" integer NOT NULL,
	"portfolioBalance" integer NOT NULL,
	"dollarBalance" integer NOT NULL,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("accountId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "transactions" (
	"transactionId" serial NOT NULL,
	"accountId" integer NOT NULL,
	"coinName" TEXT NOT NULL,
	"amount" integer NOT NULL,
	"cost" integer NOT NULL,
	CONSTRAINT "transactions_pk" PRIMARY KEY ("transactionId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("accountId") REFERENCES "accounts"("accountId");
