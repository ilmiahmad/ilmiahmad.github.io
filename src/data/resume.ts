export type Link = { label: string; href: string };

export type Entry = {
  title: string;
  /** Text after the bold title, e.g. ", Bekasi – Indonesia" or " [Team]" */
  suffix?: string;
  role?: string;
  date?: string;
  link?: Link;
  bullets: string[];
  /** Inline links shown after a bullet, keyed by bullet index */
  bulletLinks?: Record<number, Link>;
};

export type Project = Entry & {
  /** One-line description shown while collapsed */
  blurb: string;
  tags: string[];
};

export const profile = {
  name: "Ahmad Jabar Ilmi",
  headline: "Hardware engineer",
  photo: "/photo.jpg",
  email: "ilmiahmad983@gmail.com",
  linkedin: { label: "LinkedIn", href: "https://linkedin.com/in/ahmadjabar" },
  github: { label: "GitHub", href: "https://github.com/ilmiahmad" },
  pdf: "/resume.pdf",
  summary:
    "Electrical Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS) with a background in digital design, FPGA development, and IC design through academic and team projects. Currently working as a hardware engineer at LG Electronics. Eager to continue learning and to pursue a Master’s degree in digital IC design.",
};

export const education: Entry[] = [
  {
    title: "Institut Teknologi Sepuluh Nopember (ITS)",
    suffix: ", Bachelor of Electrical Engineering",
    date: "Aug 2021 – Aug 2025",
    bullets: [
      "GPA: 3.61/4.00 | Predicate: Very Satisfactory",
      "Final Project: “Low Power Integrated Circuit Design For Spiking Neural Network Based Human Activity Recognition Using Photoplethysmogram”",
    ],
    bulletLinks: {
      0: {
        label: "[Docs]",
        href: "https://drive.google.com/drive/folders/1Foa17QhWfknI0Js3FoNNzzBYInG4MOHU?usp=drive_link",
      },
      1: { label: "[Docs]", href: "https://intip.in/3ofX" },
    },
  },
];

export const skills: { label: string; value: string; link?: Link }[] = [
  { label: "Programming languages", value: "C/C++, SystemVerilog, Python" },
  { label: "Hardware platforms", value: "MCUs (STM32), FPGAs (AMD Zynq, Artix)" },
  { label: "EDA & design tools", value: "Cadence IC Design, IIC-OSIC-TOOLS, KiCad" },
  {
    label: "Test & measurement",
    value: "Logic Analyzer, Oscilloscope, Signal Generator, Multimeter",
  },
  { label: "Development tools", value: "Git, Docker, Linux" },
  { label: "Languages", value: "Bahasa Indonesia, English" },
  {
    label: "Certifications",
    value: "Polytron – IC Design Engineer Certificate",
    link: {
      label: "[Docs]",
      href: "https://drive.google.com/file/d/1VjLzxAbCnZxlQ_qdAkLb1cln89bzdWlA/view?usp=sharing",
    },
  },
];

export const experience: Entry[] = [
  {
    title: "LG Electronics",
    suffix: ", Bekasi – Indonesia",
    date: "Nov 2025 – Present",
    role: "Jr. Research Engineer (Hardware)",
    bullets: [
      "Manage hardware development activities for TV products, from R&D development through production readiness, including BOM management, hardware options, and engineering changes.",
      "Perform hardware measurements, validation, and troubleshooting to evaluate product performance against specifications.",
      "Investigate hardware issues during R&D and coordinate technical resolution with component and IC vendors.",
    ],
  },
  {
    title: "Microelectronics & Embedded Systems Laboratory ITS",
    suffix: ", Surabaya – Indonesia",
    date: "Jun 2023 – Dec 2024",
    role: "Laboratory Assistant & Practicum Coordinator",
    bullets: [
      "Assisted undergraduate students in electrical, electronic, and digital circuits laboratory sessions, providing technical guidance on experiments and circuit analysis.",
      "Coordinated practicum schedules and teaching activities, established assessment criteria, and led a team of 40 laboratory assistants supporting more than 250 students.",
    ],
  },
  {
    title: "Hartono Istana Teknologi (Polytron)",
    suffix: ", Kudus – Indonesia",
    date: "Sep 2024 – Dec 2024",
    role: "Integrated Circuit (IC) Design Engineer Intern",
    bullets: [
      "Gained hands-on experience in analog and digital IC design processes using Cadence software, strengthening understanding of chip development.",
      "Designed and simulated systolic array based neural network (NN) accelerator on FPGA using AMD Vivado.",
    ],
  },
  {
    title: "ITS Robocon",
    suffix: ", Surabaya – Indonesia",
    date: "Mar 2022 – Aug 2024",
    role: "Embedded Programmer Staff & Autonomous Robot Lead Programmer",
    bullets: [
      "Integrated sensors, communication interfaces, and actuator controls on robot, contributing to 1st place at Kontes Robot ABU Indonesia (KRAI) 2022, 2nd place at ABU Robocon 2022, and 4th place at KRAI 2023.",
      "Designed and implemented ROS2 based perception and navigation systems for ABU Robocon 2024, contributing to 2nd place at KRAI 2024.",
    ],
  },
];

