"use client";

import React, { memo, useEffect, useState } from "react";
import { certificates } from "@/data";
import { animateCertificates } from "@/animations/layout";
import type { Certificate } from "@/interfaces";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("./ui/MovingBorders").then((mod) => mod.Button), { ssr: false });
const MagicButton = dynamic(() => import("./MagicButton"), { ssr: false });

const CertificateItem = memo(({ certificate }: { certificate: Certificate }) => {
  return (
    <Button
      key={certificate.id}
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      containerClassName="!col-span-1"
      style={{
        background: "#081b29",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      className="text-white cursor-default border-primary pointer-events-none"
    >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 lg:p-7 gap-2">
        <div className="md:w-24 sm:w-16 w-12 flex-center">
          <div className="w-full h-full bg-primary/20 rounded-lg flex-center">
            <span className="text-primary font-bold text-lg">IBM</span>
          </div>
        </div>
        <div className="lg:ms-5">
          <h1 className="text-start card-title opacity-0 text-sm sm:text-md mb-3 font-bold">
            {certificate.title}
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary font-semibold text-xs">
              {certificate.issuer}
            </span>
            <span className="text-white-100 text-xs">
              {certificate.date}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {certificate.skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="border border-primary/30 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary card-skills opacity-0"
                style={{
                  transform: `translateY(${10 * (index + 1)}px)`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-start card-desc text-[0.62rem] sm:text-xs text-white-100 font-semibold">
            Credential ID: {certificate.credentialId}
          </p>
        </div>
      </div>
    </Button>
  );
});

CertificateItem.displayName = "CertificateItem";

const Certificates = () => {
  useEffect(() => {
    animateCertificates();
  }, []);

  return (
    <section id="certificates">
      <div className="py-4 w-full relative">
        {/* background grid */}
        <div className="w-full absolute left-0 -top-64 min-h-96">
          <div className="w-full h-full opacity-50 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
        </div>

        <h1 className="heading">
          My <span className="text-primary">certifications</span>
        </h1>

        <div className="w-full mt-4 md:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 md:gap-10">
          {certificates.map((certificate) => (
            <CertificateItem key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
