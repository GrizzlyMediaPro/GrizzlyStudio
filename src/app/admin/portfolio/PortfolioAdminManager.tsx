"use client";

import { useEffect, useMemo, useState } from "react";
import type { PortfolioCategory } from "@/lib/portfolio-types";
import { UploadButton } from "@/lib/uploadthing";

type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string | null;
  embedUrl: string | null;
  category: PortfolioCategory;
  position: number;
};

const CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  PAGINI_PREZENTARE: "Pagini de prezentare",
  MAGAZINE_ONLINE: "Magazine online",
  APLICATII: "Aplicatii",
  SOCIAL_MEDIA: "Social media",
};

const CATEGORY_ORDER: PortfolioCategory[] = [
  "PAGINI_PREZENTARE",
  "MAGAZINE_ONLINE",
  "APLICATII",
  "SOCIAL_MEDIA",
];

type DraftItem = Omit<PortfolioItem, "position">;

const emptyDraft = (category: PortfolioCategory): DraftItem => ({
  id: "",
  title: "",
  subtitle: "",
  description: "",
  image: "",
  url: "",
  embedUrl: "",
  category,
});

export default function PortfolioAdminManager() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("PAGINI_PREZENTARE");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [newItem, setNewItem] = useState<DraftItem>(emptyDraft("PAGINI_PREZENTARE"));
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const groupedItems = useMemo(() => {
    const grouped = new Map<PortfolioCategory, PortfolioItem[]>();
    CATEGORY_ORDER.forEach((category) => grouped.set(category, []));

    for (const item of items) {
      grouped.get(item.category)?.push(item);
    }

    for (const category of CATEGORY_ORDER) {
      grouped.get(category)?.sort((a, b) => a.position - b.position);
    }

    return grouped;
  }, [items]);

  const currentItems = groupedItems.get(activeCategory) ?? [];

  async function loadItems() {
    setIsLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/portfolio-items", { cache: "no-store" });
      const data = (await response.json()) as PortfolioItem[];
      setItems(data);
    } catch {
      setMessage("Nu am putut incarca datele.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadItems();
  }, []);

  useEffect(() => {
    setNewItem(emptyDraft(activeCategory));
  }, [activeCategory]);

  function updateLocalItem(id: string, patch: Partial<PortfolioItem>) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function renderImagePreview(url: string, alt: string) {
    if (!url) {
      return (
        <div className="h-24 rounded-xl border border-dashed border-white/20 bg-black/40 flex items-center justify-center text-xs text-white/45">
          Nicio imagine selectata
        </div>
      );
    }

    return (
      <div className="h-24 rounded-xl overflow-hidden border border-white/20 bg-black/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  async function saveItem(item: PortfolioItem) {
    setIsSaving(true);
    setMessage("");
    try {
      const response = await fetch(`/api/portfolio-items/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          image: item.image,
          url: item.url,
          embedUrl: item.embedUrl,
          category: item.category,
        }),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      await loadItems();
      setMessage("Elementul a fost actualizat.");
    } catch {
      setMessage("Nu am putut salva modificarile.");
    } finally {
      setIsSaving(false);
    }
  }

  async function createItem() {
    const hasImage = Boolean(newItem.image?.trim());
    const hasEmbed = Boolean(newItem.embedUrl?.trim());
    const requiresImage = newItem.category !== "SOCIAL_MEDIA";

    if (
      !newItem.title ||
      !newItem.description ||
      (requiresImage ? !hasImage : !hasImage && !hasEmbed)
    ) {
      setMessage(
        requiresImage
          ? "Completeaza cel putin titlu, descriere si imagine."
          : "Completeaza titlu, descriere si cel putin imagine sau embed URL."
      );
      return;
    }

    setIsSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/portfolio-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Create failed");
      }

      setNewItem(emptyDraft(activeCategory));
      await loadItems();
      setMessage("Elementul a fost adaugat.");
    } catch {
      setMessage("Nu am putut adauga elementul.");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteItem(id: string) {
    setIsSaving(true);
    setMessage("");
    try {
      const response = await fetch(`/api/portfolio-items/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      await loadItems();
      setMessage("Elementul a fost sters.");
    } catch {
      setMessage("Nu am putut sterge elementul.");
    } finally {
      setIsSaving(false);
    }
  }

  async function persistOrder(nextOrder: PortfolioItem[]) {
    setItems((prev) => {
      const rest = prev.filter((item) => item.category !== activeCategory);
      return [
        ...rest,
        ...nextOrder.map((item, index) => ({ ...item, position: index })),
      ];
    });

    try {
      const response = await fetch("/api/portfolio-items/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: activeCategory,
          orderedIds: nextOrder.map((item) => item.id),
        }),
      });

      if (!response.ok) {
        throw new Error("Reorder failed");
      }
      setMessage("Ordinea a fost actualizata.");
      await loadItems();
    } catch {
      setMessage("Nu am putut actualiza ordinea.");
      await loadItems();
    }
  }

  function moveItem(index: number, direction: "up" | "down") {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentItems.length) {
      return;
    }

    const nextOrder = [...currentItems];
    const [moved] = nextOrder.splice(index, 1);
    nextOrder.splice(targetIndex, 0, moved);
    void persistOrder(nextOrder);
  }

  function onDrop(targetId: string) {
    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      return;
    }

    const nextOrder = [...currentItems];
    const fromIndex = nextOrder.findIndex((item) => item.id === draggedId);
    const toIndex = nextOrder.findIndex((item) => item.id === targetId);

    if (fromIndex === -1 || toIndex === -1) {
      setDraggedId(null);
      return;
    }

    const [moved] = nextOrder.splice(fromIndex, 1);
    nextOrder.splice(toIndex, 0, moved);
    setDraggedId(null);
    void persistOrder(nextOrder);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#ffed88] text-black border-[#ffed88]"
                : "text-white border-white/20 hover:border-white/50 hover:bg-white/5"
            }`}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {message ? (
        <p className="text-sm text-[#ffed88] bg-[#ffed88]/10 border border-[#ffed88]/30 rounded-xl px-4 py-3">
          {message}
        </p>
      ) : null}

      <section className="rounded-3xl border border-white/15 p-5 md:p-6 bg-gradient-to-br from-black/40 via-neutral-900 to-neutral-800 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
        <h2 className="nohemi-heading text-xl mb-1">
          Adauga <span className="text-[#ffed88]">element nou</span>
        </h2>
        <p className="text-white/60 text-sm mb-5">
          Toate campurile vor fi publicate in carousel dupa salvare.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            value={newItem.title}
            onChange={(event) => setNewItem((prev) => ({ ...prev, title: event.target.value }))}
            className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
            placeholder="Titlu"
          />
          <input
            value={newItem.subtitle}
            onChange={(event) =>
              setNewItem((prev) => ({ ...prev, subtitle: event.target.value }))
            }
            className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
            placeholder="Subtitlu"
          />
          <div className="space-y-2">
            <input
              value={newItem.image}
              onChange={(event) => setNewItem((prev) => ({ ...prev, image: event.target.value }))}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              placeholder="URL imagine"
            />
            {renderImagePreview(newItem.image, "Imagine noua")}
          </div>
          <input
            value={newItem.url ?? ""}
            onChange={(event) => setNewItem((prev) => ({ ...prev, url: event.target.value }))}
            className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
            placeholder="URL (optional)"
          />
          {activeCategory === "SOCIAL_MEDIA" ? (
            <input
              value={newItem.embedUrl ?? ""}
              onChange={(event) =>
                setNewItem((prev) => ({ ...prev, embedUrl: event.target.value }))
              }
              className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50 md:col-span-2"
              placeholder="Embed URL postare (ex: link iframe embed)"
            />
          ) : null}
          <textarea
            value={newItem.description}
            onChange={(event) =>
              setNewItem((prev) => ({ ...prev, description: event.target.value }))
            }
            className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm md:col-span-2 min-h-24 focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
            placeholder="Descriere"
          />
        </div>
        <div className="mt-3">
          <UploadButton
            endpoint="portfolioImage"
            onUploadBegin={() => {
              setIsUploading(true);
              setMessage("Se incarca imaginea...");
            }}
            onClientUploadComplete={(response) => {
              const uploaded = response?.[0];
              if (uploaded?.ufsUrl) {
                setNewItem((prev) => ({ ...prev, image: uploaded.ufsUrl }));
                setMessage("Imagine incarcata cu succes.");
              }
              setIsUploading(false);
            }}
            onUploadError={(error: Error) => {
              setIsUploading(false);
              setMessage(`Upload esuat: ${error.message}`);
            }}
            appearance={{
              button:
                "ut-ready:bg-[#ffed88] ut-ready:text-black ut-ready:border-[#ffed88] ut-ready:hover:opacity-90 ut-uploading:opacity-70 ut-button:rounded-full ut-button:border ut-button:border-white/20 ut-button:bg-white/10 ut-button:px-5 ut-button:py-2",
              allowedContent: "ut-allowed-content:text-white/50",
            }}
          />
        </div>
        <button
          type="button"
          onClick={createItem}
          disabled={isSaving || isUploading}
          className="mt-4 bg-[#ffed88] text-black px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          Adauga in {CATEGORY_LABELS[activeCategory]}
        </button>
      </section>

      <section className="space-y-3">
        <h2 className="nohemi-heading text-xl">
          Elemente curente: {CATEGORY_LABELS[activeCategory]}
        </h2>

        {isLoading ? <p className="text-white/70">Se incarca...</p> : null}
        {!isLoading && currentItems.length === 0 ? (
          <p className="text-white/70">Nu exista elemente in aceasta categorie.</p>
        ) : null}

        {currentItems.map((item, index) => (
          <article
            key={item.id}
            draggable
            onDragStart={() => setDraggedId(item.id)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => onDrop(item.id)}
            className="rounded-2xl border border-white/15 p-4 bg-gradient-to-br from-black/30 via-neutral-900 to-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.04)]"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-wider text-white/55">
                Pozitie #{index + 1}
              </p>
              <span className="text-xs text-[#ffed88]">Drag & drop activ</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                value={item.title}
                onChange={(event) => updateLocalItem(item.id, { title: event.target.value })}
                className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              />
              <input
                value={item.subtitle}
                onChange={(event) => updateLocalItem(item.id, { subtitle: event.target.value })}
                className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              />
              <input
                value={item.image}
                onChange={(event) => updateLocalItem(item.id, { image: event.target.value })}
                className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              />
              <input
                value={item.url ?? ""}
                onChange={(event) => updateLocalItem(item.id, { url: event.target.value })}
                className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              />
              {item.category === "SOCIAL_MEDIA" ? (
                <input
                  value={item.embedUrl ?? ""}
                  onChange={(event) =>
                    updateLocalItem(item.id, { embedUrl: event.target.value })
                  }
                  className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50 md:col-span-2"
                  placeholder="Embed URL postare social"
                />
              ) : null}
              <textarea
                value={item.description}
                onChange={(event) =>
                  updateLocalItem(item.id, { description: event.target.value })
                }
                className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-sm md:col-span-2 min-h-24 focus:outline-none focus:ring-2 focus:ring-[#ffed88]/50"
              />
              <div className="md:col-span-2 space-y-2">
                {renderImagePreview(item.image, item.title)}
                <UploadButton
                  endpoint="portfolioImage"
                  onUploadBegin={() => {
                    setIsUploading(true);
                    setMessage("Se incarca imaginea...");
                  }}
                  onClientUploadComplete={(response) => {
                    const uploaded = response?.[0];
                    if (uploaded?.ufsUrl) {
                      updateLocalItem(item.id, { image: uploaded.ufsUrl });
                      setMessage("Imagine actualizata. Apasa Salveaza.");
                    }
                    setIsUploading(false);
                  }}
                  onUploadError={(error: Error) => {
                    setIsUploading(false);
                    setMessage(`Upload esuat: ${error.message}`);
                  }}
                  appearance={{
                    button:
                      "ut-ready:bg-white/10 ut-ready:text-white ut-ready:border-white/25 ut-ready:hover:bg-white/15 ut-uploading:opacity-70 ut-button:rounded-full ut-button:border ut-button:border-white/20 ut-button:bg-black/40 ut-button:px-4 ut-button:py-2",
                    allowedContent: "ut-allowed-content:text-white/45",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                onClick={() => void saveItem(item)}
                disabled={isSaving || isUploading}
                className="px-4 py-2 rounded-full bg-[#ffed88] text-black text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                Salveaza
              </button>
              <button
                type="button"
                onClick={() => moveItem(index, "up")}
                disabled={index === 0 || isSaving || isUploading}
                className="px-4 py-2 rounded-full border border-white/30 text-sm hover:bg-white/10 disabled:opacity-50"
              >
                Sus
              </button>
              <button
                type="button"
                onClick={() => moveItem(index, "down")}
                disabled={index === currentItems.length - 1 || isSaving || isUploading}
                className="px-4 py-2 rounded-full border border-white/30 text-sm hover:bg-white/10 disabled:opacity-50"
              >
                Jos
              </button>
              <button
                type="button"
                onClick={() => void deleteItem(item.id)}
                disabled={isSaving || isUploading}
                className="px-4 py-2 rounded-full border border-red-400/70 text-red-300 text-sm hover:bg-red-500/10 disabled:opacity-60"
              >
                Sterge
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
