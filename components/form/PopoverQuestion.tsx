"use client";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { useState } from "react";

type Loja = {
  value: number;
  description: string;
};

type PopoverQuestionProps = {
  marginTop: string;
  lojas?: Loja[];
};

const PopoverQuestion = ({ marginTop, lojas = [] }: PopoverQuestionProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>("");

  return (
    <div className={`${marginTop}`}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-md py-6 font-medium text-light-lightgray dark:bg-black/10 dark:text-white"
          >
            {value
              ? lojas.find((loja) => loja.value.toString() === value)
                  ?.description
              : "Qual loja você frequenta?"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput
              className=""
              placeholder="Qual loja você frequenta?"
            />
            <CommandEmpty>Loja não encontrada</CommandEmpty>
            <CommandGroup>
              {lojas.map((loja) => (
                <CommandItem
                  key={loja.value}
                  value={loja.value.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? null : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === loja.value.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {loja.description}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverQuestion;
