"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Loader2, PartyPopper, Sparkles, Star } from "lucide-react";

export function ContactForm({ courseTitle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrorMessage("");

    if (!name || !email || !phone) {
      setFormErrorMessage("Name, Email, and Phone are required.");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrorMessage("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    const params = new URLSearchParams();
    params.append("fullName", name);
    params.append("email", email);
    params.append("mobileNumber", phone);
    const messageWithCourse = courseTitle
      ? `Course Interested: ${courseTitle}\n\n${message || ""}`.trim()
      : message;
    params.append("additional_text1", messageWithCourse);
    params.append("receivedBy", "skillcareer.in");
    params.append("country", "India");

    try {
      const response = await fetch("https://click.creditsdeal.com/api/leadApi", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      if (!response.ok) {
        let errorDetails = `HTTP error! Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorDetails = errorData.responseMessage || errorData.message || JSON.stringify(errorData);
        } catch {
          const errorText = await response.text();
          if (errorText) errorDetails = `${errorDetails} - ${errorText}`;
        }
        throw new Error(`Submission Failed: ${errorDetails}`);
      }

      const result = await response.json();
      if (result.responseCode === 201 || response.ok) {
        setShowThankYou(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setConsent(false);
      } else {
        throw new Error(result.responseMessage || "An unexpected response was received.");
      }
    } catch (err) {
      setFormErrorMessage(err instanceof Error ? err.message : "An unknown network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  if (showThankYou) {
    return (
      <Card className="mx-auto w-full max-w-xl overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-[0_28px_70px_-40px_rgba(16,185,129,0.35)]">
        <CardHeader className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-6 py-10 text-center">
          <PartyPopper className="mx-auto mb-4 h-14 w-14 text-emerald-500" />
          <CardTitle className="text-3xl font-black text-slate-950">Thank you</CardTitle>
          <CardDescription className="mx-auto max-w-md pt-2 text-base text-slate-600">
            Your details have been submitted successfully. Our admissions team will contact you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-8 pt-2 text-center text-sm text-slate-500">
          Expect guidance on course fit, fee details, and batch timing options.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full max-w-xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_28px_80px_-44px_rgba(15,23,42,0.45)]">
      <CardHeader className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_55%,#ecfeff_100%)] px-6 py-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          <Sparkles className="h-3.5 w-3.5" />
          Admissions form
        </div>
        <CardTitle className="flex items-center gap-2 text-2xl font-black text-slate-950">
          <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
          Request Course Details
        </CardTitle>
        <CardDescription className="pt-1 text-base text-slate-600">
          Share your contact details to receive fees, batch timing, and counselor guidance.
        </CardDescription>
        {courseTitle ? (
          <div className="mt-3 inline-flex items-center rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">
            Selected course: <span className="ml-1 text-cyan-200">{courseTitle}</span>
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {courseTitle ? (
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">Course</Label>
              <Input value={courseTitle} readOnly disabled className="rounded-2xl bg-slate-50" />
            </div>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</Label>
              <Input id="name" placeholder="e.g., Priya Sharma" value={name} onChange={(e) => setName(e.target.value)} required disabled={isLoading} className="h-11 rounded-2xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isLoading} className="h-11 rounded-2xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Mobile Number *</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={isLoading} className="h-11 rounded-2xl" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-medium text-slate-700">Your Query</Label>
            <Textarea id="message" placeholder="Any specific questions about the course or timing?" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} disabled={isLoading} className="rounded-2xl" />
          </div>

          <div className="flex items-start space-x-2.5 rounded-2xl bg-slate-50 px-4 py-3">
            <Checkbox id="consent" checked={consent} onCheckedChange={setConsent} disabled={isLoading} className="mt-0.5 data-[state=checked]:bg-cyan-700 data-[state=checked]:border-cyan-700" />
            <Label htmlFor="consent" className="cursor-pointer text-xs leading-relaxed text-slate-500">
              I authorize SkillCareer and its partners to contact me via Call, SMS, Email, or WhatsApp regarding course information and offers.
            </Label>
          </div>

          {formErrorMessage ? (
            <div className="flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{formErrorMessage}</span>
            </div>
          ) : null}

          <Button type="submit" className="h-12 w-full rounded-full bg-slate-950 text-base font-semibold text-white hover:bg-cyan-700" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Callback Now"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:justify-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Google 4.8
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Fast response
          </span>
        </div>
        <p className="text-xs text-slate-500">We respect your privacy.</p>
      </CardFooter>
    </Card>
  );
}
