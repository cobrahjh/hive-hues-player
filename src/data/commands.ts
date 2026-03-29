export interface Command {
  name: string;
  description: string;
}

export interface CommandCategory {
  id: string;
  label: string;
  description: string;
  commands: Command[];
}

export const categories: CommandCategory[] = [
  {
    id: "general",
    label: "General",
    description: "Core commands for getting started and checking stream info.",
    commands: [
      { name: "!commands", description: "Shows a link to the full viewer commands list" },
      { name: "!planestatus", description: "Displays current aircraft type, callsign, and flight status" },
      { name: "!planehelp", description: "Lists available plane-related commands" },
      { name: "!flightdata", description: "Shows real-time flight data — altitude, speed, heading, and more" },
      { name: "!autopilot", description: "Displays current autopilot settings and status" },
      { name: "!hive", description: "Info about the hIVE bot and its features" },
      { name: "!features", description: "Lists all the features and integrations available" },
      { name: "!sim", description: "Shows which simulator is currently being used" },
      { name: "!discord", description: "Drops the Discord invite link in chat" },
      { name: "!socials", description: "Links to all social media profiles" },
      { name: "!uptime", description: "Shows how long the stream has been live" },
    ],
  },
  {
    id: "flight-controls",
    label: "Flight Controls",
    description: "Take control of the aircraft — adjust heading, altitude, speed, and more.",
    commands: [
      { name: "!heading <deg>", description: "Set the aircraft heading (0–360°)" },
      { name: "!altitude <ft>", description: "Set target altitude in feet" },
      { name: "!speed <kts>", description: "Set target airspeed in knots" },
      { name: "!flaps <pos>", description: "Set flap position (0–full)" },
      { name: "!gear", description: "Toggle landing gear up/down" },
      { name: "!lights", description: "Toggle aircraft lights" },
    ],
  },
  {
    id: "quick-sim",
    label: "Quick Sim",
    description: "Quick simulation commands for fast adjustments.",
    commands: [
      { name: "!weather", description: "Display current in-sim weather conditions" },
      { name: "!time <HH:MM>", description: "Set the simulator time of day" },
      { name: "!pause", description: "Pause or unpause the simulation" },
      { name: "!reset", description: "Reset the current flight scenario" },
    ],
  },
  {
    id: "camera",
    label: "Camera",
    description: "Control the camera view during the flight.",
    commands: [
      { name: "!cam <view>", description: "Switch camera view (cockpit, external, tower, etc.)" },
      { name: "!zoom <level>", description: "Set camera zoom level" },
      { name: "!freecam", description: "Toggle free camera mode" },
      { name: "!showcase", description: "Cinematic showcase camera mode" },
    ],
  },
  {
    id: "tts-ai",
    label: "TTS & AI",
    description: "Text-to-speech and AI copilot interactions.",
    commands: [
      { name: "!say <message>", description: "Read a message aloud using text-to-speech" },
      { name: "!ask <question>", description: "Ask the AI copilot a question" },
      { name: "!copilot", description: "Toggle AI copilot assistance on/off" },
      { name: "!voice <name>", description: "Change the TTS voice" },
    ],
  },
  {
    id: "music",
    label: "Music",
    description: "Request songs and control the music player.",
    commands: [
      { name: "!sr <song>", description: "Request a song to be played" },
      { name: "!skip", description: "Vote to skip the current song" },
      { name: "!queue", description: "Show the current music queue" },
      { name: "!nowplaying", description: "Display the currently playing song" },
      { name: "!volume <0-100>", description: "Set the music player volume" },
    ],
  },
  {
    id: "ai-art",
    label: "AI Art",
    description: "Generate AI artwork during the stream.",
    commands: [
      { name: "!art <prompt>", description: "Generate an AI image from your prompt" },
      { name: "!artstyle <style>", description: "Change the AI art generation style" },
    ],
  },
  {
    id: "routes",
    label: "Routes",
    description: "Flight route and navigation commands.",
    commands: [
      { name: "!route", description: "Display the current flight route and waypoints" },
      { name: "!destination", description: "Show the destination airport info" },
      { name: "!eta", description: "Estimated time of arrival" },
      { name: "!divert <ICAO>", description: "Request a diversion to a different airport" },
    ],
  },
  {
    id: "keywords",
    label: "Keywords",
    description: "Special keyword triggers for quick actions.",
    commands: [
      { name: "F", description: "Pay respects" },
      { name: "GG", description: "Good game / good landing" },
      { name: "BUTTER", description: "Celebrate a smooth landing" },
    ],
  },
  {
    id: "bot-features",
    label: "Bot Features",
    description: "hIVE bot management and feature commands.",
    commands: [
      { name: "!botinfo", description: "Display hIVE bot version and status" },
      { name: "!points", description: "Check your loyalty points balance" },
      { name: "!leaderboard", description: "Show the top point earners" },
      { name: "!gamble <amount>", description: "Gamble your points for a chance to win big" },
    ],
  },
];
