"use client";

import { Card } from "@/components/ui/8bit/card";
import { Badge } from "@/components/ui/8bit/badge";
import playerData from "@/lib/cv-data";

export function QuestLog() {
    const { experience } = playerData;

    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-nes-dark">
            <div className="max-w-5xl w-full space-y-8">
                {/* Section Title */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl retro text-nes-green">
                        📜 QUEST LOG 📜
                    </h2>
                    <p className="text-lg retro text-zinc-400">Completed Adventures</p>
                </div>

                {/* Quest Cards */}
                <div className="space-y-6">
                    {experience.map((quest, idx) => (
                        <Card
                            key={idx}
                            className="p-6 bg-zinc-900 text-white border-nes-green"
                        >
                            <div className="space-y-4">
                                {/* Quest Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{quest.badge}</span>
                                            <h3 className="text-xl md:text-2xl retro text-nes-yellow">
                                                {quest.questName}
                                            </h3>
                                        </div>
                                        <p className="text-lg retro text-nes-blue">{quest.guild}</p>
                                    </div>
                                    <Badge className="bg-nes-green text-black">
                                        ✓ COMPLETED
                                    </Badge>
                                </div>

                                {/* Quest Details */}
                                <div className="grid md:grid-cols-2 gap-4 p-4 bg-zinc-800 border-2 border-zinc-700">
                                    <div className="space-y-1">
                                        <div className="text-xs retro text-zinc-400">DURATION</div>
                                        <div className="text-sm retro">{quest.duration}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs retro text-zinc-400">PERIOD</div>
                                        <div className="text-sm retro">{quest.period}</div>
                                    </div>
                                    <div className="space-y-1 md:col-span-2">
                                        <div className="text-xs retro text-zinc-400">XP GAINED</div>
                                        <div className="text-sm retro text-nes-yellow">
                                            +{quest.xpGained.toLocaleString()} XP
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-3">
                                    <h4 className="text-sm retro text-nes-green">
                                        ✓ OBJECTIVES COMPLETED:
                                    </h4>
                                    <ul className="space-y-2">
                                        {quest.achievements.map((achievement, achIdx) => (
                                            <li
                                                key={achIdx}
                                                className="flex items-start gap-3 text-sm"
                                            >
                                                <span className="text-nes-green mt-1">▸</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
