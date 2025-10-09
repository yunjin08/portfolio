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
    <div className="group relative p-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 hover:border-primary/40">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex-center">
          <span className="text-primary font-bold text-xs">IBM</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-semibold text-white mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {certificate.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary text-[10px] font-medium">
              {certificate.issuer}
            </span>
            <span className="text-white-100 text-[10px]">
              {certificate.date}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {certificate.skills.slice(0, 3).map((skill: string, index: number) => (
              <span
                key={index}
                className="border border-primary/30 rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] text-primary"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 3 && (
              <span className="text-[9px] text-white-100">
                +{certificate.skills.length - 3} more
              </span>
            )}
          </div>
          <p className="text-[9px] text-white-100/70">
            ID: {certificate.credentialId}
          </p>
        </div>
      </div>
    </div>
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

        <div className="w-full mt-4 md:mt-12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
          {certificates.map((certificate) => (
            <CertificateItem key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
