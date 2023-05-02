import { nanoid } from "nanoid";
import { PresetPayload } from "../hooks/usePresetPrompts";

export const defaultPresets: Array<PresetPayload> = [
  {
    id: nanoid(10),
    label: "Grammatical Standard English",
    text: "Correct this to standard English:\n\nShe no went to the market.",
    createdAt: "Sat, 30 Apr 2022 22:10:36 GMT",
    group: "Examples",
  },
  {
    id: nanoid(10),
    label: "Summarize for a Second Grader",
    text: "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
    createdAt: "Sat, 30 Apr 2022 22:10:37 GMT",
    group: "Examples",
  },
];
