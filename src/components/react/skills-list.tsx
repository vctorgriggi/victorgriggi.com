import { useState, useRef } from 'react';
import { LUCIDE_ICONS } from '@/data/icons';
import { SKILL_CATEGORIES } from '@/data/content';

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleItem = (label: string) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <div className="text-left">
      <h3 className="text-3xl font-semibold md:mb-6 md:text-4xl">
        O que eu faço?
      </h3>

      <ul className="mt-4 space-y-4 text-lg">
        {SKILL_CATEGORIES.map(({ label, iconName, items }) => {
          const Icon = LUCIDE_ICONS[iconName];
          const ChevronIcon = LUCIDE_ICONS.ChevronDown;
          const isOpen = openItem === label;
          const contentHeight = refs.current[label]?.scrollHeight ?? 0;

          return (
            <li key={label} className="w-full">
              <div
                onClick={() => toggleItem(label)}
                className="w-full cursor-pointer rounded-2xl border border-(--white-icon-tr) bg-[#1414149c] text-left lg:w-4/5"
              >
                <div className="flex items-center gap-3 p-4">
                  <Icon className="text-primary h-6 w-6 opacity-60" />

                  <div className="flex grow items-center justify-between">
                    <span className="block truncate text-lg">{label}</span>

                    <ChevronIcon
                      className={`h-6 w-6 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                <div
                  style={{
                    maxHeight: isOpen ? contentHeight : 0,
                  }}
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                >
                  <div
                    ref={(el) => {
                      refs.current[label] = el;
                    }}
                    className="px-4 pb-4 opacity-100"
                  >
                    <ul className="space-y-2 text-sm text-(--white-icon)">
                      {items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="pl-1">•</span>
                          <span className="pl-3">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