/** Bars for the overlap chart above Experience. end = null means "present". */
export const timeline: { label: string; start: string; end: string | null; kind: "work" | "study" }[] = [
  { label: "ITS, B.Eng.", start: "2021-08", end: "2025-08", kind: "study" },
  { label: "ITS Robocon", start: "2022-03", end: "2024-08", kind: "work" },
  { label: "ITS lab assistant", start: "2023-06", end: "2024-12", kind: "work" },
  { label: "Polytron intern", start: "2024-09", end: "2024-12", kind: "work" },
  { label: "LG Electronics", start: "2025-11", end: null, kind: "work" },
];

export const projects: Project[] = [
  {
    title: "TPUv1 Zynq FPGA Accelerator",
    suffix: " [Personal]",
    blurb: "INT8 tensor accelerator with a 16×16 systolic array, a Linux driver and a compiler.",
    tags: ["SystemVerilog", "Kria KV260", "Verilator"],
    link: { label: "[GitHub]", href: "https://github.com/ilmiahmad/tpuv1/tree/main" },
    bullets: [
      "Developed an INT8 TPUv1 accelerator using SystemVerilog with a 16×16 systolic array on AMD Kria KV260.",
      "Integrated a Linux driver and compiler, and verified the RTL with Verilator simulation and onboard testing on the Kria KV260.",
    ],
  },
  {
    title: "Digital Integration for GF180MCU ASIC Tapeout – ITS LPDP",
    suffix: " [Team]",
    date: "Ongoing",
    blurb: "RISC-V core with digital and analog IPs, headed for tapeout.",
    tags: ["RISC-V", "AXI4-Lite", "Cadence Xcelium", "Artix"],
    bullets: [
      "Integrated digital and analog IPs with a RISC-V core for a GF180MCU ASIC project.",
      "Designed AXI4-Lite interfaces and address mapping for processor-to-peripheral communication.",
      "Developed RTL testbenches and verified IP integration through simulation in Cadence Xcelium and FPGA emulation on an AMD Artix FPGA.",
    ],
  },
  {
    title: "ORB Feature Extraction Accelerator – NeuroEdge",
    suffix: " [Team]",
    date: "2025",
    blurb: "FPGA ORB feature extraction for SLAM, 8× faster than the software version.",
    tags: ["FPGA", "SLAM"],
    bullets: [
      "Developed an FPGA based ORB feature extraction accelerator IP for SLAM, achieving an 8× speedup over the original software implementation.",
    ],
  },
  {
    title: "Scan D Flip-Flop Design for GF180MCU – IEEE SSCS Chipathon 2025",
    suffix: " [Team]",
    blurb: "Scan DFF standard cell: circuit design and physical layout.",
    tags: ["GF180MCU", "Standard cell", "Layout"],
    link: {
      label: "[GitHub]",
      href: "https://github.com/radityankn/voidwalkers-scandff-gf180mcu",
    },
    bullets: [
      "Designed and developed a Scan D Flip-Flop (Scan DFF) for the GF180MCU process.",
      "Responsible for flip-flop circuit design and physical layout as part of the standard-cell development workflow.",
    ],
  },
  {
    title: "UNICASS SAR-ADC Design",
    suffix: " [Team]",
    blurb: "SAR-ADC with DRC and LVS clean layout on Sky130.",
    tags: ["Sky130", "Analog", "DRC/LVS"],
    link: {
      label: "[GitHub]",
      href: "https://github.com/ilmiahmad/UNIC-CASS-TSAR-ADC-ITS/tree/main",
    },
    bullets: [
      "Contributed to the design and integration of analog and digital blocks for SAR-ADC design.",
      "Supported circuit verification and physical design validation, achieving DRC and LVS clean results using the Sky130 PDK.",
    ],
  },
  {
    title: "PKM-KC, Hemoglobest",
    suffix: " [Team]",
    blurb: "Wearable prototype made 50% smaller with a 4-layer PCB and STM32 firmware.",
    tags: ["PCB", "STM32F1X", "KiCad"],
    link: {
      label: "[Docs]",
      href: "https://docs.google.com/presentation/d/1hdajqf39ifMIpSVojbj5JpPTs7rxEFIQ2_smvGK4g7I/edit?usp=sharing",
    },
    bullets: [
      "Reduced wearable device prototype size by 50% and improved system robustness by designing a compact 4-layer PCB and developing the corresponding STM32F1X based firmware.",
      "Writing scientific report and BOM preparation.",
    ],
  },
];
