import { Search } from "lucide-react";
import { Logo } from "./Logo";

export function Sidebar() {
  return(
    <aside>
      <Logo/>
      <div>
        <input type="text" />
      </div>
    </aside>
  );
}
