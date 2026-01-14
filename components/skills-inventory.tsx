"use client";

import { Card } from "@/components/ui/8bit/card";
import { Badge } from "@/components/ui/8bit/badge";
import { Progress } from "@/components/ui/8bit/progress";
import playerData from "@/lib/cv-data";

export function SkillsInventory() {
    const { skills } = playerData;

    // Group skills by type
    const attackSkills = skills.filter((s) => s.type === "attack");
    const defenseSkills = skills.filter((s) => s.type === "defense");
    const magicSkills = skills.filter((s) => s.type === "magic");

    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-zinc-900">
            <div className="max-w-6xl w-full space-y-8">
                {/* Section Title */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl retro text-nes-yellow">
                        ⚔️ INVENTORY ⚔️
                    </h2>
                    <p className="text-lg retro text-zinc-400">Power-ups & Abilities</p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Attack Skills (Frontend) */}
                    <Card className="p-6 bg-zinc-800 border-nes-red">
                        <h3 className="text-xl retro text-nes-red mb-4 text-center">
                            ⚔️ ATTACK
                        </h3>
                        <div className="space-y-4">
                            {attackSkills.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm retro flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </span>
                                        <Badge className="bg-nes-red text-white text-xs">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Defense Skills (Backend) */}
                    <Card className="p-6 bg-zinc-800 border-nes-blue">
                        <h3 className="text-xl retro text-nes-blue mb-4 text-center">
                            🛡️ DEFENSE
                        </h3>
                        <div className="space-y-4">
                            {defenseSkills.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm retro flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </span>
                                        <Badge className="bg-nes-blue text-white text-xs">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Magic Skills (DevOps/Tools) */}
                    <Card className="p-6 bg-zinc-800 border-nes-purple">
                        <h3 className="text-xl retro text-nes-purple mb-4 text-center">
                            ✨ MAGIC
                        </h3>
                        <div className="space-y-4">
                            {magicSkills.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm retro flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </span>
                                        <Badge className="bg-nes-purple text-white text-xs">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
