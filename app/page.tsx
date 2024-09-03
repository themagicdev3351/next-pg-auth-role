import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <div className={`space-y-6 text-center ${poppins.className}`}>
      <DemoSlider data={dataSlider} />
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
