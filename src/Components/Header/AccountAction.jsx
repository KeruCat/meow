import { Link } from "react-router-dom";
import { User } from "lucide-react";

function AccountAction() {
  return (
    <Link
      to="/login"
      className="flex flex-col items-center gap-0.5 text-xs text-ink-muted transition-colors hover:text-accent"
    >
      <User className="h-5 w-5" />
      Войти
    </Link>
  );
}

export default AccountAction;