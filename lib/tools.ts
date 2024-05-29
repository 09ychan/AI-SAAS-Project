import { ArrowRight, Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";


export const tools = [
    {
      label: "Conversation",
      icon:MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation"
    },
    {
      label: "Music Generation",
      icon:Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      href: "/music"
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
  },
  {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
  },
  {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      color: "text-green-700",
      bgColor: "bg-green-700/10",
  }
  ];