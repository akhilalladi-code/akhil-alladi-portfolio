import type {MetadataRoute} from "next";
import {projects} from "@/data/projects";

const base = "https://akhilalladi-code.github.io/akhil-alladi-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/about", "/services", "/resume", "/contact", ...projects.map((project) => "/work/" + project.slug)]
    .map((path) => ({
      url: base + path + (path === "" ? "/" : "/"),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    }));
}
