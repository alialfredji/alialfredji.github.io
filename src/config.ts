export const SITE = {
  website: "https://alfredji.com/", // replace this with your deployed domain
  author: "Ali Alfredji",
  profile: "https://alfredji.com/",
  desc: "Hi, I'm Ali Alfredji, Senior Software Engineer with 10+ years of experience building better software. Writing on AI‑powered dev, software engineering, and productivity.",
  title: "Alfredji",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/laibyte/astro-website/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Stockholm", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
