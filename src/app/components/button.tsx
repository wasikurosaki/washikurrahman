import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

interface ButtonMainProps {
  name: string;
  vari: string;
  pathToRoute: string;
}

export default function ButtonMain({
  name,
  vari,
  pathToRoute,
}: ButtonMainProps) {
  const variant = vari === "outline" ? "outline" : "destructive";

  const handleClick = () => {
    window.open(pathToRoute, "_blank");
  };

  return (
    <Button onClick={handleClick} variant={variant}>
      {name}
    </Button>
  );
}
