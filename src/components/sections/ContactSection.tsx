"use client";

import SectionWrapper from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { LuMail, LuSend } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto glass-card corner-squircle rounded-3xl p-10 md:p-16 relative overflow-hidden bg-base-300/40 backdrop-blur-md">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic">Parlons <span className="text-primary">Code</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Un projet en tête ou simplement envie de discuter technique ? N'hésite pas à me laisser un message !
            </p>

            <div className="space-y-6">
              <a href="mailto:diaryniaina8@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-10 h-10 text-primary rounded-full bg-base-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LuMail size={18} />
                </div>
                diaryniaina8@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="btn btn-circle btn-outline btn-md border-white/10 hover:border-primary hover:text-primary">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="btn btn-circle btn-outline btn-md border-white/10 hover:border-primary hover:text-primary">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <input type="text" placeholder="Nom" className="input input-bordered bg-base-300/50 focus:input-primary transition-all rounded-xl corner-squircle h-11" />
            </div>
            <div className="form-control">
              <input type="email" placeholder="Email" className="input input-bordered bg-base-300/50 focus:input-primary transition-all rounded-xl corner-squircle h-11" />
            </div>
            <div className="form-control">
              <textarea placeholder="Message" className="textarea textarea-bordered bg-base-300/50 focus:input-primary transition-all rounded-xl h-32 corner-squircle"></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full h-11 rounded-xl corner-squircle group">
              Envoyer
              <LuSend size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
