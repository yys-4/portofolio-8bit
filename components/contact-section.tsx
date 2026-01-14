"use client";

import { Button } from "@/components/ui/8bit/button";
import { Card } from "@/components/ui/8bit/card";
import playerData from "@/lib/cv-data";

export function ContactSection() {
    const { contact } = playerData;

    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-zinc-900">
            <Card className="max-w-3xl w-full p-8 bg-nes-dark text-white">
                <div className="space-y-8">
                    {/* Title */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl retro text-nes-yellow">
                            {contact.title}
                        </h2>
                        <p className="text-lg retro text-nes-blue blink">
                            {contact.subtitle}
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {contact.methods.map((method, idx) => (
                            <Button
                                key={idx}
                                asChild
                                className="h-auto p-6 bg-zinc-800 hover:bg-zinc-700 border-2 border-nes-yellow text-white arcade-press"
                            >
                                <a
                                    href={method.action}
                                    target={method.type !== "email" ? "_blank" : undefined}
                                    rel={method.type !== "email" ? "noopener noreferrer" : undefined}
                                    className="flex flex-col items-center gap-3 no-underline"
                                >
                                    <span className="text-4xl">{method.icon}</span>
                                    <span className="text-sm retro text-center">
                                        {method.name}
                                    </span>
                                </a>
                            </Button>
                        ))}
                    </div>

                    {/* Footer Message */}
                    <div className="text-center pt-4">
                        <p className="text-xs retro text-zinc-500">
                            © 2026 {playerData.hero.name} • Built with Next.js & 8bitcn-ui
                        </p>
                    </div>
                </div>
            </Card>
        </section>
    );
}
