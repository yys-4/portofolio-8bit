"use client";

import { Card } from "@/components/ui/8bit/card";
import { Badge } from "@/components/ui/8bit/badge";
import playerData from "@/lib/cv-data";

export function HeroSection() {
    const { hero } = playerData;

    return (
        <section className="min-h-screen flex items-center justify-center p-4 bg-nes-dark">
            <Card className="max-w-4xl w-full p-8 bg-zinc-900 text-white">
                <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
                    {/* Pixel Avatar */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-48 h-48 bg-zinc-800 border-4 border-white pixel-art flex items-center justify-center text-6xl">
                            👾
                        </div>
                        <Badge className="bg-nes-yellow text-black text-xs">
                            Lv. {hero.level}
                        </Badge>
                    </div>

                    {/* Character Stats */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl retro text-nes-yellow">
                                {hero.name}
                            </h1>
                            <p className="text-xl md:text-2xl retro text-nes-blue">
                                {hero.class}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-800 border-2 border-zinc-700">
                            <div className="space-y-1">
                                <div className="text-xs retro text-nes-red">ATK</div>
                                <div className="text-2xl retro">{hero.stats.attack}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs retro text-nes-blue">DEF</div>
                                <div className="text-2xl retro">{hero.stats.defense}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs retro text-nes-purple">MAG</div>
                                <div className="text-2xl retro">{hero.stats.magic}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs retro text-nes-green">SPD</div>
                                <div className="text-2xl retro">{hero.stats.speed}</div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="p-4 bg-zinc-800 border-2 border-zinc-700">
                            <p className="text-sm leading-relaxed">{hero.bio}</p>
                        </div>

                        {/* Press Start Indicator */}
                        <div className="text-center">
                            <p className="retro text-nes-yellow blink text-sm">
                                ▼ SCROLL TO CONTINUE ▼
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
