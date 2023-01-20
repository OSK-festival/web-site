/* src/types/news.ts */
import type { MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Post = {
  title: string;
  tag: Tag[];
  text: string;
} & MicroCMSListContent;