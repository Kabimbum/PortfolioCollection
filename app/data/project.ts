export const projects = [
  {
    category: "UI / UX Design",
    items: [
      {
        title: "SIGAP – Sistem Informasi Pengaduan Masyarakat",
        period: "June 2025",
        role: "UI/UX Designer",
        description:
          "Academic project focused on designing a digital public complaint system with clear reporting flow and transparent tracking.",
        details: [
          "Analyzed user requirements for a digital public complaint system.",
          "Created use case diagrams, user flows, and wireframes.",
          "Designed interactive prototypes using Figma.",
          "Focused on ease of reporting, complaint tracking, and information transparency.",
          "Produced a complete system analysis report for academic documentation.",
        ],
        tech: ["Figma"],
      },
      {
        title: "Pangan Raya – GEMASTIK UI/UX Competition",
        period: "GEMASTIK (National Competition)",
        role: "UI/UX Designer",
        description:
          "National-level UI/UX competition project representing Universitas Esa Unggul, focused on building a digital food ecosystem.",
        details: [
          "Designed an integrated digital platform connecting farmers, breeders, fishermen, businesses, and consumers.",
          "Developed end-to-end user experience, user journey, and wireframes.",
          "Created high-fidelity prototypes using Figma.",
          "Focused on market accessibility, supply chain transparency, and transaction simplicity.",
          "Collaborated in a team to deliver innovative and functional design solutions.",
        ],
        tech: ["Figma"],
      },
    ],
  },

  {
    category: "Web Development",
    items: [
      {
        title: "University Alumni Database – Data Warehouse Project",
        period: "Academic Project",
        role: "Backend Developer",
        description:
          "Data warehouse-based system for managing and analyzing university event data.",
        details: [
          "Developed CRUD application using Laravel Filament.",
          "Designed fact and dimension schemas for data warehouse using MySQL.",
          "Implemented ETL processes from CSV/Excel into relational databases.",
          "Containerized development and deployment environment using Docker.",
          "Built analytical dashboards and simple data visualizations.",
          "Performed data testing and validation to ensure data integrity.",
          "Prepared full system analysis and implementation report.",
        ],
        tech: ["Laravel", "MySQL", "React", "Docker"],
      },
      {
        title: "IDENTIKA – Digital Student ID System",
        period: "Academic Project",
        role: "Fullstack Developer",
        description:
          "Digital system for automating student ID card generation and validation.",
        details: [
          "Designed digital system for student ID automation.",
          "Applied Waterfall methodology for system analysis and architecture.",
          "Created UI/UX wireframes and prototypes using Figma.",
          "Designed and implemented MySQL database structure.",
          "Developed web application using Laravel Filament.",
          "Generated downloadable digital student ID cards (PNG format).",
          "Conducted black-box testing and feature improvements.",
        ],
        tech: ["Laravel Filament", "MySQL", "Figma"],
      },
      {
        title: "Export–Import Monitoring System (Role-Based)",
        period: "Case Study Project",
        role: "Backend Developer",
        description:
          "Role-based system for monitoring export–import goods at the airport.",
        details: [
          "Built a real-time tracking system for export–import goods.",
          "Implemented RBAC for Admin and Customs roles.",
          "Developed CRUD features for companies, goods, shipment status, and validations.",
          "Created dashboards using FilamentPHP.",
          "Ensured data security, transparency, and efficiency using centralized databases.",
          "Implemented operational workflow: Admin → Validation → Customs.",
        ],
        tech: ["Laravel 12", "FilamentPHP", "MySQL", "MariaDB"],
      },
      {
        title: "Football Match Prediction Web App",
        period: "Machine Learning Project",
        role: "ML & Web Developer",
        description:
          "Web-based football match prediction system using machine learning.",
        details: [
          "Processed football match datasets (CSV) using Python.",
          "Trained models using Random Forest, XGBoost, and KNN algorithms.",
          "Saved trained models using joblib.",
          "Integrated ML models into a simple Flask web application.",
          "Developed UI for team input and real-time prediction output.",
          "Optimized UI layout for usability and responsiveness.",
        ],
        tech: ["Python", "Scikit-Learn", "Flask", "CSV Dataset"],
      },
    ],
  },
];
