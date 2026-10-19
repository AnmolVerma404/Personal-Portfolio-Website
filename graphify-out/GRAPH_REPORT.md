# Graph Report - portfolio-site  (2026-10-19)

## Corpus Check
- 75 files · ~54,534 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: .css 3, (none) 1, .ico 1)

## Summary
- 339 nodes · 522 edges · 29 communities (24 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Core App & Page Sections
- Projects, Cards & UI Variants
- Shadcn Component Config
- Shadcn Skill & Design System
- Package Metadata & Routing
- App TypeScript Config
- Skills Section & Progress UI
- Development & Testing Dependencies
- Node TypeScript Config
- Radix to Base UI Migration
- Runtime UI Dependencies
- Navigation Bar & Sheet Drawer
- Build & Deployment Scripts
- Design System Coverage Script
- Hero Section & Social Icons
- PWA Web App Manifest
- Test Setup & Observer Mocks
- WCAG Color Contrast Showcase
- Vite Asset Type Declarations
- Vite & Tailwind Build Config
- Root TypeScript Project References
- ESLint Configuration
- Browserslist Targets
- Node & NPM Engine Constraints
- GitHub Pages Deployment Helper
- Portfolio Profile & Brand Images
- Shadcn Skill Brand Icons
- React PWA App Icons
- Hashnode Brand Icon

## God Nodes (most connected - your core abstractions)
1. `react` - 21 edges
2. `compilerOptions` - 18 edges
3. `ProjectCard()` - 16 edges
4. `compilerOptions` - 14 edges
5. `scripts` - 13 edges
6. `Migrate Radix UI to Base UI Skill` - 12 edges
7. `shadcn/ui Skill` - 12 edges
8. `Button()` - 10 edges
9. `Navbar()` - 9 edges
10. `Section()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Personal Developer Portfolio Website` --conceptually_related_to--> `Migrate Radix UI to Base UI Skill`  [INFERRED]
  README.md → .agents/skills/migrate-radix-to-base/SKILL.md
- `HTML Application Entry Point (index.html)` --conceptually_related_to--> `Robots.txt Crawler Policy`  [INFERRED]
  index.html → public/robots.txt
- `shadcn MCP Server Reference` --semantically_similar_to--> `shadcn CLI Reference`  [INFERRED] [semantically similar]
  .agents/skills/shadcn/mcp.md → .agents/skills/shadcn/cli.md
- `Social Preview Hero Screenshot (Hashir Shoaib Template)` --conceptually_related_to--> `Anmol Verma Profile Portrait`  [INFERRED]
  public/social-image.png → src/assets/img/anmolverma.jpeg
- `shadcn/ui OpenAI Agent Interface Config` --conceptually_related_to--> `shadcn/ui Skill`  [INFERRED]
  .agents/skills/shadcn/agents/openai.yml → .agents/skills/shadcn/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Radix to Base UI Component Family Reference Guides** — agents_skills_migrate_radix_to_base_disclosure_disclosure_toggle_mapping, agents_skills_migrate_radix_to_base_display_misc_display_misc_mapping, agents_skills_migrate_radix_to_base_form_controls_form_controls_mapping, agents_skills_migrate_radix_to_base_menus_menu_family_mapping, agents_skills_migrate_radix_to_base_overlays_overlays_mapping [EXTRACTED 1.00]
- **Radix to Base UI Transformation Engine Ruleset** — agents_skills_migrate_radix_to_base_skill_migrate_radix_to_base, agents_skills_migrate_radix_to_base_universal_patterns_universal_migration_patterns, agents_skills_migrate_radix_to_base_class_mapping_class_string_rewrites, agents_skills_migrate_radix_to_base_wrapper_shapes_target_wrapper_shapes, agents_skills_migrate_radix_to_base_consumer_props_call_site_prop_changes [EXTRACTED 1.00]
- **shadcn/ui Critical Coding Rules Suite** — agents_skills_shadcn_rules_styling_patterns, agents_skills_shadcn_rules_forms_patterns, agents_skills_shadcn_rules_composition_patterns, agents_skills_shadcn_rules_icons_patterns, agents_skills_shadcn_rules_chat_primitives, agents_skills_shadcn_rules_base_vs_radix_comparison [EXTRACTED 1.00]
- **DESIGN.md to Themed Design System Showcase Pipeline** — agents_skills_shadcn_design_system_workflow, agents_skills_shadcn_design_system_page_spec, agents_skills_shadcn_customization_theming, agents_skills_shadcn_design_system_type_scale_utilities, agents_skills_shadcn_design_system_page_state_matrix [EXTRACTED 1.00]
- **shadcn Registry Discovery, Authoring, and Installation Ecosystem** — agents_skills_shadcn_cli_shadcn_cli, agents_skills_shadcn_mcp_server, agents_skills_shadcn_registry_authoring, agents_skills_shadcn_cli_components_json [INFERRED 0.95]
- **Portfolio Visual Identity and Brand Assets** — public_hashnode_icon, public_social_image_banner, src_assets_img_anmolverma_portrait, src_assets_img_rtcamp_logo [INFERRED 0.75]

## Communities (29 total, 5 thin omitted)

### Community 0 - "Core App & Page Sections"
Cohesion: 0.10
Nodes (28): react, react-dom, @testing-library/react, App(), basename, Home(), Footer(), Section() (+20 more)

### Community 1 - "Projects, Cards & UI Variants"
Cohesion: 0.14
Nodes (18): defaultStates, class-variance-authority, fetchLanguages(), formatUpdatedAt(), ProjectCard(), Badge(), BadgeProps, badgeVariants (+10 more)

### Community 2 - "Shadcn Component Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 3 - "Shadcn Skill & Design System"
Cohesion: 0.15
Nodes (16): shadcn/ui OpenAI Agent Interface Config, components.json Configuration, shadcn CLI Reference, OKLCH Semantic CSS Variable Tokens, Customization & Theming Guide, The Design System Page Guide, Design Systems from DESIGN.md Workflow, shadcn MCP Server Reference (+8 more)

### Community 4 - "Package Metadata & Routing"
Cohesion: 0.10
Nodes (19): description, homepage, name, type, version, cn, @fontsource-variable/geist, jsdom (+11 more)

### Community 5 - "App TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+11 more)

### Community 6 - "Skills Section & Progress UI"
Cohesion: 0.20
Nodes (13): @base-ui/react, HARD_SKILLS, Skill, Skills(), SkillsProps, Progress(), ProgressIndicator(), ProgressTrack() (+5 more)

### Community 7 - "Development & Testing Dependencies"
Cohesion: 0.12
Nodes (16): devDependencies, @fortawesome/free-brands-svg-icons, gh-pages, jsdom, tailwindcss, @tailwindcss/vite, @testing-library/jest-dom, @testing-library/react (+8 more)

### Community 8 - "Node TypeScript Config"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 9 - "Radix to Base UI Migration"
Cohesion: 0.14
Nodes (13): Base UI Class-String & Data-Attribute Rewrites, Consumer Call-Site Prop Changes, Disclosure & Toggle Family Props Mapping, Display, Utility & Form Primitives Mapping, Form Controls Props Mapping, Menu Family Props Mapping, Overlay Primitives Props Mapping, Migrate Radix UI to Base UI Skill (+5 more)

### Community 10 - "Runtime UI Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, @base-ui/react, class-variance-authority, cn, @fontsource-variable/geist, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, lucide-react (+7 more)

### Community 11 - "Navigation Bar & Sheet Drawer"
Cohesion: 0.26
Nodes (10): lucide-react, Navbar(), NavbarProps, Sheet(), SheetContent(), SheetHeader(), SheetOverlay(), SheetPortal() (+2 more)

### Community 12 - "Build & Deployment Scripts"
Cohesion: 0.15
Nodes (13): scripts, build, custom-deploy, deploy, deploy-all, git-add, git-commit, git-push (+5 more)

### Community 13 - "Design System Coverage Script"
Cohesion: 0.22
Nodes (6): components, missing, source, [uiArg, ...roots], uiDir, walk()

### Community 14 - "Hero Section & Social Icons"
Cohesion: 0.25
Nodes (7): @fortawesome/free-brands-svg-icons, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, react-typist-component, HeroProps, SOCIAL_ICONS, SocialIconItem

### Community 15 - "PWA Web App Manifest"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 17 - "WCAG Color Contrast Showcase"
Cohesion: 0.60
Nodes (5): ColorPair(), contrast(), luminance(), toHex(), toRgb()

### Community 18 - "Vite Asset Type Declarations"
Cohesion: 0.33
Nodes (5): *.jpeg, *.jpg, *.png, react-typist-component, *.svg

### Community 19 - "Vite & Tailwind Build Config"
Cohesion: 0.40
Nodes (3): @tailwindcss/vite, vite, @vitejs/plugin-react

### Community 20 - "Root TypeScript Project References"
Cohesion: 0.40
Nodes (4): compilerOptions, paths, files, references

### Community 21 - "ESLint Configuration"
Cohesion: 0.50
Nodes (4): eslintConfig, extends, react-app, react-app/jest

### Community 22 - "Browserslist Targets"
Cohesion: 0.67
Nodes (3): browserslist, development, production

### Community 23 - "Node & NPM Engine Constraints"
Cohesion: 0.67
Nodes (3): engines, node, npm

### Community 25 - "Portfolio Profile & Brand Images"
Cohesion: 0.67
Nodes (3): Social Preview Hero Screenshot (Hashir Shoaib Template), Anmol Verma Profile Portrait, rtCamp Company Logo

## Knowledge Gaps
- **32 isolated node(s):** `@fontsource-variable/geist`, `react-router-dom`, `shadcn`, `tw-animate-css`, `react-app` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 196 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Core App & Page Sections` to `Projects, Cards & UI Variants`, `Package Metadata & Routing`, `Skills Section & Progress UI`, `Navigation Bar & Sheet Drawer`, `Hero Section & Social Icons`, `WCAG Color Contrast Showcase`, `Vite Asset Type Declarations`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **What connects `@fontsource-variable/geist`, `react-router-dom`, `shadcn` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core App & Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.0975609756097561 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Development & Testing Dependencies` to `Package Metadata & Routing`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `Projects, Cards & UI Variants` be split into smaller, more focused modules?**
  _Cohesion score 0.14482758620689656 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Runtime UI Dependencies` to `Package Metadata & Routing`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Should `Shadcn Component Config` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._