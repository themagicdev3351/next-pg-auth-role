import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";



const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <div className={`space-y-6 py-5 text-center ${poppins.className}`}>
      here is home page
      <div>
        <LoginButton mode="modal" asChild>
          <Button variant="secondary" size="lg" className="text-lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
