export interface ContentBlockProps {
  title: string;
  content: string;
  button?: { title: string; color?: string }[];
  section?: { title: string; content: string }[]; // Remove the icon field
  id: string;
  direction: "left" | "right";
  logoVersion?: "broom" | "hand"; // To select the correct logo
}
