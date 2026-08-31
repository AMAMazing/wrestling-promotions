/**
 * Historical Timeline Snapshots (1980-2026)
 * Power Scores, Attendance, Gross Revenues ($M), Broadcasters, Aces & Geos
 */
window.TIMELINE_DATA = {
  1980: {
    era: "TERRITORY",
    eraName: "The Territory Era (Closed Circuits)",
    eraYears: "1980 – 1984",
    eraDesc: "NWA cartel rules North America with regional borders; WWF dominates the Northeast; Inoki's NJPW and Baba's AJPW draw colossal crowds in Japan.",
    topAce: "Antonio Inoki / Harley Race",
    peakGate: 36295,
    peakGateEvent: "Showdown at Shea (Sammartino vs Zbyszko)",
    industryValuation: "$65M",
    mediaMedium: "Syndicated TV & Arenas",
    milestone: "Bruno Sammartino and Larry Zbyszko headline Shea Stadium in a classic steel cage masterclass.",
    geo: { na: 55, jp: 30, mx: 15 },
    rankings: [
      { id: "nwa_jcp", score: 88, rev: 25, att: 22000, tv: "NWA Syndication (Regional #1)", star: "Harley Race / Ric Flair" },
      { id: "njpw", score: 85, rev: 22, att: 30000, tv: "TV Asahi (Golden Time)", star: "Antonio Inoki / Tiger Mask" },
      { id: "wwe", score: 80, rev: 18, att: 36295, tv: "MSG Network Syndication", star: "Bruno Sammartino / Backlund" },
      { id: "ajpw", score: 76, rev: 16, att: 18000, tv: "Nippon TV Broadcast", star: "Giant Baba / Jumbo Tsuruta" },
      { id: "cmll", score: 70, rev: 10, att: 16500, tv: "Televisa Arena Shows", star: "El Santo / Sangre Chicana" },
      { id: "awa", score: 68, rev: 9, att: 15000, tv: "Midwest Syndication", star: "Nick Bockwinkel / Verne Gagne" }
    ]
  },
  1983: {
    era: "TERRITORY",
    eraName: "Dawn of Starrcade & Hulkamania Prep",
    eraYears: "1980 – 1984",
    eraDesc: "Jim Crockett stages Starrcade '83 A Flare for the Gold on closed-circuit television; Vince McMahon Jr. purchases WWF from his father to begin national blitz.",
    topAce: "Ric Flair / Hulk Hogan",
    peakGate: 25000,
    peakGateEvent: "NWA Starrcade '83 (Greensboro Coliseum)",
    industryValuation: "$90M",
    mediaMedium: "Closed-Circuit CCTV & Syndication",
    milestone: "Ric Flair defeats Harley Race in a steel cage at Starrcade '83, proving national closed-circuit viability.",
    geo: { na: 60, jp: 28, mx: 12 },
    rankings: [
      { id: "nwa_jcp", score: 92, rev: 32, att: 25000, tv: "Superstation WTBS (Atlanta)", star: "Ric Flair / Dusty Rhodes" },
      { id: "wwe", score: 86, rev: 28, att: 26000, tv: "USA Network / Syndication", star: "Bob Backlund / Hulk Hogan" },
      { id: "njpw", score: 84, rev: 24, att: 28000, tv: "TV Asahi (Prime Time)", star: "Antonio Inoki / Hulk Hogan" },
      { id: "ajpw", score: 78, rev: 18, att: 16000, tv: "Nippon TV", star: "Giant Baba / Stan Hansen" },
      { id: "awa", score: 72, rev: 12, att: 18000, tv: "Midwest Network", star: "Hulk Hogan / Bockwinkel" },
      { id: "cmll", score: 68, rev: 9, att: 17000, tv: "Arena Mexico Regulars", star: "El Solitario / Perro Aguayo" }
    ]
  },
  1987: {
    era: "GOLDEN_80S",
    eraName: "Rock 'n' Wrestling & Golden Era Boom",
    eraYears: "1985 – 1991",
    eraDesc: "WrestleMania III shatters indoor records at the Pontiac Silverdome with Hogan vs Andre; Jim Crockett Promotions dominates the south with Great American Bash.",
    topAce: "Hulk Hogan / Randy Savage",
    peakGate: 78000,
    peakGateEvent: "WrestleMania III (Pontiac Silverdome: 78k-93k)",
    industryValuation: "$180M",
    mediaMedium: "Pay-Per-View & NBC Saturday Night's Main Event",
    milestone: "Hulk Hogan bodyslams Andre the Giant in front of 78,000+ fans at the Silverdome, cementing pro wrestling in global pop culture.",
    geo: { na: 68, jp: 22, mx: 10 },
    rankings: [
      { id: "wwe", score: 98, rev: 95, att: 78000, tv: "NBC SNME (11.6 Rating / 15M Viewers)", star: "Hulk Hogan / Macho Man" },
      { id: "nwa_jcp", score: 86, rev: 40, att: 25000, tv: "TBS World Championship Wrestling", star: "Ric Flair / 4 Horsemen / Dusty" },
      { id: "njpw", score: 82, rev: 30, att: 35000, tv: "TV Asahi Sports", star: "Antonio Inoki / Tatsumi Fujinami" },
      { id: "ajpw", score: 79, rev: 26, att: 20000, tv: "Nippon TV Budokan Series", star: "Jumbo Tsuruta / Genichiro Tenryu" },
      { id: "awa", score: 50, rev: 6, att: 8000, tv: "ESPN Early Cable", star: "Curt Hennig / Greg Gagne" },
      { id: "cmll", score: 65, rev: 11, att: 18000, tv: "Televisa Sports", star: "Atlantis / Rayo de Jalisco Jr." }
    ]
  },
  1993: {
    era: "NEW_WAVE_90S",
    eraName: "Puroresu 50k Domes & Lucha Libre Explosion",
    eraYears: "1992 – 1995",
    eraDesc: "While WWF rebuilds post-steroid trial, Japanese promotions pack Tokyo Dome & Budokan, and AAA debuts with 48,000 at TripleMania I.",
    topAce: "Mitsuharu Misawa / Shinya Hashimoto / Konnan",
    peakGate: 63500,
    peakGateEvent: "NJPW 'Fantastic Story' Tokyo Dome (Jan 4)",
    industryValuation: "$220M",
    mediaMedium: "Pay-Per-View & Dome Supercards",
    milestone: "AAA holds TripleMania I packing 48,000 at Mexico City's Plaza de Toros, sparking the North American Lucha Libre surge.",
    geo: { na: 45, jp: 38, mx: 17 },
    rankings: [
      { id: "njpw", score: 92, rev: 55, att: 63500, tv: "TV Asahi Dome Specials", star: "Shinya Hashimoto / Keiji Muto" },
      { id: "ajpw", score: 90, rev: 48, att: 58000, tv: "NTV Budokan Sellout Streak", star: "Mitsuharu Misawa / Kenta Kobashi" },
      { id: "wwe", score: 82, rev: 72, att: 29045, tv: "USA Network RAW (New Dawn)", star: "Bret 'Hitman' Hart / Undertaker" },
      { id: "aaa", score: 80, rev: 25, att: 48000, tv: "Televisa TripleMania Boom", star: "Konnan / Rey Mysterio / Cien Caras" },
      { id: "wcw", score: 75, rev: 45, att: 12000, tv: "TBS / SuperBrawl PPV", star: "Vader / Sting / Ric Flair" },
      { id: "cmll", score: 71, rev: 18, att: 18000, tv: "Arena Mexico Aniversario", star: "Atlantis / Blue Panther" }
    ]
  },
  1998: {
    era: "MONDAY_NIGHT_WARS",
    eraName: "Monday Night Wars & The Attitude Era Zenith",
    eraYears: "1996 – 2001",
    eraDesc: "The greatest television ratings war in entertainment history. Austin 3:16 and The Rock propel RAW to record ratings while WCW's nWo and Goldberg fill football domes.",
    topAce: "'Stone Cold' Steve Austin / Goldberg / Hollywood Hogan",
    peakGate: 41412,
    peakGateEvent: "WCW Monday Nitro (Georgia Dome - Goldberg vs Hogan)",
    industryValuation: "$650M",
    mediaMedium: "Live Prime Time Cable (RAW vs Nitro) & PPV",
    milestone: "WWF RAW and WCW Nitro simultaneously command over 10.0+ aggregate Nielsen ratings each week; ECW explodes on PPV.",
    geo: { na: 75, jp: 18, mx: 7 },
    rankings: [
      { id: "wwe", score: 99, rev: 250, att: 30000, tv: "USA Network RAW (5.8 avg / 7.0+ peaks)", star: "'Stone Cold' Steve Austin / The Rock" },
      { id: "wcw", score: 96, rev: 220, att: 41412, tv: "TNT Nitro (4.5 avg / 83-week streak)", star: "Goldberg / Hollywood Hogan / Sting" },
      { id: "njpw", score: 84, rev: 65, att: 65000, tv: "TV Asahi Tokyo Dome Series", star: "Shinya Hashimoto / nWo Japan" },
      { id: "ajpw", score: 82, rev: 52, att: 58300, tv: "NTV Tokyo Dome 1998", star: "Misawa / Kobashi / Kawada" },
      { id: "ecw", score: 68, rev: 14, att: 6000, tv: "TNN / Hardcore PPV Buys (100k)", star: "Rob Van Dam / Taz / Sabu" },
      { id: "aaa", score: 65, rev: 12, att: 20000, tv: "Televisa TripleMania VI", star: "Perro Aguayo / Cibernetico" }
    ]
  },
  2005: {
    era: "RUTHLESS_AGGRESSION",
    eraName: "Ruthless Aggression & Pure Wrestling Dawn",
    eraYears: "2002 – 2009",
    eraDesc: "WWE operates as sole US mainstream titan post-buyout with Batista and John Cena; Pro Wrestling NOAH rules Japan's Tokyo Dome; TNA establishes Spike TV presence.",
    topAce: "John Cena / Batista / Kenta Kobashi",
    peakGate: 44000,
    peakGateEvent: "NOAH 'Destiny' Tokyo Dome (Kobashi vs Misawa)",
    industryValuation: "$480M",
    mediaMedium: "Spike TV, UPN/USA, Pay-Per-View, DVD Home Video",
    milestone: "Pro Wrestling NOAH draws 44,000 fans to Tokyo Dome for Misawa vs Kawada & Kobashi vs Destiny, while WWE crowns Cena & Batista at WrestleMania 21.",
    geo: { na: 65, jp: 25, mx: 10 },
    rankings: [
      { id: "wwe", score: 98, rev: 371, att: 20193, tv: "USA/Spike (3.8-4.2 Rating / 5.5M Viewers)", star: "John Cena / Batista / Undertaker" },
      { id: "noah", score: 80, rev: 28, att: 44000, tv: "NTV Nippon TV", star: "Kenta Kobashi / Mitsuharu Misawa" },
      { id: "njpw", score: 74, rev: 24, att: 35000, tv: "TV Asahi (MMA Inoki Era)", star: "Hiroyoshi Tenzan / Shinsuke Nakamura" },
      { id: "tna", score: 72, rev: 20, att: 4000, tv: "Spike TV (1.0-1.3M Viewers)", star: "AJ Styles / Samoa Joe / Jeff Jarrett" },
      { id: "cmll", score: 70, rev: 14, att: 18000, tv: "Televisa (Mistico Boom)", star: "Mistico / Ultimo Guerrero" },
      { id: "roh", score: 60, rev: 5, att: 2500, tv: "DVD Direct Distribution", star: "Bryan Danielson / CM Punk / Joe" }
    ]
  },
  2014: {
    era: "STREAMING_PG",
    eraName: "The WWE Network Launch & NJPW Bushiroad Boom",
    eraYears: "2010 – 2017",
    eraDesc: "WWE disrupts digital media by launching the $9.99 WWE Network OTT platform; NJPW experiences a massive creative renaissance led by Okada and Tanahashi.",
    topAce: "John Cena / Daniel Bryan / Hiroshi Tanahashi",
    peakGate: 75167,
    peakGateEvent: "WrestleMania XXX (Mercedes-Benz Superdome, NOLA)",
    industryValuation: "$850M",
    mediaMedium: "Over-The-Top OTT Subscriptions & Global TV",
    milestone: "Daniel Bryan wins WWE World Title at WrestleMania XXX as WWE launches its groundbreaking WWE Network OTT streaming app.",
    geo: { na: 70, jp: 20, mx: 10 },
    rankings: [
      { id: "wwe", score: 99, rev: 542, att: 75167, tv: "USA Network (3.1M Viewers) + WWE Network", star: "John Cena / Daniel Bryan / Brock Lesnar" },
      { id: "njpw", score: 85, rev: 35, att: 35000, tv: "TV Asahi / NJPW World Stream", star: "Hiroshi Tanahashi / Kazuchika Okada" },
      { id: "cmll", score: 70, rev: 16, att: 17500, tv: "Televisa 81st Aniversario", star: "Atlantis / Ultimo Guerrero" },
      { id: "aaa", score: 69, rev: 15, att: 22000, tv: "TripleMania XXII / Lucha Underground", star: "Psycho Clown / Texano Jr." },
      { id: "roh", score: 64, rev: 9, att: 3000, tv: "Sinclair Broadcast Group", star: "Adam Cole / Kevin Steen / Young Bucks" },
      { id: "tna", score: 62, rev: 14, att: 3500, tv: "Spike TV / Destination America Transition", star: "Bobby Roode / Kurt Angle / EC3" }
    ]
  },
  2023: {
    era: "MODERN_RENAISSANCE",
    eraName: "All In Wembley 81k & The TKO Corporate Merger",
    eraYears: "2018 – 2024",
    eraDesc: "AEW stages the largest paid turnstile event in Western wrestling history at Wembley Stadium (81k distributed); Endeavor merges WWE with UFC to form TKO Group ($21B valuation).",
    topAce: "Roman Reigns / Cody Rhodes / MJF / Will Ospreay",
    peakGate: 81035,
    peakGateEvent: "AEW All In: London (Wembley Stadium)",
    industryValuation: "$2.4 Billion",
    mediaMedium: "Linear Cable (WBD/USA) + Peacock/PLEs + Stadiums",
    milestone: "AEW All In London packs 81,035 into Wembley Stadium; WWE achieves record multi-million dollar stadium gates under Triple H.",
    geo: { na: 76, jp: 14, mx: 10 },
    rankings: [
      { id: "wwe", score: 99, rev: 1330, att: 80497, tv: "Fox SmackDown (2.4M) / USA RAW (1.8M)", star: "Roman Reigns / Cody Rhodes / Seth Rollins" },
      { id: "aew", score: 88, rev: 175, att: 81035, tv: "TBS Dynamite (850k-1.0M) + 140k PPV buys", star: "MJF / Kenny Omega / Jon Moxley / Swerve" },
      { id: "njpw", score: 78, rev: 40, att: 26085, tv: "TV Asahi / NJPW World (Wrestle Kingdom 17)", star: "Kazuchika Okada / Will Ospreay" },
      { id: "cmll", score: 74, rev: 18, att: 18000, tv: "90th Aniversario Sellout / AEW Alliance", star: "Mistico / Mascara Dorada 2.0" },
      { id: "stardom", score: 70, rev: 15, att: 5539, tv: "Samurai TV / Bushiroad", star: "Giulia / Mayu Iwatani / Tam Nakano" },
      { id: "aaa", score: 68, rev: 14, att: 18500, tv: "TripleMania 31 / Space TV", star: "Hijo del Vikingo / Psycho Clown" }
    ]
  },
  2026: {
    era: "STREAMING_WARS",
    eraName: "The Live Global Streaming Era (Netflix & Multi-Polar)",
    eraYears: "2025 – 2026+",
    eraDesc: "WWE RAW airs live worldwide on Netflix ($5B 10-year deal); AEW expands with Warner Bros Discovery Max live streaming; international stadium cross-over alliances peak.",
    topAce: "Cody Rhodes / Roman Reigns / Swerve Strickland / Konosuke Takeshita",
    peakGate: 72000,
    peakGateEvent: "WWE WrestleMania 42 / AEW All In 2026",
    industryValuation: "$3.2 Billion",
    mediaMedium: "Netflix Global Live, Max OTT, Peacock & Global Stadium Tours",
    milestone: "Netflix transforms pro wrestling delivery into 190+ countries with simultaneous multi-lingual broadcasts, completing the streaming transition.",
    geo: { na: 78, jp: 12, mx: 10 },
    rankings: [
      { id: "wwe", score: 100, rev: 1650, att: 72000, tv: "Netflix Global Stream (Estimated 8M+ World Reach)", star: "Cody Rhodes / Roman Reigns / Rhea Ripley / Gunther" },
      { id: "aew", score: 89, rev: 210, att: 55000, tv: "TBS/TNT + Max OTT Live Streaming", star: "Will Ospreay / Swerve Strickland / MJF / Mercedes Mone" },
      { id: "njpw", score: 79, rev: 42, att: 28000, tv: "ABEMA / NJPW World Global", star: "Zack Sabre Jr / Shota Umino / Yota Tsuji" },
      { id: "cmll", score: 76, rev: 22, att: 18000, tv: "Arena Mexico Global Stream", star: "Mistico / Templario / Titan" },
      { id: "stardom", score: 72, rev: 18, att: 6000, tv: "Bushiroad Media Network", star: "Maika / Saya Kamitani / Starlight Kid" },
      { id: "tna", score: 68, rev: 18, att: 5000, tv: "AXS TV + WWE NXT Talent Collaboration", star: "Nic Nemeth / Josh Alexander / Jordynne Grace" }
    ]
  }
};