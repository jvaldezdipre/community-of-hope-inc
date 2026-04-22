"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronDown, PanelLeft, PanelRight, Undo2, Redo2 } from "lucide-react";
import { usePuck } from "@measured/puck";
import { EDITABLE_PAGES, getPageLabel } from "@/lib/editable-pages";

export function EditorHeader({
  currentSlug,
  actions,
}: {
  currentSlug: string;
  actions: ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { appState, dispatch, history } = usePuck();
  const leftVisible = appState.ui.leftSideBarVisible;
  const rightVisible = appState.ui.rightSideBarVisible;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const toggleSidebar = (side: "left" | "right") => {
    dispatch({
      type: "setUi",
      ui:
        side === "left"
          ? { leftSideBarVisible: !leftVisible }
          : { rightSideBarVisible: !rightVisible },
    });
  };

  return (
    <header
      className="w-full grid grid-cols-3 items-center px-4 py-3 border-b border-[#EBEBEB] bg-white"
      style={{ gridArea: "header" }}
    >
      {/* Left: sidebar toggles */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Toggle left sidebar"
          onClick={() => toggleSidebar("left")}
          className={`p-1.5 rounded hover:bg-[#FAF8F5] transition-colors ${
            leftVisible ? "text-[#1A1A1A]" : "text-[#BEBEBE]"
          }`}
        >
          <PanelLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Toggle right sidebar"
          onClick={() => toggleSidebar("right")}
          className={`p-1.5 rounded hover:bg-[#FAF8F5] transition-colors ${
            rightVisible ? "text-[#1A1A1A]" : "text-[#BEBEBE]"
          }`}
        >
          <PanelRight size={18} />
        </button>
      </div>

      {/* Middle: page dropdown */}
      <div className="flex justify-center">
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-[#FAF8F5] transition-colors"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            <span className="text-[#1A1A1A]">{getPageLabel(currentSlug)}</span>
            <ChevronDown
              size={16}
              className={`text-[#3D3D3D] transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-white rounded-[8px] border border-[#EBEBEB] shadow-lg py-1 z-50">
              {EDITABLE_PAGES.map((page) => {
                const isCurrent = page.slug === currentSlug;
                return (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      if (!isCurrent) router.push(`/admin/pages/${page.slug}`);
                    }}
                    className="flex items-center justify-between w-full px-3 py-2 hover:bg-[#FAF8F5] transition-colors text-left"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
                  >
                    <span className="text-[#1A1A1A]">{page.label}</span>
                    {isCurrent && <Check size={14} className="text-[#458CFE]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Right: undo, redo, publish */}
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Undo"
          disabled={!history.hasPast}
          onClick={() => history.back()}
          className="p-1.5 rounded hover:bg-[#FAF8F5] transition-colors disabled:opacity-40 disabled:hover:bg-transparent text-[#1A1A1A]"
        >
          <Undo2 size={18} />
        </button>
        <button
          type="button"
          aria-label="Redo"
          disabled={!history.hasFuture}
          onClick={() => history.forward()}
          className="p-1.5 rounded hover:bg-[#FAF8F5] transition-colors disabled:opacity-40 disabled:hover:bg-transparent text-[#1A1A1A]"
        >
          <Redo2 size={18} />
        </button>
        {actions}
      </div>
    </header>
  );
}
