import { useControls, button, useCreateStore } from "leva";
import { useState } from "react";

export type TextPart = {
  text: string;
  highlight: boolean;
};

export type HeroButton = {
  id: string;
  label: string;
  variant?: "secondary" | "outline" | "primary" | null | undefined;
  number: string;
};

export type Badge = {
  id: string;
  text: string;
};

export function useHeroConfig() {
  const store = useCreateStore()
  const [titleParts, setTitleParts] = useState<TextPart[]>([
    { text: "Seu negócio mais ", highlight: false },
    { text: "organizado", highlight: true },
    { text: ". Vendendo mais.", highlight: false }
  ]);
  const [image, setImage] = useState("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800")

  const [subtitleParts, setSubtitleParts] = useState<TextPart[]>([
    { text: "Crie seu link na bio profissional em 2 minutos e organize", highlight: false },
    { text: " estoque, vendas, agendamentos e pagamentos", highlight: true },
    { text: " sem complicação.", highlight: false }
  ]);

  const [heroButtons, setHeroButtons] = useState<HeroButton[]>([
    { id: "1", label: "CRIAR MEU LINK GRÁTIS", variant: "primary", number: "00 00000-0000" },
    // { id: "2", label: "Ver como funciona", variant: "outline" }
  ]);

  const [heroBadges, setHeroBadges] = useState<Badge[]>([
    { id: "1", text: "Sem cartão de crédito" },
    { id: "2", text: "Plano gratuito para sempre" }
  ]);

  const [contacts, setContacts]  = useState({
    endereco: "",
    contato: "",
    redes: [
      { id: "1", label: "Instagram", value: "", icon: "" },
    ]
  })

  const { primaryColor } = useControls("Visual", {
    primaryColor: "#2563EB"
  });

  // Controls for Title
  useControls("Título", {
    ...titleParts.reduce((acc, part, i) => ({
      ...acc,
      [`Parte ${i + 1}`]: {
        value: part.text,
        onChange: (v: string) => {
          const newParts = [...titleParts];
          newParts[i].text = v;
          setTitleParts(newParts);
        }
      },
      [`Destaque ${i + 1}`]: {
        value: part.highlight,
        onChange: (v: boolean) => {
          const newParts = [...titleParts];
          newParts[i].highlight = v;
          setTitleParts(newParts);
        }
      }
    }), {}),
    "Adicionar Parte": button(() => setTitleParts([...titleParts, { text: " nova parte", highlight: false }])),
    "Remover Última": button(() => titleParts.length > 1 && setTitleParts(titleParts.slice(0, -1))),
  }, [titleParts], { store });

  // Controls for Subtitle
  useControls("Subtítulo", {
    ...subtitleParts.reduce((acc, part, i) => ({
      ...acc,
      [`Parte ${i + 1}`]: {
        value: part.text,
        onChange: (v: string) => {
          const newParts = [...subtitleParts];
          newParts[i].text = v;
          setSubtitleParts(newParts);
        }
      },
      [`Destaque ${i + 1}`]: {
        value: part.highlight,
        onChange: (v: boolean) => {
          const newParts = [...subtitleParts];
          newParts[i].highlight = v;
          setSubtitleParts(newParts);
        }
      }
    }), {}),
    "Adicionar Parte": button(() => setSubtitleParts([...subtitleParts, { text: " nova parte", highlight: false }])),
    "Remover Última": button(() => subtitleParts.length > 1 && setSubtitleParts(subtitleParts.slice(0, -1)))
  }, [subtitleParts], { store });

  // Controls for Buttons
  useControls("Botões", {
    ...heroButtons.reduce((acc, btn, i) => ({
      ...acc,
      [`Texto`]: {
        value: btn.label,
        onChange: (v: string) => {
          const newBtns = [...heroButtons];
          newBtns[i].label = v;
          setHeroButtons(newBtns);
        }
      },
      [`Tipo`]: {
        options: ["secondary" , "outline" , "primary" ],
        value: btn.variant,
        onChange: (v: "primary" | "secondary" | "outline") => {
          const newBtns = [...heroButtons];
          newBtns[i].variant = v;
          setHeroButtons(newBtns);
        }
      },
      "Number": {
        value: btn.number,
        onChange: (v: string) => {
          const newBtns = [...heroButtons];
          newBtns[i].number = v;
          setHeroButtons(newBtns);
        }
      }
    }), {}),
    // "Adicionar Botão": button(() => setHeroButtons([...heroButtons, { id: Math.random().toString(), label: "Novo Botão", variant: "secondary" }])),
    // "Remover Último": button(() => heroButtons.length > 0 && setHeroButtons(heroButtons.slice(0, -1)))
  }, [heroButtons], { store });

  // Controls for Badges
  useControls("Badges", {
    ...heroBadges.reduce((acc, bg, i) => ({
      ...acc,
      [`Badge ${i + 1}`]: {
        value: bg.text,
        onChange: (v: string) => {
          const newBgs = [...heroBadges];
          newBgs[i].text = v;
          setHeroBadges(newBgs);
        }
      }
    }), {}),
    "Adicionar Badge": button(() => setHeroBadges([...heroBadges, { id: Math.random().toString(), text: "Novo Badge" }])),
    "Remover Último": button(() => heroBadges.length > 0 && setHeroBadges(heroBadges.slice(0, -1)))
  }, [heroBadges], { store });

  useControls("IMG", {
    file: {
      image,
      onChange: (value) => {
        if (!value) return
        setImage(value)
      }
    }
  }, [image], { store });

  useControls("Contatos", {
    endereco: {
      value: contacts.endereco,
      onChange: (v: string) => setContacts(prev => ({ ...prev, endereco: v }))
    },
    contato: {
      value: contacts.contato,
      onChange: (v: string) => setContacts(prev => ({ ...prev, contato: v }))
    }
  }, [contacts], { store })

  return { primaryColor, titleParts, subtitleParts, heroButtons, heroBadges, image, contacts, store };
}
